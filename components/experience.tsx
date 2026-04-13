import { portfolioData } from '@/data/portfolio';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center">
          Professional Experience
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          A timeline of my career progression and achievements
        </p>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div key={exp.id} className="relative">
              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-col sm:flex-row">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-4 h-4 rounded-full bg-primary mt-1" />
                        <CardTitle className="text-2xl">
                          {exp.position}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-base text-primary font-semibold">
                        {exp.company}
                      </CardDescription>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground mt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p> */}

                  <div>
                    {/* <h4 className="font-semibold text-foreground mb-3">
                      Key Achievements
                    </h4> */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-muted-foreground text-sm"
                        >
                          <span className="text-primary font-bold mt-0.5">
                            •
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <h4 className="font-semibold text-foreground mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
