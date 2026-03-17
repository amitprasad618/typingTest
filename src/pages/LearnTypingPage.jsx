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
            <h2 className="text-2xl font-bold mb-4">Essential Practice Drills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">Home Row Warm-up</h3>
                <p className="text-[var(--muted)] mb-2">
                  Start every practice session with home row drills. This builds the foundation for all other typing skills.
                </p>
                <div className="bg-[var(--bg)] p-3 rounded border border-[var(--border)] font-mono text-center">
                  a s d f j k l ; a s d f j k l ; a s d f j k l ;
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Top Row Practice</h3>
                <p className="text-[var(--muted)] mb-2">
                  Once you're comfortable with the home row, practice reaching up to the top row (QWERTYUIOP).
                </p>
                <div className="bg-[var(--bg)] p-3 rounded border border-[var(--border)] font-mono text-center">
                  q w e r t y u i o p q w e r t y u i o p
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Bottom Row Practice</h3>
                <p className="text-[var(--muted)] mb-2">
                  Practice reaching down to the bottom row (ZXCVBNM,.).
                </p>
                <div className="bg-[var(--bg)] p-3 rounded border border-[var(--border)] font-mono text-center">
                  z x c v b n m , . z x c v b n m , .
                </div>
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
