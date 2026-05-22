import React from 'react';
import styles from './Tools.module.scss';
import CategoryCard from '../categoryCard/CategoryCard';
import { categories } from '../../utils/categories';
import { motion as Motion } from 'framer-motion';

const Tools = () => {
    // 카테고리 그룹화 로직
    const groupedData = categories.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});

    const collaborationTools = [
        { title: "Git / GitHub", desc: "브랜치 전략 · PR 리뷰 문화", color: "#FF8C00" },
        { title: "Figma", desc: "디자이너 협업 · 디자인 토큰", color: "#FF4500" },
        { title: "Slack / Notion", desc: "팀 협업 · 기술 문서화", color: "#800080" },
        { title: "Jest / Playwright", desc: "유닛 · 통합 · E2E 테스트", color: "#FFD700" },
        { title: "Vite / Webpack", desc: "번들 최적화 · 코드 스플릿팅", color: "#646CFF" },
        { title: "Storybook", desc: "컴포넌트 문서화 · UI 카탈로그", color: "#FF4785" },
        { title: "Vercel / Netlify", desc: "원클릭 배포 · Preview 환경", color: "#ffffff" },
        { title: "Turborepo / Nx", desc: "모노레포 구조 설계 경험", color: "#00CED1" },
    ];

    return (
        <section className={styles.tools}>
            <div className={`inner ${styles.inner}`}>
                
                {/* 1. 상단 헤더 섹션 (image_df9a9b.png 참고) */}
                <header className={styles.header}>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}>✦</span> Skills
                    </div>
                    <h2 className={styles.mainTitle}>기술 스택</h2>
                    <p className={styles.desc}>
                        각 기술별 숙련도와 실제 활용 경험을 함께 정리했습니다.
                    </p>
                    <div className={styles.titleLine} />
                </header>

                {/* 2. 메인 기술 스택 그리드 */}
                <div className={styles.stackGrid}>
                    {Object.keys(groupedData).map((categoryName) => (
                        <div key={categoryName} className={styles.categoryGroup}>
                            <div className={styles.categoryHeader}>
                                <span className={styles.dot} />
                                <h3 className={styles.groupName}>{categoryName}</h3>
                                <div className={styles.line} />
                            </div>
                            <div className={styles.grid}>
                                {groupedData[categoryName].map((item, idx) => (
                                    <CategoryCard key={idx} {...item} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 3. Tools & Collaboration 박스 */}
                <div className={styles.collaborationBox}>
                    <div className={styles.boxHeader}>
                        <div className={styles.boxTitle}>
                            <span className={styles.boxIcon}>🔧</span>
                            Tools & Collaboration
                        </div>
                        <span className={styles.boxSubLabel}>일상적으로 사용하는 도구 모음</span>
                    </div>
                    <div className={styles.toolList}>
                        {collaborationTools.map((tool, idx) => (
                            <div key={idx} className={styles.toolChip}>
                                <span className={styles.chipDot} style={{ backgroundColor: tool.color }} />
                                <div className={styles.chipInfo}>
                                    <span className={styles.chipTitle}>{tool.title}</span>
                                    <span className={styles.chipDesc}>{tool.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. 하단 통계 푸터 바 */}
                <div className={styles.footerBar}>
                    <div className={styles.statItem}>
                        <span className={styles.statNum}>8</span>
                        <span className={styles.statLabel}>기술 스택</span>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.statItem}>
                        <span className={styles.statNum}>8</span>
                        <span className={styles.statLabel}>협업 도구</span>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.footerCategory}>
                        <div className={styles.tagRow}>
                            <span className={styles.tag1} style={{ color: '#A78BFA'}}>Frontend</span>
                            <span className={styles.tag2} style={{ color: '#60A5FA'}}>Backend</span>
                            <span className={styles.tag3} style={{ color: '#FBBF24'}}>Infra</span>
                        </div>
                        <p className={styles.tagDesc}>기술 카테고리</p>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.mainIcons}>
                        <div className={styles.iconRow}>
                            <div className={styles.iconCircle}>Re</div>
                            <div className={styles.iconCircle} style={{borderColor: '#F7DF1E', color: '#F7DF1E'}}>Js</div>
                            <div className={styles.iconCircle} style={{borderColor: '#6DB33F', color: '#6DB33F'}}>Sb</div>
                            <div className={styles.iconCircle} style={{borderColor: '#2496ED', color: '#2496ED'}}>Do</div>
                            <span className={styles.plusMore}>+4</span>
                        </div>
                        <p className={styles.tagDesc}>대표 기술</p>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.learning}>
                        <div className={styles.learnText}>
                            <span className={styles.greenDot} />
                            계속 학습 중
                        </div>
                        <p className={styles.tagDesc}>새로운 기술 탐구</p>
                    </div>
                    <button className={styles.contactBtn}>
                        <span className={styles.mailIcon}>✉</span> 함께 일해요
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Tools;