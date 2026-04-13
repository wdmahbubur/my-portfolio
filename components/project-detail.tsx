import { portfolioData, Project } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  // Get related projects (other featured projects)
  const relatedProjects = portfolioData.projects
    .filter((p) => p.id !== project.id && p.featured)
    .slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Link href="/#projects">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <div className="w-full bg-gradient-to-br from-primary/20 to-primary/10 py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {project.shortDescription}
            </p>
          </div>
        </div>

        {/* Project Image Placeholder */}
        {
          project.image ? (
            <Image src={project.image} alt={project.title} width={1000} height={600} className='mx-auto w-full' style={{ height: 'auto' }}/>
          ) : (
        <div className="w-full bg-secondary border-b border-border py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="w-full h-96 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="text-6xl font-bold text-foreground/10 mb-4">
                  {project.title.charAt(0)}
                </div>
                <p className="text-muted-foreground">
                  Project screenshot will be displayed here
                </p>
              </div>
            </div>
          </div>
        </div>
        )}
        

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Project Overview
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Main Technology Stack */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Main Technology Stack
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.technologies.map((tech) => (
                    <div 
                      key={tech} 
                      className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <span className="font-semibold text-foreground">{tech}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Challenges Faced During Development
                </h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary font-bold text-sm">
                            {idx + 1}
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {challenge}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Future Improvements & Plans */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Improvements & Future Plans
                </h2>
                <div className="space-y-4">
                  {project.improvements.map((improvement, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/40 transition-colors">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="text-primary font-bold text-xl">→</div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {improvement}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Summary */}
              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  Quick Summary
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {/* Project Links */}
              <div className="p-6 rounded-lg bg-secondary border border-border space-y-4">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Project Links
                </h3>
                <div className="space-y-3">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Project
                      </Button>
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub Repository
                      </Button>
                    </a>
                  )}
                  {!project.link && !project.github && (
                    <p className="text-sm text-muted-foreground italic">
                      Links coming soon
                    </p>
                  )}
                </div>
              </div>

              {/* Project Stats */}
              <div className="p-6 rounded-lg bg-secondary border border-border space-y-5">
                <h3 className="text-xl font-bold text-foreground">
                  Project Statistics
                </h3>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border">
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-2">
                      Tech Stack Size
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {project.technologies.length}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      technologies used
                    </p>
                  </div>
                  <div className="pb-4 border-b border-border">
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-2">
                      Challenges
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {project.challenges.length}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      challenges addressed
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-2">
                      Future Plans
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {project.improvements.length}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      improvements planned
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="bg-secondary/30 border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Related Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/projects/${relatedProject.id}`}
                    className="group p-6 rounded-lg bg-background border border-border hover:border-primary hover:shadow-lg transition-all"
                  >
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {relatedProject.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {relatedProject.shortDescription}
                    </p>
                    <div className="flex gap-2">
                      {relatedProject.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {relatedProject.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{relatedProject.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
