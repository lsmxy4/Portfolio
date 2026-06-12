import React from 'react'
import styles from './MainProjectCard.module.scss'
import { motion as Motion } from 'framer-motion'

const MainProjectCard = ({ index = 0, title, desc, tags = [], thumb, cta = [], details = {} }) => {
    const projectNumber = String(index + 1).padStart(2, '0')
    return (
        <Motion.article
            className={styles.card}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ delay: index * 0.08, duration: 0.58, ease: 'easeOut' }}
        >
            <div className={styles.thumb}>
                {thumb ? (
                    <img src={thumb} alt={title} />
                ) : (
                    <div className={styles.placeholder}>
                        <span className={styles.projectNo}>Project {projectNumber}</span>
                        <strong>{title}</strong>
                        <small>Featured Work</small>
                    </div>
                )}
            </div>

            <div className={styles.body}>
                <div className={styles.kicker}>
                    <span>Main Project</span>
                    <span>{projectNumber}</span>
                </div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.desc}>{desc}</p>

                {Object.keys(details).length > 0 && (
                    <div className={styles.detailsBoard}>
                        {details.role && (
                            <div className={styles.detailItem}>
                                <span className={styles.label}>👥 담당 역할</span>
                                <span className={styles.value}>{details.role}</span>
                            </div>
                        )}
                        {details.period && (
                            <div className={styles.detailItem}>
                                <span className={styles.label}>📅 개발 기간</span>
                                <span className={styles.value}>{details.period}</span>
                            </div>
                        )}
                        {details.result && (
                            <div className={`${styles.detailItem} ${styles.resultItem}`}>
                                <span className={styles.label}>↗ 주요 성과</span>
                                <span className={styles.value}>{details.result}</span>
                            </div>
                        )}
                    </div>
                )}

                <div className={styles.tags}>
                    {tags.map((tag, idx) => {
                        const tagContent = typeof tag === 'object' ? (tag.label || tag.name) : tag;
                        const variant = typeof tag === 'object' ? tag.variant : 'neutral';

                        return (
                            <span
                                key={`tag-${title}-${idx}`}
                                className={`${styles.tagChip} ${styles[variant] || ''}`}
                            >
                                {tagContent}
                            </span>
                        );
                    })}
                </div>

                <div className={styles.cta}>
                    {cta.map((btn, idx) => {
                        if (!btn) return null;

                        const btnLabel = typeof btn === 'object' ? btn.label : btn;
                        const btnUrl = typeof btn === 'object' ? btn.url : '#';
                        const icon = btnLabel === '라이브 데모' ? '🚀 ' : btnLabel === 'GitHub' ? '🐙 ' : '📄 ';

                        return (
                            <a
                                key={`main-cta-${title}-${idx}`}
                                href={btnUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={`${styles.ctaBtn} ${idx === 0 ? styles.primaryBtn : ''}`}
                            >
                                {icon}{btnLabel}
                            </a>
                        );
                    })}
                </div>
            </div>
        </Motion.article>
    )
}

export default MainProjectCard