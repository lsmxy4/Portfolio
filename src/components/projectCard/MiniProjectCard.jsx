import React from 'react'
import styles from './MiniProjectCard.module.scss'

const MiniProjectCard = ({ title, desc, tags = [], thumb, cta = [] }) => {
    return (
        <article className={styles.card}>
            <div className={styles.thumb}>
                {thumb ? <img src={thumb} alt={title} /> : <div className={styles.placeholder} />}
            </div>

            <div className={styles.body}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.desc}>{desc}</p>

                <div className={styles.tags}>
                    {tags.map((tag, idx) => {
                        const tagContent = typeof tag === 'object'
                            ? (tag.label || tag.name || JSON.stringify(tag))
                            : tag;

                        return (
                            <span
                                key={`tag-${title}-${idx}`}
                                className={styles.tagChip}
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
        </article>
    )
}

export default MiniProjectCard