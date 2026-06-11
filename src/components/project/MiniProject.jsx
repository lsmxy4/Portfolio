import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MiniProject.module.scss'
import { miniProjectList } from '../../utils/MiniProjectList'
import MiniProjectCard from '../projectCard/MiniProjectCard'

const MiniProject = () => {

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
                    {miniProjectList && miniProjectList.map((p, idx) => (
                        <MiniProjectCard
                            key={`${p.title || idx}-${idx}`}
                            {...p}
                        />
                    ))}
                </div>
                <div className={styles.viewMoreWrapper}>
                    <Link to="/projects" className={styles.viewMoreBtn}>
                        모든 프로젝트 보기 ➔
                    </Link>
                </div>  
            </div>
        </div>
    )
}

export default MiniProject