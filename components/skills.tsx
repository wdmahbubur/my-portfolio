'use client';

import { portfolioData } from '@/data/portfolio';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function Skills() {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-primary text-primary-foreground';
      case 'Advanced':
        return 'bg-blue-500/20 text-blue-700 dark:text-blue-400';
      case 'Intermediate':
        return 'bg-amber-500/20 text-amber-700 dark:text-amber-400';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center">
          Technical Skills
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise across different domains
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.skills.map((skillCategory) => (
            <Card key={skillCategory.category} className="border-border">
              <CardHeader>
                <CardTitle className="text-xl">
                  {skillCategory.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2"
                    >
                      <Badge
                        variant="outline"
                        className="text-sm py-1.5"
                      >
                        {skill.name}
                      </Badge>
                      <span className={`text-xs px-2 py-1 rounded font-semibold ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 p-8 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Key Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Core Stack</h4>
              <p className="text-muted-foreground">
                Full stack proficiency with modern development practices, performance optimization, and scalable architecture design.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Modern Tools</h4>
              <p className="text-muted-foreground">
                Proficient with TypeScript, Git, Docker, and cloud platforms including Azure for deployment and management.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Emerging Tech</h4>
              <p className="text-muted-foreground">
                Experience with AI integration, API automation, and staying current with industry trends and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
