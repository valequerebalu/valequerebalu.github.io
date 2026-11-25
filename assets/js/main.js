import { projects } from './data/projects.js';
import { renderProjects } from './ui/ui.js';

renderProjects(projects, 'projects-container');

// Año del footer
document.getElementById('year').textContent = new Date().getFullYear();

// Tema claro/oscuro
const root = document.documentElement;
document.getElementById('theme-toggle').addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
});

// Menú móvil
const navMenu = document.getElementById('nav-menu');
document.getElementById('nav-toggle').addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Cerrar el menú al elegir un enlace
navMenu.addEventListener('click', e => {
  if (e.target.matches('.nav__link')) navMenu.classList.remove('active');
});