import React from 'react'
import styles from '../../pages/about/About.module.scss'

const CoreValues = ({ coreValues }) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardIcon}>💡</div>
        <div>
          <h2 className={styles.cardTitle}>성장 방식</h2>
          <p className={styles.cardSubtitle}>프로젝트를 진행할 때 지키려는 기준</p>
        </div>
      </div>

      <div className={styles.valuesGrid}>
        {coreValues.map((item, index) => {
          const Icon = item.Icon
          return (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueIcon}>{Icon ? <Icon /> : '✨'}</div>
              <h3 className={styles.valueTitle}>{item.title}</h3>
              <p className={styles.valueDesc}>{item.desc}</p>
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default CoreValues
