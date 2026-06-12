import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MiniProject.module.scss'
import { miniProjectList } from '../../utils/MiniProjectList'
import MiniProjectCard from '../projectCard/MiniProjectCard'
import { motion as Motion } from 'framer-motion'

const MiniProject = () => {
    return (
        <Motion.section
            className={styles.project_section}
            aria-labelledby='mini-project-heading'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.14 }}
            transition={{ duration: 0.55 }}
        >
            <div className={styles.bgDecor} aria-hidden='true'>
                <span className={styles.glowOne} />
                <span className={styles.glowTwo} />
                <span className={styles.dotPattern} />
            </div>

            <div className={`inner ${styles.inner}`}>
                <header className={styles.header}>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}>✦</span> Side Lab
                    </div>
                    <h1 id="mini-project-heading" className={styles.title}>
                        Mini Projects
                    </h1>
                    <p className={styles.desc}>아이디어를 빠르게 실험하고 완성도 있게 구현해 본 토이 프로젝트입니다.</p>
                    <div className={styles.titleLine} />

                    <div className={styles.metaRow} aria-label='미니 프로젝트 요약'>
                        <span>{miniProjectList.length} Projects</span>
                        <span>React Practice</span>
                        <span>UI Experiments</span>
                    </div>
                </header>

                <div className={styles.grid}>
                    {miniProjectList && miniProjectList.map((project, idx) => (
                        <MiniProjectCard
                            key={`${project.title || idx}-${idx}`}
                            index={idx}
                            {...project}
                        />
                    ))}
                </div>
                <div className={styles.viewMoreWrapper}>
                    <Link to="/projects" className={styles.viewMoreBtn}>
                        모든 프로젝트 보기 <span>➔</span>
                    </Link>
                </div>
            </div>
        </Motion.section>
    )
}

export default MiniProject