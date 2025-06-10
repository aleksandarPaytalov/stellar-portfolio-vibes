
import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-foreground/90">Hi, I'm</span>
              <span className="gradient-text">John Doe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-foreground/80 mb-6">
              .NET Software Developer
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl">
              Passionate junior developer specializing in .NET technologies. 
              I create robust, scalable applications with clean code and modern design principles.
              Ready to bring innovative solutions to your team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg hover-glow">
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg hover-glow">
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300 hover-glow">
                <Github size={24} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300 hover-glow">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300 hover-glow">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 to-purple-600/20 p-2">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-6xl font-bold gradient-text">
                    JD
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-pulse-glow"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
