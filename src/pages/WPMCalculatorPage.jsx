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
          <h2 className="text-2xl font-bold mb-6">Understanding Typing Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3">What is CPM (Characters Per Minute)?</h3>
              <p className="text-[var(--muted)] mb-3">
                CPM measures the total number of characters typed per minute, including all letters, numbers, spaces, and punctuation.
                It's a more precise measurement than WPM for certain contexts.
              </p>
              <div className="bg-[var(--bg)] p-3 rounded border border-[var(--border)] mb-3">
                <p className="font-mono text-center text-sm">CPM = Total Characters ÷ (Time in Minutes)</p>
              </div>
              <p className="text-[var(--muted)] text-sm">
                <strong>Conversion:</strong> CPM ÷ 5 = WPM (since 1 word = 5 characters)
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Error Rate Calculation</h3>
              <p className="text-[var(--muted)] mb-3">
                Error rate shows the percentage of mistakes made during typing. Lower error rates indicate better accuracy and
                more efficient typing habits.
              </p>
              <div className="bg-[var(--bg)] p-3 rounded border border-[var(--border)] mb-3">
                <p className="font-mono text-center text-sm">Error Rate = (Errors ÷ Total Characters) × 100</p>
              </div>
              <p className="text-[var(--muted)] text-sm">
                <strong>Professional standard:</strong> Less than 5% error rate
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Typing Speed by Profession</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="font-bold text-lg mb-2 text-blue-600">👩‍⚕️ Medical Transcription</h3>
              <p className="text-[var(--muted)] text-sm mb-2">Requires exceptional speed and accuracy for patient records.</p>
              <div className="space-y-1 text-sm">
                <p><strong>WPM:</strong> 80-100+</p>
                <p><strong>Accuracy:</strong> 99%+</p>
                <p><strong>Daily Volume:</strong> 8-10 hours</p>
              </div>
            </div>
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="font-bold text-lg mb-2 text-green-600">👨‍💼 Executive Assistant</h3>
              <p className="text-[var(--muted)] text-sm mb-2">Handles correspondence, reports, and various document types.</p>
              <div className="space-y-1 text-sm">
                <p><strong>WPM:</strong> 60-75</p>
                <p><strong>Accuracy:</strong> 97%+</p>
                <p><strong>Daily Volume:</strong> 6-8 hours</p>
              </div>
            </div>
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="font-bold text-lg mb-2 text-purple-600">👨‍💻 Software Developer</h3>
              <p className="text-[var(--muted)] text-sm mb-2">Writes code and documentation with technical precision.</p>
              <div className="space-y-1 text-sm">
                <p><strong>WPM:</strong> 50-70</p>
                <p><strong>Accuracy:</strong> 98%+</p>
                <p><strong>Daily Volume:</strong> 6-8 hours</p>
              </div>
            </div>
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="font-bold text-lg mb-2 text-orange-600">📊 Data Entry Specialist</h3>
              <p className="text-[var(--muted)] text-sm mb-2">Inputs numerical data and codes with high precision.</p>
              <div className="space-y-1 text-sm">
                <p><strong>WPM:</strong> 70-90</p>
                <p><strong>Accuracy:</strong> 99%+</p>
                <p><strong>Daily Volume:</strong> 7-9 hours</p>
              </div>
            </div>
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="font-bold text-lg mb-2 text-red-600">✍️ Content Writer</h3>
              <p className="text-[var(--muted)] text-sm mb-2">Creates articles and content with creative expression.</p>
              <div className="space-y-1 text-sm">
                <p><strong>WPM:</strong> 40-60</p>
                <p><strong>Accuracy:</strong> 95%+</p>
                <p><strong>Daily Volume:</strong> 4-6 hours</p>
              </div>
            </div>
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="font-bold text-lg mb-2 text-teal-600">🎓 Student</h3>
              <p className="text-[var(--muted)] text-sm mb-2">Takes notes and writes assignments efficiently.</p>
              <div className="space-y-1 text-sm">
                <p><strong>WPM:</strong> 35-50</p>
                <p><strong>Accuracy:</strong> 90%+</p>
                <p><strong>Daily Volume:</strong> 2-4 hours</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Improving Your Typing Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="font-bold text-lg mb-3">Speed Improvement Strategies</h3>
              <ul className="space-y-2 text-[var(--muted)] text-sm">
                <li>• Practice daily with consistent timing</li>
                <li>• Focus on proper finger placement</li>
                <li>• Use all fingers, not just index fingers</li>
                <li>• Build muscle memory through repetition</li>
                <li>• Gradually increase difficulty levels</li>
                <li>• Take our typing test weekly to track progress</li>
              </ul>
            </div>
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="font-bold text-lg mb-3">Accuracy Enhancement Tips</h3>
              <ul className="space-y-2 text-[var(--muted)] text-sm">
                <li>• Prioritize accuracy over speed initially</li>
                <li>• Don't look at the keyboard while typing</li>
                <li>• Practice with proper posture and positioning</li>
                <li>• Take breaks to prevent fatigue-related errors</li>
                <li>• Focus on one key at a time when learning</li>
                <li>• Use our practice exercises for targeted improvement</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Common Questions About WPM</h2>
          <div className="space-y-6">
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="font-bold mb-2">Why is WPM calculated as characters ÷ 5?</h3>
              <p className="text-[var(--muted)]">
                The 5-character standard comes from historical typing standards. The average English word is approximately 5
                characters long (including spaces). This provides a consistent measurement across different languages and text types.
                While some modern calculations use different standards, the 5-character rule remains the industry standard for WPM
                measurements.
              </p>
            </div>
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="font-bold mb-2">Should I include spaces in character count?</h3>
              <p className="text-[var(--muted)]">
                Yes, spaces are included in the total character count. Spaces are essential characters in written communication and
                contribute to your overall typing speed. Professional typing tests always include spaces in their calculations.
                The 5-character standard accounts for the fact that spaces make up roughly 20% of total characters in typical writing.
              </p>
            </div>
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="font-bold mb-2">How does error adjustment work?</h3>
              <p className="text-[var(--muted)]">
                Error adjustment subtracts incorrect characters from your total to give a more accurate representation of productive
                typing speed. For example, if you type 300 characters in 1 minute but make 10 errors, your adjusted WPM would be
                calculated as if you only typed 290 correct characters. This provides a better measure of your actual typing proficiency.
              </p>
            </div>
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="font-bold mb-2">What's the difference between gross WPM and net WPM?</h3>
              <p className="text-[var(--muted)]">
                Gross WPM is your raw typing speed without considering errors. Net WPM (also called adjusted WPM) factors in accuracy
                by subtracting errors from the total. Most professional typing tests report net WPM because it better represents
                your productive typing ability. Our calculator shows both raw speed and accuracy-adjusted results.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/80 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Start Measuring Your Progress</h2>
          <p className="mb-6">
            Use our WPM calculator regularly to track your improvement over time. Combine it with our typing test and practice
            exercises for the most comprehensive typing skill development experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/" className="inline-block bg-white text-[var(--accent)] px-6 py-3 rounded-lg hover:opacity-90 font-semibold text-center">
              Take Typing Test
            </a>
            <a href="/typing-practice" className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[var(--accent)] font-semibold text-center">
              Practice Daily
            </a>
            <a href="/improve-typing-speed" className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[var(--accent)] font-semibold text-center">
              Speed Tips
            </a>
          </div>
        </section>

        <section className="mt-8">
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
