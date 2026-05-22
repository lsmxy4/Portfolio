import React from 'react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import AboutCard from '../../components/about/AboutCard'
import AboutHero from '../../components/about/AboutHero'
import AducationCard from '../../components/about/AducationCard'
import CareerTimeline from '../../components/about/CareerTimeline'
import CoreValues from '../../components/about/CoreValues'
import styles from './About.module.scss'
import { icons } from '../../utils/icons'
import { timeline, coreValues } from '../../utils/aboutContent'
const About = () => {

  const shouldReduceMotion = useReducedMotion()

  return (
    <div className={styles.about_page}>
      <div className={`inner ${styles.inner}`}>

        <AboutHero icons={icons}  />
        <div className={styles.grid}>
          <div className={styles.column}>
            <AboutCard icons={icons}  />
            <CoreValues icons={icons} coreValues={coreValues}  />
          </div>
          <aside className={styles.column}>
            <CareerTimeline icons={icons} timeline={timeline}  />
            <AducationCard icons={icons}  />

          </aside>
        </div>
      </div>
    </div>
  )
}

export default About