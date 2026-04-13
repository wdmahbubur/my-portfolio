import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { portfolioData } from '@/data/portfolio';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/20 to-primary/10 py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              All Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive collection of my projects showcasing my expertise in full-stack development, problem-solving, and innovation.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {portfolioData.projects.map((project) => (
                <Card
                  key={project.id}
                  className="border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Project Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border-b border-border">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-foreground/20 mb-2">
                        {project.title.charAt(0)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {project.title}
                      </p>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.shortDescription}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Description Preview */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm">
                        Project Highlights
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-2 flex-wrap pt-4 border-t border-border">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Button size="sm">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Button>
                        </a>
                      )}
                      <Link href={`/projects/${project.id}`}>
                        <Button size="sm" variant="ghost">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
