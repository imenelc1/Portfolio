import { useLang } from '../../context/AppContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer style={{
      padding: '3rem 1.5rem',
      borderTop: '1px solid var(--border-color)',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        textAlign: 'center',
      }}>
        {/* Logo */}
        <span style={{
          fontFamily: 'var(--font-grotesk)',
          fontWeight: 700,
          fontSize: '1.125rem',
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
        }}>
          THE <span style={{ color: 'var(--accent)' }}>ARCHITECT</span>
        </span>

        {/* Tagline */}
        <p style={{
          fontSize: '0.875rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-grotesk)',
        }}>
          {t('footer.tagline')}
        </p>

        {/* Copyright */}
        <p style={{
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-inter)',
        }}>
          {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}