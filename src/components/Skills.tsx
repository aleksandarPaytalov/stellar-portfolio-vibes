
import React from 'react';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', color: 'bg-orange-500', level: 90 },
    { name: 'CSS3', color: 'bg-blue-500', level: 85 },
    { name: 'JavaScript', color: 'bg-yellow-500', level: 80 },
    { name: 'React', color: 'bg-cyan-500', level: 75 }
  ];

  const backendSkills = [
    { name: 'C#', color: 'bg-purple-600', level: 85 },
    { name: '.NET Core', color: 'bg-blue-600', level: 80 },
    { name: 'SQL Server', color: 'bg-red-600', level: 75 },
    { name: 'Entity Framework', color: 'bg-green-600', level: 70 }
  ];

  const techStack = [
    { name: 'C#', symbol: 'C#', color: 'from-purple-500 to-purple-700' },
    { name: '.NET', symbol: '.NET', color: 'from-blue-500 to-blue-700' },
    { name: 'SQL', symbol: 'SQL', color: 'from-orange-500 to-orange-700' },
    { name: 'React', symbol: 'React', color: 'from-cyan-500 to-cyan-700' },
    { name: 'JS', symbol: 'JS', color: 'from-yellow-500 to-yellow-700' },
    { name: 'Git', symbol: 'Git', color: 'from-red-500 to-red-700' }
  ];

  const SkillBar = ({ skill }: { skill: typeof frontendSkills[0] }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-medium">{skill.name}</span>
        <span className="text-foreground/70">{skill.level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-3">
        <div 
          className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Technologies</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Tech Stack Icons */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-16">
          {techStack.map((tech, index) => (
            <div 
              key={index}
              className={`tech-icon bg-gradient-to-br ${tech.color} text-white`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech.symbol}
            </div>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <div className="glass-card p-8 hover-glow">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Frontend Development</h3>
            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="glass-card p-8 hover-glow">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Backend Development</h3>
            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
