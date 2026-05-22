import React from 'react'
import styles from './MiniProjectCard.module.scss'

const MiniProjectCard = ({ title, desc, tags = [], thumb, thumbLight = null, cta = [] }) => {
    return (
        <article className={styles.card}>
            <div className={styles.thumb}>
                {thumb && <img src={thumb} alt={title} className={styles.darkImg} />}
                {thumbLight && <img src={thumbLight} alt={title} className={styles.lightImg} />}
                {!thumb && !thumbLight && <div className={styles.placeholder} />}
            </div>

            <div className={styles.body}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.desc}>{desc}</p>

                <div className={styles.tags}>
                    {tags.map((tag, idx) => {
                        // 1. 객체 데이터에서 텍스트와 색상 변수(variant) 분리 추출
                        const tagContent = typeof tag === 'object'
                            ? (tag.label || tag.name || JSON.stringify(tag))
                            : tag;

                        const variant = typeof tag === 'object' ? tag.variant : 'neutral';

                        return (
                            <span
                                key={`tag-${title}-${idx}`}
                                // 2. 기존 tagChip 스타일에 동적 테마 색상 클래스를 조합해서 적용
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
        </article>
    )
}

export default MiniProjectCard