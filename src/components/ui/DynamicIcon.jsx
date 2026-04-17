/* ============================================================
   COMPOSANT UI — DynamicIcon
   
   PROBLÈME : Dans data/skills.js, on stocke des strings
   comme 'Coffee', 'Database', 'GitBranch'...
   Mais Lucide exporte des composants React, pas des strings.
   
   SOLUTION : Ce composant fait le pont.
   Il reçoit un nom (string) et rend le bon composant Lucide.
   
   ============================================================ */

import * as LucideIcons from 'lucide-react'

export default function DynamicIcon({ name, size = 16, color = 'currentColor', strokeWidth = 2 }) {
  // On récupère le composant depuis l'objet LucideIcons
  const Icon = LucideIcons[name]

  // Si l'icône n'existe pas (faute de frappe dans les data ?),
  // on affiche une icône de fallback plutôt que de planter
  if (!Icon) {
    console.warn(`DynamicIcon: icône "${name}" introuvable dans lucide-react`)
    return <LucideIcons.HelpCircle size={size} color={color} strokeWidth={strokeWidth} />
  }

  return <Icon size={size} color={color} strokeWidth={strokeWidth} />
}