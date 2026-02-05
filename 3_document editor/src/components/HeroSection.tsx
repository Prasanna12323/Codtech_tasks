import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Zap, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-8 animate-slide-up">
            <Zap className="w-4 h-4" />
            <span>Real-time collaboration, reimagined</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Write together,{" "}
            <span className="text-gradient">in real-time</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            CollabDoc brings your team together with seamless document editing. 
            See changes instantly, collaborate effortlessly, and create beautiful documents.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/dashboard">
                Start Writing Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/demo">
                See it in action
              </Link>
            </Button>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4 text-primary" />
              <span>Unlimited collaborators</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4 text-primary" />
              <span>Instant sync</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>Version history</span>
            </div>
          </div>
        </div>

        {/* Hero Image/Preview */}
        <div className="mt-16 md:mt-20 relative animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 ml-4">
                  <div className="h-6 bg-background rounded-md max-w-xs" />
                </div>
              </div>
              
              {/* Editor preview */}
              <div className="flex">
                {/* Sidebar */}
                <div className="hidden md:block w-56 bg-sidebar border-r border-border/50 p-4">
                  <div className="space-y-2">
                    {["Project Overview", "Meeting Notes", "Design System", "Sprint Planning"].map((item, i) => (
                      <div
                        key={item}
                        className={`px-3 py-2 rounded-lg text-sm ${i === 0 ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent/50"}`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Editor content */}
                <div className="flex-1 p-8 md:p-12 min-h-[400px] bg-editor-bg">
                  <div className="max-w-2xl">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Project Overview</h2>
                    <div className="space-y-4 font-serif text-muted-foreground">
                      <p>Welcome to our collaborative workspace. This document outlines the key objectives and milestones for our upcoming project.</p>
                      <p>
                        Our team will focus on delivering{" "}
                        <span className="px-1 rounded bg-editor-selection text-foreground relative">
                          innovative solutions
                          <span className="absolute -right-0.5 top-0 bottom-0 w-0.5 bg-collaborator-2 animate-pulse" />
                        </span>
                        {" "}that meet our customers' needs.
                      </p>
                    </div>
                    
                    {/* Live cursors indicators */}
                    <div className="flex items-center gap-2 mt-8">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-collaborator-1 flex items-center justify-center text-xs text-white font-medium ring-2 ring-background">
                          AS
                        </div>
                        <div className="w-8 h-8 rounded-full bg-collaborator-2 flex items-center justify-center text-xs text-white font-medium ring-2 ring-background">
                          MK
                        </div>
                        <div className="w-8 h-8 rounded-full bg-collaborator-3 flex items-center justify-center text-xs text-white font-medium ring-2 ring-background">
                          JD
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">3 people editing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
