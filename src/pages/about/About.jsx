import React from 'react'
import styles from './About.module.scss'
import { timeline, coreValues } from '../../utils/aboutContent'
import AboutHero from '../../components/about/AboutHero'
import AboutCard from '../../components/about/AboutCard'
import CareerTimeline from '../../components/about/CareerTimeline'
import AducationCard from '../../components/about/AducationCard'
import CoreValues from '../../components/about/CoreValues'

const stats = [
  { value: '8+', label: '완성 프로젝트' },
  { value: '8+', label: '기술 스택' },
  { value: '1년+', label: '개발 경험' },
  { value: '∞', label: '학습 의지' },
]

const focusItems = ['React 중심 UI', '기획부터 배포까지', '꾸준한 회고와 개선']

const About = () => {
  return (
    <div className={styles.about_page}>
      <div className={styles.inner}>
        <section className={styles.introPanel}>
          <span className={styles.eyebrow}>About Me</span>
          <div className={styles.introContent}>
            <h2>문제를 작은 단위로 쪼개고, 빠르게 만들며 성장하는 개발자입니다.</h2>
            <p>
              사용자가 실제로 마주하는 흐름을 기준으로 화면을 설계하고, 구현 과정에서 배운 점을 다음 프로젝트에
              바로 반영하는 것을 중요하게 생각합니다.
            </p>
          </div>
          <div className={styles.focusList} aria-label="주요 관심 분야">
            {focusItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <div className={styles.grid}>
          <aside className={styles.sidebar}>
            <AboutHero />
            <div className={styles.hireStatus}>
              <div className={styles.statusBadge}>🟢 현재 협업 가능</div>
              <p>웹 서비스 제작과 개선 프로젝트를 함께할 팀을 찾고 있습니다.</p>
              <a href="mailto:hello@dev.com" className={styles.contactBtn}>연락하기</a>
            </div>
          </aside>

          <main className={styles.mainContent}>
            <AboutCard />

            <section className={styles.contentBlock}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionBadge}>Experience</span>
                <h2 className={styles.sectionTitle}>경력 및 학력</h2>
              </div>
              <div className={styles.twoColumn}>
                <CareerTimeline timeline={timeline} />
                <AducationCard />
              </div>
            </section>

            <CoreValues coreValues={coreValues} />

            <section className={styles.statsSection} aria-label="개발 활동 요약">
              {stats.map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
export default About