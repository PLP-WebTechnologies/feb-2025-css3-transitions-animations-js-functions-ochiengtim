const animateBtn = document.getElementById('animateBtn');
const themeBtn = document.getElementById('themeBtn');
const animationBox = document.getElementById('animationBox');
const saveBtn = document.getElementById('saveBtn');
const usernameInput = document.getElementById('username');
const welcomeMsg = document.getElementById('welcomeMsg');

// Animate box
animateBtn.addEventListener('click', () => {
  animationBox.classList.remove('hidden');
  animationBox.classList.add('active');
  setTimeout(() => animationBox.classList.remove('active'), 2000);
});

// Theme toggle + store
themeBtn.addEventListener('click', () => {
  const current = document.body.style.getPropertyValue('--bg-color');
  const isDark = current === '' || current === '#0f0f0f';

  if (isDark) {
    document.body.style.setProperty('--bg-color', '#ffffff');
    document.body.style.setProperty('--text-color', '#111111');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.style.setProperty('--bg-color', '#0f0f0f');
    document.body.style.setProperty('--text-color', '#ffffff');
    localStorage.setItem('theme', 'dark');
  }
});

// Save name
saveBtn?.addEventListener('click', () => {
  const name = usernameInput?.value.trim();
  if (name) {
    localStorage.setItem('username', name);
    updateWelcome();
  }
});

function updateWelcome() {
  const name = localStorage.getItem('username');
  if (name) {
    welcomeMsg.textContent = ` Welcome back, ${name}!`;
  }
}

// Init on load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.style.setProperty('--bg-color', '#ffffff');
    document.body.style.setProperty('--text-color', '#111111');
  } else {
    document.body.style.setProperty('--bg-color', '#0f0f0f');
    document.body.style.setProperty('--text-color', '#ffffff');
  }

  updateWelcome();
});
