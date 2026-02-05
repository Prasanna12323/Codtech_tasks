import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Quote,
  Code,
  Link2,
  Image,
  Heading1,
  Heading2,
  Heading3,
  Undo,
  Redo,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ToolbarButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  active?: boolean;
}

function ToolbarButton({ icon, label, onClick, active }: ToolbarButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant={active ? "secondary" : "ghost"}
          size="icon"
          className="h-8 w-8"
          onClick={onClick}
        >
          {icon}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export function EditorToolbar() {
  return (
    <div className="floating-toolbar flex items-center gap-1 p-2">
      {/* History */}
      <ToolbarButton icon={<Undo className="w-4 h-4" />} label="Undo" />
      <ToolbarButton icon={<Redo className="w-4 h-4" />} label="Redo" />

      <Separator orientation="vertical" className="h-6 mx-1" />

      {/* Headings */}
      <ToolbarButton icon={<Heading1 className="w-4 h-4" />} label="Heading 1" />
      <ToolbarButton icon={<Heading2 className="w-4 h-4" />} label="Heading 2" />
      <ToolbarButton icon={<Heading3 className="w-4 h-4" />} label="Heading 3" />

      <Separator orientation="vertical" className="h-6 mx-1" />

      {/* Text formatting */}
      <ToolbarButton icon={<Bold className="w-4 h-4" />} label="Bold" />
      <ToolbarButton icon={<Italic className="w-4 h-4" />} label="Italic" />
      <ToolbarButton icon={<Underline className="w-4 h-4" />} label="Underline" />
      <ToolbarButton icon={<Strikethrough className="w-4 h-4" />} label="Strikethrough" />

      <Separator orientation="vertical" className="h-6 mx-1" />

      {/* Alignment */}
      <ToolbarButton icon={<AlignLeft className="w-4 h-4" />} label="Align left" active />
      <ToolbarButton icon={<AlignCenter className="w-4 h-4" />} label="Align center" />
      <ToolbarButton icon={<AlignRight className="w-4 h-4" />} label="Align right" />

      <Separator orientation="vertical" className="h-6 mx-1" />

      {/* Lists */}
      <ToolbarButton icon={<List className="w-4 h-4" />} label="Bullet list" />
      <ToolbarButton icon={<ListOrdered className="w-4 h-4" />} label="Numbered list" />

      <Separator orientation="vertical" className="h-6 mx-1" />

      {/* Blocks */}
      <ToolbarButton icon={<Quote className="w-4 h-4" />} label="Quote" />
      <ToolbarButton icon={<Code className="w-4 h-4" />} label="Code block" />

      <Separator orientation="vertical" className="h-6 mx-1" />

      {/* Insert */}
      <ToolbarButton icon={<Link2 className="w-4 h-4" />} label="Insert link" />
      <ToolbarButton icon={<Image className="w-4 h-4" />} label="Insert image" />
    </div>
  );
}
