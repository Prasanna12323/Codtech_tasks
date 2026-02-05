import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FileText, ChevronLeft, Cloud, Check, MoreHorizontal, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EditorToolbar } from "@/components/EditorToolbar";
import { CollaboratorPresence } from "@/components/CollaboratorPresence";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Editor() {
  const { id } = useParams();
  const [title, setTitle] = useState("Untitled Document");
  const [content, setContent] = useState("");
  const [saveStatus, setSaveStatus] = useState<"saved" | "saving" | "unsaved">("saved");

  // Simulate auto-save
  useEffect(() => {
    if (content) {
      setSaveStatus("saving");
      const timeout = setTimeout(() => {
        setSaveStatus("saved");
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [content]);

  // Load document if editing existing
  useEffect(() => {
    if (id && id !== "new") {
      setTitle("Project Roadmap 2024");
      setContent(
        "This document outlines our strategic initiatives for Q1 and Q2, including key milestones and deliverables.\n\nOur primary focus areas include:\n\n• Product Development - Launching new features and improving user experience\n• Market Expansion - Entering new geographic markets\n• Team Growth - Scaling the engineering and design teams\n\nWe aim to achieve a 50% increase in user engagement by the end of Q2."
      );
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-editor-bg flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="flex items-center justify-between h-14 px-4">
          {/* Left section */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/dashboard">
                <ChevronLeft className="w-5 h-5" />
              </Link>
            </Button>

            <Link to="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-hero flex items-center justify-center">
                <FileText className="w-4 h-4 text-primary-foreground" />
              </div>
            </Link>

            <div className="flex items-center gap-2 pl-2 border-l border-border/50">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-base font-medium bg-transparent border-none outline-none focus:ring-0 min-w-0 w-full max-w-xs"
                placeholder="Untitled Document"
              />
              {saveStatus === "saved" && (
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Cloud className="w-3 h-3" />
                  <Check className="w-3 h-3" />
                </span>
              )}
              {saveStatus === "saving" && (
                <span className="flex items-center gap-1 text-xs text-muted-foreground animate-pulse">
                  <Cloud className="w-3 h-3" />
                  Saving...
                </span>
              )}
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:flex gap-1 text-muted-foreground">
              <Clock className="w-4 h-4" />
              Version history
            </Button>

            <CollaboratorPresence />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Export as PDF</DropdownMenuItem>
                <DropdownMenuItem>Export as Markdown</DropdownMenuItem>
                <DropdownMenuItem>Print</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Document settings</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Toolbar */}
        <div className="px-4 py-2 border-t border-border/30 overflow-x-auto">
          <div className="flex justify-center">
            <EditorToolbar />
          </div>
        </div>
      </header>

      {/* Editor content */}
      <main className="flex-1 flex justify-center">
        <div className="w-full max-w-3xl px-4 py-12 md:py-16">
          {/* Title */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full text-3xl md:text-4xl font-serif font-bold bg-transparent border-none outline-none focus:ring-0 mb-8 placeholder:text-muted-foreground/50"
            placeholder="Untitled"
          />

          {/* Content editor */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full min-h-[60vh] text-lg font-serif leading-relaxed bg-transparent border-none outline-none focus:ring-0 resize-none placeholder:text-muted-foreground/50"
            placeholder="Start writing, or press '/' for commands..."
          />
        </div>
      </main>

      {/* Live cursor simulation */}
      <div
        className="fixed pointer-events-none z-40"
        style={{ left: "60%", top: "45%" }}
      >
        <div className="relative">
          <div
            className="w-0.5 h-5 rounded-full animate-pulse"
            style={{ backgroundColor: "hsl(200, 85%, 50%)" }}
          />
          <div
            className="absolute -top-5 left-2 px-2 py-0.5 rounded text-xs text-white font-medium whitespace-nowrap"
            style={{ backgroundColor: "hsl(200, 85%, 50%)" }}
          >
            Michael Kim
          </div>
        </div>
      </div>
    </div>
  );
}
