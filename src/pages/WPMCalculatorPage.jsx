import React, { useState } from "react";
import { usePageMeta } from "../hooks/usePageMeta";

export default function WPMCalculatorPage() {
  usePageMeta({
    title: "WPM Calculator - Calculate Your Typing Speed & Accuracy",
    description: "Free WPM calculator tool to measure typing speed and accuracy. Calculate words per minute and performance metrics.",
    keywords: "WPM calculator, typing speed calculator, words per minute, typing metrics, calculate typing speed",
    ogTitle: "WPM Calculator - Calculate Your Typing Speed & Accuracy",
    ogDescription: "Use our free WPM calculator to measure and understand your typing metrics.",
    canonicalUrl: "https://typingtest.example.com/wpm-calculator",
  });

  const [characters, setCharacters] = useState("");
  const [seconds, setSeconds] = useState("");
  const [errors, setErrors] = useState("");

  const calculateWPM = () => {
    const charCount = parseInt(characters) || 0;
    const timeSeconds = parseInt(seconds) || 1;
    const errorCount = parseInt(errors) || 0;

    if (timeSeconds === 0) return 0;

    // Standard: 1 word = 5 characters
    const words = charCount / 5;
    const minutes = timeSeconds / 60;
    const wpm = Math.round(words / minutes);
    const adjustedWpm = Math.max(0, wpm - errorCount);

    return { wpm: adjustedWpm, accuracy: charCount > 0 ? Math.round(((charCount - errorCount) / charCount) * 100) : 0 };
  };

  const result = calculateWPM();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">WPM Calculator</h1>
        <p className="text-xl text-[var(--muted)] mb-8">
          Calculate your typing speed in words per minute (WPM) and see your accuracy score using our free calculator.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator */}
          <section className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)] h-fit">
            <h2 className="text-2xl font-bold mb-6">Calculate Your WPM</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Characters Typed</label>
                <input
                  type="number"
                  value={characters}
                  onChange={(e) => setCharacters(e.target.value)}
                  placeholder="Enter total characters typed"
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Time (in seconds)</label>
                <input
                  type="number"
                  value={seconds}
                  onChange={(e) => setSeconds(e.target.value)}
                  placeholder="Enter time in seconds"
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Errors (optional)</label>
                <input
                  type="number"
                  value={errors}
                  onChange={(e) => setErrors(e.target.value)}
                  placeholder="Enter number of errors"
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>

              {characters && seconds && (
                <div className="space-y-4 pt-4 border-t border-[var(--border)]">
                  <div className="text-center">
                    <p className="text-[var(--muted)] text-sm mb-1">Your WPM</p>
                    <p className="text-4xl font-bold text-[var(--accent)]">{result.wpm}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[var(--muted)] text-sm mb-1">Accuracy</p>
                    <p className="text-2xl font-semibold text-[var(--text)]">{result.accuracy}%</p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Information */}
          <section className="space-y-8">
            <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
              <h2 className="text-2xl font-bold mb-4">How WPM is Calculated</h2>
              <div className="bg-[var(--bg)] rounded p-4 mb-4 border border-[var(--border)]">
                <p className="font-mono text-center">WPM = (Total Characters ÷ 5) ÷ (Time in Minutes)</p>
              </div>
              <p className="text-[var(--muted)]">
                In the standard typing calculation, one "word" is defined as 5 characters (including spaces and punctuation).
                Divide total characters by 5 to get words, then divide by elapsed time in minutes.
              </p>
            </article>

            <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
              <h2 className="text-2xl font-bold mb-4">WPM Performance Levels</h2>
              <ul className="space-y-3 text-[var(--muted)]">
                <li className="flex justify-between items-center">
                  <span>Below 20 WPM</span>
                  <span className="bg-red-500/20 text-red-500 px-3 py-1 rounded text-xs font-semibold">Beginner</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>20-40 WPM</span>
                  <span className="bg-orange-500/20 text-orange-500 px-3 py-1 rounded text-xs font-semibold">Novice</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>40-60 WPM</span>
                  <span className="bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded text-xs font-semibold">Intermediate</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>60-80 WPM</span>
                  <span className="bg-blue-500/20 text-blue-500 px-3 py-1 rounded text-xs font-semibold">Advanced</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>80+ WPM</span>
                  <span className="bg-green-500/20 text-green-500 px-3 py-1 rounded text-xs font-semibold">Professional</span>
                </li>
              </ul>
            </article>

            <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
              <h2 className="text-2xl font-bold mb-4">Accuracy Matters</h2>
              <p className="text-[var(--muted)] mb-4">
                While WPM measures speed, accuracy is equally important. High accuracy with moderate speed is better than low
                accuracy with high speed.
              </p>
              <p className="text-[var(--muted)]">
                Most professionals aim for 95%+ accuracy. Our calculator factors in errors to give you a true measure of your
                effective typing speed.
              </p>
            </article>
          </section>
        </div>

        <section className="mt-12 bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
          <h2 className="text-2xl font-bold mb-4">Getting Accurate Measurements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[var(--muted)]">
            <div>
              <h3 className="font-bold text-lg mb-2">Using Our Typing Test</h3>
              <p className="mb-4">
                For the most accurate WPM measurement, use our free typing test which automatically calculates your speed and
                accuracy in real-time.
              </p>
              <a href="/" className="text-[var(--accent)] hover:underline font-semibold">
                Take our typing test →
              </a>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Manual Calculation Tips</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Count all characters, including spaces</li>
                <li>Use seconds for longer, more accurate time</li>
                <li>Count all errors including typos</li>
                <li>Take multiple tests for average WPM</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
