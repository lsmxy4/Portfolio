import { motion as Motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { skillCategories, skillProjects, skillProjectCount, skillCount } from '../../utils/skillsPageData'
import styles from './SkillsPages.module.scss'

function AnimatedBar({ count, delay = 0, className }) {
  const reduceMotion = useReducedMotion()
  return (
    <div className={`${styles.track} ${className || ''}`} aria-hidden="true">
      <Motion.span
        style={{ width: `${count / skillProjectCount * 100}%`, transformOrigin: 'left' }}
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}

export default function SkillsPages() {
  const reduceMotion = useReducedMotion()
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Skills & growing</p>
        <h1>하나씩 만들며,<br /><em>차곡차곡 쌓은 기술.</em></h1>
        <p className={styles.intro}>화면을 만들고, 데이터를 연결하고, 센서의 신호를 받아보며.<br />프로젝트 속에서 배우고 사용한 기술들을 모았습니다.</p>
        <div className={styles.stats}>
          {[[skillCategories.length, '기술 영역'], [skillCount, '함께 쓴 기술'], [skillProjectCount, '경험을 쌓은 프로젝트']].map(([value, label]) => (
            <div key={label}><strong>{value.toString().padStart(2, '0')}</strong><span>{label}</span></div>
          ))}
        </div>
      </header>

      <section className={styles.overview} aria-labelledby="overview-title" aria-describedby="graph-note">
        <div className={styles.chartIntro}>
          <p className={styles.eyebrow}>A little overview</p>
          <h2 id="overview-title">어떤 기술과<br />함께 만들었을까요?</h2>
          <p id="graph-note">함께 살펴볼 {skillProjectCount}개 프로젝트에서 각 기술 영역을 얼마나 사용했는지 담았습니다. 막대의 길이는 사용한 프로젝트 수를 뜻해요.</p>
          <Link to="/projects">프로젝트 전체 보기 ↗</Link>
        </div>
        <div className={styles.chart}>
          <div className={styles.axis}><span>사용 프로젝트 수</span><span>0 — {skillProjectCount}</span></div>
          {skillCategories.map((category, index) => {
            const count = new Set(category.skills.flatMap((skill) => skill.projects)).size
            return (
              <div className={styles.chartRow} key={category.key} style={{ '--skill-color': category.color }}>
                <div className={styles.barLabel}><a href={`#${category.key}`}>{category.title}</a><strong>{count}<span> / {skillProjectCount}</span></strong></div>
                <AnimatedBar count={count} delay={index * 0.06} />
              </div>
            )
          })}
        </div>
      </section>

      <div className={styles.sectionHead}><p className={styles.eyebrow}>My toolbox</p><h2>기술마다, 쌓여 있는 이야기.</h2><p>기술 아래 작은 프로젝트 이름을 눌러보세요. 어떤 작업에 사용했는지 GitHub에서 살펴볼 수 있어요.</p></div>
      <div className={styles.grid}>
        {skillCategories.map((category) => (
          <Motion.section
            id={category.key}
            key={category.key}
            aria-labelledby={`${category.key}-title`}
            className={styles.card}
            style={{ '--skill-color': category.color }}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: reduceMotion ? 0 : 0.4 }}
          >
            <div className={styles.cardTop}><span>{category.label}</span><span className={styles.status}>만들며 익힌 기술</span></div>
            <h2 id={`${category.key}-title`}>{category.title}</h2>
            <p className={styles.cardIntro}>{category.description}</p>
            <ul className={styles.skills}>
              {category.skills.map((skill, index) => (
                <li key={skill.name}>
                  <div className={styles.barLabel}><h3>{skill.name}</h3><span className={styles.count}>{skill.projects.length}개 프로젝트</span></div>
                  <AnimatedBar count={skill.projects.length} delay={index * 0.04} className={styles.smallTrack} />
                  <div className={styles.evidence} aria-label={`${skill.name} 사용 프로젝트`}>
                    {skill.projects.map((id) => <a key={id} href={skillProjects[id].href} target="_blank" rel="noreferrer">{skillProjects[id].title} ↗<span className="sr-only"> (새 창)</span></a>)}
                  </div>
                </li>
              ))}
            </ul>
          </Motion.section>
        ))}
      </div>
      <div className={styles.bottomLink}><span>이 기술들로 어떤 걸 만들었는지 궁금하다면</span><Link to="/projects">프로젝트 살펴보기 →</Link></div>
    </div>
  )
}
