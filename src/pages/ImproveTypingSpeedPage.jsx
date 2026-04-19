import React from "react";
import { usePageMeta } from "../hooks/usePageMeta";

export default function ImproveTypingSpeedPage() {
  usePageMeta({
    title: "How to Improve Typing Speed - Advanced Tips & Strategies",
    description: "Proven strategies to improve your typing speed from 40 to 100+ WPM. Expert tips and exercises to boost typing performance.",
    keywords: "improve typing speed, typing speed exercises, typing tips, how to type faster, increase WPM",
    ogTitle: "How to Improve Typing Speed - Advanced Tips & Strategies",
    ogDescription: "Learn advanced techniques to significantly improve your typing speed.",
    canonicalUrl: "https://typingtest.example.com/improve-typing-speed",
  });

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">How to Improve Typing Speed - Expert Guide</h1>
        <p className="text-xl text-[var(--muted)] mb-8">
          Discover proven strategies and techniques to dramatically increase your typing speed and accuracy.
        </p>

        <section className="space-y-8">
          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">1. Perfect Your Posture and Position</h2>
            <p className="text-[var(--muted)] mb-4">
              Many people develop bad typing habits because of poor posture. Your body position significantly impacts your ability
              to type quickly and comfortably.
            </p>
            <ul className="space-y-2 text-[var(--muted)] list-disc list-inside">
              <li>Sit with your back straight and shoulders relaxed</li>
              <li>Keep your elbows at 90 degrees close to your body</li>
              <li>Position your monitor at eye level</li>
              <li>Rest your wrists on a wrist rest or keyboard</li>
              <li>Keep your feet flat on the floor</li>
            </ul>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">2. Master Touch Typing Technique</h2>
            <p className="text-[var(--muted)] mb-4">
              Touch typing is the most efficient typing method. Stop looking at your keyboard and develop muscle memory instead.
            </p>
            <div className="bg-[var(--bg)] p-4 rounded border border-[var(--border)] mb-4">
              <h3 className="font-bold mb-2">Finger Assignment</h3>
              <p className="font-mono text-center mb-2">A S D F | J K L ;</p>
              <p className="text-sm text-[var(--muted)] text-center">
                Each finger has specific keys it should press. Learn the mapping and stick to it.
              </p>
            </div>
            <p className="text-[var(--muted)]">
              Using the correct finger for each key prevents hand strain and increases speed through efficient movement patterns.
            </p>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">3. Prioritize Accuracy Over Speed</h2>
            <p className="text-[var(--muted)] mb-4">
              This is the most important rule for improving typing speed. Many people try to go too fast too soon and develop bad
              habits.
            </p>
            <div className="bg-[var(--accent)]/10 border border-[var(--accent)] rounded p-4 mb-4">
              <p className="text-[var(--text)] font-semibold">
                Tip: Aim for 95%+ accuracy. Speed naturally follows once you're comfortable with the layout.
              </p>
            </div>
            <p className="text-[var(--muted)]">
              Making mistakes slows you down because you have to correct them. By typing accurately, you avoid losing time on
              corrections, making you faster overall.
            </p>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">4. Practice Consistently</h2>
            <p className="text-[var(--muted)] mb-4">Regular practice is essential for improving typing speed. Here's an effective schedule:</p>
            <div className="space-y-3 text-[var(--muted)]">
              <div className="border-l-4 border-[var(--accent)] pl-4">
                <h3 className="font-bold">Daily Practice: 30 minutes minimum</h3>
                <p className="text-sm">Short, consistent sessions are more effective than occasional long sessions.</p>
              </div>
              <div className="border-l-4 border-[var(--accent)] pl-4">
                <h3 className="font-bold">Mix Exercise Types</h3>
                <p className="text-sm">Combine accuracy exercises with speed tests to develop balanced skills.</p>
              </div>
              <div className="border-l-4 border-[var(--accent)] pl-4">
                <h3 className="font-bold">Track Progress</h3>
                <p className="text-sm">Use our typing test to monitor improvements and set achievable goals.</p>
              </div>
            </div>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">5. Use Typing Tests Strategically</h2>
            <p className="text-[var(--muted)] mb-4">
              Our typing test is a valuable tool for improving speed. Here's how to use it effectively:
            </p>
            <ol className="space-y-2 text-[var(--muted)] list-decimal list-inside">
              <li>Start with Easy difficulty to build confidence</li>
              <li>Progress to Medium once you're comfortable</li>
              <li>Take a test weekly to measure progress</li>
              <li>Don't take tests too frequently—practice in between</li>
              <li>Analyze your results to identify weak areas</li>
              <li>Challenge yourself with harder difficulties periodically</li>
            </ol>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">6. Advanced Speed Techniques</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-3">Word Chunking</h3>
                <p className="text-[var(--muted)] mb-3">
                  Instead of typing letter by letter, train your brain to recognize and type common word patterns as single units.
                  This dramatically increases reading and typing speed.
                </p>
                <div className="bg-[var(--bg)] p-3 rounded border border-[var(--border)]">
                  <p className="text-[var(--muted)] text-sm">
                    <strong>Examples:</strong> "the" (3 letters, 1 unit), "ing" (3 letters, 1 unit), "tion" (4 letters, 1 unit)
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">Rhythm and Flow</h3>
                <p className="text-[var(--muted)] mb-3">
                  Develop a consistent typing rhythm. Professional typists maintain steady keystroke timing rather than erratic
                  bursts of speed followed by pauses.
                </p>
                <div className="bg-[var(--bg)] p-3 rounded border border-[var(--border)]">
                  <p className="text-[var(--muted)] text-sm">
                    <strong>Goal:</strong> Consistent 200-250 keystrokes per minute with minimal pauses between words
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">Anticipation Techniques</h3>
                <p className="text-[var(--muted)] mb-3">
                  Learn to anticipate upcoming letters and words. Your brain can process text faster than your fingers can type,
                  so use this advantage to prepare for upcoming keystrokes.
                </p>
                <div className="bg-[var(--bg)] p-3 rounded border border-[var(--border)]">
                  <p className="text-[var(--muted)] text-sm">
                    <strong>Practice:</strong> Read ahead 2-3 words while typing the current word
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">7. Optimize Your Environment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3">Hardware Setup</h3>
                <ul className="space-y-2 text-[var(--muted)] text-sm">
                  <li>• Use a mechanical keyboard for better feedback</li>
                  <li>• Ensure proper key travel distance (2mm ideal)</li>
                  <li>• Keep keyboard at elbow height</li>
                  <li>• Use a wrist rest to maintain straight wrists</li>
                  <li>• Position monitor at eye level, 20-30 inches away</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Workspace Conditions</h3>
                <ul className="space-y-2 text-[var(--muted)] text-sm">
                  <li>• Good lighting to reduce eye strain</li>
                  <li>• Quiet environment to maintain focus</li>
                  <li>• Comfortable chair with proper back support</li>
                  <li>• Feet flat on floor or footrest</li>
                  <li>• Minimize distractions during practice</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">8. Track and Analyze Performance</h2>
            <p className="text-[var(--muted)] mb-4">
              Regular performance tracking is essential for identifying improvement areas and maintaining motivation.
            </p>
            <div className="space-y-4">
              <div className="bg-[var(--bg)] p-4 rounded border border-[var(--border)]">
                <h3 className="font-bold mb-2">Key Metrics to Track</h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-[var(--muted)]">
                  <div>
                    <p><strong>WPM:</strong> Overall typing speed</p>
                    <p><strong>Accuracy:</strong> Percentage of correct characters</p>
                    <p><strong>Error Rate:</strong> Mistakes per minute</p>
                  </div>
                  <div>
                    <p><strong>Consistency:</strong> Speed variation</p>
                    <p><strong>Improvement Rate:</strong> WPM gain per week</p>
                    <p><strong>Practice Time:</strong> Minutes per session</p>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--bg)] p-4 rounded border border-[var(--border)]">
                <h3 className="font-bold mb-2">Weekly Review Process</h3>
                <ol className="text-sm text-[var(--muted)] space-y-1 list-decimal list-inside">
                  <li>Take a full typing test (1-3 minutes)</li>
                  <li>Record WPM, accuracy, and error rate</li>
                  <li>Identify patterns in mistakes</li>
                  <li>Adjust practice focus for next week</li>
                  <li>Celebrate improvements, no matter how small</li>
                </ol>
              </div>
            </div>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">9. Common Speed Barriers and Solutions</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-bold text-red-600">Hesitation on Unfamiliar Words</h3>
                <p className="text-[var(--muted)] text-sm">
                  <strong>Solution:</strong> Build vocabulary through reading. Practice typing technical terms and industry-specific
                  jargon regularly. Use word prediction features initially, then wean yourself off them.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-bold text-red-600">Finger Fatigue</h3>
                <p className="text-[var(--muted)] text-sm">
                  <strong>Solution:</strong> Take regular breaks using the 20-20-20 rule (every 20 minutes, look 20 feet away for 20
                  seconds). Strengthen fingers with simple exercises. Ensure proper technique to reduce strain.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-bold text-red-600">Plateau Periods</h3>
                <p className="text-[var(--muted)] text-sm">
                  <strong>Solution:</strong> Change practice routines. Try different text types, practice at different times of day,
                  or focus on weak areas specifically. Plateaus are normal and usually break with persistence.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-bold text-red-600">Mental Blocks</h3>
                <p className="text-[var(--muted)] text-sm">
                  <strong>Solution:</strong> Break complex text into smaller chunks. Use positive visualization. Remember that
                  everyone experiences temporary setbacks. Focus on process, not just results.
                </p>
              </div>
            </div>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">10. Professional Typing Standards</h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded border border-blue-200 dark:border-blue-800">
                <h3 className="font-bold text-blue-800 dark:text-blue-400 mb-2">Medical Transcription</h3>
                <p className="text-[var(--muted)] text-sm">
                  <strong>Requirement:</strong> 80+ WPM with 99% accuracy. These professionals type complex medical terminology
                  under time pressure while maintaining perfect accuracy.
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 rounded border border-green-200 dark:border-green-800">
                <h3 className="font-bold text-green-800 dark:text-green-400 mb-2">Data Entry Specialist</h3>
                <p className="text-[var(--muted)] text-sm">
                  <strong>Requirement:</strong> 70-90 WPM with 98% accuracy. Focus on numerical data, codes, and structured information
                  with minimal errors.
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 rounded border border-purple-200 dark:border-purple-800">
                <h3 className="font-bold text-purple-800 dark:text-purple-400 mb-2">Executive Assistant</h3>
                <p className="text-[var(--muted)] text-sm">
                  <strong>Requirement:</strong> 60-75 WPM with 97% accuracy. Handle correspondence, reports, and various document types
                  efficiently.
                </p>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-4 rounded border border-orange-200 dark:border-orange-800">
                <h3 className="font-bold text-orange-800 dark:text-orange-400 mb-2">General Office Work</h3>
                <p className="text-[var(--muted)] text-sm">
                  <strong>Requirement:</strong> 45-60 WPM with 95% accuracy. Standard proficiency for most office positions and
                  administrative work.
                </p>
              </div>
            </div>
          </article>

          <section className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/80 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Improve Your Typing Speed?</h2>
            <p className="mb-4">
              Start with our Easy difficulty level and progress systematically. With consistent practice using our typing test, you
              can improve from 30 WPM to 70+ WPM in just 8-12 weeks. Remember: accuracy first, speed second.
            </p>
            <p className="mb-6">
              Professional typists don't achieve high speeds overnight. They build their skills through consistent, focused practice
              over time. Start your journey today and track your progress with our comprehensive typing test.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/" className="inline-block bg-white text-[var(--accent)] px-6 py-3 rounded-lg hover:opacity-90 font-semibold text-center">
                Take a Typing Test
              </a>
              <a href="/typing-practice" className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[var(--accent)] font-semibold text-center">
                Daily Practice
              </a>
              <a href="/learn-typing" className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[var(--accent)] font-semibold text-center">
                Learn Basics
              </a>
            </div>
          </section>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">Scientific Research on Speed Improvement</h2>
            <div className="space-y-6 text-[var(--muted)]">
              <div>
                <h3 className="font-bold text-lg mb-3">The Power Law of Practice</h3>
                <p className="mb-3">
                  Research from Anders Ericsson's deliberate practice studies shows that typing improvement follows a power law curve.
                  Early gains are rapid, but later improvements require exponentially more practice.
                </p>
                <div className="bg-[var(--bg)] p-4 rounded border border-[var(--border)]">
                  <div className="text-center">
                    <p className="text-sm mb-2"><strong>Improvement Rate by Experience Level</strong></p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-[var(--accent)]">Beginners</div>
                        <div>10-15 WPM/week</div>
                      </div>
                      <div>
                        <div className="font-semibold text-[var(--accent)]">Intermediate</div>
                        <div>5-8 WPM/week</div>
                      </div>
                      <div>
                        <div className="font-semibold text-[var(--accent)]">Advanced</div>
                        <div>1-3 WPM/week</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Cognitive Load Theory</h3>
                <p className="mb-3">
                  Modern research shows that typing speed improves when cognitive load is managed properly. Beginners should focus
                  on one aspect at a time (either speed OR accuracy), while advanced typists can handle both simultaneously.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ Effective Learning</h4>
                    <ul className="text-sm space-y-1">
                      <li>Single-task focus</li>
                      <li>Progressive difficulty</li>
                      <li>Immediate feedback</li>
                      <li>Spaced repetition</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Ineffective Methods</h4>
                    <ul className="text-sm space-y-1">
                      <li>Multitasking</li>
                      <li>Rushing without accuracy</li>
                      <li>Random practice</li>
                      <li>No progress tracking</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Motor Learning Principles</h3>
                <p className="mb-3">
                  Typing speed gains are based on motor skill acquisition. Research shows that variable practice (different text types)
                  leads to better long-term retention than constant practice (same text repeatedly).
                </p>
                <div className="bg-[var(--bg)] p-4 rounded border border-[var(--border)]">
                  <p className="text-sm">
                    <strong>Optimal Practice Mix:</strong> 70% familiar patterns, 20% similar new patterns, 10% completely novel patterns
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">Advanced Training Techniques</h2>
            <div className="space-y-6 text-[var(--muted)]">
              <div>
                <h3 className="font-bold text-lg mb-3">Interval Training Method</h3>
                <p className="mb-3">
                  Alternate between high-intensity speed bursts and recovery periods. This method, inspired by athletic training,
                  builds both speed and endurance more effectively than constant moderate practice.
                </p>
                <div className="bg-[var(--bg)] p-4 rounded border border-[var(--border)]">
                  <h4 className="font-semibold mb-2">Sample 20-Minute Session:</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>0-2 min:</strong> Warm-up at 70% max speed</div>
                    <div><strong>2-4 min:</strong> Sprint at 90% max speed</div>
                    <div><strong>4-6 min:</strong> Recovery at 60% max speed</div>
                    <div><strong>6-8 min:</strong> Sprint at 95% max speed</div>
                    <div><strong>8-10 min:</strong> Recovery at 60% max speed</div>
                    <div><strong>10-15 min:</strong> Build to 85% max speed</div>
                    <div><strong>15-20 min:</strong> Cool down at 70% max speed</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Weakness-Specific Training</h3>
                <p className="mb-3">
                  Identify your slowest finger combinations and create targeted exercises. Most people have 2-3 finger pairs that
                  are significantly slower than others.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Common Weak Combinations:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Left pinky + right ring (A + L)</li>
                      <li>• Right pinky + left index ( ; + F)</li>
                      <li>• Both ring fingers (S + L)</li>
                      <li>• Shift key combinations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Training Strategy:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Isolate weak combinations</li>
                      <li>• Practice at slow speeds first</li>
                      <li>• Gradually increase speed</li>
                      <li>• Test improvement weekly</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Context-Specific Practice</h3>
                <p className="mb-3">
                  Practice typing content similar to what you'll actually type in your work or studies. This builds domain-specific
                  speed and familiarity with common terms and patterns.
                </p>
                <div className="bg-[var(--bg)] p-4 rounded border border-[var(--border)]">
                  <h4 className="font-semibold mb-2">Examples by Profession:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Programmers:</strong> Code snippets, variable names, symbols
                    </div>
                    <div>
                      <strong>Writers:</strong> Long-form content, dialogue, descriptions
                    </div>
                    <div>
                      <strong>Students:</strong> Academic vocabulary, essay structures
                    </div>
                    <div>
                      <strong>Administrators:</strong> Business emails, reports, forms
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">Technology & Tools for Speed Improvement</h2>
            <div className="space-y-6 text-[var(--muted)]">
              <div>
                <h3 className="font-bold text-lg mb-3">Hardware Optimization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Keyboard Types</h4>
                    <ul className="text-sm space-y-2">
                      <li><strong>Mechanical:</strong> Best tactile feedback, 15-20% speed boost</li>
                      <li><strong>Membrane:</strong> Quiet, affordable, good for beginners</li>
                      <li><strong>Ergonomic:</strong> Reduces strain, better for long sessions</li>
                      <li><strong>Gaming:</strong> Fast response, customizable RGB</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Switches</h4>
                    <ul className="text-sm space-y-2">
                      <li><strong>Blue:</strong> Tactile click, loud, good for accuracy</li>
                      <li><strong>Brown:</strong> Tactile bump, quiet, balanced</li>
                      <li><strong>Red:</strong> Linear, smooth, best for speed</li>
                      <li><strong>Black:</strong> Linear, heavy, reduces accidental presses</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Software Tools</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-[var(--accent)] pl-4">
                    <h4 className="font-semibold">Typing Analytics Software</h4>
                    <p className="text-sm">Tools like WhatPulse or TypeLit track detailed metrics including individual finger speeds,
                    common mistakes, and improvement trends.</p>
                  </div>
                  <div className="border-l-4 border-[var(--accent)] pl-4">
                    <h4 className="font-semibold">Heat Map Analysis</h4>
                    <p className="text-sm">Visual representations of keyboard usage help identify inefficient finger patterns and
                    suggest optimal finger assignments.</p>
                  </div>
                  <div className="border-l-4 border-[var(--accent)] pl-4">
                    <h4 className="font-semibold">Gamification Apps</h4>
                    <p className="text-sm">Apps like TypingClub or Keybr use game mechanics to make practice more engaging and
                    consistent.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Accessibility Features</h3>
                <p className="mb-3">
                  Modern operating systems include built-in accessibility features that can help improve typing speed:
                </p>
                <ul className="text-sm space-y-2">
                  <li><strong>Sticky Keys:</strong> Press modifier keys separately for complex shortcuts</li>
                  <li><strong>Filter Keys:</strong> Ignore brief key presses to prevent accidental repeats</li>
                  <li><strong>Slow Keys:</strong> Increase key acceptance delay for better accuracy</li>
                  <li><strong>Voice Control:</strong> Dictation for content creation, typing practice for editing</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">Mental Strategies for Speed</h2>
            <div className="space-y-6 text-[var(--muted)]">
              <div>
                <h3 className="font-bold text-lg mb-3">Flow State Achievement</h3>
                <p className="mb-3">
                  Elite typists enter a "flow state" where typing becomes automatic. This mental state is achieved through:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Preparation Phase</h4>
                    <ul className="text-sm space-y-1">
                      <li>Clear goals and expectations</li>
                      <li>Comfortable environment</li>
                      <li>Proper warm-up routine</li>
                      <li>Mental readiness cues</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Flow Triggers</h4>
                    <ul className="text-sm space-y-1">
                      <li>Appropriate challenge level</li>
                      <li>Immediate feedback</li>
                      <li>Loss of self-consciousness</li>
                      <li>Distorted time perception</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Overcoming Mental Barriers</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-600">Fear of Mistakes</h4>
                    <p className="text-sm">Embrace errors as learning opportunities. Professional typists make mistakes too -
                    they just correct them quickly and continue.</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-600">Perfectionism Paralysis</h4>
                    <p className="text-sm">Accept that 95-98% accuracy is excellent. Waiting for 100% accuracy kills speed and flow.</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-600">Comparison Anxiety</h4>
                    <p className="text-sm">Compare yourself only to your previous performance. Everyone starts somewhere, and
                    improvement is personal.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Visualization Techniques</h3>
                <p className="mb-3">
                  Mental rehearsal can improve physical performance. Before typing sessions, visualize successful execution:
                </p>
                <ol className="text-sm space-y-2 list-decimal list-inside">
                  <li>Close your eyes and imagine your fingers on home row</li>
                  <li>Visualize typing a familiar passage flawlessly</li>
                  <li>Feel the rhythm and flow in your mind</li>
                  <li>Open your eyes and execute with confidence</li>
                </ol>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
