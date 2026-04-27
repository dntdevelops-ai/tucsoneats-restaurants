'use client'
import Link from 'next/link'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        TucsonEats<span className={styles.logoAccent}>.com</span>
      </Link>
      <div className={styles.links}>
        <a href="#how-it-works" className={styles.link}>How It Works</a>
        <a href="#pricing" className={styles.link}>Pricing</a>
        <a href="#faq" className={styles.link}>FAQ</a>
        <Link href="/login" className={styles.link}>Sign In</Link>
        <Link href="/apply" className={styles.cta}>Apply Now →</Link>
      </div>
    </nav>
  )
}
