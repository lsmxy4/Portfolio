import React from 'react'
import styles from './CategoryCard.module.scss'
import ProgressBar from '../progressBar/ProgressBar'
const CategoryCard = ({
    title,
    accent = 'primary',
    skills = [],
    progress=1,

}) => {
    return (
        <article className={styles.card}>
            <h3 className={styles.title}>
                {title}
            </h3>
            <div className={styles.list}>
                {skills.map(({ name, percent,showPercent }) => (
                    <ProgressBar
                        key={name}
                        label={name}
                        percent={percent}
                        accent={accent}
                        showPercent={showPercent !==false}
                    />
                ))}
            </div>
        </article>
    )
}

export default CategoryCard