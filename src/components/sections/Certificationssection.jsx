/* ============================================================
   SECTION — Certifications & Badges
   ============================================================ */

import { useLang } from '../../context/AppContext'
import { certifications } from '../../data/Certifications'
import SectionHeader from '../ui/SectionHeader'
import DynamicIcon from '../ui/DynamicIcon'
import { BadgeCheck, Clock, ExternalLink } from 'lucide-react'

function CertificationCard({ cert, t, lang }) {
  return (
    <div
      className="glass"
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        opacity: cert.inProgress ? 0.75 : 1,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.borderColor = cert.color + '60'
        e.currentTarget.style.boxShadow = `0 16px 32px ${cert.color}15`
        e.currentTarget.style.opacity = '1'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'var(--glass-border)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.opacity = cert.inProgress ? '0.75' : '1'
      }}
    >
      {/* Bande de couleur en haut */}
      <div style={{
        height: '3px',
        background: `linear-gradient(90deg, ${cert.color}, ${cert.color}00)`,
      }} />

      {/* Image du badge */}
      <div style={{
        padding: '1.5rem 1.5rem 1rem',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
      }}>
       
        {/* Titre + émetteur */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3 style={{
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 600,
            fontSize: '1rem',
            color: 'var(--text-primary)',
            marginBottom: '0.25rem',
            lineHeight: 1.3,
          }}>
            {cert.title}
          </h3>
          <p style={{
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-grotesk)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.375rem',
          }}>
            <DynamicIcon name={cert.issuerIcon} size={13} strokeWidth={2} />
            {cert.issuer}
          </p>
        </div>
      </div>

      {/* Footer : date + badges statut */}
      <div style={{
        padding: '0.875rem 1.5rem 1.25rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid var(--border-color)',
        marginTop: 'auto',
        gap: '0.5rem',
        flexWrap: 'wrap',
      }}>
        {/* Date */}
        <span style={{
          fontSize: '0.8125rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-grotesk)',
        }}>
          {cert.date[lang]}
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Badge "En cours" ou "Vérifié" */}
          {cert.inProgress ? (
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              background: 'rgba(245,158,11,0.1)',
              color: '#F59E0B',
              border: '1px solid rgba(245,158,11,0.25)',
              padding: '0.25rem 0.625rem',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-grotesk)',
              fontWeight: 500,
            }}>
              <Clock size={11} strokeWidth={2} />
              {t('certifications.in_progress')}
            </span>
          ) : (
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              background: 'rgba(34,197,94,0.1)',
              color: '#22C55E',
              border: '1px solid rgba(34,197,94,0.25)',
              padding: '0.25rem 0.625rem',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-grotesk)',
              fontWeight: 500,
            }}>
              <BadgeCheck size={11} strokeWidth={2} />
              {t('certifications.verified')}
            </span>
          )}

          {/* Lien vers le badge si disponible */}
          {cert.badgeUrl && !cert.inProgress && (
            <a
              href={cert.badgeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                color: cert.color,
                textDecoration: 'none',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-grotesk)',
                fontWeight: 500,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <ExternalLink size={12} strokeWidth={2} />
              {t('certifications.view_badge')}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function CertificationsSection() {
  const { t, lang } = useLang()

  return (
    <section
      id="certifications"
      style={{
        padding: '6rem 1.5rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <SectionHeader
        title={t('certifications.title')}
        subtitle={t('certifications.subtitle')}
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.25rem',
      }}>
        {certifications.map(cert => (
          <CertificationCard
            key={cert.id}
            cert={cert}
            t={t}
            lang={lang}
          />
        ))}
      </div>
    </section>
  )
}