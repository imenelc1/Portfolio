/* ============================================================
   SECTION — Contact

   ============================================================ */

import { useLang } from '../../context/AppContext'
import SectionHeader from '../ui/SectionHeader'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function ContactSection() {
  const { t } = useLang()

  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:lakhdarchaouchimene@gmail.com',
      icon: <FaEnvelope size={18} />,
      label: 'lakhdarchaouchimene@gmail.com',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/imenelc1',
      icon: <FaGithub size={18} />,
      label: 'imenelc1',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/imene-lakhdar-chaouch-234751385',
      icon: <FaLinkedin size={18} />,
      label: 'Imene Lakhdar Chaouch',
    },
  ]

  return (
    <section
      id="contact"
      style={{
        padding: '6rem 1.5rem',
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <SectionHeader
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          align="center"
        />

        {/* Liens sociaux en colonne — plus lisible avec les labels */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.875rem',
          marginTop: '2.5rem',
        }}>
          {socialLinks.map(link => (
            <a
              key={link.name}
              href={link.url}
              target={link.name !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontFamily: 'var(--font-grotesk)',
                padding: '1rem 1.25rem',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                background: 'var(--glass-bg)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.color = 'var(--accent)'
                e.currentTarget.style.transform = 'translateX(4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-color)'
                e.currentTarget.style.color = 'var(--text-secondary)'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              {/* Icône */}
              <span style={{ flexShrink: 0 }}>{link.icon}</span>

              {/* Texte */}
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '0.1rem' }}>
                  {link.name}
                </p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  {link.label}
                </p>
              </div>

              {/* Flèche à droite */}
              <span style={{ marginLeft: 'auto', fontSize: '1rem', opacity: 0.4 }}>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}