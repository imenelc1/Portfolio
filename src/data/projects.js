/* ============================================================
   DONNÉES — Projets
   
   PRINCIPE D'ARCHITECTURE : Séparation des données et de la vue.
   
   Ce fichier contient uniquement les données brutes.
   Les composants (ProjectCard, ProjectsSection) importent
   ce tableau et affichent les données via des props.
   
   Avantage : pour ajouter un projet, on modifie SEULEMENT
   ce fichier — aucun composant ne change.
   
   Structure d'un projet :
   - id        : identifiant unique (pour la clé React)
   - title     : nom du projet
   - description : objet { fr, en } pour i18n
   - tags      : technologies utilisées
   - color     : couleur d'accent du projet
   - github    : lien GitHub (ou null si privé)
   - demo      : lien demo live (ou null si pas déployé)
   - featured  : boolean, affiché en premier si true
   ============================================================ */

export const projects = [
  {
    id: 'react-native-app',
    title: 'React Native Mobile App',
    description: {
      fr: 'Application mobile cross-platform avec architecture clean (Repository Pattern, Use Cases). Authentification JWT, state management avec Zustand.',
      en: 'Cross-platform mobile app with clean architecture (Repository Pattern, Use Cases). JWT authentication, state management with Zustand.',
    },
    tags: ['React Native', 'Zustand', 'TypeScript', 'REST API'],
    color: '#2E5BFF',
    github: 'https://github.com/',
    demo: null,
    featured: true,
  },
  {
    id: 'java-enterprise',
    title: 'Java Enterprise Backend',
    description: {
      fr: 'API REST en Spring Boot avec architecture hexagonale. Gestion des rôles, cache Redis, documentation Swagger, tests unitaires JUnit.',
      en: 'REST API with Spring Boot and hexagonal architecture. Role management, Redis cache, Swagger documentation, JUnit unit tests.',
    },
    tags: ['Java', 'Spring Boot', 'Redis', 'PostgreSQL'],
    color: '#6D6BD4',
    github: 'https://github.com/',
    demo: null,
    featured: true,
  },
  {
    id: 'ai-automation',
    title: 'AI Automation Flow',
    description: {
      fr: 'Pipeline d\'automatisation avec intégration d\'API IA. Traitement de données en batch, webhooks, interface de monitoring en temps réel.',
      en: 'Automation pipeline with AI API integration. Batch data processing, webhooks, real-time monitoring interface.',
    },
    tags: ['Python', 'FastAPI', 'LangChain', 'React'],
    color: '#0EA5E9',
    github: 'https://github.com/',
    demo: 'https://demo.example.com',
    featured: true,
  },
]


// Retourne uniquement les projets mis en avant
export const getFeaturedProjects = () => projects.filter(p => p.featured)

// Retourne tous les tags uniques (pour filtrer)
export const getAllTags = () => [...new Set(projects.flatMap(p => p.tags))]