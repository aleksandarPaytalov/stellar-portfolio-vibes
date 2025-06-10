
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "john.doe@email.com",
      href: "mailto:john.doe@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New York, NY",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      label: "Email",
      href: "#",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Ready to collaborate? Let's discuss how I can contribute to your team's success
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
              <p className="text-foreground/70 mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-4 text-foreground/80 hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-foreground/70 ${social.color} transition-all duration-300 hover:scale-110 hover-glow`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    First Name
                  </label>
                  <Input 
                    type="text" 
                    placeholder="John"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Last Name
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Doe"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="john@example.com"
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">
                  Subject
                </label>
                <Input 
                  type="text" 
                  placeholder="Project Discussion"
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 hover-glow">
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
