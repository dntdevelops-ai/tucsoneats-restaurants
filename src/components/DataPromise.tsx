import styles from "./DataPromise.module.css";

const bullets = [
  "Your customer contact list",
  "Your order history and insights",
  "Your regulars — they know your name, not ours",
];

const stats = [
  {
    number: "100%",
    label: "Your customer data stays yours",
    numberClass: "statNumberWhite",
    labelClass: "statLabelPink",
  },
  {
    number: "$0",
    label: "Spent selling your data",
    numberClass: "statNumberGreen",
    labelClass: "statLabelGreenLight",
  },
  {
    number: "Never",
    label: "Used against you",
    numberClass: "statNumberAdobe",
    labelClass: "statLabelAdobeLight",
  },
];

export default function DataPromise() {
  return (
    <section id="data-promise" className={styles.section}>
      {/* Desert grid SVG overlay */}
      <svg
        className={styles.gridOverlay}
        viewBox="0 0 800 560"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Horizontal lines */}
        {[80, 160, 240, 320, 400, 480].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="800" y2={y} stroke="white" strokeWidth="0.5" />
        ))}
        {/* Vertical lines */}
        {[80, 160, 240, 320, 400, 480, 560, 640, 720].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="560" stroke="white" strokeWidth="0.5" />
        ))}
      </svg>

      <div className={styles.inner}>
        {/* Left column */}
        <div className={styles.left}>
          <span className={styles.label}>Your data. Your customers. Your business.</span>
          <h2 className={styles.heading}>
            The big platforms mine your customer data to advertise competitors to your own diners.
          </h2>
          <p className={styles.body}>
            When a customer orders through DoorDash or Uber Eats, that customer belongs to the
            platform — not to you. They use that data to retarget your regulars with ads for the
            restaurant down the street. We don&apos;t. Your customer list is your customer list. We
            never use it to market against you, build lookalike audiences, or sell insights to your
            competitors.
          </p>
          <h3 className={styles.subheading}>What you keep with TucsonEats:</h3>
          <ul className={styles.bulletList}>
            {bullets.map((text, i) => (
              <li key={i} className={styles.bulletRow}>
                <span className={styles.checkCircle} aria-hidden="true">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L4.5 8.5L11 1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className={styles.bulletText}>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column */}
        <div className={styles.right}>
          <div className={styles.card}>
            <div className={styles.blob} aria-hidden="true" />
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`${styles.statRow} ${i === 0 ? styles.statFirst : ""} ${
                  i === stats.length - 1 ? styles.statLast : ""
                }`}
              >
                <div className={`${styles.statNumber} ${styles[stat.numberClass]}`}>
                  {stat.number}
                </div>
                <div className={`${styles.statLabel} ${styles[stat.labelClass]}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
