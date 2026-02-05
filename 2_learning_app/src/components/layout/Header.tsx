import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Bell, User, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/dashboard', label: 'My Learning' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary shadow-md group-hover:shadow-lg transition-shadow">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Edu<span className="text-primary">Stream</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="w-64 pl-10 bg-muted/50 border-0 focus-visible:ring-1"
              />
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-accent text-[10px] font-bold text-accent-foreground flex items-center justify-center">
                3
              </span>
            </Button>
            <Link to="/login">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button variant="hero" size="sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="py-3 md:hidden animate-slide-up">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="w-full pl-10 bg-muted/50"
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="py-4 md:hidden animate-slide-up">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-2 border-t border-border mt-2">
                <Link to="/login" className="flex-1">
                  <Button variant="outline" className="w-full">Sign In</Button>
                </Link>
                <Link to="/register" className="flex-1">
                  <Button variant="hero" className="w-full">Get Started</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
