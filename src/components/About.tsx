import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Future Forwards
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Based in Kakuma, Turkana County, Kenya, we are dedicated to empowering 
            refugee and host community youth through comprehensive support programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <div className="w-3 h-8 bg-gradient-primary rounded-full mr-3"></div>
                Our Vision
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A resilient and empowered generation of young people thriving in education, 
                leadership, and innovation.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <div className="w-3 h-8 bg-gradient-accent rounded-full mr-3"></div>
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide inclusive mentorship, life skills, and psychosocial support that 
                inspire refugee youth to reach their fullest potential.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <Card className="p-6 shadow-elegant border-l-4 border-l-primary">
              <CardContent className="p-0">
                <h4 className="font-semibold text-lg text-foreground mb-2">Target Beneficiaries</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Refugee youth (ages 12–25) in Kakuma and Kalobeyei settlements</li>
                  <li>• Host community youth facing marginalization</li>
                  <li>• Adolescent girls and young women at risk</li>
                  <li>• Youth with disabilities and trauma survivors</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-elegant border-l-4 border-l-accent">
              <CardContent className="p-0">
                <h4 className="font-semibold text-lg text-foreground mb-2">Expected Impact</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• 2,000+ youth mentored and trained</li>
                  <li>• Improved school retention rates</li>
                  <li>• Increased youth-led businesses</li>
                  <li>• Stronger community relationships</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;