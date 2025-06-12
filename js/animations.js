
// Animation functionality
export const initAnimations = () => {
  // Skill bar animation
  const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.getElementById('skills');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
              bar.style.width = width + '%';
            }, 200);
          });
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });
    
    if (skillsSection) {
      observer.observe(skillsSection);
    }
  };

  // Tech icon click animation with random rotation direction
  const setupTechIconAnimations = () => {
    const techIcons = document.querySelectorAll('.tech-icon');
    
    techIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        // Remove any existing animation class
        icon.classList.remove('rotating');
        
        // Generate random rotation direction and angle
        const randomAngle = Math.random() > 0.5 ? 360 : -360;
        
        // Apply rotation
        icon.style.transform = `rotate(${randomAngle}deg)`;
        icon.style.transition = 'transform 0.6s ease-out';
        
        // Reset after animation
        setTimeout(() => {
          icon.style.transform = 'rotate(0deg)';
          icon.style.transition = 'all 0.3s ease';
        }, 600);
      });
    });
  };

  // Scroll animations for elements
  const setupScrollAnimations = () => {
    const animateElements = document.querySelectorAll('.hero-content > *, .about-content, .project-card, .contact-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  };

  // Typing effect for hero subtitle
  const setupTypingEffect = () => {
    const subtitle = document.querySelector('.hero-subtitle');
    const text = '.NET Developer';
    let index = 0;
    
    if (subtitle) {
      subtitle.textContent = '';
      
      const typeWriter = () => {
        if (index < text.length) {
          subtitle.textContent += text.charAt(index);
          index++;
          setTimeout(typeWriter, 100);
        }
      };
      
      setTimeout(typeWriter, 1000);
    }
  };

  // Add parallax effect to hero section
  const setupParallax = () => {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const heroImage = document.querySelector('.hero-image');
      
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    });
  };

  // Initialize all animations
  animateSkillBars();
  setupTechIconAnimations();
  setupScrollAnimations();
  setupTypingEffect();
  setupParallax();
};
