import { portfolioData } from '@/data/portfolio';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center">
          Education
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          My academic background and qualifications
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {portfolioData.education.map((edu) => (
            <Card key={edu.id} className="border-border overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-primary to-primary/50" />
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="text-base text-foreground font-semibold mt-1">
                      {edu.field}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">
                    {edu.institution}
                  </h4>
                  {edu.location && (
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {edu.duration}
                </div>
{/* 
                {edu.details && (
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {edu.details}
                  </p>
                )} */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-8 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            Continuous Learning
          </h3>
          <p className="text-muted-foreground mb-4">
            Beyond formal education, I&apos;m committed to continuous professional development through:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Regular completion of online courses and certifications</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Active participation in tech communities and conferences</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Exploration of emerging technologies and frameworks</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Contribution to open-source projects</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
