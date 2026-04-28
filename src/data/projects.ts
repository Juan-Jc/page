import type { Project } from '../types';

export const projects: Project[] = [
  {
    name: 'Animationland',
    description:
      'Experimento interactivo con animaciones CSS y lógica en JavaScript para controlar eventos dentro de una escena ilustrada.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://github.com/Juan-Jc/Animationland',
    highlight: 'Animación + interacción en una sola experiencia.',
  },
  {
    name: 'Avocado-Store',
    description:
      'Tienda dinámica conectada a una API pública, con renderizado de nodos, manejo de eventos e internacionalización del contenido.',
    stack: ['JavaScript', 'DOM API', 'i18n'],
    url: 'https://github.com/Juan-Jc/Avocado-Store',
    highlight: 'Consumo de API y renderizado dinámico del contenido.',
  },
  {
    name: 'Mobile First Crypto Landing',
    description:
      'Landing responsive orientada a mobile con foco en jerarquía visual, legibilidad y adaptación progresiva a pantallas mayores.',
    stack: ['HTML', 'CSS', 'Responsive Design'],
    url: 'https://github.com/Juan-Jc/Mobile-First',
    highlight: 'Diseño mobile-first aplicado a una landing completa.',
  },
];
