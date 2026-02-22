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

        <section>
          <h2 className="text-2xl font-bold mb-4">Get Started with Typing Practice</h2>
          <p className="text-[var(--muted)] mb-4">
            Begin your typing improvement journey today. With our structured approach and daily practice, you'll see significant improvements in both speed and accuracy within just a few weeks. Consistent practice is the key to becoming a faster, more accurate typist.
          </p>
          <a href="/" className="inline-block bg-[var(--accent)] text-white px-6 py-2 rounded-lg hover:opacity-90">
            Start Practicing Now
          </a>
        </section>
      </div>
    </div>
  );
}
