'use client';

import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolio';
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Download,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const handleResumeDownload = () => {
    const resumeUrl = portfolioData.personal.resume;
    if (resumeUrl) {
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Mahbubur_Rahman_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="space-y-2">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {portfolioData.personal.name}
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground font-semibold">
                {portfolioData.personal.designation}
              </h2>
            </div>

            {/* <p className="text-lg text-muted-foreground leading-relaxed">
              {portfolioData.personal.bio}
            </p> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="w-full sm:w-auto"
                onClick={handleResumeDownload}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                title="GitHub"
              >
                <Github className="h-5 w-5 text-foreground" />
              </a>
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-foreground" />
              </a>
              <a
                href={`mailto:${portfolioData.socials.email}`}
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                title="Email"
              >
                <Mail className="h-5 w-5 text-foreground" />
              </a>
              <a
                href={portfolioData.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full blur-3xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 flex items-center justify-center bg-secondary">
                <Image
                  src="/images/hero_image_with_background.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
