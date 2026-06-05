import React from 'react'
import styles from './About.module.scss'
import { icons } from '../../utils/icons'
import { timeline, coreValues } from '../../utils/aboutContent'
import AboutHero from '../../components/about/AboutHero'
import AboutCard from '../../components/about/AboutCard'
import CareerTimeline from '../../components/about/CareerTimeline'
import AducationCard from '../../components/about/AducationCard'
import CoreValues from '../../components/about/CoreValues'

const About = () => {
  return (
    <div className={styles.about_page}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* 사이드바 */}
          <aside className={styles.sidebar}>
            <AboutHero />
            <AboutCard />
            {/* 채용 상태 카드 */}
            <div className={styles.hireStatus}>
              <div className={styles.statusBadge}>🟢 현재 채용 가능</div>
              <p>새로운 팀과의 도전을 찾고 있습니다.</p>
              <button className={styles.contactBtn}>연락하기</button>
            </div>
          </aside>

          {/* 메인 콘텐츠 */}
          <main className={styles.mainContent}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Experience</span>
              <h2 className={styles.sectionTitle}>경력 및 학력</h2>
            </div>
            
            <CareerTimeline timeline={timeline} />
            <AducationCard />
            <CoreValues coreValues={coreValues} />

            <div className={styles.statsSection}>
              <div className={styles.statItem}><h3>8+</h3><p>완성 프로젝트</p></div>
              <div className={styles.statItem}><h3>8+</h3><p>기술 스택</p></div>
              <div className={styles.statItem}><h3>1년+</h3><p>개발 경험</p></div>
              <div className={styles.statItem}><h3>∞</h3><p>학습 의지</p></div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
export default About