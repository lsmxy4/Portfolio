import React from 'react';
import styles from './Tools.module.scss';
import CategoryCard from '../CategoryCard/CategoryCard';
import { categories } from '../../utils/categories';
import { motion as Motion } from 'framer-motion';

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

const toolHighlights = [
    { value: 'CI/CD', label: '자동화 파이프라인' },
    { value: 'Docs', label: '협업 문서화' },
    { value: 'E2E', label: '품질 검증 루틴' },
];

const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    show: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.045,
            duration: 0.45,
            ease: 'easeOut',
        },
    }),
};

const Tools = () => {
    // 카테고리 그룹화 로직
    const groupedData = categories.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});

    const categoryNames = Object.keys(groupedData);

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
        <Motion.section
            className={styles.tools}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.6 }}
        >
            <div className={styles.bgDecor} aria-hidden='true'>
                <span className={styles.orbOne} />
                <span className={styles.orbTwo} />
                <span className={styles.gridAura} />
            </div>
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
                    {categoryNames.map((categoryName, groupIndex) => (
                        <Motion.div
                            key={categoryName}
                            className={styles.categoryGroup}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: groupIndex * 0.08, duration: 0.55, ease: 'easeOut' }}
                        >
                            <div className={styles.categoryHeader}>
                                <span className={styles.dot} />
                                <h3 className={styles.groupName}>{categoryName}</h3>
                                <div className={styles.line} />
                            </div>
                            <div className={styles.grid}>
                                {groupedData[categoryName].map((item, idx) => (
                                    <CategoryCard key={`${categoryName}-${item.title}-${idx}`} {...item} />
                                ))}
                            </div>
                        </Motion.div>
                    ))}
                </div>

                {/* 3. Tools & Collaboration 박스 */}
                <Motion.div
                    className={styles.collaborationBox}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <div className={styles.boxHeader}>
                        <div>
                            <div className={styles.boxTitle}>
                                <span className={styles.boxIcon}>🔧</span>
                                Tools & Collaboration
                            </div>
                            <p className={styles.boxLead}>
                                개발 흐름을 빠르게 만들고, 팀과 같은 기준으로 움직이기 위한 도구들입니다.
                            </p>
                        </div>
                        <span className={styles.boxSubLabel}>일상적으로 사용하는 도구 모음</span>
                    </div>

                    <div className={styles.highlightRow}>
                        {toolHighlights.map((item) => (
                            <div key={item.value} className={styles.highlightItem}>
                                <strong>{item.value}</strong>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.toolList}>
                        {collaborationTools.map((tool, idx) => (
                            <Motion.div
                                key={tool.title}
                                className={styles.toolChip}
                                style={{ '--tool-color': tool.color }}
                                custom={idx}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <span className={styles.chipDot} />
                                <div className={styles.chipInfo}>
                                    <span className={styles.chipTitle}>{tool.title}</span>
                                    <span className={styles.chipDesc}>{tool.desc}</span>
                                </div>
                            </Motion.div>
                        ))}
                    </div>
                </Motion.div>

                {/* 4. 하단 통계 푸터 바 */}
                <div className={styles.footerBar}>
                    <div className={styles.statItem}>
                        <span className={styles.statNum}>{categories.length}</span>
                        <span className={styles.statLabel}>기술 스택</span>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.statItem}>
                        <span className={styles.statNum}>{collaborationTools.length}</span>
                        <span className={styles.statLabel}>협업 도구</span>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.footerCategory}>
                        <div className={styles.tagRow}>
                            <span className={styles.tag1} style={{ color: '#A78BFA' }}>Frontend</span>
                            <span className={styles.tag2} style={{ color: '#60A5FA' }}>Backend</span>
                            <span className={styles.tag3} style={{ color: '#FBBF24' }}>Infra</span>
                        </div>
                        <p className={styles.tagDesc}>{categoryNames.length}개 기술 카테고리</p>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.mainIcons}>
                        <div className={styles.iconRow}>
                            <div className={styles.iconCircle}>Re</div>
                            <div className={styles.iconCircle} style={{ borderColor: '#F7DF1E', color: '#F7DF1E' }}>Js</div>
                            <div className={styles.iconCircle} style={{ borderColor: '#6DB33F', color: '#6DB33F' }}>Sb</div>
                            <div className={styles.iconCircle} style={{ borderColor: '#2496ED', color: '#2496ED' }}>Do</div>
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
        </Motion.section>
    );
};

export default Tools;