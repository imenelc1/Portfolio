import { useLang } from '../../context/AppContext'
import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const { t, lang } = useLang()
  const spotlightRef = useRef(null)

  /* Spotlight souris */
  useEffect(() => {
    const section = spotlightRef.current
    if (!section) return
    const onMove = (e) => {
      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      section.style.setProperty('--mouse-x', `${x}px`)
      section.style.setProperty('--mouse-y', `${y}px`)
    }
    section.addEventListener('mousemove', onMove)
    return () => section.removeEventListener('mousemove', onMove)
  }, [])

 
  return (
    <section
      id="home"
      ref={spotlightRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '6rem 1.5rem 4rem',
        position: 'relative',
        overflow: 'hidden',
        /* Variable CSS pour le spotlight */
        '--mouse-x': '50%',
        '--mouse-y': '50%',
      }}
    >
      {/* Spotlight dynamique qui suit la souris */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(46,91,255,0.06), transparent 50%)',
        pointerEvents: 'none',
        transition: 'background 0.1s',
        zIndex: 0,
      }} />

      {/* Cercles décoratifs statiques */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%',
        transform: 'translateX(-50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(46,91,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', top: '30%', right: '10%',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(109,107,212,0.04) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Contenu */}
      <div style={{ position: 'relative', maxWidth: '750px', zIndex: 1 }}>

       
        {/* Badge rôle */}
        <div
          className="animate-fade-in-up delay-200"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(46,91,255,0.08)',
            border: '1px solid rgba(46,91,255,0.2)',
            borderRadius: '100px',
            padding: '0.375rem 1rem',
            marginBottom: '1.5rem',
            marginLeft: '0.5rem',
            fontFamily: 'var(--font-grotesk)',
            fontSize: '0.8125rem', fontWeight: 500,
            color: 'var(--accent)',
            letterSpacing: '0.02em',
          }}
        >
          {t('hero.title')}
        </div>

        {/* Nom */}
        <h1
          className="animate-fade-in-up delay-200"
          style={{
            fontFamily: 'var(--font-grotesk)', fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            lineHeight: 1.15, letterSpacing: '-0.03em',
            marginBottom: '1.25rem', color: 'var(--text-primary)',
            display: 'block',
          }}
        >
          Lakhdar Chaouch{' '}
          <span className="text-gradient">Imene</span>
        </h1>

        {/* Description */}
        <p
          className="animate-fade-in-up delay-300"
          style={{
            fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
            maxWidth: '580px',
            margin: '0 auto 2.5rem',
            fontFamily: 'var(--font-inter)',
            fontWeight: 400,
          }}
        >
          {t('hero.description')}
        </p>

        {/* Boutons CTA */}
        <div
          className="animate-fade-in-up delay-400"
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#projects"
            style={{
              background: 'var(--accent)', color: '#fff',
              padding: '0.75rem 2rem', borderRadius: '10px',
              textDecoration: 'none', fontSize: '0.9375rem',
              fontFamily: 'var(--font-grotesk)', fontWeight: 600,
              transition: 'all 0.2s', border: '1px solid transparent',
            }}
            onMouseEnter={e => {
              e.target.style.background = 'var(--accent-hover)'
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 8px 30px rgba(46,91,255,0.35)'
            }}
            onMouseLeave={e => {
              e.target.style.background = 'var(--accent)'
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = 'none'
            }}
          >
            {t('hero.cta_primary')} →
          </a>

          <a
            href="/cv.pdf"
            download
            style={{
              background: 'transparent', color: 'var(--text-primary)',
              padding: '0.75rem 2rem', borderRadius: '10px',
              textDecoration: 'none', fontSize: '0.9375rem',
              fontFamily: 'var(--font-grotesk)', fontWeight: 600,
              transition: 'all 0.2s', border: '1px solid var(--border-color)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--border-hover)'
              e.currentTarget.style.background = 'var(--glass-bg)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border-color)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            {t('hero.cta_secondary')}
          </a>
        </div>

        {/* Scroll hint */}
        <div style={{
          marginTop: '4rem', display: 'flex',
          flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        }}>
          <p style={{
            fontSize: '0.7rem', color: 'var(--text-muted)',
            fontFamily: 'var(--font-grotesk)',
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            {t('hero.scroll_hint')}
          </p>
          <div style={{
            width: '1px', height: '48px',
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
            animation: 'scrollBounce 1.5s ease-in-out infinite',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes pulseGreen {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
        @keyframes scrollBounce {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.3; transform: translateY(6px); }
        }
      `}</style>
    </section>
  )
}