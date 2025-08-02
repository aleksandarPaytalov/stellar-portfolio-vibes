import { emailConfig } from './config.js';

// Enhanced Contact form functionality with validation and EmailJS integration
export const initContact = () => {
  const contactForm = document.getElementById('contact-form');
  const submitButton = contactForm?.querySelector('button[type="submit"]');
  
  if (!contactForm || !submitButton) return;

  // Store original button text
  const originalButtonText = submitButton.innerHTML;

  // Create message display container INSIDE the form
  const messageContainer = createMessageContainer();
  contactForm.insertBefore(messageContainer, contactForm.firstChild);

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous messages
    clearMessages();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name')?.toString().trim() || '';
    const email = formData.get('email')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim() || '';
    
    // Validate form data
    const validation = validateForm(name, email, message);
    if (!validation.isValid) {
      showErrorMessage(validation.errors.join('<br>'));
      return;
    }
    
    // Show loading state
    setLoadingState(submitButton, true);
    
    try {
      // Send email using EmailJS
      await sendEmail({
        name: name,          
        email: email,         
        message: message,    
      });
      
      // Show success message
      showSuccessMessage(
        'Your message has been successfully delivered and will be answered as quickly as possible. In case of high importance topics, please contact me through the provided mobile number.'
      );
      
      // Reset form
      contactForm.reset();
      
    } catch (error) {
      console.error('Email sending failed:', error);
      showErrorMessage(
        'Failed to send message. Please try again or contact me directly at apaytalov89@gmail.com'
      );
    } finally {
      // Reset loading state
      setLoadingState(submitButton, false);
    }
  });

  // Real-time validation feedback
  addRealTimeValidation(contactForm);
};

// Validation functions
function validateForm(name, email, message) {
  const errors = [];
  
  // Name validation
  if (!name) {
    errors.push('Name is required');
  } else if (name.length < 2) {
    errors.push('Name must be at least 2 characters long');
  }
  
  // Email validation
  if (!email) {
    errors.push('Email is required');
  } else if (!isValidEmail(email)) {
    errors.push('Please enter a valid email address');
  }
  
  // Message validation
  if (!message) {
    errors.push('Message is required');
  } else if (message.length < 10) {
    errors.push('Message must be at least 10 characters long');
  } else if (message.length > 500) {
    errors.push('Message must be less than 500 characters');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// UI State Management
function setLoadingState(button, isLoading) {
  if (isLoading) {
    button.disabled = true;
    button.innerHTML = `
      <svg class="loading-spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-dasharray="31.416" stroke-dashoffset="31.416">
          <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>
          <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>
        </circle>
      </svg>
      Sending Message...
    `;
  } else {
    button.disabled = false;
    button.innerHTML = 'Send Message';
  }
}

// Message Display Functions
function createMessageContainer() {
  const container = document.createElement('div');
  container.id = 'message-container';
  container.style.marginBottom = '20px';
  return container;
}

function showSuccessMessage(text) {
  const messageContainer = document.getElementById('message-container');
  messageContainer.innerHTML = `
    <div class="message-success" style="
      background: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 20px;
      font-size: 14px;
      line-height: 1.5;
      animation: fadeIn 0.3s ease-in;
    ">
      <strong>✓ Success!</strong><br>
      ${text}
    </div>
  `;
  
  // Auto-hide after 8 seconds
  setTimeout(() => {
    const successMsg = messageContainer.querySelector('.message-success');
    if (successMsg) {
      successMsg.style.animation = 'fadeOut 0.3s ease-out';
      setTimeout(() => successMsg.remove(), 300);
    }
  }, 8000);
}

function showErrorMessage(text) {
  const messageContainer = document.getElementById('message-container');
  messageContainer.innerHTML = `
    <div class="message-error" style="
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 20px;
      font-size: 14px;
      line-height: 1.5;
      animation: fadeIn 0.3s ease-in;
    ">
      <strong>✗ Error!</strong><br>
      ${text}
    </div>
  `;
  
  // Auto-hide after 6 seconds
  setTimeout(() => {
    const errorMsg = messageContainer.querySelector('.message-error');
    if (errorMsg) {
      errorMsg.style.animation = 'fadeOut 0.3s ease-out';
      setTimeout(() => errorMsg.remove(), 300);
    }
  }, 6000);
}

function clearMessages() {
  const messageContainer = document.getElementById('message-container');
  messageContainer.innerHTML = '';
}

// Real-time validation
function addRealTimeValidation(form) {
  const inputs = form.querySelectorAll('input, textarea');
  
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      validateSingleField(input);
    });
    
    input.addEventListener('input', () => {
      // Clear error state on input
      clearFieldError(input);
    });
  });
}

function validateSingleField(input) {
  const value = input.value.trim();
  const fieldName = input.name;
  
  let errorMessage = '';
  
  switch (fieldName) {
    case 'name':
      if (!value) errorMessage = 'Name is required';
      else if (value.length < 2) errorMessage = 'Name must be at least 2 characters';
      break;
    case 'email':
      if (!value) errorMessage = 'Email is required';
      else if (!isValidEmail(value)) errorMessage = 'Please enter a valid email address';
      break;
    case 'message':
      if (!value) errorMessage = 'Message is required';
      else if (value.length < 10) errorMessage = 'Message must be at least 10 characters';
      else if (value.length > 500) errorMessage = 'Message must be less than 500 characters';
      break;
  }
  
  if (errorMessage) {
    showFieldError(input, errorMessage);
  } else {
    clearFieldError(input);
  }
}

function showFieldError(input, message) {
  clearFieldError(input);
  
  input.style.borderColor = '#dc3545';
  input.style.borderWidth = '2px';
  
  const errorDiv = document.createElement('div');
  errorDiv.className = 'field-error';
  errorDiv.style.cssText = `
    color: #dc3545;
    font-size: 12px;
    margin-top: 5px;
    animation: fadeIn 0.2s ease-in;
  `;
  errorDiv.textContent = message;
  
  input.parentNode.appendChild(errorDiv);
}

function clearFieldError(input) {
  input.style.borderColor = '';
  input.style.borderWidth = '';
  
  const existingError = input.parentNode.querySelector('.field-error');
  if (existingError) {
    existingError.remove();
  }
}

// EmailJS Integration
async function sendEmail(templateParams) {
  // Send email via EmailJS - this should be the ONLY return statement
  return emailjs.send(
    emailConfig.SERVICE_ID, 
    emailConfig.TEMPLATE_ID, 
    templateParams, 
    emailConfig.PUBLIC_KEY);
}
