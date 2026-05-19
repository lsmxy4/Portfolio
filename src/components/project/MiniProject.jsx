import React from 'react'
import styles from './MiniProject.module.scss'
import { projectList } from '../../utils/projectList'
import MiniProjectCard from '../ProjectCard/MiniProjectCard'

const MiniProject = () => {
    // 미니 프로젝트만 필터링
    const miniProjects = projectList.filter(p => p.type === 'mini' || !p.isMain);

    return (
        <div className={styles.project_section} aria-labelledby='mini-project-heading'>
            <div className={`inner ${styles.inner}`}>
                <header className={styles.header}>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}>✦</span> Projects
                    </div>
                    <h1 id="mini-project-heading" className="tit tit__m">
                        Mini Projects
                    </h1>
                    <p className={styles.desc}>아이디어를 유연하게 실험하고 구현해 본 토이 프로젝트입니다.</p>
                    <div className={styles.titleLine} />
                </header>

                <div className={styles.grid}>
                    {miniProjects.map((p, idx) => (
                        <MiniProjectCard
                            key={`${p.title}-${idx}`}
                            {...p}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MiniProject