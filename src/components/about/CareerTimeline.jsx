import React from 'react'
import styles from '../../pages/about/About.module.scss'

const CareerTimeline = ({ timeline }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>경력</h3>
      <ul className={styles.timeline}>
        {timeline.map((item, index) => (
          <li key={index} className={styles.timelineItem}>
            <span className={styles.rangePill}>{item.range}</span>
            <h4 className={styles.jobTitle}>{item.title}</h4>
            <p className={styles.company}>{item.company}</p>
            <ul className={styles.bullets}>
              {item.bullets.map((bullet, bIndex) => (
                <li key={bIndex}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CareerTimeline