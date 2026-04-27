'use client'
import { useState } from 'react'
import styles from './Faq.module.css'

const faqs = [
  {
    q: 'How long does approval take?',
    a: 'Most applications are reviewed within 1–2 business days. We often get back to you the same day. You\'ll receive an email confirmation either way — no ghosting, ever.',
  },
  {
    q: 'What are the fees after the first 30 days?',
    a: 'Our commission is competitive and fully transparent — disclosed before you sign anything. It varies based on order volume and delivery zone. Email us and we\'ll give you your specific rate directly, no pressure.',
  },
  {
    q: 'When and how do I get paid?',
    a: 'Every Friday by 2:00 PM Arizona Time via Stripe direct deposit. Funds typically clear same day or next business day depending on your bank. No delays, no holds.',
  },
  {
    q: 'Do I need special equipment?',
    a: 'If you don\'t have a tablet or receipt printer, we\'ll provide them. You\'ll manage orders through our restaurant app, which works on any modern tablet or desktop browser.',
  },
  {
    q: 'What areas of Tucson do you serve?',
    a: 'We\'re currently serving central and midtown Tucson and expanding quickly. If you\'re on the edge of our zone, apply anyway — we may already cover you or will soon. We\'ll let you know immediately.',
  },
  {
    q: 'Can I pause or cancel my partnership?',
    a: 'Absolutely. There\'s no contract lock-in. You can pause deliveries anytime from your dashboard or by calling us. No cancellation fees, no hard feelings. We want partners who want to be here.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className={styles.section} id="faq">
      <div className={styles.header}>
        <span className={styles.label}>Common Questions</span>
        <h2 className={styles.title}>Straight answers.<br />No runaround.</h2>
        <p className={styles.desc}>
          Got questions? We&apos;ve heard them all. Here are the ones restaurants ask most.
        </p>
      </div>

      <div className={styles.list} role="list">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}
            role="listitem"
          >
            <button
              className={styles.question}
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span>{faq.q}</span>
              <span className={styles.chevron} aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <div className={styles.answer} aria-hidden={open !== i}>
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
