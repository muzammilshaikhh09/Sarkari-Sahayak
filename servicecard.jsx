import { CATEGORIES } from '../data/services'
import styles from './ServiceCard.module.css'

export default function ServiceCard({ service, isSaved, onToggleSave }) {
  const cat = CATEGORIES.find(c => c.id === service.cat)

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.meta}>
          <span className={styles.catIcon} aria-hidden="true">{cat?.icon}</span>
          <span className={styles.tag}>{service.tag}</span>
        </div>
        <button
          className={`${styles.bookmark} ${isSaved ? styles.saved : ''}`}
          onClick={() => onToggleSave(service.id)}
          aria-label={isSaved ? 'Remove bookmark' : 'Bookmark this service'}
        >
          {isSaved ? '🔖' : '🏷️'}
        </button>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{service.title}</h3>
        <p className={styles.desc}>{service.desc}</p>
      </div>

      <a
        className={styles.link}
        href={service.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Official Portal ↗
      </a>
    </div>
  )
}
