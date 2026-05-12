import React from 'react';
import styles from './CategoryCard.module.scss';

const CategoryCard = ({ title, subtitle, version, icon, iconColor, bgGlow }) => {
    return (
        <article 
            className={styles.card} 
            style={{ 
                '--icon-color': iconColor,
                '--bg-glow': bgGlow 
            }}
        >
            <div className={styles.iconBox}>
                {icon && (
                    <img 
                        src={icon} 
                        alt={`${title} icon`} 
                        className={styles.iconImage} 
                    />
                )}
            </div>
            
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                {version && <span className={styles.version}>{version}</span>}
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
        </article>
    );
};

export default CategoryCard;