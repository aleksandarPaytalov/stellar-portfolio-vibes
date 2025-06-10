
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-border/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-foreground/70 mb-4 md:mb-0">
            <p className="flex items-center">
              Made with <Heart size={16} className="text-red-500 mx-2" /> by John Doe
            </p>
          </div>
          
          <div className="text-foreground/70 text-sm">
            <p>&copy; 2024 John Doe. All rights reserved.</p>
          </div>
        </div>
        
        <div className="text-center mt-4 pt-4 border-t border-border/20">
          <p className="text-foreground/60 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
