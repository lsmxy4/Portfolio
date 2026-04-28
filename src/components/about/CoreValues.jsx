import React from 'react'
import styles from '../../pages/about/About.module.scss'
import { motion as Motion } from 'framer-motion'
import { contentVariants, itemVariants, visualVariants } from '../../utils/aniValue'

const CoreValues = ({ icons, coreValues }) => {
  const IconHeart = icons.heart
  return (
    <Motion.article
      className={styles.heroContent}
      values={contentVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: .3 }}
      className={styles.card} aria-labelledby='values-title'>
      <Motion.div
        variants={itemVariants}
        className={styles.cardHeader}>
        <span className={styles.cardIcon}>
          <IconHeart />
        </span>
        <div>
          <h2 id='values-title' className={styles.cardTitle}>
            Core values
          </h2>
          <p className={styles.cardSubtitle}>
            Principles I optimize for

          </p>
        </div>
      </Motion.div>
      <Motion.div
        values={contentVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: .3 }}
        className={styles.valuesGrid}>
        {coreValues.map((item) => {
          const IconComponent = item.Icon

          return (
            <Motion.div
             variants={visualVariants}
              className={styles.valueCard}
              key={item.title}>
              <div className={styles.valueIcon}>
                <IconComponent />
              </div>
              <h3 className={styles.valueTitle}>{item.title}</h3>
              <p className={styles.valueDesc}>{item.desc}</p>
            </Motion.div>
          )

        })}
      </Motion.div>
    </Motion.article>
  )
}

export default CoreValues