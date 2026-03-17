import React from "react";
import { usePageMeta } from "../hooks/usePageMeta";

export default function TypingPracticePage() {
  usePageMeta({
    title: "Online Typing Practice - Improve Your Skills Daily",
    description: "Practice typing online with our comprehensive typing practice tool. Learn touch typing and improve your speed and accuracy.",
    keywords: "typing practice, online typing, improve typing speed, touch typing, typing lessons",
    ogTitle: "Online Typing Practice - Improve Your Skills Daily",
    ogDescription: "Improve your typing skills with our daily typing practice exercises.",
    canonicalUrl: "https://typingtest.example.com/typing-practice",
  });

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Online Typing Practice</h1>
        <p className="text-xl text-[var(--muted)] mb-8">
          Improve your typing skills with consistent, daily practice on our free online typing platform.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Benefits of Daily Typing Practice</h2>
            <ul className="space-y-3 text-[var(--muted)] list-disc list-inside">
              <li>Develop muscle memory for faster typing</li>
              <li>Improve hand-eye coordination</li>
              <li>Reduce typing errors and increase accuracy</li>
              <li>Build typing speed gradually</li>
              <li>Enhance professional productivity</li>
              <li>Reduce strain from improper technique</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Practice Tips for Success</h2>
            <ol className="space-y-3 text-[var(--muted)] list-decimal list-inside">
              <li>Practice 15-30 minutes daily</li>
              <li>Focus on accuracy first, speed second</li>
              <li>Maintain proper posture and finger placement</li>
              <li>Don't look at the keyboard while typing</li>
              <li>Progress gradually through difficulty levels</li>
              <li>Set achievable WPM goals</li>
            </ol>
          </div>
        </section>

        <section className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)] mb-12">
          <h2 className="text-2xl font-bold mb-4">Structured Practice Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-[var(--border)] rounded p-4">
              <h3 className="font-bold text-lg mb-2">Week 1-2: Foundation</h3>
              <p className="text-sm text-[var(--muted)]">Start with Easy difficulty. Practice 15-20 minutes daily to build muscle memory and proper technique.</p>
            </div>
            <div className="border border-[var(--border)] rounded p-4">
              <h3 className="font-bold text-lg mb-2">Week 3-4: Building Speed</h3>
              <p className="text-sm text-[var(--muted)]">Move to Medium difficulty. Increase practice time to 20-30 minutes. Focus on reducing errors.</p>
            </div>
            <div className="border border-[var(--border)] rounded p-4">
              <h3 className="font-bold text-lg mb-2">Week 5+: Advanced Skills</h3>
              <p className="text-sm text-[var(--muted)]">Master Hard and Super Hard difficulties. Maintain daily practice to sustain and improve your skills.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Essential Typing Practice Exercises</h2>
          <div className="space-y-6">
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="text-lg font-bold mb-3">Home Row Drills</h3>
              <p className="text-[var(--muted)] mb-3">
                The foundation of touch typing is the home row (ASDF JKL;). Practice typing these keys repeatedly to build muscle
                memory. Start slowly with accuracy as your primary goal.
              </p>
              <div className="bg-[var(--bg)] p-3 rounded border border-[var(--border)] font-mono text-center text-lg">
                a s d f j k l ; a s d f j k l ; a s d f j k l ;
              </div>
              <p className="text-[var(--muted)] text-sm mt-2">
                Practice this pattern for 5 minutes daily. Focus on keeping your fingers on the home row and reaching for keys
                without looking at the keyboard.
              </p>
            </div>

            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="text-lg font-bold mb-3">Common Word Practice</h3>
              <p className="text-[var(--muted)] mb-3">
                Practice typing the most frequently used words in English. These words make up a significant portion of everyday
                typing and mastering them will dramatically improve your overall speed.
              </p>
              <div className="bg-[var(--bg)] p-3 rounded border border-[var(--border)]">
                <p className="text-[var(--muted)] font-mono">
                  the and for are but not you all can had her was one our out day get has him his how its may new now old see two way who boy did its let put say she too use
                </p>
              </div>
              <p className="text-[var(--muted)] text-sm mt-2">
                Type these words repeatedly. Start with accuracy, then gradually increase speed. These words appear in 50%+ of
                written English text.
              </p>
            </div>

            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="text-lg font-bold mb-3">Number Row Practice</h3>
              <p className="text-[var(--muted)] mb-3">
                Numbers and symbols require different finger assignments. Practice typing sequences that include numbers,
                especially if your work involves data entry or technical writing.
              </p>
              <div className="bg-[var(--bg)] p-3 rounded border border-[var(--border)] font-mono text-center text-lg">
                1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0
              </div>
              <p className="text-[var(--muted)] text-sm mt-2">
                Use your left pinky for 1, left ring for 2, left middle for 3, left index for 4-5. Right hand mirrors this pattern.
                Practice daily if you work with numbers frequently.
              </p>
            </div>

            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="text-lg font-bold mb-3">Punctuation Mastery</h3>
              <p className="text-[var(--muted)] mb-3">
                Proper punctuation is crucial for professional writing. Practice common punctuation marks and their correct
                finger assignments to avoid interrupting your typing flow.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-bold mb-1">Period & Comma</p>
                  <p className="text-[var(--muted)]">Right middle finger (K key position)</p>
                </div>
                <div>
                  <p className="font-bold mb-1">Question Mark</p>
                  <p className="text-[var(--muted)]">Right pinky (shift + /)</p>
                </div>
                <div>
                  <p className="font-bold mb-1">Exclamation Point</p>
                  <p className="text-[var(--muted)]">Right pinky (shift + 1)</p>
                </div>
                <div>
                  <p className="font-bold mb-1">Apostrophe</p>
                  <p className="text-[var(--muted)]">Right pinky (next to enter)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Tracking Your Progress</h2>
          <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3">Weekly Goals</h3>
                <ul className="space-y-2 text-[var(--muted)] text-sm">
                  <li>• Increase WPM by 5-10 points per week</li>
                  <li>• Maintain 95%+ accuracy consistently</li>
                  <li>• Practice at least 5 days per week</li>
                  <li>• Try a new difficulty level each week</li>
                  <li>• Track improvements in a journal</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Progress Indicators</h3>
                <ul className="space-y-2 text-[var(--muted)] text-sm">
                  <li>• Faster same-text completion times</li>
                  <li>• Higher accuracy on difficult passages</li>
                  <li>• Reduced finger strain and fatigue</li>
                  <li>• Ability to type without looking</li>
                  <li>• Comfort with complex punctuation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Common Practice Mistakes to Avoid</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
              <h3 className="font-bold mb-2 text-red-700 dark:text-red-400">Skipping the Basics</h3>
              <p className="text-[var(--muted)] text-sm">
                Many people try to jump straight to speed practice without mastering the fundamentals. This leads to bad habits
                that are hard to break later. Always ensure you have proper technique before focusing on speed.
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
              <h3 className="font-bold mb-2 text-red-700 dark:text-red-400">Inconsistent Practice</h3>
              <p className="text-[var(--muted)] text-sm">
                Practicing once a week for 2 hours is less effective than practicing 20 minutes daily. Consistency builds muscle
                memory more effectively than occasional long sessions. Make typing practice a daily habit.
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
              <h3 className="font-bold mb-2 text-red-700 dark:text-red-400">Ignoring Accuracy</h3>
              <p className="text-[var(--muted)] text-sm">
                Speed without accuracy is useless. Making mistakes and correcting them actually slows you down. Focus on
                accuracy first, then gradually increase speed. Professional typists maintain 98%+ accuracy.
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
              <h3 className="font-bold mb-2 text-red-700 dark:text-red-400">Poor Posture</h3>
              <p className="text-[var(--muted)] text-sm">
                Bad posture leads to fatigue, strain, and long-term injury. Always maintain proper typing posture with straight
                wrists, 90-degree elbow angles, and feet flat on the floor. Good habits prevent RSI and carpal tunnel syndrome.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
          <h2 className="text-2xl font-bold mb-4">Start Your Daily Practice Journey</h2>
          <p className="text-[var(--muted)] mb-6">
            Consistent daily practice is the key to becoming a proficient typist. Our structured approach combines technique
            building with gradual speed improvement, ensuring you develop proper habits from the start. Whether you're learning
            to type for the first time or looking to reach professional speeds, regular practice with our typing test will get
            you there.
          </p>
          <p className="text-[var(--muted)] mb-6">
            Remember: slow, accurate practice beats fast, error-filled typing every time. Focus on building muscle memory and
            proper technique. Speed will come naturally as you become more comfortable with the keyboard layout and develop
            consistent habits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/" className="inline-block bg-[var(--accent)] text-white px-6 py-3 rounded-lg hover:opacity-90 text-center">
              Start Practicing Now
            </a>
            <a href="/learn-typing" className="inline-block border border-[var(--border)] text-[var(--text)] px-6 py-3 rounded-lg hover:bg-[var(--border)] text-center">
              Learn Touch Typing
            </a>
            <a href="/improve-typing-speed" className="inline-block border border-[var(--border)] text-[var(--text)] px-6 py-3 rounded-lg hover:bg-[var(--border)] text-center">
              Speed Improvement Tips
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
