import React from "react";
import { usePageMeta } from "../hooks/usePageMeta";

export default function TypingTestPage() {
  usePageMeta({
    title: "Free Typing Speed Test - Measure Your WPM",
    description:
      "Take our free typing speed test to measure your WPM and accuracy. Multiple difficulty levels to match your skill level.",
    keywords: "typing speed test, WPM test, free typing test, measure typing speed, online typing test",
    ogTitle: "Free Typing Speed Test - Measure Your WPM",
    ogDescription: "Test your typing speed with our comprehensive typing speed test.",
    canonicalUrl: "https://typingtest.example.com/typing-test",
  });

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Typing Speed Test</h1>
        <p className="text-xl text-[var(--muted)] mb-8">
          Take our free comprehensive typing speed test to measure your WPM (words per minute) and accuracy in real-time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">How Our Typing Test Works</h2>
            <ol className="list-decimal list-inside space-y-3 text-[var(--muted)]">
              <li>Select your preferred test duration (30 seconds, 1 minute, or 3 minutes)</li>
              <li>Choose a difficulty level that matches your skill level</li>
              <li>Click "Start Test" to begin typing</li>
              <li>Type the displayed text as accurately and quickly as possible</li>
              <li>Get instant feedback on your WPM and accuracy percentage</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Test Features</h2>
            <ul className="list-disc list-inside space-y-3 text-[var(--muted)]">
              <li>Real-time WPM calculation</li>
              <li>Accuracy tracking</li>
              <li>Multiple difficulty levels</li>
              <li>Adjustable test duration</li>
              <li>Dark mode support</li>
              <li>Random text selection</li>
              <li>Instant results</li>
            </ul>
          </section>
        </div>

        <section className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
          <h2 className="text-2xl font-bold mb-4">Why Use This Typing Test?</h2>
          <p className="text-[var(--muted)] mb-4">
            Our typing test is designed to provide accurate, reliable measurements of your typing speed and accuracy. With
            multiple difficulty levels and customizable test durations, you can track your progress as you improve your typing
            skills. Whether you're a beginner looking to learn touch typing or a professional wanting to maintain peak typing
            performance, our test has you covered.
          </p>
          <a href="/" className="inline-block mt-4 bg-[var(--accent)] text-white px-6 py-2 rounded-lg hover:opacity-90">
            Start Typing Test
          </a>
        </section>
      </div>
    </div>
  );
}
