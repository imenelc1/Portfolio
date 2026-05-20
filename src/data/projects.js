export const projects = [
  {
  id: 'maison-design',
  title: 'Maison Design — E-Commerce',
   images: [
      '/projects/maison-design/cover.png',
      '/projects/maison-design/image1.png',
      '/projects/maison-design/image2.png',
      '/projects/maison-design/image3.png',
      '/projects/maison-design/image4.png',
      '/projects/maison-design/image5.png',
      '/projects/maison-design/image6.png',
    ],
  description: {
    fr: 'Application e-commerce complète de meubles et décoration, développée en PHP 8.3 avec Clean Architecture (Domain/Application/Infrastructure). Système de panier en session, gestion des commandes avec livraison, panel admin complet, sécurité CSRF et validation serveur.',
    en: 'Full e-commerce application for furniture and decoration, built with PHP 8.3 and Clean Architecture (Domain/Application/Infrastructure). Session cart, order management with delivery, complete admin panel, CSRF protection and server-side validation.',
  },
  tags: ['PHP 8.3', 'Clean Architecture', 'MySQL', 'Tailwind CSS', 'Vanilla JS'],
  color: '#8E9675',
  github: 'https://github.com/imenelc1/Maison-Design',
  demo: null,
  featured: true,
},
{
  id: 'sysbank',
  title: 'SysBank — Gestion Bancaire',
  images: [
    '/projects/sysbank/connexion.png',
    '/projects/sysbank/dashboard.png',
    '/projects/sysbank/stats.png',
    '/projects/sysbank/comptes.png',
    '/projects/sysbank/creercompte.png',
    '/projects/sysbank/gestionbanquier.png',
  ],
  description: {
    fr: 'Application de bureau JavaFX complète pour la gestion bancaire. Comprend un tableau de bord analytique, un système multi-rôles (Admin/Banquier), une gestion des transactions atomiques et un thème dynamique clair/sombre. Architecture robuste basée sur les patterns MVC, Service et Repository.',
    en: 'Comprehensive JavaFX desktop application for banking management. Features an analytical dashboard, multi-role system (Admin/Banker), atomic transaction management, and dynamic light/dark mode. Built with a robust architecture using MVC, Service, and Repository patterns.',
  },
  tags: ['Java 17', 'JavaFX', 'MySQL', 'Maven', 'JDBC'],
  color: '#2D3E50', 
  github: 'https://github.com/imenelc1/GestionBanque',
  demo: null,
  featured: true,
},
 
]



// Retourne uniquement les projets mis en avant
export const getFeaturedProjects = () => projects.filter(p => p.featured)

// Retourne tous les tags uniques (pour filtrer)
export const getAllTags = () => [...new Set(projects.flatMap(p => p.tags))]