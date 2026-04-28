import styles from './PainPoints.module.css';

interface PainPoint {
  feel: string;
  answer: string;
  headline: string;
}

const painPoints: PainPoint[] = [
  {
    feel: "I'm paying 30% and they've never once called me.",
    answer: "Fair commission. Real humans. Phone calls get answered.",
    headline: "We charge less and pick up the phone. That's the whole pitch.",
  },
  {
    feel: "My regulars don't even know they're ordering from a third-party. The app gets the loyalty, not me.",
    answer: "Your restaurant name is front and center — always. We drive loyalty to you, not to us.",
    headline: "Your customers should remember your name. Not ours.",
  },
  {
    feel: "I get paid weeks later. Meanwhile I bought the ingredients and paid my staff already.",
    answer: "Paid every Friday. No net-30. No float. Your money, your timeline.",
    headline: "You bought those ingredients Tuesday. You should have that money by Friday.",
  },
  {
    feel: "They cut my visibility unless I pay for ads. I'm competing against chains with budgets I'll never have.",
    answer: "No ad auctions. No pay-to-play ranking. Every local restaurant starts equal.",
    headline: "We don't sell your search results to the highest bidder.",
  },
  {
    feel: "A bad review from a delivery problem they caused tanks my rating — and I can't appeal it.",
    answer: "Delivery issues are our problem, not your rating. We separate delivery quality from food quality.",
    headline: "If the driver dropped the bag, that's on us — not your 5-star rating.",
  },
  {
    feel: "I signed a contract I didn't understand and now I'm locked in with penalties if I leave.",
    answer: "No contracts. No cancellation fees. Leave whenever you want.",
    headline: "No contracts. If we're not the right fit, we'll shake hands and part ways. No invoice.",
  },
];

export default function PainPoints() {
  return (
    <section id="pain-points" className={styles.section}>
      <p className={styles.label}>The honest truth</p>
      <h2 className={styles.heading}>Sound familiar?</h2>
      <p className={styles.desc}>
        Six things every local restaurant owner has said about the national
        platforms. And what we do differently.
      </p>

      <div className={styles.grid}>
        {painPoints.map((item, i) => (
          <article key={i} className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.cellFeel}>
                <span className={styles.labelFeel}>What they feel</span>
                <p className={styles.feelText}>{item.feel}</p>
              </div>
              <div className={styles.cellAnswer}>
                <span className={styles.labelAnswer}>TucsonEats</span>
                <p className={styles.answerText}>{item.answer}</p>
              </div>
            </div>
            <div className={styles.cardBottom}>
              <p className={styles.cardHeadline}>{item.headline}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
