/* ============================================================
   NAVBAR — avec menu hamburger mobile
   ============================================================ */

import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme, useLang } from '../../context/AppContext'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { t, toggleLang, lang } = useLang()

  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Fermer le menu si on resize vers desktop */
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  /* Bloquer le scroll quand le menu mobile est ouvert */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { label: t('nav.projects'),       href: '#projects'       },
    { label: t('nav.skills'),         href: '#skills'         },
    { label: t('nav.experience'),     href: '#experience'     },
    { label: t('nav.certifications'), href: '#certifications' },
    { label: t('nav.contact'),        href: '#contact'        },
  ]

  const handleMobileLink = () => setMenuOpen(false)

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 50,
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s ease',
          background: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-color)',
          backdropFilter: 'blur(12px)',
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
            Imene <span style={{ color: 'var(--accent)' }}>LC</span>
          </span>
        </a>

        {/* Liens desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hide-mobile">
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
            onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.target.style.borderColor = 'var(--border-color)'; e.target.style.color = 'var(--text-secondary)' }}
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>

          {/* Toggle thème */}
          <button
            onClick={toggleTheme}
            style={{
              background: 'var(--glass-bg)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '34px',
              height: '34px',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
          >
            {theme === 'dark' ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
          </button>

          {/* CTA desktop */}
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
            onMouseEnter={e => { e.target.style.background = 'var(--accent-hover)'; e.target.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.target.style.background = 'var(--accent)'; e.target.style.transform = 'translateY(0)' }}
          >
            {t('nav.cta')}
          </a>

          {/* Bouton hamburger mobile */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="show-mobile"
            style={{
              background: 'var(--glass-bg)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'none',          /* géré par .show-mobile */
              alignItems: 'center',
              justifyContent: 'center',
              width: '34px',
              height: '34px',
            }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* ── Menu mobile (drawer) ────────────────────────── */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 40,
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
          }}
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          right: 0,
          zIndex: 45,
          background: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-color)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-110%)',
          transition: 'transform 0.3s ease',
        }}
      >
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleMobileLink}
            style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '1rem',
              fontFamily: 'var(--font-grotesk)',
              fontWeight: 500,
              padding: '0.75rem 0.5rem',
              borderBottom: '1px solid var(--border-color)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
          >
            {link.label}
          </a>
        ))}

        <a
          href="#contact"
          onClick={handleMobileLink}
          style={{
            marginTop: '0.75rem',
            background: 'var(--accent)',
            color: '#fff',
            padding: '0.75rem 1.25rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '0.9375rem',
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          {t('nav.cta')}
        </a>
      </div>

      {/* Classes responsive */}
      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  )
}