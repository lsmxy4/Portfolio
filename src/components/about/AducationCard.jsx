import React from 'react'
import styles from '../../pages/about/About.module.scss'

const AducationCard = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>학력 및 교육</h3>
      
      {/* 대학교 교육 */}
      <div className={styles.eduItem}>
        <div className={styles.eduHeader}>
          <h4 className={styles.eduSchool}>대학교 재학</h4>
          <span className={styles.eduBadge}>2024.03 - 현재</span>
        </div>
        <p className={styles.eduDegree}>컴퓨터공학 관련 전공</p>
        <p className={styles.eduDesc}>• 알고리즘 · 자료구조 · 운영체제 학습 중</p>
      </div>

      {/* 독학/온라인 강의 */}
      <div className={styles.eduItem}>
        <div className={styles.eduHeader}>
          <h4 className={styles.eduSchool}>독학 / 온라인 강의</h4>
          <span className={styles.eduBadge}>2023 - 2024</span>
        </div>
        <p className={styles.eduDegree}>웹 개발 전반</p>
        <p className={styles.eduDesc}>• 여러가지 영상을 보고 독학</p>
        <p className={styles.eduDesc}>• 도서관에서 책을 빌려 읽어보고 실제로 해본다</p>
      </div>
    </div>
  )
}

export default AducationCard