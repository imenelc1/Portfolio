/* ============================================================
   SECTION — Contact
   ============================================================ */

import { useState } from 'react'
import { useLang } from '../../context/AppContext'
import SectionHeader from '../ui/SectionHeader'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
export default function ContactSection() {
  const { t } = useLang()

  // État local du formulaire
  const [formData, setFormData] = useState({
    email:   '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success'

  // Handler générique pour tous les champs
  // evt.target.name correspond à l'attribut name de l'input
  const handleChange = (evt) => {
    setFormData(prev => ({
      ...prev,                    // on garde les autres champs
      [evt.target.name]: evt.target.value,  // on met à jour le champ modifié
    }))
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setStatus('sending')
    
    // Simulation d'envoi 
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setStatus('success')
    setFormData({ email: '', message: '' })
    
    // Réinitialiser après 3 secondes
    setTimeout(() => setStatus('idle'), 3000)
  }

  const inputStyle = {
    width: '100%',
    background: 'var(--bg-surface)',
    border: '1px solid var(--border-color)',
    borderRadius: '10px',
    padding: '0.75rem 1rem',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-inter)',
    fontSize: '0.9375rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  }

  const socialLinks = [
    { 
      name: 'Email', 
      url: 'mailto:lakhdarchaouchimene@gmail.com', 
      icon: <FaEnvelope size={20} /> 
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/imenelc1', 
      icon: <FaGithub size={20} /> 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/imene-lakhdar-chaouch-234751385?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      icon: <FaLinkedin size={20} /> 
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

      
        {/* Liens sociaux */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
         
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
          }}>
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontFamily: 'var(--font-grotesk)',
                  fontWeight: 500,
                  padding: '0.5rem 1rem',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  background: 'var(--glass-bg)',
                  transition: 'all 0.2s',
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
                <span>{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}