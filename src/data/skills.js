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
  { name: 'React Native', category: 'Mobile',   icon: 'Smartphone'   },
  { name: 'Node.js',      category: 'Backend',  icon: 'Server'       },
  { name: 'Docker',       category: 'DevOps',   icon: 'Container'    },
  { name: 'Git',          category: 'DevOps',   icon: 'GitBranch'    },
  { name: 'PostgreSQL',   category: 'Database', icon: 'Database'     },
  { name: 'MongoDB',      category: 'Database', icon: 'CircleStack'  },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'Paintbrush'   },
]

export const humanLanguages = [
  {
    name:    { fr: 'Arabe',    en: 'Arabic'   },
    level:   { fr: 'Langue maternelle', en: 'Native' },
    icon:    'MessageCircle', 
    percent: 100,
  },
  {
    name:    { fr: 'Kabyle',   en: 'Kabyle'   },
    level:   { fr: 'Langue maternelle', en: 'Native' },
    icon:    'Languages', 
    percent: 100,
  },
  {
    name:    { fr: 'Français', en: 'French'   },
    level:   { fr: 'Intermédiaire Avancé (B2)', en: 'Upper-Intermediate (B2)' },
    icon:    'BookOpen',
    percent: 80, 
  },
  {
    name:    { fr: 'Anglais',  en: 'English'  },
    level:   { fr: 'Intermédiaire Supérieur (B2)', en: 'Upper-Intermediate (B2)' },
    icon:    'Globe',
    percent: 70, 
  },
  {
    name:    { fr: 'Turc',     en: 'Turkish'  },
    level:   { fr: 'Intermédiaire (B1)', en: 'Intermediate (B1)' },
    icon:    'Compass',
    percent: 65, 
  },
]

/* ============================================================
   DONNÉES — Expériences Professionnelles
   ============================================================ */
export const experiences = [
  {
    id: 'internship-cevital',
    title: {
      fr: 'Stagiaire en Informatique Industrielle',
      en: 'Industrial IT Intern',
    },
    company: 'Cevital Agro-industrie — Béjaïa',
    period: {
      start: { fr: 'Mars 2026', en: 'March 2026' },
      end:   { fr: 'Mars 2026', en: 'March 2026' },
    },
    description: {
      fr: 'Stage d\'observation portant sur l\'analyse des flux de données industriels et l\'automatisation des processus au sein du complexe agro-alimentaire.',
      en: 'Observation internship focused on analyzing industrial data flows and process automation within the food processing complex.',
    },
    tags: ['Informatique Industrielle', 'Analyse de données', 'Automatisation'],
    type: 'work',
  },
  {
    id: 'engineering-student',
    title: {
      fr: 'Élève Ingénieur en Génie Logiciel',
      en: 'Software Engineering Student',
    },
    company: 'Université de Béjaïa',
    period: {
      start: { fr: 'Sept 2022', en: 'Sept 2022' },
      end:   { fr: 'Juin 2027', en: 'June 2027' },
    },
    description: {
      fr: 'Cycle d\'ingénieur de 5 ans spécialisé en Génie Logiciel. Focus sur l\'architecture système, le développement mobile (React Native) et les technologies Cloud.',
      en: '5-year engineering cycle specialized in Software Engineering. Focus on system architecture, mobile development (React Native), and Cloud technologies.',
    },
    tags: ['Génie Logiciel', 'Java', 'React Native', 'Cloud'],
    type: 'education',
  },
  {
    id: 'bac-degree',
    title: {
      fr: 'Baccalauréat',
      en: 'High School Diploma',
    },
    company: 'Lycée Chouhada Annani — Béjaïa',
    period: {
      start: { fr: 'Sept 2019', en: 'Sept 2019' },
      end:   { fr: 'Juin 2022', en: 'June 2022' },
    },
    description: {
      fr: 'Diplôme du Baccalauréat avec mention.',
      en: 'High School Diploma with honors.',
    },
    tags: ['Sciences', 'Mathématiques'],
    type: 'education',
  },
]