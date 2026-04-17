/* ============================================================
   DONNÉES — Compétences et Expériences
   
   ============================================================ */

/* --- Langages de Programmation --- */
// C'est la séparation données/vue : le fichier data ne sait pas
export const programmingLanguages = [
  { name: 'Java',       level: 90, icon: 'Coffee'    },
  { name: 'JavaScript', level: 85, icon: 'Zap'       },
  { name: 'TypeScript', level: 80, icon: 'FileCode2' },
  { name: 'Python',     level: 75, icon: 'Terminal'  },
  { name: 'SQL',        level: 85, icon: 'Database'  },
]

/* --- Frameworks & Outils --- */
export const tools = [
  { name: 'React',        category: 'Frontend', icon: 'Atom'         },
  { name: 'Spring Boot',  category: 'Backend',  icon: 'Leaf'         },
  { name: 'React Native', category: 'Mobile',   icon: 'Smartphone'   },
  { name: 'Node.js',      category: 'Backend',  icon: 'Server'       },
  { name: 'Docker',       category: 'DevOps',   icon: 'Container'    },
  { name: 'Git',          category: 'DevOps',   icon: 'GitBranch'    },
  { name: 'PostgreSQL',   category: 'Database', icon: 'Database'     },
  { name: 'MongoDB',      category: 'Database', icon: 'CircleStack'  },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'Paintbrush'   },
  { name: 'Figma',        category: 'Design',   icon: 'Figma'        },
]

export const humanLanguages = [
  {
    name:    { fr: 'Arabe',    en: 'Arabic'   },
    level:   { fr: 'Natif',    en: 'Native'   },
    icon:    'MessageCircle', // pas de flag → icône neutre
    percent: 100,
  },
  {
    name:    { fr: 'Français', en: 'French'   },
    level:   { fr: 'Courant',  en: 'Fluent'   },
    icon:    'BookOpen',
    percent: 90,
  },
  {
    name:    { fr: 'Anglais',  en: 'English'  },
    level:   { fr: 'Avancé',   en: 'Advanced' },
    icon:    'Globe',
    percent: 80,
  },
]

/* ============================================================
   DONNÉES — Expériences Professionnelles
   ============================================================ */
export const experiences = [
  {
    id: 'se-intern',
    title: {
      fr: 'Software Engineer Intern',
      en: 'Software Engineer Intern',
    },
    company: 'Tech Startup — Alger',
    period: {
      start: { fr: 'Juin 2024', en: 'June 2024' },
      end:   null, // null = "Présent" / "Present"
    },
    description: {
      fr: 'Développement d\'une API REST avec Spring Boot. Mise en place de l\'architecture hexagonale et des tests unitaires.',
      en: 'Development of a REST API with Spring Boot. Implementation of hexagonal architecture and unit tests.',
    },
    tags: ['Spring Boot', 'Java', 'PostgreSQL'],
    type: 'work',
  },
  {
    id: 'gl-student',
    title: {
      fr: 'Étudiante en Génie Logiciel',
      en: 'Software Engineering Student',
    },
    company: 'Université — 4ème année',
    period: {
      start: { fr: 'Sept 2021', en: 'Sept 2021' },
      end:   null,
    },
    description: {
      fr: 'Formation en architecture logicielle, base de données, algorithmique avancée, et génie logiciel agile.',
      en: 'Training in software architecture, databases, advanced algorithms, and agile software engineering.',
    },
    tags: ['Architecture', 'Agile', 'Algorithmique'],
    type: 'education',
  },
  {
    id: 'fullstack-junior',
    title: {
      fr: 'Full Stack Junior',
      en: 'Junior Full Stack Developer',
    },
    company: 'Digital Agency',
    period: {
      start: { fr: 'Jan 2023', en: 'Jan 2023' },
      end:   { fr: 'Mai 2024', en: 'May 2024' },
    },
    description: {
      fr: 'Conception et développement d\'interfaces React, intégration d\'APIs, optimisation des performances.',
      en: 'Design and development of React interfaces, API integration, performance optimization.',
    },
    tags: ['React', 'Node.js', 'MongoDB'],
    type: 'work',
  },
]