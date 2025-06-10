
import React from 'react';
import { Code2, Database, Globe, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, well-documented code following best practices"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing efficient database schemas and optimizing queries"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Building responsive web applications with modern frameworks"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and scalability"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Passionate about creating efficient, scalable solutions with modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">My Journey</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                Hello! I'm a passionate junior .NET developer with a strong foundation in software development 
                principles and modern web technologies. My journey in programming started with curiosity and 
                has evolved into a deep commitment to creating high-quality, user-focused applications.
              </p>
              <p>
                I specialize in C#, .NET Core, and building robust web applications with clean architecture. 
                I'm always eager to learn new technologies and contribute to innovative projects that make a 
                real impact.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or working on personal development projects to enhance my skills.
              </p>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="glass-card p-6 hover-glow group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={40} />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
