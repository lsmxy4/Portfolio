import React from 'react'
import { icons } from '../../utils/icons'
import { contactData } from '../../utils/contactPage'
import styles from './ContantCta.module.scss'

const ContactCta = () => {
  const IconMail = icons.mail
  const IconGithub = icons.github
  const IconLinkedIn = icons.linkedIn

  const ctaLinks = [
    {
      label: 'Email',
      value: contactData.email,
      href: `mailto:${contactData.email}`,
      Icon: IconMail,
      primary: true,
    },
    {
      label: 'LinkedIn',
      value: contactData.linkedinLabel,
      href: contactData.linkedin,
      Icon: IconLinkedIn,
    },
    {
      label: 'GitHub',
      value: contactData.githubLabel,
      href: contactData.github,
      Icon: IconGithub,
    },
  ]

  return (
    <section className={styles.cta_section} aria-labelledby='cta-heading'>
      <div className={`inner ${styles.inner}`}>
        <div className={styles.copyArea}>
          <span className={styles.badge}>Next Step</span>
          <h2 id='cta-heading' className={styles.title}>아이디어를 실제 서비스로 함께 만들어볼까요?</h2>
          <p className={styles.desc}>
            작은 개선 요청부터 새로운 웹 프로젝트까지 편하게 이야기해주세요. 필요한 범위와 일정에 맞춰 현실적인
            실행 방법을 함께 정리해드릴게요.
          </p>
        </div>

        <div className={styles.ctaGrid} aria-label='연락 채널'>
          {ctaLinks.map(({ label, value, href, Icon, primary }) => {
            const LinkIcon = Icon
            return (
              <a
                key={label}
                className={`${styles.ctaCard} ${primary ? styles.primaryCard : ''}`}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className={styles.iconWrap}><LinkIcon /></span>
                <span className={styles.linkText}>
                  <strong>{label}</strong>
                  <small>{value}</small>
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactCta