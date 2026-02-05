import { FileText, MoreHorizontal, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

interface DocumentCardProps {
  id: string;
  title: string;
  updatedAt: string;
  collaborators?: { initials: string; color: string }[];
  preview?: string;
}

export function DocumentCard({ id, title, updatedAt, collaborators = [], preview }: DocumentCardProps) {
  return (
    <Link
      to={`/editor/${id}`}
      className="group block document-card bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/30"
    >
      {/* Preview */}
      <div className="h-40 bg-editor-bg p-4 border-b border-border/30">
        <div className="h-full overflow-hidden">
          {preview ? (
            <p className="text-sm text-muted-foreground font-serif line-clamp-6">{preview}</p>
          ) : (
            <div className="space-y-2">
              <div className="h-3 bg-muted rounded w-3/4" />
              <div className="h-3 bg-muted rounded w-full" />
              <div className="h-3 bg-muted rounded w-5/6" />
              <div className="h-3 bg-muted rounded w-2/3" />
            </div>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <FileText className="w-4 h-4 text-primary shrink-0" />
            <h3 className="font-medium truncate">{title}</h3>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild onClick={(e) => e.preventDefault()}>
              <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Rename</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuItem>Share</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-muted-foreground">{updatedAt}</span>
          {collaborators.length > 0 && (
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3 text-muted-foreground" />
              <div className="flex -space-x-1.5">
                {collaborators.slice(0, 3).map((c, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white font-medium ring-2 ring-card"
                    style={{ backgroundColor: c.color }}
                  >
                    {c.initials}
                  </div>
                ))}
                {collaborators.length > 3 && (
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center text-[10px] text-muted-foreground font-medium ring-2 ring-card">
                    +{collaborators.length - 3}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
