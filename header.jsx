import { Link, useNavigate } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header({ dark, onToggleTheme, bookmarkCount, onSearch }) {
  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>🇮🇳</div>
          <div>
            <div className={styles.logoName}>Sarkari Sahayak</div>
            <div className={styles.logoSub}>Government Services Navigator</div>
          </div>
        </Link>

        <div className={styles.actions}>
          <Link to="/saved" className={styles.savedBtn}>
            🔖 Saved ({bookmarkCount})
          </Link>
          <Link to="/about" className={styles.aboutBtn}>
            About
          </Link>
          <button className={styles.themeBtn} onClick={onToggleTheme} aria-label="Toggle theme">
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  )
}
