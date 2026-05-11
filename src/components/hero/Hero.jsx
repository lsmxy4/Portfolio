import React from 'react'
import styles from './Hero.module.scss'
import { motion as Motion } from 'framer-motion'
import Stats from '../stats/Stats'
import { contentVariants, itemVariants } from '../../utils/aniValue'

const Hero = () => {
    return (
        <section className={styles.hero} aria-labelledby='hero-heading'>
            <div className={`inner ${styles.inner}`}>
                <Motion.div
                    variants={contentVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: .3 }}
                    className={styles.content}>

                    {/* 상단 배지 */}
                    <Motion.span variants={itemVariants} className={styles.badge}>
                        Full-Stack Developer
                    </Motion.span>

                    {/* 메인 타이틀 */}
                    <Motion.h1 id='hero-heading' variants={itemVariants} className={styles.tit}>
                        <span>복잡한 문제를</span>
                        <span>직관적인 <span className={styles.highlight}>코드로</span> 해결하는</span>
                        <span><span className={styles.point}>Full-Stack</span> 개발자</span>
                    </Motion.h1>
                    {/* 서브 텍스트 */}
                    <Motion.p variants={itemVariants} className={styles.txt}>
                        사용자 중심의 프론트엔드 경험부터 안정적인 백엔드 아키텍처까지,<br />
                        모든 흐름을 유연하게 연결합니다. 코드 한 줄 한 줄에 의도를 담습니다.
                    </Motion.p>

                    {/* 버튼 그룹 */}
                    <Motion.div variants={itemVariants} className={styles.cta}>
                        <button type='button' className={styles.btnPrimary}>
                            <span className={styles.icon}>➔</span> 내 프로젝트 보기
                        </button>
                        <button type='button' className={styles.btnOutline}>
                            <span className={styles.icon}>↓</span> 이력서 다운로드
                        </button>
                    </Motion.div>

                    {/* 하단 통계 */}
                    <Motion.div variants={itemVariants} className={styles.statsWrapper}>
                        <Stats />
                    </Motion.div>
                </Motion.div>
            </div>
        </section>
    )
}

export default Hero