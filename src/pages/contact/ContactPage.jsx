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
    const [company, setCompany] = useState('')
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
                        <div className={styles.statusBlock}>
                            <div className={styles.statusHead}>
                                <span className={styles.statusDot} aria-hidden />
                                <h2 className={styles.statusTitle}>Currently open to work</h2>
                            </div>
                            <div className={styles.availability}>
                                <div className={styles.availCard}>
                                    <div className={styles.availIcon}>
                                        <IconBriefcase />
                                    </div>
                                        <p className={styles.availLabel}>Full time</p>
                                        <p className={styles.availDesc}>Product-minded teams with strong design partnership</p>
                                </div>
                                <div className={styles.availCard}>
                                    <div className={styles.availIcon}>
                                        <IconLaptop />
                                    </div>
                                        <p className={styles.availLabel}>Full time</p>
                                        <p className={styles.availDesc}>Product-minded teams with strong design partnership</p>
                                </div>
                                <div className={styles.availCard}>
                                    <div className={styles.availIcon}>
                                        <IconGlobe />
                                    </div>
                                        <p className={styles.availLabel}>Full time</p>
                                        <p className={styles.availDesc}>Product-minded teams with strong design partnership</p>
                                </div>
                            </div>
                        </div>

                    </Motion.div>
                    <Motion.div className={styles.formCard} {...motionProps}>
                        <div className={styles.formHead}>
                            <h2 className={styles.formTitle}>Send a message</h2>
                            <p className={styles.formLead}>
                                Share a few details and I&apos;ll get back as soon as I can — usually within one business day.
                            </p>
                        </div>
                        {formState.succeeded ? (
                            <p className={styles.thanks} role='status'>
                                Thanks — your message has been sent. I&apos;ll get back to you soon.
                            </p>
                        ) : (
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.row2}>
                                    <div className={styles.field}>
                                        <label className={styles.label} htmlFor='contact-name'>Name</label>
                                        <input
                                            id='contact-name'
                                            className={styles.input}
                                            name='name'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            autoComplete='name'
                                            placeholder='이름 입력'
                                            type="text" />

                                    </div>
                                    <div className={styles.field}>
                                        <label className={styles.label} htmlFor='contact-email'>Email</label>
                                        <input
                                            id='contact-email'
                                            className={styles.input}
                                            name='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            autoComplete='email'
                                            placeholder='이메일 입력'
                                            type="email" />

                                    </div>
                                </div>
                                <div className={styles.field}>
                                    <label className={styles.label} htmlFor='contact-company'>Company</label>
                                    <input
                                        id='contact-company'
                                        className={styles.input}
                                        name='company'
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                        autoComplete='organization'
                                    />

                                </div>
                                <div>
                                    <p className={styles.inquiryLabel}
                                        id='topic-label'
                                    >
                                        Topic
                                    </p>
                                    <div
                                        className={styles.inquiryRow}
                                        aria-labelledby='topic-label'
                                        role='group'>
                                        {topics.map(({ id, label }) => (
                                            <button
                                                key={id}
                                                type='button'
                                                className={`${styles.topicBtn} ${topic === id ? styles.topicBtnActive : ''}`}
                                                onClick={() => setTopic(id)}
                                                aria-pressed={topic === id}
                                            >
                                                {label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.field}>
                                    <label className={styles.label} htmlFor='contact-message'>Message</label>
                                    <textarea
                                        id='contact-message'
                                        className={styles.textarea}
                                        name='message'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value.slice(0, MAX_MESSAGE))}
                                        required
                                        maxLength={MAX_MESSAGE}
                                        placeholder='메세지를 입력하세요'
                                    />
                                    <div className={styles.textareaFoot}>
                                        <span className={styles.charCount}>
                                            {message.length}/ {MAX_MESSAGE}
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.field}>
                                    <label className={styles.label} htmlFor='contact-budget'>
                                        Budget range
                                        <span className={styles.optional}>(optional)</span>
                                    </label>
                                    <select
                                        id='contact-budget'
                                        className={styles.select}
                                        name='budget'
                                        value={budget}
                                        onChange={(e) => setBudget(e.target.value)}


                                    >
                                        {budgets.map((b) => (

                                            <option key={b.value || 'none'} value={b.value}>
                                                {b.label}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                <button
                                    type='submit'
                                    disabled={
                                        formState.submitting ||
                                        !name.trim() ||
                                        !email.trim() ||
                                        !message.trim()
                                    }
                                    className={`btn btn__primary ${styles.submit}`}>
                                    <IconSend />
                                    {formState.submitting ? 'Sending...' : 'Send message'}
                                </button>
                                {formState.errors ? (
                                    <p className={styles.privacyNote}>
                                        Message failed to send. Please try again.
                                    </p>
                                ) : null}
                                <p className={styles.privacyNote}>our details are only used to reply — no marketing lists.</p>
                            </form>
                        )}
                    </Motion.div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage