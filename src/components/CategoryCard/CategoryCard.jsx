import React, { useState, useEffect } from 'react';
import styles from './CategoryCard.module.scss';

const CategoryCard = ({ title, subtitle, version, icon, iconLight, iconColor, bgGlow }) => {
    const [isLightMode, setIsLightMode] = useState(false);

    useEffect(() => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setIsLightMode(currentTheme === 'light');

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    const updatedTheme = document.documentElement.getAttribute('data-theme');
                    setIsLightMode(updatedTheme === 'light');
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });

        return () => observer.disconnect();
    }, []);

    const currentIcon = (isLightMode && iconLight) ? iconLight : icon;

    return (
        <article
            className={styles.card}
            style={{
                '--icon-color': iconColor,
                '--bg-glow': bgGlow
            }}
        >
            <div className={styles.iconBox}>
                {currentIcon && (
                    <img
                        src={currentIcon}
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