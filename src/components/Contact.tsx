import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to make a difference? Connect with Future Forwards and be part 
            of transforming lives in Kakuma and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Connect With Us
            </h3>
            
            <div className="space-y-6">
              <Card className="p-6 shadow-md border-l-4 border-l-primary">
                <CardContent className="p-0 flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Kakuma, Turkana County, Kenya</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-md border-l-4 border-l-accent">
                <CardContent className="p-0 flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">info@futureforwards.org</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-md border-l-4 border-l-primary">
                <CardContent className="p-0 flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+254 XXX XXX XXX</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-md border-l-4 border-l-accent">
                <CardContent className="p-0 flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Office Hours</h4>
                    <p className="text-muted-foreground">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:pl-8">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              How You Can Help
            </h3>
            
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-3">Volunteer as a Mentor</h4>
                <p className="text-muted-foreground mb-4">
                  Share your skills and experience with young people who need guidance and support.
                </p>
                <Button variant="default" className="w-full">Apply to Mentor</Button>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/20">
                <h4 className="font-semibold text-foreground mb-3">Partner Organization</h4>
                <p className="text-muted-foreground mb-4">
                  Collaborate with us to expand our reach and impact in the community.
                </p>
                <Button variant="default" className="w-full">Explore Partnership</Button>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-3">Support Our Mission</h4>
                <p className="text-muted-foreground mb-4">
                  Help us sustain and grow our programs through donations and advocacy.
                </p>
                <Button variant="default" className="w-full">Make a Donation</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;