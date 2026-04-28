'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Calculator.module.css';

export default function Calculator() {
  const [orders, setOrders] = useState(300);
  const [aov, setAov] = useState(28);
  const [commission, setCommission] = useState(30);

  const theyPay = Math.round(orders * aov * (commission / 100));
  const wePay = Math.round(orders * aov * 0.14);
  const youKeep = theyPay - wePay;
  const annualSavings = youKeep * 12;

  return (
    <section id="calculator" className={styles.section}>
      <p className={styles.sectionLabel}>See the math</p>
      <h2 className={styles.heading}>
        What are the national platforms actually costing you?
      </h2>
      <p className={styles.desc}>
        Enter your numbers. We'll show you the math they don't want you to see.
      </p>

      <div className={styles.card}>
        {/* Slider 1 */}
        <div className={styles.sliderRow}>
          <div className={styles.sliderLabelRow}>
            <span className={styles.sliderLabel}>Monthly delivery orders</span>
            <span className={styles.sliderValue}>{orders} orders</span>
          </div>
          <input
            type="range"
            min={50}
            max={2000}
            step={10}
            value={orders}
            onChange={(e) => setOrders(Number(e.target.value))}
            className={styles.rangeInput}
          />
        </div>

        {/* Slider 2 */}
        <div className={styles.sliderRow}>
          <div className={styles.sliderLabelRow}>
            <span className={styles.sliderLabel}>Average order value</span>
            <span className={styles.sliderValue}>${aov}</span>
          </div>
          <input
            type="range"
            min={10}
            max={100}
            step={1}
            value={aov}
            onChange={(e) => setAov(Number(e.target.value))}
            className={styles.rangeInput}
          />
        </div>

        {/* Slider 3 */}
        <div className={styles.sliderRow}>
          <div className={styles.sliderLabelRow}>
            <span className={styles.sliderLabel}>Current platform commission</span>
            <span className={styles.sliderValue}>{commission}%</span>
          </div>
          <input
            type="range"
            min={15}
            max={35}
            step={1}
            value={commission}
            onChange={(e) => setCommission(Number(e.target.value))}
            className={styles.rangeInput}
          />
        </div>

        {/* Results Grid */}
        <div className={styles.resultsGrid}>
          {/* Card 1 — Red */}
          <div className={`${styles.resultCard} ${styles.cardRed}`}>
            <p className={`${styles.resultLabel} ${styles.labelRed}`}>YOU PAY THEM</p>
            <p className={`${styles.resultAmount} ${styles.amountRed}`}>
              ${theyPay.toLocaleString()}/mo
            </p>
            <p className={styles.resultSublabel}>At {commission}% commission</p>
          </div>

          {/* Card 2 — Green */}
          <div className={`${styles.resultCard} ${styles.cardGreen}`}>
            <p className={`${styles.resultLabel} ${styles.labelGreen}`}>WITH TUCSONEATS</p>
            <p className={`${styles.resultAmount} ${styles.amountGreen}`}>
              ${wePay.toLocaleString()}/mo
            </p>
            <p className={styles.resultSublabel}>Estimated at 14%</p>
          </div>

          {/* Card 3 — Blue */}
          <div className={`${styles.resultCard} ${styles.cardBlue}`}>
            <p className={`${styles.resultLabel} ${styles.labelBlue}`}>YOU KEEP EXTRA</p>
            <p className={`${styles.resultAmount} ${styles.amountBlue}`}>
              ${youKeep.toLocaleString()}/mo
            </p>
            <p className={styles.resultSublabel}>Back in your pocket</p>
          </div>
        </div>

        {/* Annual savings callout */}
        <p className={styles.annualText}>
          That's ${annualSavings.toLocaleString()} extra per year — back in your pocket.
        </p>
        <p className={styles.finePrint}>
          TucsonEats rate estimated at 14%. Actual rate disclosed before you sign — no surprises.
          Contact us for your specific rate.
        </p>

        <Link href="/apply" className={styles.ctaButton}>
          Start earning more — apply free →
        </Link>
      </div>
    </section>
  );
}
