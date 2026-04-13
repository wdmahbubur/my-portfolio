import { portfolioData } from '@/data/portfolio';

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Main About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              Who am I?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: portfolioData.personal.bio.replace(/\n/g, '<br>') }} />
            <div className="space-y-2 pt-4">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Location:</span>{' '}
                {portfolioData.personal.location}
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Experience:</span>{' '}
                3+ years in Full Stack Development
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Focus:</span>{' '}
                Full Stack, AI Integration, Cloud Solutions
              </p>
            </div>
          </div>

          {/* Personal Interests */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              Beyond Code
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {portfolioData.personal.personalBio}
            </p>
            <div className="space-y-3 pt-4">
              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="text-sm text-muted-foreground">
                  I love exploring emerging technologies and sharing knowledge with the development community. Always open to discussing interesting projects and opportunities!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 rounded-lg bg-background border border-border hover:border-primary transition-colors">
            <div className="text-3xl font-bold text-primary">3+</div>
            <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-background border border-border hover:border-primary transition-colors">
            <div className="text-3xl font-bold text-primary">15+</div>
            <p className="text-sm text-muted-foreground mt-2">Projects Completed</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-background border border-border hover:border-primary transition-colors">
            <div className="text-3xl font-bold text-primary">3+</div>
            <p className="text-sm text-muted-foreground mt-2">Team Members Mentored</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-background border border-border hover:border-primary transition-colors">
            <div className="text-3xl font-bold text-primary">20+</div>
            <p className="text-sm text-muted-foreground mt-2">Skills Proficient</p>
          </div>
        </div>
      </div>
    </section>
  );
}
