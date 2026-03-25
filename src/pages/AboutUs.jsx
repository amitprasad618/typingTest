import React from "react";
import { usePageMeta } from "../hooks/usePageMeta";

export default function AboutUs() {
  usePageMeta({
    title: "About Us - Typing Test",
    description: "Learn about our free typing speed test website. Discover how we help people improve their typing skills and measure their words per minute accurately.",
    keywords: "about typing test, typing speed, online typing practice, WPM measurement, typing skills",
    ogTitle: "About Us - Typing Test",
    ogDescription: "Discover the mission behind our free typing speed test website.",
    canonicalUrl: "https://typingtest.example.com/about-us",
  });

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-xl text-[var(--muted)] mb-12">
          Empowering people to improve their typing skills through free, accessible testing and practice tools.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              At Typing Test, our mission is to provide a free, easy-to-use platform for people of all skill levels to measure, track, and improve their typing speed and accuracy. We believe that typing is a fundamental skill in the digital age, and everyone deserves access to quality tools to develop this ability.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
                <h3 className="text-xl font-bold mb-3">Free Typing Speed Test</h3>
                <p className="text-[var(--muted)]">
                  Take multiple tests with varying durations (30 seconds to 3 minutes) across different difficulty levels. Get instant feedback on your WPM and accuracy.
                </p>
              </div>
              <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
                <h3 className="text-xl font-bold mb-3">Typing Practice Exercises</h3>
                <p className="text-[var(--muted)]">
                  Access comprehensive practice exercises designed to build muscle memory and improve technique, from beginner basics to advanced speeds.
                </p>
              </div>
              <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
                <h3 className="text-xl font-bold mb-3">WPM Calculator</h3>
                <p className="text-[var(--muted)]">
                  Calculate your typing speed using our easy-to-use WPM calculator. Simply enter characters typed, time, and errors to get your results.
                </p>
              </div>
              <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
                <h3 className="text-xl font-bold mb-3">Learning Resources</h3>
                <p className="text-[var(--muted)]">
                  Access detailed guides on typing techniques, speed-building strategies, accuracy improvement tips, and professional typing standards.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Why Choose Typing Test?</h2>
            <ul className="space-y-4 text-[var(--muted)]">
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-bold mt-1">✓</span>
                <div>
                  <strong>100% Free:</strong> No hidden fees, no premium plans required. All features are accessible to everyone.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-bold mt-1">✓</span>
                <div>
                  <strong>Privacy-Focused:</strong> We respect your privacy and don't store unnecessary personal data. Your test results are kept private.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-bold mt-1">✓</span>
                <div>
                  <strong>Accurate Metrics:</strong> Our typing test uses industry-standard calculations (1 word = 5 characters) for reliable WPM measurements.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-bold mt-1">✓</span>
                <div>
                  <strong>Multiple Difficulty Levels:</strong> Choose from Easy, Medium, Hard, and Super Hard to match your skill level.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-bold mt-1">✓</span>
                <div>
                  <strong>Dark Mode Support:</strong> Comfortable typing experience with our built-in dark mode option.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-bold mt-1">✓</span>
                <div>
                  <strong>Mobile-Friendly:</strong> Practice typing on any device - desktop, tablet, or mobile phone.
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <div className="bg-gradient-to-r from-[var(--accent)]/10 to-[var(--accent)]/5 rounded-lg p-8 border border-[var(--accent)]/30">
              <ul className="space-y-4 text-[var(--muted)]">
                <li>
                  <strong className="text-[var(--text)]">Accessibility:</strong> Typography and typing practice should be accessible to everyone, regardless of background or financial situation.
                </li>
                <li>
                  <strong className="text-[var(--text)]">Accuracy:</strong> We provide reliable measurements and honest feedback to help you improve.
                </li>
                <li>
                  <strong className="text-[var(--text)]">Simplicity:</strong> Our interface is clean and intuitive, making it easy for anyone to use.
                </li>
                <li>
                  <strong className="text-[var(--text)]">Continuous Improvement:</strong> We regularly update our platform based on user feedback and latest typing research.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-[var(--muted)] mb-4 leading-relaxed">
              Have questions, suggestions, or feedback? We'd love to hear from you! Contact us at{" "}
              <a href="mailto:support@typingtest.example.com" className="text-[var(--accent)] hover:underline font-semibold">
                support@typingtest.example.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
