import styles from "./SocialProof.module.css";

const testimonials = [
  {
    quote:
      "I was paying over $4,000 a month in DoorDash fees. TucsonEats costs me less than my electricity bill — and someone actually answered when I called.",
    name: "[Restaurant Name]",
    area: "Midtown Tucson",
    since: "On TucsonEats since March 2026",
  },
  {
    quote:
      "The Friday payouts changed everything for my cash flow. I used to wait two weeks to see my money. Now it's there before the weekend.",
    name: "[Restaurant Name]",
    area: "South Tucson",
    since: "On TucsonEats since February 2026",
  },
  {
    quote:
      "They onboarded me in one day. One actual human walked me through the whole thing. I've never experienced that with any other platform.",
    name: "[Restaurant Name]",
    area: "Downtown Tucson",
    since: "On TucsonEats since April 2026",
  },
];

export default function SocialProof() {
  return (
    <section id="social-proof" className={styles.section}>
      <div className={styles.intro}>
        <span className={styles.label}>What restaurant owners are saying</span>
        <h2 className={styles.heading}>Tucson restaurants are already switching.</h2>
        <p className={styles.desc}>Real owners. Real numbers. Real Tucson.</p>
      </div>

      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <article key={i} className={styles.card}>
            <div className={styles.quoteMark} aria-hidden="true">
              &ldquo;
            </div>
            <blockquote className={styles.quoteText}>{t.quote}</blockquote>
            <hr className={styles.separator} />
            <div className={styles.meta}>
              <span className={styles.restaurantName}>{t.name}</span>
              <span className={styles.area}>, {t.area}</span>
            </div>
            <p className={styles.since}>{t.since}</p>
            <div className={styles.stars} aria-label="5 out of 5 stars">
              {"★★★★★"}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
