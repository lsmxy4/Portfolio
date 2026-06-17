import React from 'react'
import styles from './MiniProjectCard.module.scss'
import { motion as Motion } from 'framer-motion'

const MiniProjectCard = ({ index = 0, title, desc, tags = [], thumb, thumbLight = null, cta = [] }) => {
    const projectNumber = String(index + 1).padStart(2, '0')

    return (
        <Motion.article
            className={styles.card}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ delay: index * 0.07, duration: 0.5, ease: 'easeOut' }}
        >
            <div className={styles.thumb}>
                <div className={styles.thumbOverlay}>
                    <span>미니 프로잭트</span>
                    <strong>{projectNumber}</strong>
                </div>
                {thumb && <img src={thumb} alt={title} className={styles.darkImg} />}
                {thumbLight && <img src={thumbLight} alt={title} className={styles.lightImg} />}
                {!thumb && !thumbLight && (
                    <div className={styles.placeholder}>
                        <span>{projectNumber}</span>
                        <strong>{title}</strong>
                    </div>
                )}
            </div>

            <div className={styles.body}>
                <div className={styles.titleRow}>
                    <span className={styles.kicker}>Side Lab</span>
                    <span className={styles.status}>Built</span>
                </div>

                <h3 className={styles.title}>{title}</h3>
                <p className={styles.desc}>{desc}</p>

                <div className={styles.tags}>
                    {tags.map((tag, idx) => {
                        const tagContent = typeof tag === 'object'
                            ? (tag.label || tag.name || JSON.stringify(tag))
                            : tag;

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
                        const icon = btnLabel === 'GitHub' ? '🐙 ' : '🚀 ';

                        return (
                            <a
                                key={`cta-${title}-${idx}`}
                                href={btnUrl || '#'}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.ctaBtn}
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

export default MiniProjectCard