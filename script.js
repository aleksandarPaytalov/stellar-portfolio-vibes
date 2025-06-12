// Navigation functionality
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Theme toggle functionality
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Load saved theme or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
  body.setAttribute('data-theme', 'light');
  if (themeSwitch) {
    themeSwitch.checked = true;
  }
}

// Theme toggle event listener
if (themeSwitch) {
  themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
      body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      body.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    }
  });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

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
      const directions = ['rotate360', 'rotate-360'];
      const randomDirection = directions[Math.floor(Math.random() * directions.length)];
      const randomAngle = Math.random() > 0.5 ? 360 : -360;
      
      // Create dynamic animation
      const animationName = `rotate${randomAngle}`;
      
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

// Contact form functionality
const setupContactForm = () => {
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple form validation
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Simulate form submission
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
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
  
  subtitle.textContent = '';
  
  const typeWriter = () => {
    if (index < text.length) {
      subtitle.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  };
  
  setTimeout(typeWriter, 1000);
};

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  animateSkillBars();
  setupTechIconAnimations();
  setupContactForm();
  setupScrollAnimations();
  setupTypingEffect();
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector('.hero-image');
  
  if (heroImage) {
    heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});
