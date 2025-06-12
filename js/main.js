
// Main initialization file
import { initTheme } from './theme.js';
import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initContact } from './contact.js';

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initAnimations();
  initContact();
});
