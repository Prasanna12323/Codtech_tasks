import { useState } from "react";
import { Link } from "react-router-dom";
import { FileText, Plus, Search, Grid, List, Clock, Star, Folder, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DocumentCard } from "@/components/DocumentCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for documents
const mockDocuments = [
  {
    id: "1",
    title: "Project Roadmap 2024",
    updatedAt: "2 hours ago",
    preview: "This document outlines our strategic initiatives for Q1 and Q2, including key milestones and deliverables...",
    collaborators: [
      { initials: "AS", color: "hsl(340, 75%, 55%)" },
      { initials: "MK", color: "hsl(200, 85%, 50%)" },
    ],
  },
  {
    id: "2",
    title: "Meeting Notes - Sprint Review",
    updatedAt: "Yesterday",
    preview: "Sprint 14 Review Notes: Completed user authentication flow, fixed critical bugs in payment processing...",
    collaborators: [
      { initials: "JD", color: "hsl(145, 70%, 45%)" },
    ],
  },
  {
    id: "3",
    title: "Design System Documentation",
    updatedAt: "3 days ago",
    preview: "Our design system provides a unified language for building consistent user interfaces across all products...",
    collaborators: [
      { initials: "AS", color: "hsl(340, 75%, 55%)" },
      { initials: "MK", color: "hsl(200, 85%, 50%)" },
      { initials: "JD", color: "hsl(145, 70%, 45%)" },
      { initials: "TW", color: "hsl(280, 70%, 55%)" },
    ],
  },
  {
    id: "4",
    title: "Product Requirements",
    updatedAt: "1 week ago",
    preview: "Feature specifications for the upcoming release including user stories, acceptance criteria, and technical requirements...",
    collaborators: [],
  },
  {
    id: "5",
    title: "Team Onboarding Guide",
    updatedAt: "2 weeks ago",
    preview: "Welcome to the team! This guide will help you get started with our tools, processes, and best practices...",
    collaborators: [
      { initials: "HR", color: "hsl(35, 90%, 55%)" },
    ],
  },
  {
    id: "6",
    title: "API Documentation",
    updatedAt: "3 weeks ago",
    preview: "Complete API reference for developers integrating with our platform. Includes authentication, endpoints, and examples...",
    collaborators: [],
  },
];

export default function Dashboard() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDocuments = mockDocuments.filter((doc) =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
                <FileText className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold">CollabDoc</span>
            </Link>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search documents..."
                  className="pl-10 bg-secondary/50 border-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* User menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-sm text-primary-foreground font-medium">
                  JD
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 h-[calc(100vh-4rem)] sticky top-16 bg-sidebar border-r border-border/50 p-4">
          <Button variant="hero" className="w-full mb-6" asChild>
            <Link to="/editor/new">
              <Plus className="w-4 h-4" />
              New Document
            </Link>
          </Button>

          <nav className="space-y-1">
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium"
            >
              <FileText className="w-4 h-4" />
              All Documents
            </Link>
            <Link
              to="/dashboard/recent"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-accent/50 hover:text-foreground transition-colors text-sm"
            >
              <Clock className="w-4 h-4" />
              Recent
            </Link>
            <Link
              to="/dashboard/starred"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-accent/50 hover:text-foreground transition-colors text-sm"
            >
              <Star className="w-4 h-4" />
              Starred
            </Link>
            <Link
              to="/dashboard/folders"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-accent/50 hover:text-foreground transition-colors text-sm"
            >
              <Folder className="w-4 h-4" />
              Folders
            </Link>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 lg:p-8">
          {/* Mobile search */}
          <div className="md:hidden mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search documents..."
                className="pl-10 bg-secondary/50 border-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">All Documents</h1>
              <p className="text-sm text-muted-foreground mt-1">
                {filteredDocuments.length} document{filteredDocuments.length !== 1 && "s"}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
              <Button variant="hero" className="lg:hidden" asChild>
                <Link to="/editor/new">
                  <Plus className="w-4 h-4" />
                  New
                </Link>
              </Button>
            </div>
          </div>

          {/* Documents grid */}
          {filteredDocuments.length > 0 ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
                  : "flex flex-col gap-3"
              }
            >
              {filteredDocuments.map((doc) => (
                <DocumentCard key={doc.id} {...doc} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No documents found</h3>
              <p className="text-muted-foreground mb-6">
                {searchQuery
                  ? "Try adjusting your search query"
                  : "Create your first document to get started"}
              </p>
              {!searchQuery && (
                <Button variant="hero" asChild>
                  <Link to="/editor/new">
                    <Plus className="w-4 h-4" />
                    Create Document
                  </Link>
                </Button>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
