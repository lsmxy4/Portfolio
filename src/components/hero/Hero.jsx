import React from 'react'
import styles from './Hero.module.scss'
// motion 외에 마우스 인터랙션을 위한 훅들을 추가로 import 해야 합니다.
import { motion as Motion, useMotionValue, useSpring, motion } from 'framer-motion'
import Stats from '../stats/Stats'
import { contentVariants, itemVariants } from '../../utils/aniValue'

const Hero = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // 마우스 움직임을 부드럽게 변환 (stiffness와 damping으로 쫀득한 느낌 조절)
    const springX = useSpring(mouseX, { stiffness: 60, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 60, damping: 30 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        // 중앙으로부터 얼마나 떨어졌는지 계산 (숫자를 나눠서 움직임 강도 조절)
        const x = (clientX - window.innerWidth / 2) / 15;
        const y = (clientY - window.innerHeight / 2) / 15;
        
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <section className={styles.hero} onMouseMove={handleMouseMove} aria-labelledby='hero-heading'>
            {/* 배경 장식 요소 */}
            <div className={styles.bgGlows}>
                {/* 마우스 움직임에 반응하는 빛 (z-index가 0이므로 배경으로 깔림) */}
                <motion.div
                    className={styles.glowMouse}
                    style={{ x: springX, y: springY }}
                />
                <div className={styles.glow1} />
                <div className={styles.glow2} />
                <div className={styles.glow3} />
            </div>

            <div className={`inner ${styles.inner}`}>
                <Motion.div
                    variants={contentVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: .3 }}
                    className={styles.content}>

                    <Motion.span variants={itemVariants} className={styles.badge}>
                        Full-Stack Developer
                    </Motion.span>

                    <Motion.h1 id='hero-heading' variants={itemVariants} className={styles.tit}>
                        <span>복잡한 문제를</span>
                        <span>직관적인 <span className={styles.highlight}>코드로</span> 해결하는</span>
                        <span><span className={styles.point}>Full-Stack</span> 개발자</span>
                    </Motion.h1>

                    <Motion.p variants={itemVariants} className={styles.txt}>
                        사용자 중심의 프론트엔드 경험부터 안정적인 백엔드 아키텍처까지,<br />
                        모든 흐름을 유연하게 연결합니다. 코드 한 줄 한 줄에 의도를 담습니다.
                    </Motion.p>

                    <Motion.div variants={itemVariants} className={styles.cta}>
                        <button type='button' className={styles.btnPrimary}>
                            <span className={styles.icon}>➔</span> 내 프로젝트 보기
                        </button>
                        <button type='button' className={styles.btnOutline}>
                            <span className={styles.icon}>↓</span> 이력서 다운로드
                        </button>
                    </Motion.div>

                    <Motion.div variants={itemVariants} className={styles.statsWrapper}>
                        <Stats />
                    </Motion.div>
                </Motion.div>
            </div>
        </section>
    )
}

export default Hero