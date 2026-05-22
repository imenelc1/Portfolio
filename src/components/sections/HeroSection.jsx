/* ============================================================
   SECTION — Hero
   ============================================================ */

import { useLang } from '../../context/AppContext'

export default function HeroSection() {
  const { t } = useLang()

  return (
    <section
      id="home"
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
      }}
    >
      {/* Arrière-plan décoratif */}
      <div style={{
        position: 'absolute',
        top: '20%', left: '50%',
        transform: 'translateX(-50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(46,91,255,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '30%', right: '10%',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(109,107,212,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: '750px' }}>

        {/* Badge rôle — attire l'œil en premier */}
        <div
          className="animate-fade-in-up delay-100"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(46,91,255,0.08)',
            border: '1px solid rgba(46,91,255,0.2)',
            borderRadius: '100px',
            padding: '0.375rem 1rem',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-grotesk)',
            fontSize: '0.8125rem',
            fontWeight: 500,
            color: 'var(--accent)',
            letterSpacing: '0.02em',
          }}
        >
          <span style={{
            width: '6px', height: '6px',
            borderRadius: '50%',
            background: 'var(--accent)',
            animation: 'pulse 2s ease infinite',
            flexShrink: 0,
          }} />
          {t('hero.title')}
        </div>

        {/* Nom — réduit, plus équilibré */}
        <h1
          className="animate-fade-in-up delay-200"
          style={{
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '1.25rem',
            color: 'var(--text-primary)',
          }}
        >
          Lakhdar Chaouch{' '}
          <span className="text-gradient">Imene</span>
        </h1>

        {/* Description — plus visible, légèrement contrastée */}
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
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#projects"
            style={{
              background: 'var(--accent)',
              color: '#fff',
              padding: '0.75rem 2rem',
              borderRadius: '10px',
              textDecoration: 'none',
              fontSize: '0.9375rem',
              fontFamily: 'var(--font-grotesk)',
              fontWeight: 600,
              transition: 'all 0.2s',
              border: '1px solid transparent',
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
              background: 'transparent',
              color: 'var(--text-primary)',
              padding: '0.75rem 2rem',
              borderRadius: '10px',
              textDecoration: 'none',
              fontSize: '0.9375rem',
              fontFamily: 'var(--font-grotesk)',
              fontWeight: 600,
              transition: 'all 0.2s',
              border: '1px solid var(--border-color)',
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
          marginTop: '4rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <p style={{
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-grotesk)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
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
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes scrollBounce {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.3; transform: translateY(6px); }
        }
      `}</style>
    </section>
  )
}