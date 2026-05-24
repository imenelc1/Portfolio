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
{
  id: 'roadskill',
  title: 'RoadSkill — Gestion Auto-École',
  images: [
    '/projects/roadskill/dashboard.png',
    '/projects/roadskill/apprenant.png',
    '/projects/roadskill/planning.png',
    '/projects/roadskill/moniteur.png',
    '/projects/roadskill/dossier.png',
    '/projects/roadskill/paiement.png',
    '/projects/roadskill/vehicule.png',

  ],
  description: {
    fr: 'Application desktop complète de gestion d\'auto-école, développée avec Electron, React 18 et Node.js. Gestion des apprenants, moniteurs, véhicules, planning des séances avec détection de conflits, examens, dossiers administratifs et paiements. Authentification JWT, génération de PDF, envoi d\'emails automatiques et suite de tests complète (Vitest + Node test runner).',
    en: 'Full-featured desktop application for driving school management, built with Electron, React 18 and Node.js. Manages students, instructors, vehicles, session scheduling with conflict detection, exams, administrative files and payments. JWT authentication, PDF generation, automated email notifications and comprehensive test suite (Vitest + Node test runner).',
  },
  tags: ['Electron', 'React 18', 'TypeScript', 'Node.js', 'Express', 'SQLite', 'Sequelize', 'Vitest'],
  color: '#0E4482',
  github: 'https://github.com/imenelc1/roadskill',
  demo: null,
  featured: true,
},
{
    id: 'citiquest',
    title: 'CitiQuest — Participation Citoyenne & Gamification',
    images: [
      '/projects/cityquest/choix.png',
      '/projects/cityquest/map.png',
      '/projects/cityquest/vote.png',
      '/projects/cityquest/preuve.png',
      '/projects/cityquest/validation.png',
      '/projects/cityquest/gestionmission.png',
      '/projects/cityquest/dashadmin.png',
      '/projects/cityquest/gestionbadges.png',
    ],
    description: {
      fr: 'Application mobile de participation citoyenne transformant les actions urbaines en missions gamifiées (XP, badges). Conçue en développement augmenté (React Native/Expo & Node.js) : géolocalisation, validation par preuves photo/QR Code, notifications push, architecture multi-rôles (Citoyen, Association, Admin) et validation stricte des données avec Zod.',
      en: 'Mobile application for civic engagement transforming urban actions into gamified missions (XP, badges). Built using AI-assisted development (React Native/Expo & Node.js): geolocation, photo/QR code validation, push notifications, multi-role workspace (Citizen, Association, Admin), and strict data validation with Zod.'
    },
    tags: ['React Native', 'Expo 54', 'Node.js', 'MongoDB', 'Firebase Auth', 'Zod', 'Express'],
    color: '#16A34A', 
    github: 'https://github.com/imenelc1/citiQuest', 
    demo: null,
    featured: true,
  },
 
]



// Retourne uniquement les projets mis en avant
export const getFeaturedProjects = () => projects.filter(p => p.featured)

// Retourne tous les tags uniques (pour filtrer)
export const getAllTags = () => [...new Set(projects.flatMap(p => p.tags))]