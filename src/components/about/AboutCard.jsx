import React from 'react'
import styles from '../../pages/about/About.module.scss'

const highlights = ['실사용 흐름 중심 설계', '작게 만들고 빠르게 검증', '읽기 쉬운 코드와 UI 개선']

const AboutCard = () => {
  return (
    <article className={`${styles.card} ${styles.aboutStory}`}>
      <div className={styles.cardHeader}>
        <div className={styles.cardIcon}>👤</div>
        <div>
          <h2 className={styles.cardTitle}>자기소개</h2>
          <p className={styles.cardSubtitle}>만드는 이유와 일하는 방식</p>
        </div>
      </div>

      <div className={styles.cardBodyContent}>
        <p className={styles.body}>
          안녕하세요. 프론트엔드와 백엔드를 함께 경험하며, 아이디어를 실제 화면과 서비스로 연결하는 것을 좋아하는
          개발자 신동환입니다.
        </p>
        <p className={styles.body}>
          프로젝트를 진행할 때는 먼저 사용자의 행동 흐름을 정리하고, 핵심 기능을 작은 단위로 구현한 뒤 배포와 피드백을
          통해 완성도를 높여갑니다.
        </p>
      </div>

      <div className={styles.highlightList}>
        {highlights.map((highlight) => (
          <span key={highlight}>{highlight}</span>
        ))}
      </div>
    </article>
  )
}

export default AboutCard