
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce API",
      description: "A robust RESTful API built with .NET Core for managing products, orders, and user authentication. Features include JWT authentication, Entity Framework, and comprehensive error handling.",
      technologies: ["C#", ".NET Core", "Entity Framework", "SQL Server", "JWT"],
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-blue-600 to-purple-600"
    },
    {
      title: "Task Management App",
      description: "A full-stack web application for project management with real-time updates. Built with React frontend and .NET Core backend, featuring drag-and-drop functionality.",
      technologies: ["React", "C#", ".NET Core", "SignalR", "PostgreSQL"],
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-green-600 to-blue-600"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current conditions and forecasts. Integrates with external APIs and features data visualization charts.",
      technologies: ["JavaScript", "Chart.js", "REST APIs", "CSS3", "HTML5"],
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-orange-600 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover-glow group cursor-pointer transform transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image/Placeholder */}
              <div className={`${project.image} h-48 rounded-lg mb-6 flex items-center justify-center`}>
                <div className="text-white text-6xl font-bold opacity-80">
                  {project.title.split(' ').map(word => word[0]).join('')}
                </div>
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Github size={16} className="mr-2" />
                  Code
                </Button>
                <Button 
                  size="sm"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 hover-glow"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
