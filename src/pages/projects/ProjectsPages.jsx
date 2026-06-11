import React, { useMemo, useState } from 'react'
import styles from './ProjectsPages.module.scss'
import FeaturedProjectCard from '../../components/featuredProjectCard/FeaturedProjectCard'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import { projectFilters, projectsPageItems } from '../../utils/projectsPageData'
import { projectItemMotion, projectItemTransition } from '../../utils/aniValue'
const ProjectsPages = () => {

  const [filter, setFilter] = useState('all')

  const shouldReduceMotion = useReducedMotion()

  const visible = useMemo(() => {

    if (filter == 'all') return projectsPageItems

    return projectsPageItems.filter((p) => p.categories.includes(filter))

  }, [filter])

  return (
    <div className={styles.project_section}>
      <div className="inner">
        <header className={styles.hero}>
          <span className="badge badge__primary badge__center">Featured work</span>
          <h1 className={styles.title}>모든 프로잭트</h1>
          <p className={styles.txt}>
            제가 만들었던 모든 프로잭트들 입니다. <br />
            이곳에서 한눈에 볼수 있으며 카태고리별 나누어서 볼수도 있습니다.
          </p>
        </header>

        {/* 필터 섹션 */}
        <div className={styles.filters} role='tablist'>
          {projectFilters.map(({ id, label }) => (
            <button
              key={id}
              role='tab'
              aria-selected={filter === id}
              onClick={() => setFilter(id)}
              className={`${styles.filterBtn} ${filter === id ? styles.filterBtnActive : ''}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* 프로젝트 그리드 */}
        {visible.length === 0 ? (
          <p className="txt-center">No project in this category yet</p>
        ) : (
          <div className={styles.grid}>
            {visible.map((project, index) => (
              <Motion.div
                layout={!shouldReduceMotion}
                {...projectItemMotion}
                transition={{ ...projectItemTransition, delay: index * 0.05 }}
                key={project.id}
              >
                <FeaturedProjectCard {...project} />
              </Motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectsPages;