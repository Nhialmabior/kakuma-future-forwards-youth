import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Laptop, MessageCircle, Briefcase, Heart } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Users,
      title: "Mentorship Circles",
      description: "Weekly group and one-on-one sessions connecting youth with local mentors and role models.",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      title: "Life Skills & Resilience",
      description: "Training on emotional intelligence, goal-setting, communication, and conflict resolution.",
      color: "text-accent"
    },
    {
      icon: Laptop,
      title: "Tech for Change",
      description: "Digital literacy training, coding bootcamps, and innovation challenges for the future.",
      color: "text-primary"
    },
    {
      icon: MessageCircle,
      title: "Peace Dialogues",
      description: "Youth-led forums for intercultural exchange and community peacebuilding initiatives.",
      color: "text-accent"
    },
    {
      icon: Briefcase,
      title: "Entrepreneurship Lab",
      description: "Skills training in tailoring, agribusiness, crafts, and micro-enterprise support.",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Wellbeing Hubs",
      description: "Safe spaces offering psychosocial support and mental health awareness programs.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive programs designed to empower youth through education, 
            skill development, and community engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 shadow-md bg-card"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 w-fit">
                    <IconComponent className={`w-8 h-8 ${program.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;