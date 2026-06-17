import React from 'react'
import styles from './SkillsPages.module.scss'
import { icons } from '../../utils/icons'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import { certifications, skillCategories } from '../../utils/skillsPageData'

const CATEGORY_ICONS = {
    monitor: icons.monitor,
    moniter: icons.monitor,
    server: icons.server,
    flask: icons.flask,
    cloud: icons.cloud,
    sparkle: icons.sparkle,
}

const pageStats = [
    { value: `${skillCategories.length}`, label: '기술 영역' },
    { value: `${skillCategories.reduce((total, category) => total + category.skills.length, 0)}`, label: '핵심 역량' },
    { value: `${certifications.length}`, label: '인증/학습 기록' },
]

const workflow = ['Plan', 'Build', 'Test', 'Deploy']

const SkillsPages = () => {
    const shouldReduceMotion = useReducedMotion()
    const SparkleIcon = icons.sparkle

    const revealMotion = shouldReduceMotion ? {} : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.24 },
        transition: { duration: 0.52, ease: 'easeOut' },
    }

    return (
        <Motion.main
            className={styles.skills_section}
            initial={shouldReduceMotion ? undefined : { opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.bgDecor} aria-hidden='true'>
                <span className={styles.glowOne} />
                <span className={styles.glowTwo} />
                <span className={styles.gridPattern} />
            </div>

            <div className={`inner ${styles.inner}`}>
                <header className={styles.hero}>
                    <span className={styles.badge}>
                        <SparkleIcon />
                        Tech Stack
                    </span>
                    <h1 className={styles.title}>기술을 선택하고, 완성도 있게 연결합니다.</h1>
                    <p className={styles.desc}>
                        프론트엔드 경험부터 백엔드 API, 테스트, 배포 자동화까지 제품을 끝까지 완성하기 위한 기술 흐름을 정리했습니다.
                    </p>

                    <div className={styles.statPanel} aria-label='스킬 페이지 요약'>
                        {pageStats.map((stat) => (
                            <div key={stat.label} className={styles.statItem}>
                                <strong>{stat.value}</strong>
                                <span>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </header>

                <section className={styles.workflow} aria-label='개발 워크플로우'>
                    {workflow.map((step, index) => (
                        <div key={step} className={styles.workflowItem}>
                            <span>{String(index + 1).padStart(2, '0')}</span>
                            <strong>{step}</strong>
                        </div>
                    ))}
                </section>

                <section className={styles.stackSection} aria-labelledby='stack-heading'>
                    <div className={styles.sectionHeader}>
                        <span className={styles.eyebrow}>Stack Map</span>
                        <h2 id='stack-heading'>주요 기술 영역</h2>
                        <p>각 영역에서 자주 사용하는 기술과 숙련도를 한눈에 확인할 수 있게 구성했습니다.</p>
                    </div>

                    <div className={styles.grid}>
                        {skillCategories.map((category, index) => {
                            const IconCmp = CATEGORY_ICONS[category.iconKey] ?? icons.monitor

                            return (
                                <Motion.article
                                    key={category.key}
                                    className={styles.skillCard}
                                    style={{ '--skill-color': category.iconColor }}
                                    {...revealMotion}
                                    transition={shouldReduceMotion ? undefined : {
                                        ...revealMotion.transition,
                                        delay: index * 0.07,
                                    }}
                                >
                                    <div className={styles.cardTop}>
                                        <div className={styles.iconBox}>
                                            <IconCmp />
                                        </div>
                                        <span className={styles.cardIndex}>{String(index + 1).padStart(2, '0')}</span>
                                    </div>

                                    <h3>{category.title}</h3>
                                    <p>{category.subtitle}</p>

                                    <div className={styles.skillList}>
                                        {category.skills.map((skill) => (
                                            <div key={skill.name} className={styles.skillRow}>
                                                <div className={styles.skillMeta}>
                                                    <span>{skill.name}</span>
                                                    {skill.showPercent !== false && <strong>{skill.percent}%</strong>}
                                                </div>
                                                <div className={styles.progressTrack} aria-hidden='true'>
                                                    <span style={{ width: `${skill.percent}%` }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className={styles.tags}>
                                        {category.tags.map((tag) => (
                                            <span key={`${category.key}-${tag}`}>{tag}</span>
                                        ))}
                                    </div>
                                </Motion.article>
                            )
                        })}
                    </div>
                </section>
            </div>
        </Motion.main>
    )
}

export default SkillsPages