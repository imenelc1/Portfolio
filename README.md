# 🌐 Portfolio — Lakhdar Chaouch Imene

Portfolio personnel développé avec React 19 et Vite, déployé sur Netlify.

🔗 **[imenelc.netlify.app](https://imenelc.netlify.app)**

---

## Fonctionnalités

- Mode Dark / Light avec détection automatique des préférences système
- Bilingue Français / Anglais
- Fond animé (grille neon + canvas WebGL)
- Entièrement responsive avec menu hamburger mobile
- Galerie d'images avec lightbox, zoom et navigation clavier
- SEO optimisé (Open Graph, Twitter Card, meta tags)

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Présentation et spotlight dynamique |
| **Projets** | Projets avec galerie de captures d'écran |
| **Compétences** | Langages, outils & frameworks + langues humaines |
| **Parcours** | Timeline expérience professionnelle & formation |
| **Certifications** | Badges et certifications vérifiables en ligne |
| **Contact** | Liens Email, GitHub, LinkedIn |

---

## Stack technique

| Technologie | Usage |
|---|---|
| React 19 | UI & composants |
| Vite 8 | Build tool |
| Tailwind CSS 4 | Styles |
| Lucide React + React Icons | Icônes |
| Canvas API | Animation fond neon |
| Netlify | Déploiement |

---

## Structure du projet

```
src/
├── components/
│   ├── layout/          # Navbar, Footer, GridNeonBackground
│   ├── sections/        # HeroSection, ProjectsSection, SkillsSection...
│   └── ui/              # ProjectCard, SectionHeader, DynamicIcon, Lightbox...
├── context/
│   └── AppContext.jsx   # ThemeContext + LangContext
├── data/
│   ├── projects.js      # Données des projets
│   ├── skills.js        # Compétences & expériences
│   └── Certifications.js
├── hooks/
│   └── useZoom.jsx      # Hook zoom & drag pour la lightbox
├── i18n/
│   └── translations.js  # Traductions FR / EN
└── index.css            # Variables CSS, thèmes, animations
```

---

© 2026 Lakhdar Chaouch Imene