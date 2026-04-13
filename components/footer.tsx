import Link from 'next/link';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MR</span>
              </div>
              <span className="font-bold text-foreground">
                Mahbubur Rahman
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {portfolioData.personal.title}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#projects', label: 'Projects' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow</h3>
            <div className="flex gap-3">
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-primary/20 transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5 text-foreground hover:text-primary" />
              </a>
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-primary/20 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-foreground hover:text-primary" />
              </a>
              <a
                href={`mailto:${portfolioData.socials.email}`}
                className="p-2 rounded-lg bg-background hover:bg-primary/20 transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5 text-foreground hover:text-primary" />
              </a>
              <a
                href={portfolioData.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-primary/20 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-foreground hover:text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
