import { Link } from "react-router-dom";
import { ShoppingBag, Instagram, Twitter, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { OnlineIndicator } from "@/components/OfflineIndicator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: ["All Products", "New Arrivals", "Bestsellers", "Sale"],
    Support: ["Contact Us", "FAQs", "Shipping Info", "Returns"],
    Company: ["About Us", "Careers", "Press", "Sustainability"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold">
                ShopSwift
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Your destination for premium products with fast, reliable
              delivery. Shop with confidence.
            </p>

            {/* Newsletter */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="h-10"
                />
                <Button size="sm" className="h-10 px-4">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 mt-8 border-t border-border">
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} ShopSwift. All rights reserved.
            </p>
            <OnlineIndicator />
          </div>

          {/* Social */}
          <div className="flex items-center gap-2">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <Button key={i} variant="ghost" size="icon" className="w-9 h-9">
                <Icon className="w-4 h-4" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
