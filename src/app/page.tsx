import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import NotThem from '@/components/NotThem'
import PainPoints from '@/components/PainPoints'
import ComparisonTable from '@/components/ComparisonTable'
import Calculator from '@/components/Calculator'
import Quiz from '@/components/Quiz'
import SocialProof from '@/components/SocialProof'
import DataPromise from '@/components/DataPromise'
import HowItWorks from '@/components/HowItWorks'
import Faq from '@/components/Faq'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'
import StickyBar from '@/components/StickyBar'
import styles from './page.module.css'

export default function RestaurantsPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* Ticker Bar */}
        <div className={styles.ticker} aria-hidden="true">
          <div className={styles.tickerFadeL} />
          <div className={styles.tickerFadeR} />
          <div className={styles.tickerSpotlight} />
          <div className={styles.tickerTrack}>
            {[
              { label: 'Local Restaurants', color: 'var(--green)' },
              { label: 'Fast Delivery',     color: 'var(--pink)' },
              { label: 'Fair Prices',       color: 'var(--adobe)' },
              { label: 'Built for Tucson',  color: 'var(--green)' },
              { label: 'Local Restaurants', color: 'var(--green)' },
              { label: 'Fast Delivery',     color: 'var(--pink)' },
              { label: 'Fair Prices',       color: 'var(--adobe)' },
              { label: 'Built for Tucson',  color: 'var(--green)' },
            ].map((p, i) => (
              <span key={i} className={styles.tickerItem} style={{ '--i': i % 4 } as React.CSSProperties}>
                <span className={styles.tickerDot} style={{ background: p.color, boxShadow: `0 0 8px ${p.color}` }} />
                <span className={styles.tickerLabel}>{p.label}</span>
                <span className={styles.tickerSep}>//</span>
              </span>
            ))}
          </div>
        </div>

        <NotThem />
        <PainPoints />
        <ComparisonTable />
        <Calculator />
        <Quiz />
        <SocialProof />
        <DataPromise />
        <HowItWorks />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyBar />
    </>
  )
}
