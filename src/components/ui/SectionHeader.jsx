/* ============================================================
   COMPOSANT UI — SectionHeader
   ============================================================ */

export default function SectionHeader({ title, subtitle, align = 'left' }) {
  return (
    <div style={{
      marginBottom: '3rem',
      textAlign: align,
    }}>
      {/* Ligne décorative + titre */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '0.75rem',
        justifyContent: align === 'center' ? 'center' : 'flex-start',
      }}>
        {/* Accent vertical */}
        <div style={{
          width: '3px',
          height: '24px',
          background: 'linear-gradient(to bottom, var(--accent), var(--violet))',
          borderRadius: '2px',
          flexShrink: 0,
        }} />

        <h2 style={{
          fontFamily: 'var(--font-grotesk)',
          fontWeight: 700,
          fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
          color: 'var(--text-primary)',
          letterSpacing: '-0.03em',
          lineHeight: 1.2,
        }}>
          {title}
        </h2>
      </div>

      {/* Sous-titre optionnel */}
      {subtitle && (
        <p style={{
          fontSize: '1rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          maxWidth: '600px',
          marginLeft: align === 'left' ? '1.1875rem' : 'auto',
          marginRight: align === 'center' ? 'auto' : 0,
          paddingLeft: align === 'left' ? '0.8125rem' : 0,
          borderLeft: align === 'left' ? '1px solid var(--border-color)' : 'none',
        }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}