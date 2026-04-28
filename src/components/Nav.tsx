'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logoWrap}>
          <Image
            src="/logo.png"
            alt="TucsonEats"
            width={160}
            height={40}
            style={{ width: 'auto', height: '36px', objectFit: 'contain' }}
            priority
          />
        </Link>

        <div className={styles.links}>
          <Link href="#how-it-works" className={styles.link}>
            How It Works
          </Link>
          <Link href="#pricing" className={styles.link}>
            Pricing
          </Link>
          <Link href="#faq" className={styles.link}>
            FAQ
          </Link>
          <Link href="/login" className={styles.link}>
            Sign In
          </Link>
        </div>

        <Link href="/apply" className={styles.cta}>
          Apply Now →
        </Link>
      </div>
    </nav>
  );
}
