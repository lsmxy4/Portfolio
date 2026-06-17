import React, { useState, useCallback, useMemo } from 'react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import { useForm } from '@formspree/react'
import { icons } from '../../utils/icons'
import { contactData, budgets, topics } from '../../utils/contactPage'
import styles from './ContantPage.module.scss'

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

    const contactCards = useMemo(() => [
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
    ], [IconGithub, IconLinkedIn, IconMail])

    const availability = [
        {
            icon: IconBriefcase,
            label: '프로젝트 제작',
            desc: '랜딩 페이지, 포트폴리오, 웹 서비스 UI 구현',
        },
        {
            icon: IconLaptop,
            label: '프론트엔드 개선',
            desc: 'React 화면 구성, 반응형 레이아웃, 사용성 개선',
        },
        {
            icon: IconGlobe,
            label: '원격 협업',
            desc: '온라인 미팅과 문서 기반의 빠른 커뮤니케이션',
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
    const canSubmit = name.trim() && emailLooksValid && message.trim()

    const copyEmail = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(contactData.email)
            setCopied(true)
            window.setTimeout(() => setCopied(false), 2000)
        } catch {
            setCopied(false)
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!canSubmit) return

        const formData = new FormData(e.currentTarget)
        formData.set('topicLabel', topics.find((t) => t.id === topic)?.label ?? topic)
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
                        <span className={styles.eyebrow}>Contact</span>
                        <h1 className={styles.title}>함께 만들고 싶은 일이 있다면 편하게 연락해주세요.</h1>
                        <p className={styles.lead}>
                            웹 서비스 제작, 화면 개선, 프로젝트 협업까지 구체적인 아이디어가 아니어도 괜찮습니다.
                            현재 상황과 필요한 부분을 알려주시면 빠르게 확인해 답변드릴게요.
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
                                                    aria-label={copied ? '이메일 복사 완료' : '이메일 주소 복사'}
                                                    onClick={copyEmail}
                                                >
                                                    {copied ? <IconCheck /> : <IconCopy />}
                                                </button>
                                            ) : (
                                                <a
                                                    className={styles.iconBtn}
                                                    target='_blank'
                                                    rel='noreferrer'
                                                    aria-label={`${card.label} 프로필 열기`}
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
                                <h2 className={styles.statusTitle}>현재 새로운 협업을 기다리고 있어요</h2>
                            </div>
                            <div className={styles.availability}>
                                {availability.map((item) => {
                                    const AvailabilityIcon = item.icon
                                    return (
                                        <div className={styles.availCard} key={item.label}>
                                            <div className={styles.availIcon}>
                                                <AvailabilityIcon />
                                            </div>
                                            <p className={styles.availLabel}>{item.label}</p>
                                            <p className={styles.availDesc}>{item.desc}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Motion.div>

                    <Motion.div className={styles.formCard} {...motionProps}>
                        <div className={styles.formHead}>
                            <span className={styles.formBadge}>Message</span>
                            <h2 className={styles.formTitle}>문의 남기기</h2>
                            <p className={styles.formLead}>
                                이름, 이메일, 필요한 내용을 남겨주시면 확인 후 답변드리겠습니다.
                            </p>
                        </div>
                        {formState.succeeded ? (
                            <p className={styles.thanks} role='status'>메시지가 전송되었습니다. 빠르게 확인 후 답변드릴게요.</p>
                        ) : (
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.row2}>
                                    <div className={styles.field}>
                                        <label className={styles.label} htmlFor='contact-name'>이름</label>
                                        <input
                                            id='contact-name'
                                            className={styles.input}
                                            name='name'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            autoComplete='name'
                                            placeholder='이름을 입력해주세요'
                                            type='text' />
                                    </div>
                                    <div className={styles.field}>
                                        <label className={styles.label} htmlFor='contact-email'>이메일</label>
                                        <input
                                            id='contact-email'
                                            className={`${styles.input} ${email && !emailLooksValid ? styles.inputError : ''}`}
                                            name='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            autoComplete='email'
                                            placeholder='reply@example.com'
                                            type='email' />
                                        {email && !emailLooksValid ? (
                                            <span className={styles.fieldHint}>답변 가능한 이메일 형식으로 입력해주세요.</span>
                                        ) : null}
                                    </div>
                                </div>

                                <div className={styles.field}>
                                    <label className={styles.label} htmlFor='contact-company'>소속 / 회사 <span className={styles.optional}>(선택)</span></label>
                                    <input
                                        id='contact-company'
                                        className={styles.input}
                                        name='company'
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                        autoComplete='organization'
                                        placeholder='개인, 팀, 회사명을 적어주세요'
                                    />
                                </div>

                                <div className={styles.fieldGroup}>
                                    <p className={styles.inquiryLabel} id='topic-label'>문의 유형</p>
                                    <div className={styles.inquiryRow} aria-labelledby='topic-label' role='group'>
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
                                    <label className={styles.label} htmlFor='contact-message'>문의 내용</label>
                                    <textarea
                                        id='contact-message'
                                        className={styles.textarea}
                                        name='message'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value.slice(0, MAX_MESSAGE))}
                                        required
                                        maxLength={MAX_MESSAGE}
                                        placeholder='프로젝트 목표, 일정, 필요한 기능 등을 자유롭게 적어주세요.'
                                    />
                                    <div className={styles.textareaFoot}>
                                        <span className={styles.charCount}>{message.length}/{MAX_MESSAGE}</span>
                                    </div>
                                </div>

                                <div className={styles.field}>
                                    <label className={styles.label} htmlFor='contact-budget'>예상 예산 <span className={styles.optional}>(선택)</span></label>
                                    <select
                                        id='contact-budget'
                                        className={styles.select}
                                        name='budget'
                                        value={budget}
                                        onChange={(e) => setBudget(e.target.value)}
                                    >
                                        {budgets.map((b) => (
                                            <option key={b.value || 'none'} value={b.value}>{b.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    type='submit'
                                    disabled={formState.submitting || !canSubmit}
                                    className={`btn btn__primary ${styles.submit}`}>
                                    <IconSend />
                                    {formState.submitting ? '전송 중...' : '메시지 보내기'}
                                </button>
                                {formState.errors ? (
                                    <p className={styles.privacyNote}>메시지 전송에 실패했습니다. 잠시 후 다시 시도해주세요.</p>
                                ) : null}
                                <p className={styles.privacyNote}>입력해주신 정보는 답변 목적으로만 사용됩니다.</p>
                            </form>
                        )}
                    </Motion.div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage