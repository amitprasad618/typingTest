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

        <section className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)] mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Use This Typing Test?</h2>
          <p className="text-[var(--muted)] mb-4">
            Our typing test is designed to provide accurate, reliable measurements of your typing speed and accuracy. With
            multiple difficulty levels and customizable test durations, you can track your progress as you improve your typing
            skills. Whether you're a beginner looking to learn touch typing or a professional wanting to maintain peak typing
            performance, our test has you covered.
          </p>
          <p className="text-[var(--muted)] mb-4">
            Unlike other typing tests that use outdated methods or limited text samples, our comprehensive test offers a modern,
            user-friendly experience with real-time feedback and detailed analytics. The test adapts to your skill level, ensuring
            that both beginners and advanced typists can benefit from accurate measurements.
          </p>
          <a href="/" className="inline-block mt-4 bg-[var(--accent)] text-white px-6 py-2 rounded-lg hover:opacity-90">
            Start Typing Test
          </a>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Understanding Your Typing Speed Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="text-xl font-bold mb-3">WPM (Words Per Minute)</h3>
              <p className="text-[var(--muted)] mb-3">
                WPM measures how many words you can type in 60 seconds. One "word" is standardized as 5 characters, including spaces.
                This metric has been the industry standard for measuring typing speed since the early days of typewriters.
              </p>
              <ul className="text-[var(--muted)] space-y-1 text-sm">
                <li><strong>0-20 WPM:</strong> Beginner level</li>
                <li><strong>20-40 WPM:</strong> Basic proficiency</li>
                <li><strong>40-60 WPM:</strong> Average office worker</li>
                <li><strong>60-80 WPM:</strong> Above average</li>
                <li><strong>80-100 WPM:</strong> Professional level</li>
                <li><strong>100+ WPM:</strong> Expert/competitive typist</li>
              </ul>
            </div>
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="text-xl font-bold mb-3">Accuracy Percentage</h3>
              <p className="text-[var(--muted)] mb-3">
                Accuracy measures how many characters you type correctly out of the total characters attempted. High accuracy
                (95%+) is essential for professional typing, as errors can significantly slow down overall productivity.
              </p>
              <div className="space-y-2 text-[var(--muted)] text-sm">
                <p><strong>Professional standard:</strong> 98%+ accuracy</p>
                <p><strong>Office work:</strong> 95%+ accuracy</p>
                <p><strong>Learning phase:</strong> 90%+ accuracy</p>
                <p><strong>Beginner:</strong> Focus on technique over speed</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Typing Test Difficulty Levels Explained</h2>
          <div className="space-y-4">
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="text-lg font-bold mb-2 text-green-600">Easy Level</h3>
              <p className="text-[var(--muted)] mb-2">
                Perfect for beginners who are just starting their typing journey. Features simple, common words and short sentences
                that help build confidence and develop proper finger placement.
              </p>
              <p className="text-[var(--muted)] text-sm">
                <strong>Best for:</strong> Complete beginners, children learning to type, or anyone wanting to practice basic skills.
                Focus on accuracy and proper technique rather than speed.
              </p>
            </div>
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="text-lg font-bold mb-2 text-blue-600">Medium Level</h3>
              <p className="text-[var(--muted)] mb-2">
                Balanced difficulty with everyday vocabulary and moderate sentence complexity. Suitable for intermediate typists
                who want to improve both speed and accuracy.
              </p>
              <p className="text-[var(--muted)] text-sm">
                <strong>Best for:</strong> Office workers, students, and anyone with basic typing skills looking to reach 40-60 WPM.
                Combines vocabulary building with speed development.
              </p>
            </div>
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="text-lg font-bold mb-2 text-orange-600">Hard Level</h3>
              <p className="text-[var(--muted)] mb-2">
                Advanced vocabulary and complex sentence structures challenge experienced typists. Includes technical terms,
                longer words, and varied punctuation patterns.
              </p>
              <p className="text-[var(--muted)] text-sm">
                <strong>Best for:</strong> Professionals, writers, and advanced typists aiming for 60+ WPM. Tests ability to handle
                complex text while maintaining high accuracy.
              </p>
            </div>
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="text-lg font-bold mb-2 text-red-600">Super Hard Level</h3>
              <p className="text-[var(--muted)] mb-2">
                Expert-level content with specialized vocabulary, technical jargon, and challenging text patterns. Designed for
                competitive typists and professionals who demand peak performance.
              </p>
              <p className="text-[var(--muted)] text-sm">
                <strong>Best for:</strong> Competitive typists, transcriptionists, and professionals requiring 80+ WPM speeds.
                Pushes the limits of typing ability and precision.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Tips for Taking an Effective Typing Test</h2>
          <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3">Preparation Tips</h3>
                <ul className="space-y-2 text-[var(--muted)] text-sm">
                  <li>• Warm up with easy practice before testing</li>
                  <li>• Ensure proper lighting and comfortable setup</li>
                  <li>• Take breaks if you feel fatigued</li>
                  <li>• Use the same keyboard you'll be tested on</li>
                  <li>• Clear your mind and focus on the task</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">During the Test</h3>
                <ul className="space-y-2 text-[var(--muted)] text-sm">
                  <li>• Maintain steady rhythm and pace</li>
                  <li>• Don't rush - accuracy matters</li>
                  <li>• Use proper finger placement</li>
                  <li>• Keep eyes on the screen, not keyboard</li>
                  <li>• Breathe normally and stay relaxed</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Common Typing Mistakes to Avoid</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="font-bold mb-3 text-red-600">Looking at the Keyboard</h3>
              <p className="text-[var(--muted)] text-sm">
                One of the biggest mistakes beginners make is constantly looking down at the keyboard. This "hunt and peck" method
                severely limits typing speed and prevents the development of muscle memory. Keep your eyes on the screen and let
                your fingers find the keys through practice.
              </p>
            </div>
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="font-bold mb-3 text-red-600">Using Wrong Fingers</h3>
              <p className="text-[var(--muted)] text-sm">
                Each finger has specific keys assigned to it in the touch typing system. Using the wrong finger for a key creates
                inefficient movement patterns and can cause strain. Learn the proper finger-key mapping and stick to it consistently.
              </p>
            </div>
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="font-bold mb-3 text-red-600">Poor Posture</h3>
              <p className="text-[var(--muted)] text-sm">
                Slouching or maintaining improper posture puts unnecessary strain on your neck, shoulders, and wrists. Sit up
                straight with your feet flat on the floor, elbows at 90 degrees, and wrists straight. Good posture prevents fatigue
                and allows for longer, more productive typing sessions.
              </p>
            </div>
            <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
              <h3 className="font-bold mb-3 text-red-600">Typing Too Fast Too Soon</h3>
              <p className="text-[var(--muted)] text-sm">
                Many people try to increase speed before they've mastered accuracy. This leads to bad habits and frustration.
                Focus on accuracy first (95%+), then gradually increase speed. Speed naturally follows once proper technique is established.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
          <h2 className="text-2xl font-bold mb-4">Ready to Test Your Skills?</h2>
          <p className="text-[var(--muted)] mb-6">
            Our comprehensive typing test provides accurate measurements of your current skill level and helps you track progress
            over time. Whether you're just starting out or aiming to reach professional-level speeds, our test gives you the
            feedback you need to improve. Start your typing journey today and see how fast and accurate you can become!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/" className="inline-block bg-[var(--accent)] text-white px-6 py-3 rounded-lg hover:opacity-90 text-center">
              Start Typing Test
            </a>
            <a href="/typing-practice" className="inline-block border border-[var(--border)] text-[var(--text)] px-6 py-3 rounded-lg hover:bg-[var(--border)] text-center">
              Practice First
            </a>
            <a href="/learn-typing" className="inline-block border border-[var(--border)] text-[var(--text)] px-6 py-3 rounded-lg hover:bg-[var(--border)] text-center">
              Learn to Type
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
