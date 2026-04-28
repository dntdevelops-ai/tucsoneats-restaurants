'use client'

import { useEffect, useRef } from 'react'
import styles from './HowItWorks.module.css'

const steps = [
  {
    num: '01',
    dotColor: 'var(--green)',
    title: 'Apply Online',
    body: 'Complete our 5-step application in about 10 minutes. No phone tag, no in-person meetings — just a simple form from your phone or laptop.',
    timeBadge: '⏱ ~10 minutes',
    timeColor: 'var(--green)',
    timeBg: 'var(--green-light)',
  },
  {
    num: '02',
    dotColor: 'var(--pink)',
    title: 'Get Approved',
    body: 'A real human reviews your application — not an algorithm. We get back to you within 1–2 business days, often the same day.',
    timeBadge: '⏱ 1–2 business days',
    timeColor: 'var(--pink)',
    timeBg: 'rgba(212,46,126,0.08)',
  },
  {
    num: '03',
    dotColor: 'var(--adobe)',
    title: 'Go Live & Get Paid',
    body: "We'll walk you through onboarding, run a test order together, and have you live on the platform. Orders start coming in, you get paid every Friday.",
    timeBadge: '⏱ Same week',
    timeColor: 'var(--adobe)',
    timeBg: 'rgba(196,98,42,0.08)',
  },
]

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    const cards = containerRef.current?.querySelectorAll(`.${styles.step}`)
    cards?.forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" className={styles.section}>
      <span className={styles.label}>Simple process</span>
      <h2 className={styles.title}>Up and running in days, not weeks.</h2>
      <p className={styles.desc}>
        We built the simplest onboarding in the business because we know you&apos;re busy running a restaurant — not filling out paperwork.
      </p>
      <div className={styles.steps} ref={containerRef}>
        {steps.map((s, i) => (
          <div
            key={s.num}
            className={styles.step}
            style={{ '--delay': `${i * 0.15}s` } as React.CSSProperties}
          >
            <div className={styles.stepNum}>{s.num}</div>
            <div className={styles.stepDot} style={{ background: s.dotColor }} />
            <div className={styles.stepTitle}>{s.title}</div>
            <div className={styles.stepBody}>{s.body}</div>
            <span
              className={styles.stepTime}
              style={{ color: s.timeColor, background: s.timeBg }}
            >
              {s.timeBadge}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
