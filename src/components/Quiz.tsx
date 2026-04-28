'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Quiz.module.css';

interface Option {
  text: string;
  score: number;
}

interface Question {
  text: string;
  options: Option[];
}

const questions: Question[] = [
  {
    text: 'What commission rate does your current delivery platform charge you?',
    options: [
      { text: 'Under 20%', score: 1 },
      { text: '20–25%', score: 2 },
      { text: '26–30%', score: 3 },
      { text: 'Over 30%', score: 4 },
      { text: "I'm not sure — they never told me", score: 4 },
    ],
  },
  {
    text: 'When do you get paid for delivery orders?',
    options: [
      { text: 'Within the same week', score: 0 },
      { text: '7–14 days later', score: 1 },
      { text: '15–30 days later', score: 2 },
      { text: 'More than 30 days', score: 3 },
      { text: "It varies and I can't predict it", score: 3 },
    ],
  },
  {
    text: "Has a delivery-related complaint ever hurt your restaurant's star rating?",
    options: [
      { text: 'No, never', score: 0 },
      { text: 'Once or twice — minor', score: 1 },
      { text: 'Yes, and it frustrated me', score: 2 },
      { text: "Yes and I couldn't resolve it", score: 3 },
      { text: "I don't even check anymore", score: 3 },
    ],
  },
  {
    text: 'Do you feel like you compete fairly against chains on your delivery platform?',
    options: [
      { text: 'Yes, totally fair', score: 0 },
      { text: 'Mostly fair', score: 1 },
      { text: 'They seem to get better placement', score: 2 },
      { text: 'No — chains pay to rank above me', score: 3 },
      { text: "I've given up on platform discovery", score: 3 },
    ],
  },
  {
    text: 'Are you locked into a contract with your current delivery platform?',
    options: [
      { text: 'No contract', score: 0 },
      { text: 'Month-to-month', score: 1 },
      { text: '6-month contract', score: 2 },
      { text: '12-month or longer', score: 3 },
      { text: "Not sure — I didn't read the full terms", score: 3 },
    ],
  },
];

const highFindings = [
  '⚠ You\'re paying above-market commission for a local platform.',
  '⚠ Waiting 15+ days means you\'re financing the platform — not the other way around.',
  '⚠ Their delivery failures are hurting your reputation. That\'s not yours to absorb.',
  '⚠ You\'re competing in a rigged game — chains pay to rank above independent restaurants.',
  '⚠ You\'re locked in. TucsonEats has no contracts — leave any time, no fee.',
];

const lowFindings = [
  '✓ Your commission rate is within a reasonable range.',
  '✓ Your payout timing is working in your favor.',
  '✓ Your ratings aren\'t being damaged by delivery problems.',
  '✓ You feel you compete fairly — though that can change as platforms optimize for revenue.',
  '✓ No lock-in — you have the freedom to switch.',
];

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  const handleNext = () => {
    if (selected === null) return;

    const score = questions[currentQ].options[selected].score;
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQ === 4) {
      setCurrentQ(5);
    } else {
      setCurrentQ(currentQ + 1);
      setSelected(null);
    }
  };

  const handleRetake = () => {
    setCurrentQ(0);
    setAnswers([]);
    setSelected(null);
  };

  const totalScore = answers.reduce((sum, s) => sum + s, 0);
  const monthlyOvercharge = Math.round(300 * 28 * (totalScore / 15) * 0.16);

  return (
    <section id="quiz" className={styles.section}>
      <p className={styles.sectionLabel}>5 questions. 2 minutes.</p>
      <h2 className={styles.heading}>Are you getting a fair deal?</h2>
      <p className={styles.desc}>
        5 questions. 2 minutes. We'll tell you exactly what your current platform is costing you —
        and where it's failing you.
      </p>

      <div className={styles.card}>
        {currentQ < 5 ? (
          <>
            {/* Progress bar */}
            <div className={styles.progressTrack}>
              <div
                className={styles.progressFill}
                style={{ width: `${((currentQ + 1) / 5) * 100}%` }}
              />
            </div>

            {/* Question counter */}
            <p className={styles.questionCounter}>Question {currentQ + 1} of 5</p>

            {/* Question text */}
            <p className={styles.questionText}>{questions[currentQ].text}</p>

            {/* Options */}
            <div className={styles.optionsList}>
              {questions[currentQ].options.map((option, index) => (
                <button
                  key={index}
                  className={`${styles.optionButton} ${selected === index ? styles.optionSelected : ''}`}
                  onClick={() => setSelected(index)}
                >
                  {option.text}
                </button>
              ))}
            </div>

            {/* Next button */}
            <button
              className={styles.nextButton}
              onClick={handleNext}
              disabled={selected === null}
            >
              {currentQ === 4 ? 'See My Results →' : 'Next Question →'}
            </button>
          </>
        ) : (
          /* Results view */
          <div className={styles.results}>
            <h3 className={styles.resultsTitle}>Here's what we found:</h3>

            <div className={styles.overchargeDisplay}>
              <p className={styles.overchargeAmount}>
                -${monthlyOvercharge.toLocaleString()}/mo
              </p>
              <p className={styles.overchargeLabel}>estimated monthly overcharge</p>
            </div>

            {/* Findings list */}
            <div className={styles.findingsList}>
              {answers.map((score, index) => {
                const isHigh = score >= 2;
                return (
                  <div key={index} className={styles.findingRow}>
                    <div
                      className={`${styles.findingIcon} ${isHigh ? styles.iconRed : styles.iconGreen}`}
                    >
                      {isHigh ? '!' : '✓'}
                    </div>
                    <p
                      className={`${styles.findingText} ${isHigh ? styles.findingTextHigh : styles.findingTextLow}`}
                    >
                      {isHigh ? highFindings[index] : lowFindings[index]}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className={styles.resultsCta}>
              <Link href="/apply" className={styles.ctaButton}>
                See your personalized comparison — apply free →
              </Link>
              <button className={styles.retakeButton} onClick={handleRetake}>
                Retake the quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
