import React from 'react'
import styles from './CategoryCard.module.scss'
import ProgressBar from '../progressBar/ProgressBar'
const CategoryCard = ({
    title,
    accent = 'primary',
    skills = []
}) => {
    return (
        <article className={styles.card}>
            <h3 className={styles.title}>
                {title}
            </h3>
            <div className={styles.list}>
                {skills.map(({ name, percent }) => (
                    <ProgressBar
                        key={name}
                        label={name}
                        percent={percent}
                        accent={accent}
                    />
                ))}
            </div>
        </article>
    )
}

export default CategoryCard