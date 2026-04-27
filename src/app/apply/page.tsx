import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ApplyForm from '@/components/ApplyForm'
import styles from './apply.module.css'

export const metadata: Metadata = {
  title: 'Apply to Partner | TucsonEats Restaurant Portal',
  description: 'Apply to become a TucsonEats restaurant partner. 0% commission for your first 30 days.',
}

export default function ApplyPage() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.sidebar}>
          <span className={styles.label}>Restaurant Application</span>
          <h1 className={styles.title}>Let&apos;s get<br />you on the map.</h1>
          <p className={styles.desc}>
            Fill out the form and we&apos;ll review your application within
            1–2 business days — often the same day.
          </p>
          <div className={styles.perks}>
            {[
              { icon: '✓', text: '0% commission for your first 30 days' },
              { icon: '✓', text: 'Weekly Friday payouts via Stripe' },
              { icon: '✓', text: 'Equipment provided at no cost' },
              { icon: '✓', text: 'Real onboarding from a real human' },
              { icon: '✓', text: 'No contracts, cancel anytime' },
            ].map(p => (
              <div key={p.text} className={styles.perk}>
                <span className={styles.perkIcon}>{p.icon}</span>
                <span>{p.text}</span>
              </div>
            ))}
          </div>
          <div className={styles.contact}>
            <p>Questions? We&apos;re here.</p>
            <a href="mailto:hungry@tucsoneats.com">hungry@tucsoneats.com</a>
            <a href="tel:+15207005000">(520) 700-5000</a>
          </div>
        </div>

        <div className={styles.formArea}>
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Restaurant Application</h2>
            <p className={styles.formSub}>All fields marked * are required. Takes about 5 minutes.</p>
            <ApplyForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
