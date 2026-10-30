// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Floating elemental particles (Visions dust)
const particleColors = [
  'var(--el-pyro)', 'var(--el-hydro)', 'var(--el-anemo)', 'var(--el-electro)',
  'var(--el-dendro)', 'var(--el-cryo)', 'var(--el-geo)', 'var(--accent)'
];
const particleContainer = document.getElementById('particles');
const particleCount = window.innerWidth < 720 ? 18 : 34;

for (let i = 0; i < particleCount; i++) {
  const p = document.createElement('span');
  p.className = 'particle';
  const size = 2 + Math.random() * 3;
  const color = particleColors[Math.floor(Math.random() * particleColors.length)];
  p.style.left = `${Math.random() * 100}%`;
  p.style.width = `${size}px`;
  p.style.height = `${size}px`;
  p.style.background = color;
  p.style.boxShadow = `0 0 ${size * 2}px ${color}`;
  p.style.setProperty('--drift', `${(Math.random() - 0.5) * 80}px`);
  p.style.animationDuration = `${10 + Math.random() * 12}s`;
  p.style.animationDelay = `${Math.random() * 14}s`;
  particleContainer.appendChild(p);
}

// Nav background on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu toggle
const burger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Typewriter effect
const roles = [
  'Backend Developer',
  'Full Stack Developer',
  'AI/ML Enthusiast'
];
const typewriterEl = document.getElementById('typewriter');
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop() {
  const current = roles[roleIndex];
  if (!deleting) {
    charIndex++;
    typewriterEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1600);
      return;
    }
  } else {
    charIndex--;
    typewriterEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 80);
}
typeLoop();

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 60}ms`;
  observer.observe(el);
});
