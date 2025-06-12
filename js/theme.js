
// Theme toggle functionality
export const initTheme = () => {
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
};
