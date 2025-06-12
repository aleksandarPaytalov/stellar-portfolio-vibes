
// Contact form functionality
export const initContact = () => {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
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
  }
};
