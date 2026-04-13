'use client';

import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolio';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center">
          Let&apos;s Connect
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${portfolioData.socials.email}`}
                  className="flex gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary/20 flex items-center justify-center h-fit">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Email
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {portfolioData.socials.email}
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="flex gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary/20 flex items-center justify-center h-fit">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Phone
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {portfolioData.personal.phone}
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={portfolioData.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary/20 flex items-center justify-center h-fit">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      WhatsApp
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Let&apos;s chat on WhatsApp
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex gap-4 p-4 rounded-lg bg-secondary">
                  <div className="p-3 rounded-lg bg-primary/20 flex items-center justify-center h-fit">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">
                      {portfolioData.personal.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Follow Me
            </h3>

            <div className="space-y-4">
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg bg-background border border-border hover:border-primary hover:bg-secondary transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                  <span className="font-semibold text-foreground">GitHub</span>
                </div>
                <span className="text-muted-foreground group-hover:text-primary transition-colors text-sm">
                  @wdmahbubur
                </span>
              </a>

              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg bg-background border border-border hover:border-primary hover:bg-secondary transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                  <span className="font-semibold text-foreground">LinkedIn</span>
                </div>
                <span className="text-muted-foreground group-hover:text-primary transition-colors text-sm">
                  @mrrohanc
                </span>
              </a>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Whether it&apos;s a new project, collaboration opportunity, or just to say hello – I&apos;d love to hear from you!
                </p>
                <a href={`mailto:${portfolioData.socials.email}`}>
                  <Button className="w-full">Send me an Email</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
