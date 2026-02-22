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

          <section className="bg-[var(--accent)] text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Start Learning Today</h2>
            <p className="mb-4">
              Ready to master touch typing? Use our free typing practice tool with difficulty levels designed for learners.
            </p>
            <a href="/" className="inline-block bg-white text-[var(--accent)] px-6 py-2 rounded-lg hover:opacity-90 font-semibold">
              Begin Your Journey
            </a>
          </section>
        </section>
      </div>
    </div>
  );
}
