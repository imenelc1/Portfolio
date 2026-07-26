/* ============================================================
   DONNÉES — Compétences et Expériences
   ============================================================ */


export const tools = [
  // Langages
  { name: 'Java',        category: 'Language', icon: 'Coffee'     },
  { name: 'Python',      category: 'Language', icon: 'Code2'      },
  { name: 'JavaScript',  category: 'Language', icon: 'Zap'        },
  { name: 'TypeScript',  category: 'Language', icon: 'FileCode2'  },
  { name: 'PHP 8',       category: 'Language', icon: 'Code2'      },
  { name: 'SQL',         category: 'Language', icon: 'Database'   },
  { name: 'HTML5',       category: 'Language', icon: 'Globe'      },
  { name: 'CSS3',        category: 'Language', icon: 'Paintbrush2'},

  // Frontend & Mobile
  { name: 'Vue 3',        category: 'Frontend', icon: 'Code2'      }, 
  { name: 'Pinia',        category: 'Frontend', icon: 'Component'  }, 
  { name: 'React',        category: 'Frontend', icon: 'Atom'       },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'Paintbrush' },
  { name: 'React Native', category: 'Mobile',   icon: 'Smartphone' },
  { name: 'Expo',         category: 'Mobile',   icon: 'Milestone'  }, 
  { name: 'Electron',     category: 'Desktop',  icon: 'Laptop'     },

  // Backend & Architecture
  { name: 'Node.js',      category: 'Backend',  icon: 'Server'     },
  { name: 'Express',      category: 'Backend',  icon: 'Zap'        },
  { name: 'Mongoose',     category: 'Backend',  icon: 'Link'       },
  { name: 'JavaFX',       category: 'Backend',  icon: 'Monitor'    },
  { name: 'Clean Architecture', category: 'Methods', icon: 'Layers'},
  { name: 'MVC Pattern',  category: 'Methods',  icon: 'Layers'     },

  // Data & Analytics (Complété !)
  { name: 'Power BI',     category: 'DataViz',  icon: 'BarChart2'  },
  { name: 'DAX',          category: 'DataViz',  icon: 'Calculator' }, 
  { name: 'Tableau',      category: 'DataViz',  icon: 'PieChart'   }, 
  { name: 'Excel / Power Query', category: 'DataViz', icon: 'FileSpreadsheet' }, 

  // Bases de données & ORM
  { name: 'MySQL',        category: 'Database', icon: 'Database'   },
  { name: 'PostgreSQL',   category: 'Database', icon: 'Database'   },
  { name: 'MongoDB',      category: 'Database', icon: 'CircleStack'}, 
  { name: 'SQLite',       category: 'Database', icon: 'HardDrive'  },
  { name: 'Sequelize',    category: 'Database', icon: 'Link'       }, 
  { name: 'Zod',          category: 'Database', icon: 'ShieldCheck'}, 

  // DevOps, Cloud & Tests
  { name: 'Docker',       category: 'DevOps',   icon: 'Container'  },
  { name: 'Git',          category: 'DevOps',   icon: 'GitBranch'  },
  { name: 'Firebase',     category: 'DevOps',   icon: 'Flame'      }, 
  { name: 'Vitest',       category: 'DevOps',   icon: 'CheckCircle'}, 

  // IA & Automatisation
  { name: 'Groq API / LLM', category: 'AI',      icon: 'Brain'      },
  { name: 'Prompt Engineering', category: 'AI', icon: 'Sparkles'   },
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
  level:   { fr: 'Compréhension passive', en: 'Passive comprehension' },
  icon:    'Compass',
  percent: 40,
},
]

/* ============================================================
   EXPÉRIENCES
   ============================================================ */
export const experiences = [
  {
    id: 'internship-cevital',
    title: {
      fr: 'Stagiaire DSI — Systèmes d\'Information Industriels',
      en: 'IT Department Intern — Industrial Information Systems',
    },
    company: 'Cevital Agroalimentaire — Béjaïa',
    period: {
      start: { fr: '24 Mars 2026', en: 'March 24, 2026' },
      end:   { fr: '31 Mars 2026', en: 'March 31, 2026' },
    },
    description: {
      fr: 'Immersion au sein de la DSI de l\'un des plus grands groupes industriels privés d\'Algérie. Observation de l\'infrastructure réseau hiérarchique (VMware ESXi, SAN, pfSense), de la cybersécurité (SOC/SIEM Wazuh, CIA Triad, PCA/PRA), des ERP (SAP S/4HANA, Sage X3, méthodologie Activate), de la Business Intelligence (Power BI, ETL, Data Warehouse) et des outils d\'automatisation modernes (n8n, Docker).',
      en: 'Immersion within the IT department of one of Algeria\'s largest private industrial groups. Observed hierarchical network infrastructure (VMware ESXi, SAN, pfSense), cybersecurity practices (SOC/SIEM Wazuh, CIA Triad, BCP/DRP), ERP systems (SAP S/4HANA, Sage X3, SAP Activate methodology), Business Intelligence pipelines (Power BI, ETL, Data Warehouse), and modern automation tooling (n8n, Docker).',
    },
    tags: ['SAP S/4HANA', 'VMware ESXi', 'Power BI', 'Cybersécurité', 'ITIL', 'Docker', 'n8n'],
    type: 'work',
  },
  {
    id: 'engineering-student',
    title: {
      fr: 'Étudiante Ingénieure en Génie Logiciel',
      en: 'Software Engineering Student',
    },
    company: 'Université de Béjaïa',
    period: {
      start: { fr: 'Sept 2022', en: 'Sept 2022' },
      end:   { fr: 'Juin 2027', en: 'June 2027' },
    },
    description: {
      fr: "Cursus d'ingénieur d'État approfondi couvrant l'intégralité du cycle de vie du logiciel. Expertise développée en ingénierie logicielle, systèmes d'exploitation mobiles, sécurité, Big Data, ainsi qu'en automatisation DevOps et Cloud Computing.",
      en: "Comprehensive State Engineering degree covering the entire software development lifecycle. Advanced training in software engineering, mobile operating systems, cybersecurity, Big Data, as well as DevOps automation and Cloud Computing.",
    },
    tags: ['Génie Logiciel'],
    type: 'education',
  },
  {
    id: 'bac-degree',
    title: {
  fr: 'Lycée — Sciences Expérimentales',
  en: 'High School — Experimental Sciences',
},
    company: 'Lycée Chouhada Annani — Béjaïa',
    period: {
      start: { fr: 'Sept 2019', en: 'Sept 2019' },
      end:   { fr: 'Juin 2022', en: 'June 2022' },
    },
    description: {
      fr: 'Baccalauréat Sciences Expérimentales — Mention Bien (15/20).',
      en: 'Baccalaureate in Experimental Sciences — With Merit (15/20).',
    },
    tags: ['Sciences Expérimentales'],
    type: 'education',
  },
]