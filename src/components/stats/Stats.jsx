import React from 'react'
import styles from './Stats.module.scss'

const Stats = () => {
    return (
        <div className={styles.statsContainer}>
            {/* 왼쪽 아이템 */}
            <div className={styles.statItem}>
                <strong className={styles.value}>8</strong>
                <span className={styles.label}>완성 프로젝트</span>
            </div>

            {/* 중앙 구분선 */}
            <div className={styles.divider}></div>

            {/* 오른쪽 아이템 */}
            <div className={styles.statItem}>
                <strong className={styles.value}>8</strong>
                <span className={styles.label}>기술 스택</span>
            </div>
        </div>
    )
}

export default Stats