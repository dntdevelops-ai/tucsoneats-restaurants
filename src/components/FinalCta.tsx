import Link from 'next/link'
import styles from './FinalCta.module.css'

export default function FinalCta() {
  return (
    <section className={styles.section}>
      <svg className={styles.grid} viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g stroke="white" strokeWidth="0.5" fill="none">
          {[80, 160, 240, 320].map(y => <line key={y} x1="0" y1={y} x2="800" y2={y} />)}
          {[80, 160, 240, 320, 400, 480, 560, 640, 720].map(x => <line key={x} x1={x} y1="0" x2={x} y2="400" />)}
        </g>
      </svg>
      <div className={styles.content}>
        <span className={styles.label}>Ready to grow?</span>
        <h2 className={styles.title}>
          You didn&apos;t open a restaurant<br />to make DoorDash rich. Let&apos;s fix that.
        </h2>
        <p className={styles.body}>
          Apply in 10 minutes. Get approved in 48 hours. Keep more of what you earn — starting with 30 days at 0% commission.
        </p>
        <div className={styles.actions}>
          <Link href="/apply" className={styles.btnWhite}>
            Start Your Application →
          </Link>
          <a href="tel:+15207005000" className={styles.btnGhost}>
            Talk to Us First
          </a>
        </div>
        <p className={styles.disclaimer}>
          0% commission for your first 30 days · No contracts · Real local support
        </p>
      </div>
    </section>
  )
}
