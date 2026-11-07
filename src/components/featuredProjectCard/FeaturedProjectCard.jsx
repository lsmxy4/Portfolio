import React from 'react'
import { Link } from 'react-router-dom'
import { projectDetails } from '../../data/projectDetails'
import styles from './FeaturedProjectCard.module.scss'
import { icons } from '../../utils/icons'
import Tag from '../../components/tag/Tag'
const GRADIENT = {
  violet: styles.gradient_violet,
  emerald: styles.gradient_emerald,
  sunset: styles.gradient_sunset,
  sky: styles.gradient_sky,
  amber: styles.gradient_amber,
  rose: styles.gradient_rose,
  cyan: styles.gradient_cyan,
  orichalcum: styles.gradient_orichalcum,
}
const META_ICONS = {
  stack: icons.stack,
  calendar: icons.calendar,
  github: icons.github,
  external: icons.external,
  code: icons.code
}

const IconStar = icons.star
const IconExternal = icons.external
const IconGithub = icons.github

const FeaturedProjectCard = ({
  id,
  title,
  description,
  tags = [],
  gradient = 'violet',
  status,
  meta = [],
  demoHref = null,
  dashboardHref = null,
  codeHref = null,
  demoLabel = '사이트 보기',
  image,
  imageLight,
  imageAlt = ''
}) => {

  const gradientClass = GRADIENT[gradient] ?? GRADIENT.violet


  return (
    <article className={styles.card}>
      <div className={`${styles.visual} ${image ? styles.visualImage : gradientClass}`}>
        {image ? (
          <>
            <img src={image} alt={imageAlt || `${title} 화면 미리보기`} className={styles.darkImg} loading="lazy" decoding="async" />
            <img src={imageLight || image} alt="" className={styles.lightImg} aria-hidden="true" loading="lazy" decoding="async" />
          </>
        ) : (
          <>
            <div className={styles.placeholder}>
              <strong>{title}</strong>
              <span>프로젝트 미리보기 준비 중</span>
            </div>
          </>
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.topRow}>
          <div className={styles.tags}>
            {tags.map(({ label, variant }) => (
              <Tag variant={variant} key={label}>
                {label}
              </Tag>
            ))}
          </div>
          {status ? (
            <span
              className={`${styles.status} ${status.type == 'live' ? styles.status_live : styles.status_featured}`}
            >
              {status.type == 'live' ? <span className={styles.statusDot} aria-hidden /> : null}
              {status.label}
            </span>
          ) : null}
        </div>
        <h3 className={styles.title}>{Object.hasOwn(projectDetails, id) ? <Link className={styles.detailLink} to={`/projects/${id}`}>{title}<span className={styles.detailHint}>프로젝트 이야기 ↗</span></Link> : title}</h3>
        <p className={styles.desc}>{description}</p>
        {meta.length > 0 ? (
          <div className={styles.meta}>
            {meta.map(({ type, text }) => {
              const MetaIcon = META_ICONS[type] ?? IconStar

              return (
                <span key={`${type}-${text}`} className={styles.metaItem}>
                  <span className={styles.metaIcon}>
                    <MetaIcon />
                  </span>
                  {text}
                </span>
              )
            })}
          </div>
        ) : null}

        <div className={styles.actions}>
          {Object.hasOwn(projectDetails, id) && <Link to={`/projects/${id}`} className={`btn btn__outline ${styles.btnOutline}`}>자세히 보기 →</Link>}
          {dashboardHref && <a href={dashboardHref} target="_blank" rel="noreferrer" className={`btn btn__outline ${styles.btnOutline}`}>대시보드 ↗<span className="sr-only"> (새 창)</span></a>}
          {demoHref && demoHref !== '#' && <a href={demoHref} target="_blank" rel="noreferrer" className={`btn btn__primary ${styles.btnPrimary}`}>
            <IconExternal/>
            {demoLabel}
            <span className="sr-only"> (새 창)</span>
          </a>}
          {codeHref && codeHref !== '#' && codeHref !== 'https://github.com' && <a href={codeHref} target="_blank" rel="noreferrer" className={`btn btn__outline ${styles.btnOutline}`} aria-label={`${title} GitHub 저장소 (새 창)`}>
            <IconGithub/>
            GitHub 저장소
          </a>}
        </div>
      </div>
    </article>
  )
}

export default FeaturedProjectCard;
