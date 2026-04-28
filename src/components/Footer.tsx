import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <div className={styles.accentRule} />
      <footer className={styles.footer}>
        <div>
          <div className={styles.logoWrap}>
            <Image src="/logo.png" alt="TucsonEats" width={140} height={36} className={styles.logoImg} />
          </div>
          <div className={styles.sub}>
            2025 · Supporting local restaurants in Tucson, Arizona
          </div>
        </div>
        <div className={styles.links}>
          <a href="/restaurants" className={styles.link}>Partner Portal</a>
          <a href="/apply" className={styles.link}>Apply Now</a>
          <a href="/login" className={styles.link}>Sign In</a>
        </div>
        <div className={styles.contact}>
          <a href="mailto:hungry@tucsoneats.com">hungry@tucsoneats.com</a>
          <a href="tel:+15207005000">(520) 700-5000</a>
          <span>2813 E Broadway Blvd, Tucson AZ 85716</span>
        </div>
      </footer>
    </>
  )
}
