import { Link } from 'react-router-dom'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/profile'
import { featuredProjects } from '../data/projects'
import styles from './Home.module.scss'

function Reveal({ children, className }) {
  const reduce = useReducedMotion()
  return <Motion.div className={className} initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.45 }}>{children}</Motion.div>
}

export default function Home() {
  return <div className={styles.home}>
    <section className={styles.hero} aria-labelledby="home-title">
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}><span /> BACKEND DEVELOPER PORTFOLIO</p>
        <h1 id="home-title">화면 너머의 흐름을<br /><em>만드는 개발자.</em></h1>
        <p className={styles.intro}>안녕하세요, {profile.name}입니다.<br />웹 개발 경험을 바탕으로 백엔드 개발자를 목표로 성장하고 있습니다. 기능이 동작하는 과정과 서비스의 연결을 꾸준히 배우고 기록합니다.</p>
        <div className={styles.actions}><Link className={styles.primary} to="/projects">프로젝트 살펴보기 ↗</Link><a className={styles.secondary} href={profile.github} target="_blank" rel="noreferrer">GitHub ↗<span className="sr-only"> (새 창)</span></a></div>
        <div className={styles.heroFoot}><span>BUILD. CONNECT. LEARN.</span><a href="#selected-work">아래에서 작업 보기 ↓</a></div>
      </div>
      <div className={styles.diagram} aria-label="학습 방향: 클라이언트, API, 데이터베이스를 연결하는 서비스 흐름">
        <div className={styles.diagramTop}><span className={styles.windowDots}>● ● ●</span><span>service-flow.md</span></div>
        <div className={styles.diagramBody}>
          <p className={styles.codeComment}>// 화면에서 시작해, 서비스 안쪽으로</p>
          <div className={styles.flowNode}><span className={styles.nodeIcon}>01</span><div><small>INTERFACE</small><strong>Client</strong></div><span className={styles.nodeTag}>React</span></div>
          <div className={styles.connector}>↓ <span>request / response</span></div>
          <div className={`${styles.flowNode} ${styles.activeNode}`}><span className={styles.nodeIcon}>02</span><div><small>MY NEXT FOCUS</small><strong>Backend API</strong></div><span className={styles.nodeTag}>Spring Boot</span></div>
          <div className={styles.connector}>↓ <span>read / write</span></div>
          <div className={styles.flowNode}><span className={styles.nodeIcon}>03</span><div><small>PERSISTENCE</small><strong>Database</strong></div><span className={styles.nodeTag}>Data</span></div>
          <p className={styles.diagramNote}>학습하고 싶은 서비스의 연결 구조</p>
        </div>
      </div>
    </section>
    <div className={styles.directionStrip}><span>DEVELOPMENT DIRECTION</span><p>사용자 화면에 대한 이해에서 출발해,<br className={styles.mobileBreak} /> API와 데이터의 흐름으로.</p></div>
    <section id="selected-work" className={styles.section} aria-labelledby="projects-title">
      <Reveal className={styles.sectionHead}><div><p className={styles.eyebrow}>01 / SELECTED WORK</p><h2 id="projects-title">프로젝트로 남긴 경험</h2></div><Link to="/projects">전체 프로젝트 보기 ↗</Link></Reveal>
      <div className={styles.projectGrid}>{featuredProjects.map((project, index) => <Reveal key={project.id} className={project.scale === 'major' ? styles.majorProject : undefined}><article className={styles.projectCard}>
        <div className={`${styles.projectVisual} ${styles[project.visual]} ${project.image ? styles.hasImage : ''}`}><span className={styles.visualIndex}>PROJECT / 0{index + 1}</span>{project.image ? <img className={styles.projectImage} src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" width="1586" height="992" /> : <div className={styles.projectWordmark} aria-hidden="true"><span>{project.mark}</span><strong>{project.title}</strong><small>{project.caption}</small></div>}<span className={styles.visualType}>{project.type}</span></div>
        <div className={styles.projectBody}>{project.featuredLabel && <span className={styles.majorBadge}>{project.featuredLabel}</span>}<h3><Link className={styles.detailLink} to={`/projects/${project.id}`}>{project.title}</Link></h3><p>{project.summary}</p><div className={styles.projectLinks}><Link to={`/projects/${project.id}`}>자세히 보기 →</Link>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">사이트 보기 ↗<span className="sr-only"> (새 창)</span></a>}<a href={project.github} target="_blank" rel="noreferrer">GitHub 저장소 ↗<span className="sr-only"> — {project.title} (새 창)</span></a></div></div>
      </article></Reveal>)}</div>
    </section>
    <section className={styles.section} aria-labelledby="direction-title">
      <Reveal className={styles.sectionHead}><div><p className={styles.eyebrow}>02 / KEEP GROWING</p><h2 id="direction-title">경험을 넓히는 방향</h2></div><Link to="/skills">기술 살펴보기 ↗</Link></Reveal>
      <div className={styles.focusGrid}>{[
        ['01', '사용자 흐름 이해', 'Frontend → Backend', '화면에서 발생한 요청이 서비스에서 어떻게 처리되는지, 전체 흐름을 이해하는 개발자를 지향합니다.'],
        ['02', '기본기 쌓기', 'API · Data · Structure', 'API와 데이터 처리의 기본을 배우고, 구현한 코드의 동작 원리를 설명할 수 있도록 학습합니다.'],
        ['03', '함께 만드는 경험', 'Git · Team Projects', '팀 프로젝트 경험을 돌아보며 역할을 명확히 나누고, 변경 사항을 공유하는 협업 방식을 발전시키고자 합니다.'],
      ].map(([number, title, subtitle, body]) => <Reveal key={number} className={styles.focusItem}><span className={styles.focusNumber}>{number}</span><h3>{title}</h3><small>{subtitle}</small><p>{body}</p></Reveal>)}</div>
    </section>
    <Reveal className={styles.contactPanel}><div><p className={styles.eyebrow}>LET’S CONNECT</p><h2>다음 경험으로 이어질<br />이야기를 기다립니다.</h2><p>채용 및 개발 관련 이야기는 이메일로 연락해 주세요.</p></div><div className={styles.contactActions}><a href={`mailto:${profile.email}`}>{profile.email} ↗</a><Link to="/about">조금 더 알아보기 →</Link></div></Reveal>
  </div>
}
