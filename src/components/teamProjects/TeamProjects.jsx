import { motion as Motion } from 'framer-motion'
import styles from './TeamProjects.module.scss'

const teamProjects = [
  {
    number: '01',
    title: 'Fresh Chain',
    description: '콜드체인 물류 서비스를 주제로 메인 웹사이트와 물류 관리 대시보드를 구현한 반응형 웹 프로젝트입니다.',
    role: '반응형 웹 · 대시보드 구현',
    team: '첫 팀 프로젝트',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    href: 'https://github.com/lsmxy4/Responsive_Logistics_KDT_3',
    accent: 'violet',
  },
  {
    number: '02',
    title: 'SmartRAD',
    description: '두 번째로 참여해 함께 완성한 팀 프로젝트입니다.',
    role: 'Team Project',
    team: '두 번째 팀 프로젝트',
    tags: [],
    href: 'https://github.com/lsmxy4/SmartRAD',
    accent: 'blue',
  },
]

const TeamProjects = () => {
  return (
    <section className={styles.section} aria-labelledby="team-projects-heading">
      <div className={`inner ${styles.inner}`}>
        <Motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className={styles.eyebrow}>Selected collaboration</span>
            <h2 id="team-projects-heading">팀 프로젝트</h2>
          </div>
          <p>처음으로 역할을 나누고 함께 고민하며<br />완성한 팀 프로젝트입니다.</p>
        </Motion.header>

        <div className={styles.projectList}>
          {teamProjects.map((project, index) => (
            <Motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className={`${styles.card} ${styles[project.accent]}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              aria-label={`${project.title} 프로젝트 보러 가기 (새 창)`}
            >
              <div className={styles.cardTop}>
                <span className={styles.number}>{project.number}</span>
                <span className={styles.team}>{project.team}</span>
              </div>
              <div className={styles.cardBody}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className={styles.cardFooter}>
                <div>
                  <span className={styles.roleLabel}>My role</span>
                  <strong>{project.role}</strong>
                </div>
                <ul className={styles.tags} aria-label="사용 기술">
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <span className={styles.arrow} aria-hidden="true">↗</span>
              </div>
            </Motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamProjects