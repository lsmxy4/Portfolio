import React from 'react'
import styles from '../../pages/about/About.module.scss'

const CoreValues = ({ coreValues }) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardIcon}>💡</div>
        <div>
          <h2 className={styles.cardTitle}>Core Values</h2>
          <p className={styles.cardSubtitle}>Principles I optimize for</p>
        </div>
      </div>

      <div className={styles.valuesGrid}>
        {coreValues.map((item, index) => (
          <div key={index} className={styles.valueCard}>
            <div className={styles.valueIcon}>{item.icon || '✨'}</div>
            <h3 className={styles.valueTitle}>{item.title}</h3>
            <p className={styles.valueDesc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </article>
  )
}

export default CoreValues