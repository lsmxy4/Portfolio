import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import { projectDetails } from '../../data/projectDetails'
import PlaceholderPage from '../PlaceholderPage'
import styles from './ProjectDetail.module.scss'

export default function ProjectDetail() {
  const { projectId } = useParams()
  const project = Object.hasOwn(projectDetails, projectId) ? projectDetails[projectId] : null
  const reduceMotion = useReducedMotion()
  const projectEntries = Object.entries(projectDetails)
  const currentIndex = projectEntries.findIndex(([id]) => id === projectId)
  const relatedProjects = [1, 2].map((offset) => projectEntries[(currentIndex + offset) % projectEntries.length])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const previousTitle = document.title
    document.title = project ? `${project.title} | 신동환 포트폴리오` : '프로젝트를 찾을 수 없습니다'
    return () => { document.title = previousTitle }
  }, [project])

  if (!project) return <PlaceholderPage title="프로젝트를 찾을 수 없습니다" desc="프로젝트 목록에서 다른 작업을 살펴보세요." />

  return (
    <Motion.div className={styles.page} initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.35 }}>
      <Link className={styles.back} to="/projects">← 프로젝트 목록</Link>
      <header className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>{project.kind}</p>
          <h1>{project.title}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>
          <div className={styles.actions}>
            {project.site ? <a className={styles.primary} href={project.site} target="_blank" rel="noreferrer">사이트 보기 ↗<span className="sr-only"> (새 창)</span></a> : <span className={styles.unavailable}>공개 사이트 준비 중</span>}
            <a className={styles.outline} href={project.github} target="_blank" rel="noreferrer">GitHub 저장소 ↗<span className="sr-only"> (새 창)</span></a>
            {project.dashboard && <a className={styles.outline} href={project.dashboard} target="_blank" rel="noreferrer">대시보드 데모 ↗<span className="sr-only"> (새 창)</span></a>}
          </div>
        </div>
        <figure><img src={project.image} alt={project.imageAlt} width="1586" height="992" decoding="async" /><figcaption>프로젝트를 소개하는 이미지입니다.</figcaption></figure>
      </header>

      <section className={styles.overview} aria-labelledby="overview-heading"><p className={styles.eyebrow}>ABOUT THE PROJECT</p><h2 id="overview-heading">어떤 프로젝트인가요?</h2><p>{project.overview}</p></section>
      <section className={styles.section} aria-labelledby="features-heading"><p className={styles.eyebrow}>WHAT IT DOES</p><h2 id="features-heading">이런 기능을 담았습니다.</h2><div className={styles.featureGrid}>{project.features.map((feature, index) => <article key={feature.title}><span className={styles.number}>0{index + 1}</span><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div></section>
      <section className={styles.section} aria-labelledby="build-heading"><p className={styles.eyebrow}>HOW IT WAS BUILT</p><h2 id="build-heading">어떻게 만들었나요?</h2><div className={styles.buildGrid}><ol className={styles.steps}>{project.steps.map((step, index) => <li key={step.title}><span className={styles.stepIndex}>0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol><aside className={styles.architecture} aria-label="서비스 구성 흐름"><h3>서비스의 연결 구조</h3><ol>{project.architecture.map((item) => <li key={item}>{item}</li>)}</ol><p>{project.note}</p></aside></div></section>
      <section className={styles.section} aria-labelledby="stack-heading"><p className={styles.eyebrow}>TECH STACK</p><h2 id="stack-heading">함께 사용한 기술</h2><ul className={styles.tags}>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul></section>
      <footer className={styles.references}><span>코드와 문서에서 더 살펴보기</span><div>{project.sources.map((source) => <a href={source.href} key={source.href} target="_blank" rel="noreferrer">{source.label} ↗<span className="sr-only"> (새 창)</span></a>)}</div></footer>
      <nav className={styles.otherProjects} aria-label="다른 프로젝트">{relatedProjects.map(([id, item]) => <Link key={id} to={`/projects/${id}`}><small>다른 프로젝트</small><span>{item.title} →</span></Link>)}</nav>
    </Motion.div>
  )
}
