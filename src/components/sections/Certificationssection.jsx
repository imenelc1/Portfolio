import { useState, useRef } from 'react'
import { useLang } from '../../context/AppContext'
import { certifications } from '../../data/Certifications'
import SectionHeader from '../ui/SectionHeader'
import DynamicIcon from '../ui/DynamicIcon'
import { BadgeCheck, Clock, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

function CertCard({ cert, t, lang }) {
  return (
    <div
      className="glass"
      style={{
        borderRadius: '14px',
        overflow: 'hidden',
        flexShrink: 0,
        width: '260px',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        opacity: cert.inProgress ? 0.72 : 1,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.borderColor = cert.color + '55'
        e.currentTarget.style.opacity = '1'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'var(--glass-border)'
        e.currentTarget.style.opacity = cert.inProgress ? '0.72' : '1'
      }}
    >
      <div style={{ height: '2px', background: `linear-gradient(90deg, ${cert.color}, ${cert.color}00)` }} />

      <div style={{ padding: '1.125rem', display: 'flex', flexDirection: 'column', gap: '0.875rem', flex: 1 }}>
        <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'center' }}>
          <div style={{ minWidth: 0 }}>
            <p style={{
              fontFamily: 'var(--font-grotesk)', fontWeight: 600,
              fontSize: '0.9375rem', color: 'var(--text-primary)',
              lineHeight: 1.3, marginBottom: '0.2rem',
            }}>
              {cert.title}
            </p>
            <p style={{
              fontSize: '0.8125rem', color: 'var(--text-secondary)',
              fontFamily: 'var(--font-grotesk)',
              display: 'flex', alignItems: 'center', gap: '0.3rem',
            }}>
              <DynamicIcon name={cert.issuerIcon} size={12} strokeWidth={2} />
              {cert.issuer}
            </p>
          </div>
        </div>

        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)',
          marginTop: 'auto', gap: '0.5rem', flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-grotesk)' }}>
            {cert.date[lang]}
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {cert.inProgress ? (
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                background: 'rgba(245,158,11,0.1)', color: '#F59E0B',
                border: '1px solid rgba(245,158,11,0.2)',
                padding: '0.2rem 0.5rem', borderRadius: '100px',
                fontSize: '0.7rem', fontFamily: 'var(--font-grotesk)', fontWeight: 500,
              }}>
                <Clock size={10} strokeWidth={2} />
                {t('certifications.in_progress')}
              </span>
            ) : (
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                background: 'rgba(34,197,94,0.1)', color: '#22C55E',
                border: '1px solid rgba(34,197,94,0.2)',
                padding: '0.2rem 0.5rem', borderRadius: '100px',
                fontSize: '0.7rem', fontFamily: 'var(--font-grotesk)', fontWeight: 500,
              }}>
                <BadgeCheck size={10} strokeWidth={2} />
                {t('certifications.verified')}
              </span>
            )}
            {cert.badgeUrl && !cert.inProgress && (
              <a href={cert.badgeUrl} target="_blank" rel="noopener noreferrer"
                style={{ color: cert.color, display: 'flex', transition: 'opacity 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <ExternalLink size={13} strokeWidth={2} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function HorizontalCarousel({ items, t, lang }) {
  const scrollRef = useRef(null)
  const scroll = (dir) => scrollRef.current?.scrollBy({ left: dir * 290, behavior: 'smooth' })

  const btnStyle = {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: 2,
    background: 'var(--bg-surface)', border: '1px solid var(--border-color)',
    borderRadius: '50%', width: '34px', height: '34px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', color: 'var(--text-secondary)', transition: 'all 0.2s',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  }

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={() => scroll(-1)} style={{ ...btnStyle, left: '-1.125rem' }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
      >
        <ChevronLeft size={15} strokeWidth={2} />
      </button>

      {/* Utilise la classe CSS carousel-scroll définie dans index.css */}
      <div ref={scrollRef} className="carousel-scroll"
        style={{ display: 'flex', gap: '1rem', paddingBottom: '0.5rem' }}
      >
        {items.map(cert => <CertCard key={cert.id} cert={cert} t={t} lang={lang} />)}

        {items.length < 3 && (
          <div style={{
            flexShrink: 0, width: '260px', borderRadius: '14px',
            border: '1px dashed var(--border-color)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '0.5rem', padding: '2rem',
            color: 'var(--text-muted)', fontFamily: 'var(--font-grotesk)', fontSize: '0.875rem',
          }}>
            <Clock size={24} strokeWidth={1} />
            {t('certifications.coming_soon')}
          </div>
        )}
      </div>

      <button onClick={() => scroll(1)} style={{ ...btnStyle, right: '-1.125rem' }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
      >
        <ChevronRight size={15} strokeWidth={2} />
      </button>
    </div>
  )
}

export default function CertificationsSection() {
  const { t, lang } = useLang()
  const [activeTab, setActiveTab] = useState('certifications')

const certList   = certifications.filter(c => c.type === 'certification')
const badgeList  = certifications.filter(c => c.type === 'badge')
const trophyList = certifications.filter(c => c.type === 'trophy')
  
  const displayCerts  = certList.length  > 0 ? certList  : certifications
  const displayBadges = badgeList.length > 0 ? badgeList : certifications

  const tabs = [
    { id: 'certifications', label: t('certifications.tab_certs') },
    { id: 'badges',         label: t('certifications.tab_badges') },
    { id: 'trophies',       label: t('certifications.tab_trophies') || 'Trophées' },
  ]

  return (
    <section id="certifications" style={{
      padding: '6rem 1.5rem',
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader title={t('certifications.title')} subtitle={t('certifications.subtitle')} />

        <div style={{
          display: 'inline-flex',
          background: 'var(--bg-surface-2)',
          border: '1px solid var(--border-color)',
          borderRadius: '10px', padding: '3px',
          marginBottom: '2.5rem', gap: '2px',
        }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              padding: '0.5rem 1.5rem', borderRadius: '8px', border: 'none',
              cursor: 'pointer', fontFamily: 'var(--font-grotesk)', fontWeight: 500,
              fontSize: '0.875rem', transition: 'all 0.2s ease',
              background: activeTab === tab.id ? 'var(--accent)' : 'transparent',
              color: activeTab === tab.id ? '#fff' : 'var(--text-muted)',
            }}>
              {tab.label}
            </button>
          ))}
        </div>

       <div style={{ paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>
  {activeTab === 'certifications' && <HorizontalCarousel items={certList} t={t} lang={lang} />}
  {activeTab === 'badges'         && <HorizontalCarousel items={badgeList} t={t} lang={lang} />}
  {activeTab === 'trophies'       && <HorizontalCarousel items={trophyList} t={t} lang={lang} />}
</div>
      </div>
    </section>
  )
}