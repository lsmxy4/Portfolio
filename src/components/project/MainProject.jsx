import React from 'react'
import styles from './MainProject.module.scss'
import { mainProjectList } from '../../utils/MainProjectList'
import MainProjectCard from '../projectCard/MainProjectCard'
import { motion as Motion } from 'framer-motion'

const MainProject = () => {
    return (
        <Motion.section
            className={styles.project_section}
            aria-labelledby='main-project-heading'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.6 }}
        >
            <div className={styles.bgDecor} aria-hidden='true'>
                <span className={styles.glowPrimary} />
                <span className={styles.glowSecondary} />
                <span className={styles.gridPattern} />
            </div>

            <div className={`inner ${styles.inner}`}>
                <header className={styles.header}>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}>☆</span> Main Project
                    </div>
                    <h1 id="main-project-heading" className={styles.title}>
                        메인 프로젝트
                    </h1>
                    <p className={styles.desc}>꽤 오래 작업한 프로젝트입니다.</p>
                    <div className={styles.titleLine} />

                    <div className={styles.summary} aria-label='대표 프로젝트 요약'>
                        <div className={styles.summaryItem}>
                            <strong>{mainProjectList.length}</strong>
                            <span>Featured</span>
                        </div>
                        <div className={styles.summaryItem}>
                            <strong>Live</strong>
                            <span>운영 경험</span>
                        </div>
                        <div className={styles.summaryItem}>
                            <strong>Team</strong>
                            <span>협업 중심</span>
                        </div>
                    </div>
                </header>

                <div className={styles.grid}>
                    {mainProjectList && mainProjectList.map((project, idx) => (
                        <MainProjectCard
                            key={`main-project-${project.title || idx}-${idx}`}
                            index={idx}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </Motion.section>
    )
}

export default MainProject