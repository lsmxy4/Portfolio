import React from 'react'
import styles from '../../pages/about/About.module.scss'

const AboutCard = () => {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardIcon}>👤</div>
        <div>
          <h2 className={styles.cardTitle}>자기소개</h2>
          <p className={styles.cardSubtitle}>저는...</p>
        </div>
      </div>
      
      <div className={styles.cardBodyContent}>
        <p className={styles.body}>
          I started as a curious builder who liked shipping small tools that solved real problems. 
          Over time that turned into a career shipping production web apps.
        </p>
        <p className={styles.body}>
          My default mindset is pragmatic: choose boring technology where it helps, 
          and keep interfaces fast, accessible, and easy to reason about.
        </p>
      </div>
    </article>
  )
}

export default AboutCard