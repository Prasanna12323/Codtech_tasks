import { Users, Clock, Lock, Layers, Sparkles, Globe } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Real-time Collaboration",
    description: "See your team's changes instantly. Multiple cursors, live edits, and seamless sync.",
  },
  {
    icon: Clock,
    title: "Version History",
    description: "Travel back in time. Every change is saved, so you can restore any previous version.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Enterprise-grade security. Your documents are encrypted and protected.",
  },
  {
    icon: Layers,
    title: "Rich Formatting",
    description: "Beautiful typography, images, tables, and more. Create stunning documents effortlessly.",
  },
  {
    icon: Sparkles,
    title: "Smart Suggestions",
    description: "AI-powered writing assistance to help you create better content, faster.",
  },
  {
    icon: Globe,
    title: "Access Anywhere",
    description: "Work from any device. Your documents sync seamlessly across all platforms.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to collaborate
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to make document creation and collaboration effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
