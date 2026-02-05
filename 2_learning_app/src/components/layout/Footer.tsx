import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Platform: [
      { label: 'Browse Courses', href: '/courses' },
      { label: 'Become an Instructor', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'For Enterprise', href: '#' },
    ],
    Resources: [
      { label: 'Help Center', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Developers', href: '#' },
    ],
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    Legal: [
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Accessibility', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
                <BookOpen className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Edu<span className="text-primary">Stream</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering learners worldwide with quality education and skills for tomorrow.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EduStream. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>🌍 English</span>
            <span>$ USD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
