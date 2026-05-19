import React from 'react'
import styles from './MainProject.module.scss'
import { projectList } from '../../utils/projectList'
import MainProjectCard from '../ProjectCard/MainProjectCard'

const MainProject = () => {
    const mainProjects = projectList.filter(p => p.type === 'main' || p.isMain);

    return (
        <div className={styles.project_section} aria-labelledby='main-project-heading'>
            <div className={`inner ${styles.inner}`}>
                <header className={styles.header}>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}>☆</span> Main Project
                    </div>
                    <h1 id="main-project-heading" className="tit tit__m">
                        Projects I&apos;m proud of
                    </h1>
                    <p className={styles.desc}>팀과 함께 배포하고 운영하며 기여한 주요 프로젝트입니다.</p>
                    <div className={styles.titleLine} />
                </header>

                <div className={styles.grid}>
                    {mainProjects.map((p, idx) => (
                        // index를 조합하여 동적으로 변하는 데이터 구조에서도 중복 key 에러를 원천 차단합니다.
                        <MainProjectCard key={`main-project-${p.title || idx}-${idx}`} {...p} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MainProject