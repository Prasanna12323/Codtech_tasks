import { useState } from "react";
import { UserPlus, Check, Copy, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Collaborator {
  id: string;
  name: string;
  initials: string;
  color: string;
  isOnline: boolean;
}

const mockCollaborators: Collaborator[] = [
  { id: "1", name: "Alice Smith", initials: "AS", color: "hsl(340, 75%, 55%)", isOnline: true },
  { id: "2", name: "Michael Kim", initials: "MK", color: "hsl(200, 85%, 50%)", isOnline: true },
  { id: "3", name: "John Doe", initials: "JD", color: "hsl(145, 70%, 45%)", isOnline: false },
];

export function CollaboratorPresence() {
  const [copied, setCopied] = useState(false);
  const shareUrl = "https://collabdoc.app/doc/abc123";

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Online collaborators */}
      <div className="flex -space-x-2">
        {mockCollaborators
          .filter((c) => c.isOnline)
          .map((collaborator) => (
            <Tooltip key={collaborator.id}>
              <TooltipTrigger asChild>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs text-white font-medium ring-2 ring-background cursor-pointer hover:z-10 transition-transform hover:scale-110"
                  style={{ backgroundColor: collaborator.color }}
                >
                  {collaborator.initials}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{collaborator.name}</p>
                <p className="text-xs text-muted-foreground">Online</p>
              </TooltipContent>
            </Tooltip>
          ))}
      </div>

      {/* More collaborators indicator */}
      {mockCollaborators.filter((c) => !c.isOnline).length > 0 && (
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground font-medium ring-2 ring-background cursor-pointer">
              +{mockCollaborators.filter((c) => !c.isOnline).length}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>
              {mockCollaborators
                .filter((c) => !c.isOnline)
                .map((c) => c.name)
                .join(", ")}
            </p>
            <p className="text-xs text-muted-foreground">Offline</p>
          </TooltipContent>
        </Tooltip>
      )}

      {/* Share button */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="hero" size="sm">
            <UserPlus className="w-4 h-4" />
            Share
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share this document</DialogTitle>
            <DialogDescription>
              Invite others to view or edit this document.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* Invite by email */}
            <div>
              <label className="text-sm font-medium mb-2 block">Invite by email</label>
              <div className="flex gap-2">
                <Input placeholder="Enter email address" type="email" />
                <Button variant="hero">Invite</Button>
              </div>
            </div>

            {/* Share link */}
            <div>
              <label className="text-sm font-medium mb-2 block">Or share via link</label>
              <div className="flex gap-2">
                <Input value={shareUrl} readOnly className="bg-muted" />
                <Button variant="secondary" onClick={handleCopy}>
                  {copied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Current collaborators */}
            <div>
              <label className="text-sm font-medium mb-2 block">People with access</label>
              <div className="space-y-2">
                {mockCollaborators.map((c) => (
                  <div
                    key={c.id}
                    className="flex items-center justify-between p-2 rounded-lg bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs text-white font-medium"
                        style={{ backgroundColor: c.color }}
                      >
                        {c.initials}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{c.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {c.isOnline ? "Online now" : "Offline"}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
