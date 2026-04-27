import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Desert grid background */}
      <svg className={styles.grid} viewBox="0 0 800 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g stroke="white" strokeWidth="0.5" fill="none">
          {[80,160,240,320,400,480].map(y => <line key={y} x1="0" y1={y} x2="800" y2={y}/>)}
          {[80,160,240,320,400,480,560,640,720].map(x => <line key={x} x1={x} y1="0" x2={x} y2="560"/>)}
        </g>
      </svg>

      <div className={styles.pinkBlob} aria-hidden="true" />
      <div className={styles.greenBlob} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span className={styles.badgeText}>Now accepting restaurant partners in Tucson</span>
        </div>

        <h1 className={styles.headline}>
          Your kitchen.<br />
          Tucson&apos;s <em>doorstep.</em>
        </h1>

        <p className={styles.sub}>Local restaurants. Real drivers. Fair prices.</p>

        <p className={styles.body}>
          Stop paying 30% to out-of-town platforms that don&apos;t know your city.
          TucsonEats is built right here — lower fees, faster payouts, and a team
          that actually answers the phone.
        </p>

        <div className={styles.actions}>
          <Link href="/apply" className={styles.btnPrimary}>
            Start Your Application →
          </Link>
          <a href="#how-it-works" className={styles.btnOutline}>
            See How It Works
          </a>
        </div>
      </div>

      <div className={styles.stats} aria-label="Key stats">
        <div className={styles.stat}>
          <div className={`${styles.statNum} ${styles.pink}`}>0%</div>
          <div className={styles.statLabel}>Commission<br />First 30 Days</div>
        </div>
        <div className={styles.stat}>
          <div className={`${styles.statNum} ${styles.green}`}>48h</div>
          <div className={styles.statLabel}>Application<br />Review Time</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNum}>Fri</div>
          <div className={styles.statLabel}>Weekly<br />Payouts</div>
        </div>
      </div>
    </section>
  )
}
