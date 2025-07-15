import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Future <span className="bg-gradient-primary bg-clip-text text-transparent">Forwards</span>
            </h3>
            <p className="text-background/80 mb-4">
              Empowering refugee and host community youth in Kakuma through 
              mentorship, education, and innovation for a brighter future.
            </p>
            <p className="text-background/60 text-sm">
              Kakuma, Turkana County, Kenya
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Programs</h4>
            <ul className="space-y-2 text-background/80">
              <li>Mentorship Circles</li>
              <li>Life Skills & Resilience</li>
              <li>Tech for Change</li>
              <li>Peace Dialogues</li>
              <li>Entrepreneurship Lab</li>
              <li>Wellbeing Hubs</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Get Involved</h4>
            <ul className="space-y-2 text-background/80">
              <li>Become a Mentor</li>
              <li>Partner With Us</li>
              <li>Volunteer</li>
              <li>Support Our Work</li>
              <li>Community Events</li>
              <li>Youth Advisory Board</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 Future Forwards. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-background/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for the youth of Kakuma</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;