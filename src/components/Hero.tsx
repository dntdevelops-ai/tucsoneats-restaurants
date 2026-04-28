import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Desert grid SVG — behind overlay */}
      <svg
        className={styles.grid}
        viewBox="0 0 800 560"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Horizontal lines */}
        <line x1="0" y1="80"  x2="800" y2="80"  stroke="white" strokeWidth="0.5" />
        <line x1="0" y1="160" x2="800" y2="160" stroke="white" strokeWidth="0.5" />
        <line x1="0" y1="240" x2="800" y2="240" stroke="white" strokeWidth="0.5" />
        <line x1="0" y1="320" x2="800" y2="320" stroke="white" strokeWidth="0.5" />
        <line x1="0" y1="400" x2="800" y2="400" stroke="white" strokeWidth="0.5" />
        <line x1="0" y1="480" x2="800" y2="480" stroke="white" strokeWidth="0.5" />
        {/* Vertical lines */}
        <line x1="80"  y1="0" x2="80"  y2="560" stroke="white" strokeWidth="0.5" />
        <line x1="160" y1="0" x2="160" y2="560" stroke="white" strokeWidth="0.5" />
        <line x1="240" y1="0" x2="240" y2="560" stroke="white" strokeWidth="0.5" />
        <line x1="320" y1="0" x2="320" y2="560" stroke="white" strokeWidth="0.5" />
        <line x1="400" y1="0" x2="400" y2="560" stroke="white" strokeWidth="0.5" />
        <line x1="480" y1="0" x2="480" y2="560" stroke="white" strokeWidth="0.5" />
        <line x1="560" y1="0" x2="560" y2="560" stroke="white" strokeWidth="0.5" />
        <line x1="640" y1="0" x2="640" y2="560" stroke="white" strokeWidth="0.5" />
        <line x1="720" y1="0" x2="720" y2="560" stroke="white" strokeWidth="0.5" />
      </svg>

      {/* Video background */}
      <video
        className={styles.videoBg}
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay */}
      <div className={styles.overlay} />

      {/* Left content */}
      <div className={styles.content}>
        {/* Badge */}
        <div className={`${styles.badge} ${styles.animBadge}`}>
          <span className={styles.badgeDot} />
          <span className={styles.badgeText}>
            Now accepting restaurant partners in Tucson
          </span>
        </div>

        {/* Headline */}
        <h1 className={styles.headline}>
          <span className={`${styles.headlineLine} ${styles.animLine1}`}>
            They take 30%.
          </span>
          <br />
          <span className={`${styles.headlineLine} ${styles.animLine2}`}>
            We take less and{' '}
            <em style={{ color: 'var(--pink)', fontStyle: 'normal' }}>
              actually answer the phone.
            </em>
          </span>
        </h1>

        {/* Subhead */}
        <p className={`${styles.sub} ${styles.animSub}`}>
          Local restaurants. Real drivers. Fair prices.
        </p>

        {/* Body copy */}
        <p className={`${styles.body} ${styles.animBody}`}>
          Stop paying 30% to out-of-town platforms that don&apos;t know your
          city. TucsonEats is built right here — lower fees, faster payouts,
          and a team that actually answers the phone.
        </p>

        {/* CTAs */}
        <div className={`${styles.actions} ${styles.animActions}`}>
          <Link href="/apply" className={styles.btnPrimary}>
            Start Your Application →
          </Link>
          <a href="#calculator" className={styles.btnGhost}>
            Calculate My Savings
          </a>
        </div>
      </div>

      {/* Right stats */}
      <div className={styles.stats}>
        <div className={`${styles.stat} ${styles.animStat1}`}>
          <div className={`${styles.statNum} ${styles.pink}`}>0%</div>
          <div className={styles.statLabel}>
            Commission<br />First 30 Days
          </div>
        </div>
        <div className={`${styles.stat} ${styles.animStat2}`}>
          <div className={`${styles.statNum} ${styles.greenAccent}`}>48h</div>
          <div className={styles.statLabel}>
            Application<br />Review Time
          </div>
        </div>
        <div className={`${styles.stat} ${styles.animStat3}`}>
          <div className={styles.statNum}>Fri</div>
          <div className={styles.statLabel}>
            Weekly<br />Payouts
          </div>
        </div>
      </div>
    </section>
  );
}
