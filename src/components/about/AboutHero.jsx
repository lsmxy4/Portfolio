import React from 'react'
import styles from '../../pages/about/About.module.scss'
import { motion as Motion } from 'framer-motion'
import { contentVariants,itemVariants,visualVariants } from '../../utils/aniValue'
const AboutHero = ({ icons}) => {

    const IconMail = icons.mail
    const IconPin = icons.pin
    const IconDownload = icons.download
    const IconGithub = icons.github
    return (
        <section className={styles.hero} aria-labelledby='about-hero-heading'>
            <Motion.div 
            className={styles.heroContent}
            values={contentVariants}
            initial = "hidden"
            whileInView="show"
            viewport={{amount:.3}}
            >
                <Motion.span
                variants={itemVariants} 
                className={styles.badge}>
                    <span className={styles.badgeDot} aria-hidden />
                    Open to opportunities
                </Motion.span>
                <p className={styles.eyebrow}>Hello, I&apos;m</p>
                <Motion.h1 
                variants={itemVariants}
                id='about-hero-heading' 
                className={styles.title}>
                    Your name
                </Motion.h1>
                <Motion.p 
                variants={itemVariants}
                className={styles.lead}>
                    Full-stack engineer focused on fast, accessible web experiences. I enjoy turning ambiguous product goals into
                    maintainable systems, clear UI, and measurable outcomes.
                </Motion.p>
                <Motion.div 
                variants={itemVariants}
                className={styles.metaRow}>
                    <span className={styles.meta}>
                        <span className={styles.metaIcon}>
                            <IconMail />
                        </span>
                        hello@name.dev
                    </span>
                    <span className={styles.meta}>
                        <span className={styles.metaIcon}>
                            <IconPin />
                        </span>
                        Remote
                    </span>

                </Motion.div>
                <Motion.div 
                variants={itemVariants}
                className={styles.ctaRow}>
                    <a href="#" className="btn btn__primary">
                        <IconDownload />
                        Download resume
                    </a>
                    <a href="#" className="btn btn__outline">
                        <IconGithub />
                        View Github
                    </a>
                </Motion.div>
            </Motion.div>
            <Motion.div 
            variants={itemVariants}
            initial ="hidden"
            whileInView="show"
            transition={{delay:1}}
            viewport={{once:true,amount:.3}}
            className={styles.heroVisual}>
                <div className={styles.profileCard}>
                    <div className={styles.profilePlaceholder}/>
                </div>
                <div className={styles.statPills}>
                    <span className={styles.statPill}>5+ years experience</span>
                    <span className={styles.statPill}>40+ project</span>
                    <span className={styles.statPill}>Freelance friendly</span>

                </div>
            </Motion.div>
        </section>
    )
}

export default AboutHero