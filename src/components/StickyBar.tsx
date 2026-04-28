'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './StickyBar.module.css'

export default function StickyBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('teBarDismissed') === 'true') {
      setDismissed(true)
      return
    }
    const onScroll = () => {
      if (window.scrollY > 400) setVisible(true)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleDismiss = () => {
    setDismissed(true)
    setVisible(false)
    sessionStorage.setItem('teBarDismissed', 'true')
  }

  if (dismissed || !visible) return null

  return (
    <div className={styles.bar}>
      <p className={styles.text}>Still paying 30% commission?</p>
      <div className={styles.right}>
        <Link href="/apply" className={styles.cta}>
          Apply free — takes 10 minutes →
        </Link>
        <button
          className={styles.dismiss}
          onClick={handleDismiss}
          aria-label="Dismiss bar"
        >
          ×
        </button>
      </div>
    </div>
  )
}
