import React, { useState, useCallback, useMemo } from 'react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import { icons } from '../../utils/icons'
import { contactData, budgets, topics } from '../../utils/contactPage'
import styles from './ContantPage.module.scss'
import { useForm, ValidationError } from '@formspree/react';
const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_MESSAGE = 1000

const ContactPage = () => {

    const IconMail = icons.mail
    const IconCopy = icons.copy
    const IconExternal = icons.external
    const IconGithub = icons.github
    const IconLinkedIn = icons.linkedIn
    const IconSend = icons.send
    const IconCheck = icons.check
    const IconBriefcase = icons.briefcase
    const IconLaptop = icons.laptop
    const IconGlobe = icons.globe

    const contactCards = [
        {
            key: 'email',
            icon: IconMail,
            label: 'Email',
            value: contactData.email,
            action: 'copy',
        },
        {
            key: 'linkedin',
            icon: IconLinkedIn,
            label: 'LinkedIn',
            value: contactData.linkedinLabel,
            href: contactData.linkedin,
        },
        {
            key: 'github',
            icon: IconGithub,
            label: 'GitHub',
            value: contactData.githubLabel,
            href: contactData.github,
        },
    ]

    const shouldReduceMotion = useReducedMotion()

    const [copied, setCopied] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [topic, setTopic] = useState('freelance')
    const [message, setMessage] = useState('')
    const [budget, setBudget] = useState('')
    const [formState, handleFormspreeSubmit] = useForm('xbdwywlr')
    const emailLooksValid = useMemo(() => EMAIL_OK.test(email.trim()), [email])

    const copyEmail = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(contactData.email)

            setCopied(true)

            window.setTimeout(() => setCopied(false), 2000)
        } catch (error) {
            setCopied(false)

        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!name.trim() || !email.trim() || !message.trimEnd()) return


        const formData = new FormData(e.currentTarget)

        formData.set('topicLabel', topics.find((t) => t.id == topic)?.label ?? topic)
        await handleFormspreeSubmit(formData)
    }
    const motionProps = shouldReduceMotion ? {} : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: {
            duration: .45,
            ease: [.22, 1, .36, 1]
        }
    }
    return (
        <div className={styles.contact_section}>
            <div className="inner">
                <div className={styles.layout}>
                    <Motion.div className={styles.intro} {...motionProps}>
                        <span className='badge badge__blue'>Let&apos;s work together</span>
                        <h1 className="tit tit__m">
                            Want to build something great?
                        </h1>
                        <p className="txt">
                            I design and ship full-stack web products — crisp UI, solid APIs, and pragmatic delivery. Open to
                            thoughtful freelance work and the right full-time role.
                        </p>
                        <div className={styles.links}>
                            {contactCards.map((card) => {
                                const CardIcon = card.icon
                                return (
                                    <div className={styles.linkCard} key={card.key}>
                                        <div className={styles.linkIcon}>
                                            <CardIcon />
                                        </div>
                                        <div className={styles.linkBody}>
                                            <p className={styles.linkLabel}>{card.label}</p>
                                            <p className={styles.linkValue}>{card.value}</p>
                                        </div>
                                        <div className={styles.linkActions}>
                                            {card.action === 'copy' ? (
                                                <button
                                                    type='button'
                                                    className={`${styles.iconBtn} ${copied ? styles.iconBtnDone : ''}`}
                                                    aria-label={copied ? 'Copied' : 'Copy email address'}
                                                >
                                                    {copied ? <IconCheck /> : <IconCopy />}
                                                </button>
                                            ) : (
                                                <a
                                                    className={styles.iconBtn}
                                                    target='_blank'
                                                    aria-label={`Open ${card.label} profile`}
                                                    href={card.href}>
                                                    <IconExternal />
                                                </a>

                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Motion.div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage