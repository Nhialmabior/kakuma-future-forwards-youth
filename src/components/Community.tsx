import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Radio, Globe, Handshake } from "lucide-react";

const Community = () => {
  const strategies = [
    {
      icon: Users,
      title: "Youth Advisory Board",
      description: "Ensuring programs are youth-led and relevant to community needs"
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description: "Collaborating with NGOs, CBOs, and local leadership for sustainability"
    },
    {
      icon: Radio,
      title: "Community Outreach",
      description: "Using radio, drama, and social media to increase visibility and engagement"
    },
    {
      icon: Globe,
      title: "Network Building",
      description: "Connecting with schools, churches, mosques, and youth groups"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Community Engagement
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building sustainable change through collaborative partnerships and 
            community-driven initiatives in Kakuma and Kalobeyei settlements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {strategies.map((strategy, index) => {
            const IconComponent = strategy.icon;
            return (
              <Card key={index} className="p-6 shadow-md hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-0 flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-full bg-gradient-to-br from-primary/10 to-accent/10">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {strategy.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {strategy.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center shadow-elegant">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of the change. Whether you're a mentor, partner organization, 
            or supporter, there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline-hero" size="lg" className="text-lg px-8 py-6">
              Become a Mentor
            </Button>
            <Button variant="outline-hero" size="lg" className="text-lg px-8 py-6">
              Partner With Us
            </Button>
            <Button variant="outline-hero" size="lg" className="text-lg px-8 py-6">
              Support Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;