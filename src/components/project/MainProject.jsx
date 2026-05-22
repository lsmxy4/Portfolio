import React from 'react'
import styles from './MainProject.module.scss'
import { mainProjectList } from '../../utils/MainProjectList' 
import MainProjectCard from '../projectCard/MainProjectCard'

const MainProject = () => {
    return (
        <div className={styles.project_section} aria-labelledby='main-project-heading'>
            <div className={`inner ${styles.inner}`}>
                <header className={styles.header}>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}>☆</span> Main Project
                    </div>
                    <h1 id="main-project-heading" className="tit tit__m">
                        대형 프로잭트
                    </h1>
                    <p className={styles.desc}>팀과 함께 배포하고 운영하며 기여한 주요 프로젝트입니다.</p>
                    <div className={styles.titleLine} />
                </header>

                <div className={styles.grid}>
                    {mainProjectList && mainProjectList.map((p, idx) => (
                        <MainProjectCard key={`main-project-${p.title || idx}-${idx}`} {...p} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MainProject