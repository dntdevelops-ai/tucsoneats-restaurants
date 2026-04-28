import styles from "./NotThem.module.css";

export default function NotThem() {
  return (
    <section id="not-them" className={styles.section}>
      <div className={styles.headingGroup}>
        <span className={styles.line1}>We are not DoorDash.</span>
        <span className={styles.line2}>We are not Uber Eats.</span>
        <span className={styles.line3}>We are not interested in becoming them.</span>
      </div>

      <hr className={styles.rule} aria-hidden="true" />

      <p className={styles.tagline}>
        Those platforms were built for scale. We were built for Tucson.
      </p>
    </section>
  );
}
