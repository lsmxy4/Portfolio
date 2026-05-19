import React from 'react'
import styles from './MainProjectCard.module.scss'

const MainProjectCard = ({ title, desc, tags = [], thumb, cta = [], details = {} }) => {
    return (
        <article className={styles.card}>
            <div className={styles.thumb}>
                {thumb ? <img src={thumb} alt={title} /> : <div className={styles.placeholder} />}
            </div>

            <div className={styles.body}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.desc}>{desc}</p>

                {/* 대형 스펙 보드 데이터가 있을 경우 렌더링 */}
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
                            <div className={styles.detailItem}>
                                <span className={styles.label}>↗ 주요 성과</span>
                                <span className={styles.value} style={{ color: '#10b981' }}>{details.result}</span>
                            </div>
                        )}
                    </div>
                )}

                {/* 1. tags 객체/문자열 유연화 및 고유 key 조합 적용 */}
                <div className={styles.tags}>
                    {tags.map((tag, idx) => {
                        const tagContent = typeof tag === 'object' ? (tag.label || tag.name || JSON.stringify(tag)) : tag;
                        return (
                            <span key={`main-tag-${title}-${idx}`} className={styles.tagChip}>
                                {tagContent}
                            </span>
                        );
                    })}
                </div>

                {/* 2. cta 버튼 객체 디스트럭처링 및 렌더링 누수 방지 */}
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
        </article>
    )
}

export default MainProjectCard