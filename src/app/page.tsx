import Link from 'next/link'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function RestaurantsPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* Offer Banner */}
        <div className={styles.offerBanner}>
          <span className={styles.offerTag}>Limited Time</span>
          <span className={styles.offerText}>
            <strong>0% commission</strong> for your first 30 days — no catch, no commitment.
          </span>
          <Link href="/apply" className={styles.offerCta}>Claim Offer</Link>
        </div>

        {/* Pillars */}
        <div className={styles.pillars}>
          {[
            { icon: '🏠', title: 'Local Restaurants', desc: 'Support Tucson\'s food scene' },
            { icon: '⚡', title: 'Fast Delivery',     desc: 'Real drivers, real speed' },
            { icon: '💰', title: 'Fair Prices',       desc: 'No surprise fees or surges' },
            { icon: '❤️', title: 'Built for Tucson',  desc: 'By locals, for locals' },
          ].map(p => (
            <div key={p.title} className={styles.pillar}>
              <span className={styles.pillarIcon}>{p.icon}</span>
              <div>
                <div className={styles.pillarTitle}>{p.title}</div>
                <div className={styles.pillarDesc}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <section className={styles.section} id="how-it-works">
          <span className={styles.sectionLabel}>How it works</span>
          <h2 className={styles.sectionTitle}>Up and running<br />in days, not weeks.</h2>
          <p className={styles.sectionDesc}>
            We built the simplest onboarding in the business because we know you&apos;re
            busy running a restaurant — not filling out paperwork.
          </p>
          <div className={styles.steps}>
            {[
              {
                num: '01', color: 'var(--green)',
                title: 'Apply Online',
                body: 'Complete our 5-step application in about 10 minutes. No phone tag, no in-person meetings — just a simple form from your phone or laptop.',
                time: '⏱ ~10 minutes', timeColor: 'var(--green)', timeBg: 'var(--green-light)',
              },
              {
                num: '02', color: 'var(--pink)',
                title: 'Get Approved',
                body: 'A real human reviews your application — not an algorithm. We get back to you within 1–2 business days, often the same day.',
                time: '⏱ 1–2 business days', timeColor: 'var(--pink)', timeBg: 'rgba(212,46,126,0.08)',
              },
              {
                num: '03', color: 'var(--adobe)',
                title: 'Go Live & Get Paid',
                body: 'We\'ll walk you through onboarding, run a test order together, and have you live on the platform. Orders start coming in, you get paid every Friday.',
                time: '⏱ Same week', timeColor: 'var(--adobe)', timeBg: 'rgba(196,98,42,0.08)',
              },
            ].map(s => (
              <div key={s.num} className={styles.step}>
                <div className={styles.stepNum}>{s.num}</div>
                <div className={styles.stepDot} style={{ background: s.color }} />
                <div className={styles.stepTitle}>{s.title}</div>
                <div className={styles.stepBody}>{s.body}</div>
                <span className={styles.stepTime} style={{ color: s.timeColor, background: s.timeBg }}>
                  {s.time}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* What You Get */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <span className={styles.sectionLabel}>Partner Benefits</span>
          <h2 className={styles.sectionTitle}>Everything you need.<br />Nothing you don&apos;t.</h2>
          <p className={styles.sectionDesc}>
            Every TucsonEats partner gets the full toolkit — equipment, support,
            and a payout schedule that actually works for a small business.
          </p>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitList}>
              {[
                { title: 'Restaurant App for Order Management', desc: 'Accept, track, and manage every order from a clean, simple dashboard built for busy kitchens.' },
                { title: 'Tablet & Printer (If Needed)', desc: 'We\'ll set you up with the hardware you need. No upfront cost, no equipment hassle.' },
                { title: 'On-Site or Remote Onboarding', desc: 'A real TucsonEats team member walks you through setup — in person or via video call, your choice.' },
                { title: 'Test Order Before Going Live', desc: 'We place a real test order together so you feel confident before your first customer order comes in.' },
                { title: 'Ongoing Support — Real Humans', desc: 'Call us. We pick up. No ticket queues, no offshore chat bots, no waiting 3 days for a reply.' },
              ].map(b => (
                <div key={b.title} className={styles.benefitItem}>
                  <div className={styles.benefitCheck}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className={styles.benefitTitle}>{b.title}</div>
                    <div className={styles.benefitDesc}>{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.payoutCard}>
              <div className={styles.payoutLabel}>Payouts</div>
              <div className={styles.payoutTitle}>Get paid every Friday.</div>
              <div className={styles.payoutSub}>
                No net-30, no waiting weeks to see your money. Stripe deposits hit your bank
                account weekly, like clockwork.
              </div>
              <div className={styles.payoutDay}>
                <div>
                  <div className={styles.payoutDayName}>Every Friday</div>
                  <div className={styles.payoutDayDesc}>by 2:00 PM Arizona Time via Stripe</div>
                </div>
              </div>
              <div className={styles.needList}>
                <div className={styles.needListTitle}>What you&apos;ll need to apply</div>
                {['Bank account information', 'Menu with current prices', 'High-resolution restaurant logo'].map(n => (
                  <div key={n} className={styles.needItem}>
                    <span className={styles.needDot} />
                    {n}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className={styles.section} id="pricing">
          <span className={styles.sectionLabel}>Transparent Pricing</span>
          <h2 className={styles.sectionTitle}>No hidden fees.<br />No fine print.</h2>
          <p className={styles.sectionDesc}>
            We believe local restaurants deserve to know exactly what they&apos;re paying.
            Here&apos;s our simple, honest fee structure.
          </p>
          <div className={styles.feesGrid}>
            <div className={`${styles.feeCard} ${styles.feeCardFeatured}`}>
              <div className={styles.feeBadge}>Start Here</div>
              <div className={styles.feePeriod}>First 30 Days</div>
              <div className={styles.feeAmount}>0%</div>
              <div className={styles.feeDesc}>Zero commission on every order for your first full month. No conditions, no tricks — just a chance to see what TucsonEats can do.</div>
            </div>
            <div className={styles.feeCard}>
              <div className={styles.feePeriod}>Ongoing Commission</div>
              <div className={styles.feeAmount} style={{ color: 'var(--green)' }}>Fair</div>
              <div className={styles.feeDesc}>After your first 30 days, our rate is competitive and always disclosed upfront. No surprise deductions. Contact us for your restaurant&apos;s specific rate.</div>
            </div>
            <div className={styles.feeCard}>
              <div className={styles.feePeriod}>No Hidden Fees</div>
              <div className={styles.feeAmount}>$0</div>
              <div className={styles.feeDesc}>No signup fee. No monthly subscription. No equipment rental. No cancellation penalty. What you see is what you get.</div>
            </div>
          </div>
          <div className={styles.feeNote}>
            💬 <strong>Want to talk numbers first?</strong> Email{' '}
            <a href="mailto:hungry@tucsoneats.com">hungry@tucsoneats.com</a> or call{' '}
            <a href="tel:+15207005000">(520) 700-5000</a> — we&apos;ll walk you through
            your specific rate before you apply.
          </div>
        </section>

        <Faq />

        {/* CTA */}
        <section className={styles.ctaSection}>
          <svg className={styles.ctaGrid} viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g stroke="white" strokeWidth="0.5" fill="none">
              {[80,160,240,320].map(y => <line key={y} x1="0" y1={y} x2="800" y2={y}/>)}
              {[80,160,240,320,400,480,560,640,720].map(x => <line key={x} x1={x} y1="0" x2={x} y2="400"/>)}
            </g>
          </svg>
          <div className={styles.ctaContent}>
            <span className={styles.ctaLabel}>Ready to grow?</span>
            <h2 className={styles.ctaTitle}>Join Tucson&apos;s local<br />food delivery movement.</h2>
            <p className={styles.ctaDesc}>
              Stop splitting your margin with platforms that see Tucson as a data point.
              Partner with a team that calls this city home.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/apply" className={styles.btnWhite}>Start Your Application →</Link>
              <a href="tel:+15207005000" className={styles.btnOutlineWhite}>Talk to Us First</a>
            </div>
            <p className={styles.ctaDisclaimer}>
              0% commission for your first 30 days · No contracts · Real local support
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
