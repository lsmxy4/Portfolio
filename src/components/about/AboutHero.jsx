import React from 'react'
import styles from '../../pages/about/About.module.scss'

const AboutHero = () => {
  return (
    <div className={styles.heroWrapper}>
      {/* 프로필 이미지 영역 */}
      <div className={styles.profileCircle}>
        <div className={styles.profilePlaceholder}>👤</div>
      </div>
      
      {/* 이름 및 직함 */}
      <h1 className={styles.name}>신동환</h1>
      <p className={styles.jobTitle}>Full-Stack Developer</p>

      {/* 연락처 및 소셜 링크 */}
      <div className={styles.contactList}>
        <a href="https://github.com/junho-dev" target="_blank" rel="noreferrer" className={styles.contactItem}>
          github.com/junho-dev
        </a>
        <a href="https://linkedin.com/in/junho" target="_blank" rel="noreferrer" className={styles.contactItem}>
          linkedin.com/in/junho
        </a>
        <a href="mailto:hello@dev.com" className={styles.contactItem}>
          hello@dev.com
        </a>
        <a href="https://velog.io/@junho-dev" target="_blank" rel="noreferrer" className={styles.contactItem}>
          velog.io/@junho-dev
        </a>
      </div>
    </div>
  )
}

export default AboutHero