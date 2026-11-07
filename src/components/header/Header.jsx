import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/useTheme'
import { navItems } from '../../utils/nav'
import { profile } from '../../data/profile'
import styles from './Header.module.scss'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const { pathname } = useLocation()
  const [openPath, setOpenPath] = useState(null)
  const open = openPath === pathname
  const menuRef = useRef(null)
  const closeMenu = () => setOpenPath(null)
  useEffect(() => {
    const query = window.matchMedia('(min-width: 900px)')
    const closeOnDesktop = (event) => { if (event.matches) setOpenPath(null) }
    query.addEventListener('change', closeOnDesktop)
    return () => query.removeEventListener('change', closeOnDesktop)
  }, [])
  return <header className={styles.header}>
    <a className="skip-link" href="#main-content">본문으로 바로가기</a>
    <div className={styles.inner}>
      <NavLink to="/" end className={styles.logo} onClick={closeMenu} aria-label="신동환 포트폴리오 홈">sdh<span>.</span><small>PORTFOLIO</small></NavLink>
      <nav className={styles.nav} aria-label="주요 메뉴">{navItems.map(({ to, label }) => <NavLink key={to} to={to} className={({ isActive }) => isActive ? styles.active : undefined}>{label}</NavLink>)}</nav>
      <div className={styles.actions}>
        <a className={styles.github} href={profile.github} target="_blank" rel="noreferrer">GitHub ↗<span className="sr-only"> (새 창)</span></a>
        <button className={styles.themeToggle} type="button" onClick={toggleTheme} aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">{theme === 'dark' ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></> : <path d="M20 15a8.5 8.5 0 0 1-11-11A8.5 8.5 0 1 0 20 15Z" />}</svg></button>
        <div className={styles.mobileMenu} onKeyDown={(event) => { if (event.key === 'Escape' && open) { closeMenu(); menuRef.current?.focus() } }} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) closeMenu() }}>
          <button ref={menuRef} type="button" className={styles.menuToggle} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpenPath(open ? null : pathname)}>{open ? '닫기' : '메뉴'} <span aria-hidden="true">{open ? '−' : '+'}</span></button>
          <nav id="mobile-navigation" hidden={!open} className={styles.mobileNav} aria-label="모바일 주요 메뉴">{navItems.map(({ to, label }) => <NavLink key={to} to={to} onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : undefined}>{label}<span aria-hidden="true">↗</span></NavLink>)}</nav>
        </div>
      </div>
    </div>
  </header>
}
