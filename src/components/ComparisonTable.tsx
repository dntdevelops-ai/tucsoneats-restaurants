import React from 'react'
import Link from 'next/link'
import styles from './ComparisonTable.module.css'

type CellVariant = 'bad' | 'warn' | 'good'

interface Row {
  feature: string
  dd: { text: string; variant: CellVariant }
  ue: { text: string; variant: CellVariant }
  te: string
}

interface Group {
  heading: string
  rows: Row[]
}

const PREFIX: Record<CellVariant, string> = { bad: '✗', warn: '~', good: '✓' }

const groups: Group[] = [
  {
    heading: 'Commission',
    rows: [
      { feature: 'Entry-level rate', dd: { text: '15% Basic — lowest visibility, customers pay highest fees', variant: 'warn' }, ue: { text: '20% Lite — raised from 15% in March 2026', variant: 'bad' }, te: 'Fair % — disclosed before you sign. No tiers.' },
      { feature: 'Standard rate', dd: { text: '25–30% — required for meaningful visibility', variant: 'bad' }, ue: { text: '25–30% + 5% Uber One surcharge on 60–70% of orders', variant: 'bad' }, te: 'One rate. No tiers that punish you.' },
      { feature: 'Effective total cost', dd: { text: '30–40% after marketing, refunds, processing', variant: 'bad' }, ue: { text: '30–40% — fees stack quickly', variant: 'bad' }, te: 'What we say is what you pay.' },
    ],
  },
  {
    heading: 'Payouts',
    rows: [
      { feature: 'Payment schedule', dd: { text: 'Weekly — up to 7 days behind', variant: 'bad' }, ue: { text: 'Weekly — timing varies by bank', variant: 'bad' }, te: 'Every Friday by 2pm AZ time via Stripe' },
    ],
  },
  {
    heading: 'Contracts',
    rows: [
      { feature: 'Lock-in', dd: { text: 'No termination fee, but rate hikes can happen with notice', variant: 'warn' }, ue: { text: 'Raised rates 5% in March 2026 with 30 days notice', variant: 'bad' }, te: 'No contract. No cancellation fee. Leave any time.' },
    ],
  },
  {
    heading: 'Visibility',
    rows: [
      { feature: 'Search ranking', dd: { text: 'Pay-to-play. Chains outbid you.', variant: 'bad' }, ue: { text: 'Higher tiers get better placement.', variant: 'bad' }, te: 'No ad auctions. Your food competes on merit.' },
    ],
  },
  {
    heading: 'Customer Data',
    rows: [
      { feature: 'Who owns it', dd: { text: 'DoorDash owns it. They retarget your diners.', variant: 'bad' }, ue: { text: 'Uber owns transaction history and behavioral data.', variant: 'bad' }, te: 'Your customers are yours. We never use your data against you.' },
    ],
  },
  {
    heading: 'Reputation',
    rows: [
      { feature: 'Delivery complaints', dd: { text: 'Refunds deducted from your payout — even if driver caused it.', variant: 'bad' }, ue: { text: 'Driver errors hit your account balance and store rating.', variant: 'bad' }, te: 'Delivery issues are our problem. Your rating reflects your food.' },
    ],
  },
  {
    heading: 'Support',
    rows: [
      { feature: 'Getting help', dd: { text: 'Ticket system. Chat bots. Hours to respond.', variant: 'bad' }, ue: { text: 'Help center + tickets. Account reps for chains only.', variant: 'bad' }, te: 'Call (520) 700-5000. We pick up.' },
    ],
  },
  {
    heading: "Who They're Built For",
    rows: [
      { feature: 'Priority', dd: { text: 'Publicly traded. Optimized for investor returns.', variant: 'bad' }, ue: { text: 'Publicly traded. Raised fees March 2026.', variant: 'bad' }, te: 'Private. Built in Tucson. Optimized for your margin.' },
    ],
  },
]

export default function ComparisonTable() {
  return (
    <section id="pricing" className={styles.section}>
      <span className={styles.label}>Transparent comparison</span>
      <h2 className={styles.title}>The numbers they don&apos;t want you to see.</h2>
      <p className={styles.desc}>All data from published platform pricing pages, verified April 2026.</p>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.thEmpty} />
              <th className={styles.thCompetitor}>DoorDash</th>
              <th className={styles.thCompetitor}>Uber Eats</th>
              <th className={styles.thTe}>
                TucsonEats
                <span className={styles.teBadge}>Built here</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {groups.map(group => (
              <React.Fragment key={group.heading}>
                <tr className={styles.groupRow}>
                  <td colSpan={4} className={styles.groupCell}>{group.heading}</td>
                </tr>
                {group.rows.map((row, ri) => (
                  <tr key={ri} className={styles.dataRow}>
                    <td className={styles.featureCell}>{row.feature}</td>
                    <td className={`${styles.competitorCell} ${styles[row.dd.variant]}`}>
                      {PREFIX[row.dd.variant]} {row.dd.text}
                    </td>
                    <td className={`${styles.competitorCell} ${styles[row.ue.variant]}`}>
                      {PREFIX[row.ue.variant]} {row.ue.text}
                    </td>
                    <td className={styles.teCell}>✓ {row.te}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.footnote}>
        Sources: DoorDash Merchant Center, Uber Help Center, Restaurant Dive (March 2026), Rezku (April 2026). Commission ranges reflect published tier pricing as of April 2026.
      </p>

      <div className={styles.ctaBar}>
        <p className={styles.ctaBarText}>You&apos;ve seen their numbers. Now see yours.</p>
        <Link href="#calculator" className={styles.ctaBarBtn}>
          Calculate my savings →
        </Link>
      </div>
    </section>
  )
}
