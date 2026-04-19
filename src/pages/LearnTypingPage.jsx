import React from "react";
import { usePageMeta } from "../hooks/usePageMeta";

export default function LearnTypingPage() {
  usePageMeta({
    title: "Learn Typing - Touch Typing for Beginners",
    description: "Learn touch typing from scratch. Complete guide to typing technique, finger placement, and improving typing skills for beginners.",
    keywords: "learn typing, typing lessons, touch typing, typing technique, typing for beginners, typing guide",
    ogTitle: "Learn Typing - Complete Guide for Beginners",
    ogDescription: "Master the fundamentals of touch typing and improve your typing skills.",
    canonicalUrl: "https://typingtest.example.com/learn-typing",
  });

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Learn Touch Typing - Complete Beginner's Guide</h1>
        <p className="text-xl text-[var(--muted)] mb-8">
          Master the fundamentals of touch typing and learn the proper technique to type faster and more accurately.
        </p>

        <section className="space-y-8">
          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">What is Touch Typing?</h2>
            <p className="text-[var(--muted)] mb-4">
              Touch typing is the method of typing using muscle memory to find keys without looking at the keyboard. Instead of
              using the hunt-and-peck method, touch typing allows you to type naturally while keeping your eyes on the screen.
            </p>
            <p className="text-[var(--muted)]">
              This skill is essential for anyone who works with computers professionally. By learning touch typing, you can
              significantly increase your typing speed and reduce fatigue from improper technique.
            </p>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">The Home Row Position</h2>
            <p className="text-[var(--muted)] mb-4">The foundation of touch typing is the home row position. This is where your fingers rest when typing.</p>
            <div className="bg-[var(--bg)] p-4 rounded border border-[var(--border)] mb-4">
              <p className="font-mono text-center mb-4">A S D F J K L ;</p>
              <ul className="space-y-2 text-[var(--muted)] text-sm">
                <li>
                  <strong>Left hand:</strong> Index finger on F, middle on D, ring on S, pinky on A
                </li>
                <li>
                  <strong>Right hand:</strong> Index finger on J, middle on K, ring on L, pinky on ;
                </li>
              </ul>
            </div>
            <p className="text-[var(--muted)]">
              Your thumbs rest on the spacebar. This position allows you to reach every key on the keyboard efficiently without
              moving your hands.
            </p>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">Proper Typing Technique</h2>
            <div className="space-y-4 text-[var(--muted)]">
              <div>
                <h3 className="font-bold text-lg mb-2">Posture</h3>
                <ul className="list-disc list-inside space-y-1 ml-3">
                  <li>Sit upright with feet flat on the floor</li>
                  <li>Keep your back against the chair</li>
                  <li>Elbows should be at a 90-degree angle</li>
                  <li>Keep wrists straight, not bent</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Hand Position</h3>
                <ul className="list-disc list-inside space-y-1 ml-3">
                  <li>Keep your hands curved naturally</li>
                  <li>Maintain the home row position</li>
                  <li>Move fingers to reach keys, not your entire hand</li>
                  <li>Use the correct finger for each key</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Visual Focus</h3>
                <ul className="list-disc list-inside space-y-1 ml-3">
                  <li>Keep your eyes on the screen or text</li>
                  <li>Never look at your keyboard while typing</li>
                  <li>Develop muscle memory for key locations</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">Learning Timeline</h2>
            <div className="space-y-4 text-[var(--muted)]">
              <div className="border-l-4 border-[var(--accent)] pl-4">
                <h3 className="font-bold">Week 1: Learn the Layout</h3>
                <p>Memorize the home row and basic key positions. Don't worry about speed.</p>
              </div>
              <div className="border-l-4 border-[var(--accent)] pl-4">
                <h3 className="font-bold">Week 2-3: Build Muscle Memory</h3>
                <p>Focus on accuracy. Repeat the same patterns until they become automatic.</p>
              </div>
              <div className="border-l-4 border-[var(--accent)] pl-4">
                <h3 className="font-bold">Week 4-6: Increase Speed</h3>
                <p>Once accuracy improves, gradually increase typing speed while maintaining proper technique.</p>
              </div>
              <div className="border-l-4 border-[var(--accent)] pl-4">
                <h3 className="font-bold">Week 7+: Master the Skill</h3>
                <p>Achieve 40+ WPM with high accuracy and maintain consistent daily practice.</p>
              </div>
            </div>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">Complete Finger-to-Key Mapping</h2>
            <p className="text-[var(--muted)] mb-4">
              Understanding which finger presses which key is crucial for efficient touch typing. Here's the complete mapping
              for a standard QWERTY keyboard layout.
            </p>
            <div className="space-y-4">
              <div className="bg-[var(--bg)] p-4 rounded border border-[var(--border)]">
                <h3 className="font-bold mb-2">Left Hand Fingers</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-purple-600">Pinky Finger (A)</p>
                    <p className="text-[var(--muted)]">1 ! Q A Z ` ~</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-600">Ring Finger (S)</p>
                    <p className="text-[var(--muted)]">2 @ W S X</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-600">Middle Finger (D)</p>
                    <p className="text-[var(--muted)]">3 # E D C</p>
                  </div>
                  <div>
                    <p className="font-semibold text-orange-600">Index Finger (F)</p>
                    <p className="text-[var(--muted)]">4 $ 5 % R T F G V B</p>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--bg)] p-4 rounded border border-[var(--border)]">
                <h3 className="font-bold mb-2">Right Hand Fingers</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-orange-600">Index Finger (J)</p>
                    <p className="text-[var(--muted)]">6 ^ 7 & Y U H J N M</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-600">Middle Finger (K)</p>
                    <p className="text-[var(--muted)]">8 * I K , &lt;</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-600">Ring Finger (L)</p>
                    <p className="text-[var(--muted)]">9 ( O L . &gt;</p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-600">Pinky Finger (;)</p>
                    <p className="text-[var(--muted)]">0 ) - _ P [ ] ; ' \ / = +</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[var(--muted)] text-sm mt-4">
              <strong>Pro tip:</strong> The index fingers handle the most keys because they're the most agile. Notice how the
              left index covers R, T, F, G, V, B while the right index covers Y, U, H, J, N, M. This is why proper finger
              positioning is so important for speed.
            </p>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">Common Beginner Mistakes</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-bold text-red-600">Looking at the Keyboard</h3>
                <p className="text-[var(--muted)]">
                  This is the most common mistake beginners make. Looking down constantly prevents you from developing the muscle
                  memory needed for touch typing. Keep your eyes on the screen and trust your fingers to find the right keys.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-bold text-red-600">Using Wrong Fingers</h3>
                <p className="text-[var(--muted)]">
                  Each key has a designated finger. Using the wrong finger creates inefficient movement patterns and slows you
                  down. Stick to the proper finger-key mapping even if it feels awkward at first.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-bold text-red-600">Poor Posture</h3>
                <p className="text-[var(--muted)]">
                  Slouching or bending your wrists puts strain on your hands and can lead to long-term injuries. Maintain proper
                  posture with straight wrists and elbows at 90-degree angles.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-bold text-red-600">Typing Too Fast Too Soon</h3>
                <p className="text-[var(--muted)]">
                  Speed comes after accuracy. Focus on typing correctly first, then gradually increase your speed. Making errors
                  and correcting them actually slows you down more than typing slowly and accurately.
                </p>
              </div>
            </div>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">Advanced Touch Typing Techniques</h2>
            <div className="space-y-6 text-[var(--muted)]">
              <div>
                <h3 className="font-bold text-lg mb-3 text-[var(--accent)]">Word Chunking Method</h3>
                <p className="mb-3">
                  Instead of typing letter by letter, train your brain to recognize common word patterns and type them as units.
                  For example, instead of typing "t-h-e" separately, think of "the" as one movement pattern.
                </p>
                <div className="bg-[var(--bg)] p-4 rounded border border-[var(--border)]">
                  <p className="font-semibold mb-2">Common English Word Chunks:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                    <div>ing, er, tion</div>
                    <div>ment, ness, able</div>
                    <div>that, this, with</div>
                    <div>have, from, they</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 text-[var(--accent)]">Look-Ahead Technique</h3>
                <p className="mb-3">
                  While your fingers type the current word, your eyes should already be reading 2-3 words ahead. This creates
                  a smooth flow and prevents your fingers from waiting for your eyes to catch up.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border border-blue-200 dark:border-blue-800">
                  <p className="text-blue-800 dark:text-blue-200 font-semibold">
                    💡 Pro Tip: Read in "bursts" of 2-3 words, then let your fingers catch up before moving your eyes forward again.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 text-[var(--accent)]">Rhythm-Based Practice</h3>
                <p className="mb-3">
                  Develop a consistent typing rhythm rather than varying speeds. Think of typing as playing a musical instrument
                  where timing and flow are more important than raw speed.
                </p>
                <p>
                  Practice maintaining a steady 60-70% of your maximum speed during regular typing, reserving bursts of speed
                  for specific situations that require them.
                </p>
              </div>
            </div>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">Typing Ergonomics & Health</h2>
            <div className="space-y-6 text-[var(--muted)]">
              <div>
                <h3 className="font-bold text-lg mb-3">Proper Desk Setup</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Monitor height:</strong> Top of screen should be at eye level</li>
                  <li><strong>Keyboard position:</strong> Should allow 90-degree elbow angles</li>
                  <li><strong>Chair height:</strong> Feet should rest flat on floor</li>
                  <li><strong>Desk space:</strong> Allow room for mouse and documents</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Hand & Wrist Care</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Avoid These</h4>
                    <ul className="text-sm space-y-1">
                      <li>Bending wrists up/down</li>
                      <li>Resting wrists on sharp edges</li>
                      <li>Typing with cold hands</li>
                      <li>Using excessive force</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ Do These</h4>
                    <ul className="text-sm space-y-1">
                      <li>Keep wrists straight</li>
                      <li>Take regular breaks</li>
                      <li>Stretch fingers hourly</li>
                      <li>Use proper lighting</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Preventing RSI (Repetitive Strain Injury)</h3>
                <p className="mb-3">
                  RSI affects millions of computer users. Here are evidence-based prevention strategies:
                </p>
                <div className="space-y-3">
                  <div className="border-l-4 border-[var(--accent)] pl-4">
                    <h4 className="font-semibold">20-20-20 Rule</h4>
                    <p className="text-sm">Every 20 minutes, look at something 20 feet away for 20 seconds</p>
                  </div>
                  <div className="border-l-4 border-[var(--accent)] pl-4">
                    <h4 className="font-semibold">Stretch Breaks</h4>
                    <p className="text-sm">Perform hand and wrist stretches every hour for 1-2 minutes</p>
                  </div>
                  <div className="border-l-4 border-[var(--accent)] pl-4">
                    <h4 className="font-semibold">Alternate Tasks</h4>
                    <p className="text-sm">Switch between typing and other activities to vary muscle use</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">Different Keyboard Layouts & Methods</h2>
            <div className="space-y-6 text-[var(--muted)]">
              <div>
                <h3 className="font-bold text-lg mb-3">QWERTY vs Dvorak vs Colemak</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[var(--bg)] p-4 rounded border border-[var(--border)]">
                    <h4 className="font-semibold text-blue-600 mb-2">QWERTY (Standard)</h4>
                    <p className="text-sm mb-2">Most common layout, designed to prevent jamming on old typewriters</p>
                    <p className="text-xs text-green-600">✅ Easy to learn, universal compatibility</p>
                    <p className="text-xs text-red-600">❌ Less efficient for touch typing</p>
                  </div>
                  <div className="bg-[var(--bg)] p-4 rounded border border-[var(--border)]">
                    <h4 className="font-semibold text-purple-600 mb-2">Dvorak</h4>
                    <p className="text-sm mb-2">Designed for efficiency, common letters on home row</p>
                    <p className="text-xs text-green-600">✅ 10-15% faster for experienced users</p>
                    <p className="text-xs text-red-600">❌ Steep learning curve, limited software support</p>
                  </div>
                  <div className="bg-[var(--bg)] p-4 rounded border border-[var(--border)]">
                    <h4 className="font-semibold text-orange-600 mb-2">Colemak</h4>
                    <p className="text-sm mb-2">Modern alternative, easier transition from QWERTY</p>
                    <p className="text-xs text-green-600">✅ Faster than QWERTY, easier to learn than Dvorak</p>
                    <p className="text-xs text-red-600">❌ Still limited adoption</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Alternative Input Methods</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Voice-to-Text</h4>
                    <p className="text-sm">Modern speech recognition can achieve 150+ WPM with proper training. Best for: content creation, accessibility, multitasking</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Stenography</h4>
                    <p className="text-sm">Court reporters achieve 200-300 WPM using chorded input. Requires extensive training but offers incredible speed</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Predictive Text & Autocomplete</h4>
                    <p className="text-sm">Modern software predicts words and phrases, effectively increasing typing speed through smart suggestions</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">Scientific Research on Typing</h2>
            <div className="space-y-6 text-[var(--muted)]">
              <div>
                <h3 className="font-bold text-lg mb-3">How Long Does It Take to Learn Touch Typing?</h3>
                <p className="mb-3">
                  Research from Carnegie Mellon University shows that dedicated practice of 1 hour per day leads to:
                </p>
                <div className="bg-[var(--bg)] p-4 rounded border border-[var(--border)]">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[var(--accent)]">2 Weeks</div>
                      <div className="text-sm">20-30 WPM with 90% accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[var(--accent)]">4 Weeks</div>
                      <div className="text-sm">35-45 WPM with 95% accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[var(--accent)]">8 Weeks</div>
                      <div className="text-sm">50+ WPM with professional proficiency</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">The 10,000 Hour Rule & Typing</h3>
                <p className="mb-3">
                  Malcolm Gladwell's research suggests mastery requires 10,000 hours of practice. For typing, this breaks down to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>1 hour/day:</strong> 10 years to reach 10,000 hours</li>
                  <li><strong>2 hours/day:</strong> 5 years to reach 10,000 hours</li>
                  <li><strong>4 hours/day:</strong> 2.5 years to reach 10,000 hours</li>
                </ul>
                <p className="text-sm mt-3">
                  However, most people reach "functional proficiency" (40-60 WPM) in just 40-100 hours of focused practice.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Brain Changes During Learning</h3>
                <p className="mb-3">
                  fMRI studies show that touch typing creates new neural pathways in the motor cortex. After 4-6 weeks of practice:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Increased gray matter in finger movement areas</li>
                  <li>Stronger connections between visual and motor regions</li>
                  <li>Improved hand-eye coordination pathways</li>
                  <li>Development of automatic movement patterns</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">Professional Typing Standards</h2>
            <div className="space-y-6 text-[var(--muted)]">
              <div>
                <h3 className="font-bold text-lg mb-3">Industry Speed Requirements</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-[var(--border)]">
                    <thead>
                      <tr className="bg-[var(--bg)]">
                        <th className="border border-[var(--border)] p-3 text-left">Profession</th>
                        <th className="border border-[var(--border)] p-3 text-center">Required WPM</th>
                        <th className="border border-[var(--border)] p-3 text-center">Accuracy %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-[var(--border)] p-3">Administrative Assistant</td>
                        <td className="border border-[var(--border)] p-3 text-center">50-60</td>
                        <td className="border border-[var(--border)] p-3 text-center">95%</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-3">Data Entry Clerk</td>
                        <td className="border border-[var(--border)] p-3 text-center">60-70</td>
                        <td className="border border-[var(--border)] p-3 text-center">98%</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-3">Court Reporter</td>
                        <td className="border border-[var(--border)] p-3 text-center">200-250</td>
                        <td className="border border-[var(--border)] p-3 text-center">99.9%</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-3">Programmer</td>
                        <td className="border border-[var(--border)] p-3 text-center">40-60</td>
                        <td className="border border-[var(--border)] p-3 text-center">90%</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-3">Writer/Author</td>
                        <td className="border border-[var(--border)] p-3 text-center">30-50</td>
                        <td className="border border-[var(--border)] p-3 text-center">85%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Certification Standards</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-[var(--accent)] pl-4">
                    <h4 className="font-semibold">Microsoft Office Specialist (MOS)</h4>
                    <p className="text-sm">Requires 50+ WPM with 95% accuracy for Word certification</p>
                  </div>
                  <div className="border-l-4 border-[var(--accent)] pl-4">
                    <h4 className="font-semibold">Certified Administrative Professional (CAP)</h4>
                    <p className="text-sm">Typing speed of 55 WPM minimum for certification</p>
                  </div>
                  <div className="border-l-4 border-[var(--accent)] pl-4">
                    <h4 className="font-semibold">International Association of Administrative Professionals (IAAP)</h4>
                    <p className="text-sm">45 WPM requirement for basic certification</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">Success Stories & Case Studies</h2>
            <div className="space-y-6 text-[var(--muted)]">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-bold text-lg mb-3 text-green-800 dark:text-green-200">From Hunt-and-Peck to 85 WPM</h3>
                <p className="mb-3 italic">
                  "I started typing with just my index fingers at 25 WPM. After 6 weeks of daily practice using structured lessons,
                  I now type at 85 WPM. My job as a content writer became so much easier - I can now write 3x more content per day!"
                </p>
                <p className="text-sm font-semibold">- Sarah M., Content Writer</p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-bold text-lg mb-3 text-purple-800 dark:text-purple-200">Overcoming Dyslexia</h3>
                <p className="mb-3 italic">
                  "As someone with dyslexia, typing was always a struggle. Touch typing changed everything. I went from 15 WPM
                  to 55 WPM in 8 weeks. The structured approach helped me build confidence and actually enjoy writing again."
                </p>
                <p className="text-sm font-semibold">- Michael R., Student</p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-bold text-lg mb-3 text-orange-800 dark:text-orange-200">From 35 to 120 WPM</h3>
                <p className="mb-3 italic">
                  "I was stuck at 35 WPM for years. After learning proper technique and practicing with timed tests,
                  I broke through to 120 WPM. The key was focusing on accuracy first, then gradually increasing speed."
                </p>
                <p className="text-sm font-semibold">- Jennifer L., Legal Assistant</p>
              </div>
            </div>
          </article>

          <article className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">Typing Speed Milestones</h2>
            <div className="space-y-4 text-[var(--muted)]">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🐌</span>
                </div>
                <div>
                  <h3 className="font-bold">0-15 WPM: Getting Started</h3>
                  <p className="text-sm">Focus on learning key locations and proper finger placement. Speed is not important yet.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚶</span>
                </div>
                <div>
                  <h3 className="font-bold">15-30 WPM: Building Confidence</h3>
                  <p className="text-sm">You're developing muscle memory. Keep practicing accuracy and start thinking about rhythm.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏃</span>
                </div>
                <div>
                  <h3 className="font-bold">30-45 WPM: Intermediate Level</h3>
                  <p className="text-sm">Good progress! Focus on maintaining accuracy while gradually increasing speed.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="font-bold">45+ WPM: Advanced Level</h3>
                  <p className="text-sm">Excellent! You're approaching professional typing speeds. Maintain daily practice.</p>
                </div>
              </div>
            </div>
          </article>

          <section className="bg-[var(--accent)] text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Start Learning Today</h2>
            <p className="mb-4">
              Ready to master touch typing? Use our free typing practice tool with difficulty levels designed for learners.
              Follow the structured approach above and you'll be typing confidently in just a few weeks.
            </p>
            <p className="mb-6">
              Remember: consistency is key. Practice daily, focus on accuracy first, and celebrate small improvements. Touch
              typing is a skill that improves with regular practice, and our tools are designed to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/" className="inline-block bg-white text-[var(--accent)] px-6 py-3 rounded-lg hover:opacity-90 font-semibold text-center">
                Begin Your Journey
              </a>
              <a href="/typing-practice" className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[var(--accent)] font-semibold text-center">
                Practice Exercises
              </a>
              <a href="/improve-typing-speed" className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[var(--accent)] font-semibold text-center">
                Speed Tips
              </a>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
