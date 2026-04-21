import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/AppContext'
import { useLang }  from '../../context/AppContext'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { t, toggleLang, lang } = useLang()

  // Détecter si on a scrollé (pour ajouter un fond au navbar)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    // Cleanup : très important en React pour éviter les memory leaks
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Liens de navigation — tableau d'objets pour rester DRY
  const navLinks = [
    { label: t('nav.projects'),        href: '#projects'        },
    { label: t('nav.skills'),          href: '#skills'          },
    { label: t('nav.experience'),      href: '#experience'      },
    { label: t('nav.certifications'),  href: '#certifications'  },
    { label: t('nav.contact'),         href: '#contact'         },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '0 1.5rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'var(--bg-surface)'
          : 'transparent',
        borderBottom: scrolled
          ? '1px solid var(--border-color)'
          : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      {/* Logo */}
      <a href="#" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'var(--font-grotesk)',
          fontWeight: 700,
          fontSize: '1rem',
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
        }}>
          THE <span style={{ color: 'var(--accent)' }}>ARCHITECT</span>
        </span>
      </a>

      {/* Liens desktop */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
      }}
        className="hide-mobile"
      >
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontFamily: 'var(--font-grotesk)',
              fontWeight: 500,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Boutons droite */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>

        {/* Toggle langue */}
        <button
          onClick={toggleLang}
          title={t('ui.toggle_lang')}
          style={{
            background: 'var(--glass-bg)',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            color: 'var(--text-secondary)',
            padding: '0.375rem 0.625rem',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 600,
            cursor: 'pointer',
            letterSpacing: '0.05em',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.target.style.borderColor = 'var(--accent)'
            e.target.style.color = 'var(--accent)'
          }}
          onMouseLeave={e => {
            e.target.style.borderColor = 'var(--border-color)'
            e.target.style.color = 'var(--text-secondary)'
          }}
        >
          {lang === 'fr' ? 'EN' : 'FR'}
        </button>

        {/* Toggle thème */}
        <button
          onClick={toggleTheme}
          title={t('ui.toggle_theme')}
          style={{
            background: 'var(--glass-bg)',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            color: 'var(--text-secondary)',
            padding: '0.375rem 0.5rem',
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '34px',
            height: '34px',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--accent)'
            e.currentTarget.style.color = 'var(--accent)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border-color)'
            e.currentTarget.style.color = 'var(--text-secondary)'
          }}
        >
          {theme === 'dark' ? (
            <Sun size={16} strokeWidth={2} />
          ) : (
            <Moon size={16} strokeWidth={2} />
          )}
        </button>

        {/* CTA "Me contacter" */}
        <a
          href="#contact"
          className="hide-mobile"
          style={{
            background: 'var(--accent)',
            color: '#fff',
            padding: '0.5rem 1.25rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 600,
            transition: 'background 0.2s, transform 0.1s',
          }}
          onMouseEnter={e => {
            e.target.style.background = 'var(--accent-hover)'
            e.target.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={e => {
            e.target.style.background = 'var(--accent)'
            e.target.style.transform = 'translateY(0)'
          }}
        >
          {t('nav.cta')}
        </a>
      </div>
    </nav>
  )
}