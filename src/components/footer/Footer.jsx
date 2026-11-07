import { Link } from 'react-router-dom'
import { profile } from '../../data/profile'
import styles from './Footer.module.scss'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <Link to="/" className={styles.logo}>sdh<span>.</span></Link>
          <p>배우고, 연결하고, 만들어갑니다.</p>
        </div>
        <nav aria-label="푸터 링크">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
            <span className="sr-only"> (새 창)</span>
          </a>
          <a href={`mailto:${profile.email}`}>
            Email ↗
          </a>
          <Link to="/projects">
            Projects ↗
          </Link>
        </nav>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>BUILT WITH REACT & VITE</span>
      </div>
    </footer>
  );
}
