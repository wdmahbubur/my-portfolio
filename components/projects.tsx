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
import Image from 'next/image';

export function Projects() {
  const featuredProjects = portfolioData.projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          A selection of my recent work showcasing my technical expertise and problem-solving abilities
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Project Image */}
              {
                project.image ? (
                  <Image src={project.image} alt={project.title} width={500} height={300} className='mx-auto w-full' style={{ height: 'auto' }}/>
                ) : (
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
                )
              }

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

                {/* Challenges */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">
                    Key Challenges
                  </h4>
                  <ul className="space-y-1">
                    {project.challenges.slice(0, 2).map((challenge, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex gap-2"
                      >
                        <span className="text-primary">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="w-full sm:w-auto">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="w-full sm:w-auto">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                  )}
                  <Link href={`/projects/${project.id}`}>
                    <Button size="sm" variant="ghost" className="w-full sm:w-auto">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects */}
        {/* <div className="text-center mt-12">
          <Link href="/projects">
            <Button size="lg" variant="outline">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
}
