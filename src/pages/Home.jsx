import React, { useState, useCallback, useEffect, useRef } from "react";
import HeroIllustration from "../components/HeroIllustration";
import { typingTexts, getRandomText } from "../data/typingTexts";
import { usePageMeta } from "../hooks/usePageMeta";

const typingGirl = "/images/typing-girl.svg";
const typingBoy = "/images/typing-boy.svg";

function getTextForDifficulty(difficulty) {
  const texts = typingTexts[difficulty] ?? typingTexts.Medium;
  return getRandomText(texts);
}

function getWordsForDifficulty(difficulty) {
  const text = getTextForDifficulty(difficulty);
  return text.split(" ").filter(Boolean);
}

const DURATION_OPTIONS = [
  { label: "30 Second Test", seconds: 30 },
  { label: "1 Minute Test", seconds: 60 },
  { label: "3 Minute Test", seconds: 180 },
];

const DIFFICULTY_OPTIONS = [
  { value: "Easy", label: "Easy" },
  { value: "Medium", label: "Medium Text" },
  { value: "Hard", label: "Hard" },
  { value: "Super Hard", label: "Super Hard" },
];

// Helper function to find sentence boundaries (indices where sentences end)
function getSentenceBoundaries(words) {
  const boundaries = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.endsWith(".") || word.endsWith("!") || word.endsWith("?")) {
      boundaries.push(i);
    }
  }
  return boundaries;
}

// Get the starting index of the current sentence
function getCurrentSentenceStart(currentWordIndex, sentenceBoundaries) {
  if (currentWordIndex === 0) return 0;
  for (let i = 0; i < sentenceBoundaries.length; i++) {
    if (currentWordIndex <= sentenceBoundaries[i]) {
      return i === 0 ? 0 : sentenceBoundaries[i - 1] + 1;
    }
  }
  return sentenceBoundaries.length > 0 ? sentenceBoundaries[sentenceBoundaries.length - 1] + 1 : 0;
}

// Get words to display (current sentence + next 2 sentences for preview)
function getDisplayWordRange(currentWordIndex, words, sentenceBoundaries) {
  const sentenceStart = getCurrentSentenceStart(currentWordIndex, sentenceBoundaries);
  
  // Find how many sentences ahead we should show (up to 2 sentences)
  let displayEndIndex = words.length;
  let sentencesShown = 0;
  
  for (let i = 0; i < sentenceBoundaries.length && sentencesShown < 2; i++) {
    if (sentenceBoundaries[i] >= sentenceStart) {
      displayEndIndex = sentenceBoundaries[i] + 1;
      sentencesShown++;
    }
  }
  
  return { start: sentenceStart, end: displayEndIndex };
}

export default function TypingTestDashboard() {
  const [status, setStatus] = useState("idle");
  const [durationOption, setDurationOption] = useState(DURATION_OPTIONS[0]);
  const [difficulty, setDifficulty] = useState("Medium");
  const [words, setWords] = useState(() => getWordsForDifficulty("Medium"));
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [correctChars, setCorrectChars] = useState(0);
  const [totalTypedChars, setTotalTypedChars] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const inputRef = useRef(null);

  // Set up SEO meta tags
  usePageMeta({
    title: "Free Typing Speed Test - Check Your WPM Online",
    description:
      "Test your typing speed in one minute. Free online typing test with multiple difficulty levels and random text practice. Improve your typing skills today.",
    keywords:
      "typing test, typing speed test, WPM test, online typing practice, free typing test, measure typing speed, typing skills",
    ogTitle: "Free Typing Speed Test - Check Your WPM Online",
    ogDescription:
      "Test your typing speed with our free online typing test. Track your WPM, accuracy, and improve your typing skills.",
    ogImage: "/images/og-image.png",
    ogUrl: "https://typingtest.example.com/",
    canonicalUrl: "https://typingtest.example.com/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is typing speed test?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A typing speed test is an online tool that measures your typing speed in words per minute (WPM) and accuracy. It helps you track your typing skills and identify areas for improvement.",
          },
        },
        {
          "@type": "Question",
          name: "What is a good typing speed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An average typing speed is around 40 WPM, while 60+ WPM is considered above average. Professional typists and transcriptionists typically maintain speeds of 75+ WPM.",
          },
        },
        {
          "@type": "Question",
          name: "How can I improve typing speed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Practice regularly with typing tests and exercises. Focus on proper finger placement, reduce errors, and maintain consistent practice. Our free typing test with multiple difficulty levels helps you progress at your own pace.",
          },
        },
      ],
    },
  });

  const currentWord = words[currentWordIndex] ?? "";
  const isComplete = currentWordIndex >= words.length;
  const durationSeconds = durationOption.seconds;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    if (status !== "running" || timeLeft <= 0) return;
    const t = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(t);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [status, timeLeft]);

  useEffect(() => {
    if (status === "running" && timeLeft === 0 && startTime) {
      setEndTime(Date.now());
      setStatus("finished");
    }
  }, [status, timeLeft, startTime]);

  const startTest = useCallback(() => {
    const newWords = getWordsForDifficulty(difficulty);
    setWords(newWords);
    setStatus("running");
    setStartTime(Date.now());
    setEndTime(null);
    setCurrentWordIndex(0);
    setInput("");
    setCorrectChars(0);
    setTotalTypedChars(0);
    setTimeLeft(durationSeconds);
    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  }, [difficulty, durationSeconds]);

  const closeTest = useCallback(() => {
    setStatus("idle");
    setInput("");
    setCurrentWordIndex(0);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (status !== "running" || isComplete) return;
      if (e.key === " ") {
        e.preventDefault();
        const typed = input.trim();
        const expected = currentWord;
        setTotalTypedChars((c) => c + typed.length);
        setCorrectChars((c) => c + typed.split("").filter((ch, i) => expected[i] === ch).length);
        setCurrentWordIndex((i) => i + 1);
        setInput("");
      }
    },
    [status, input, currentWord, isComplete]
  );

  const handleChange = useCallback((e) => {
    const v = e.target.value;
    if (/\s/.test(v)) return;
    setInput(v);
  }, []);

  const elapsed =
    status === "finished" && startTime && endTime
      ? (endTime - startTime) / 1000
      : status === "running"
      ? durationSeconds - timeLeft
      : 0;
  const secondsElapsed = Math.max(elapsed, 0.1);
  const wpm =
    status === "running" || status === "finished"
      ? totalTypedChars > 0
        ? Math.round((totalTypedChars / 5 / secondsElapsed) * 60)
        : 0
      : null;
  const accuracy = totalTypedChars > 0 ? Math.round((correctChars / totalTypedChars) * 100) : null;
  const timeDisplay =
    status === "finished" && startTime && endTime
      ? `${((endTime - startTime) / 1000).toFixed(1)}s`
      : status === "running"
      ? `${timeLeft}s left`
      : "—";

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      {/* Hero Section */}
      <div className="w-full flex items-start pt-12 justify-center">
        <div className="w-full max-w-[1100px] mx-auto px-4 flex flex-col items-center">
          <section className="relative w-full min-h-[520px] rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-10 shadow-xl transition-all duration-300 fade-in overflow-hidden flex items-center justify-center">
            {/* Left Image - Absolutely positioned, lazy loaded */}
            <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 justify-center items-center min-h-[200px] -mx-2 w-1/5">
              <HeroIllustration src={typingGirl} alt="Person typing to test typing speed" loading="lazy" />
            </div>

            {/* Center Content */}
            <div className="min-w-0 space-y-6 max-w-[700px] w-full text-center px-2 z-10">
              {status === "idle" && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight">
                      Check your typing skills in a minute
                    </h1>
                    <p className="text-[var(--muted)] text-lg">Practice your typing speed, improve accuracy, and track your progress with our free typing test.</p>
                  </div>

                  <div className="pt-2">
                    <p className="text-xs uppercase tracking-widest text-[var(--muted)] mb-4">Select your test</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      <div className="text-left space-y-2">
                        <label className="block text-xs uppercase tracking-wider text-[var(--muted)]">Test duration</label>
                        <select
                          value={durationOption.label}
                          onChange={(e) => {
                            const opt = DURATION_OPTIONS.find((o) => o.label === e.target.value);
                            if (opt) setDurationOption(opt);
                          }}
                          className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                        >
                          {DURATION_OPTIONS.map((opt) => (
                            <option key={opt.label} value={opt.label}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="text-left space-y-2">
                        <label className="block text-xs uppercase tracking-wider text-[var(--muted)]">Difficulty</label>
                        <select
                          value={difficulty}
                          onChange={(e) => setDifficulty(e.target.value)}
                          className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                        >
                          {DIFFICULTY_OPTIONS.map((d) => (
                            <option key={d.value} value={d.value}>
                              {d.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <button
                        onClick={startTest}
                        className="w-full sm:w-auto rounded-xl bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition shadow-lg uppercase tracking-wide"
                      >
                        Start Test
                      </button>
                      <div className="pt-1">
                        <label className="inline-flex items-center gap-2 cursor-pointer">
                          <span className="text-sm text-[var(--muted)]">Dark mode</span>
                          <button
                            type="button"
                            role="switch"
                            aria-checked={darkMode}
                            onClick={() => setDarkMode((d) => !d)}
                            className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border border-[var(--border)] bg-[var(--border)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--surface)]"
                          >
                            <span
                              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${
                                darkMode ? "translate-x-5" : "translate-x-0.5"
                              }`}
                            />
                          </button>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {status !== "idle" && (
                <div className="space-y-4 fade-in text-left">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-lg font-semibold text-[var(--text)]">Typing test</h2>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={startTest}
                        className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-2 text-[var(--text)] hover:bg-[var(--border)] transition"
                        title="Restart"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={closeTest}
                        className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-2 text-[var(--text)] hover:bg-[var(--border)] transition"
                        title="Close"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <StatCard label="WPM" value={wpm != null ? String(wpm) : "—"} sub={status === "running" ? `${durationSeconds - timeLeft}s` : undefined} />
                    <StatCard label="Accuracy" value={accuracy != null ? `${accuracy}%` : "—"} />
                    <StatCard label="Words" value={`${currentWordIndex} / ${words.length}`} />
                    <StatCard label="Time" value={timeDisplay} />
                  </div>

                  <div className="max-h-[200px] overflow-y-auto cursor-text rounded-lg p-3 border border-[var(--border)]/50 transition-all duration-300" onClick={() => status === "running" && document.getElementById("typing-input")?.focus()}>
                    <div className="flex flex-wrap gap-x-2 gap-y-2 text-lg leading-relaxed">
                      {(() => {
                        const sentenceBoundaries = getSentenceBoundaries(words);
                        const { start: displayStart, end: displayEnd } = getDisplayWordRange(currentWordIndex, words, sentenceBoundaries);
                        
                        return words.slice(displayStart, displayEnd).map((word, displayIndex) => {
                          const actualIndex = displayStart + displayIndex;
                          return (
                            <span key={actualIndex} className={`transition-all duration-300 ${
                              actualIndex < currentWordIndex ? "opacity-75" : ""
                            }`}>
                              {actualIndex < currentWordIndex ? (
                                <span className="text-[var(--correct)]">{word}</span>
                              ) : actualIndex === currentWordIndex ? (
                                <span className="relative inline-block rounded px-0.5 py-0.5 bg-[var(--accent)]/15 ring-1 ring-[var(--accent)]/40" style={{ boxDecorationBreak: "clone" }}>
                                  {word.split("").map((char, j) => (
                                    <span key={j} className={j < input.length ? (char === input[j] ? "text-[var(--correct)]" : "text-[var(--incorrect)] underline decoration-wavy") : j === input.length ? "text-[var(--cursor)] bg-[var(--cursor)]/20" : "text-[var(--text)]"}>
                                      {char}
                                    </span>
                                  ))}
                                  {input.length >= word.length && <span className="text-[var(--incorrect)]">{input.slice(word.length)}</span>}
                                </span>
                              ) : (
                                <span className="text-[var(--muted)]">{word}</span>
                              )}
                              {actualIndex < words.length - 1 ? " " : ""}
                            </span>
                          );
                        });
                      })()}
                    </div>
                  </div>

                  <input
                    id="typing-input"
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder={status === "running" ? "Type here..." : "Test paused"}
                    disabled={status !== "running"}
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] disabled:opacity-60 disabled:cursor-not-allowed"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck={false}
                  />
                </div>
              )}
            </div>

            {/* Right Image - Absolutely positioned, lazy loaded */}
            <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 justify-center items-center min-h-[200px] -mx-2 w-1/5">
              <HeroIllustration src={typingBoy} alt="Person typing to improve typing skills" loading="lazy" />
            </div>
          </section>
        </div>
      </div>

      {/* SEO Content Section */}
      <section className="w-full bg-[var(--surface)] py-16 px-4">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* What is Typing Speed Test */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-[var(--text)]">What is a Typing Speed Test?</h2>
              <p className="text-[var(--muted)] leading-relaxed">
                A typing speed test is an online tool that measures how fast and accurately you can type. It evaluates your typing
                performance in words per minute (WPM) and shows your accuracy percentage. These tests are designed to help you track
                your progress and identify areas for improvement in your typing skills.
              </p>
              <h3 className="text-xl font-semibold text-[var(--text)] mt-6">Why Take a Typing Test?</h3>
              <ul className="text-[var(--muted)] space-y-2 list-disc list-inside">
                <li>Measure your current typing speed baseline</li>
                <li>Track improvement over time</li>
                <li>Identify weaknesses in typing technique</li>
                <li>Enhance productivity at work or school</li>
              </ul>
            </article>

            {/* What is WPM */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-[var(--text)]">What is WPM (Words Per Minute)?</h2>
              <p className="text-[var(--muted)] leading-relaxed">
                WPM stands for Words Per Minute and is the standard measurement for typing speed. It calculates how many words you
                can type in 60 seconds. One "word" is typically defined as 5 characters, including spaces and punctuation. A higher
                WPM indicates faster typing ability.
              </p>
              <h3 className="text-xl font-semibold text-[var(--text)] mt-6">Understanding WPM Levels:</h3>
              <ul className="text-[var(--muted)] space-y-2">
                <li>
                  <strong>30-40 WPM:</strong> Beginner level
                </li>
                <li>
                  <strong>40-60 WPM:</strong> Average level
                </li>
                <li>
                  <strong>60-80 WPM:</strong> Above average
                </li>
                <li>
                  <strong>80+ WPM:</strong> Professional level
                </li>
              </ul>
            </article>

            {/* How to Improve Typing Speed */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-[var(--text)]">How to Improve Your Typing Speed?</h2>
              <p className="text-[var(--muted)] leading-relaxed">
                Improving typing speed requires consistent practice and proper technique. Use different difficulty levels in our
                typing test to challenge yourself progressively. Focus on accuracy first—speed will naturally follow as muscle memory
                develops.
              </p>
              <h3 className="text-xl font-semibold text-[var(--text)] mt-6">Tips for Faster Typing:</h3>
              <ol className="text-[var(--muted)] space-y-2 list-decimal list-inside">
                <li>Use proper finger placement (home row position)</li>
                <li>Practice regularly with our free typing test</li>
                <li>Don't look at the keyboard while typing</li>
                <li>Start with easy mode and progress to harder difficulties</li>
                <li>Focus on accuracy over speed initially</li>
              </ol>
            </article>

            {/* Benefits of Daily Typing Practice */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-[var(--text)]">Benefits of Practicing Typing Daily</h2>
              <p className="text-[var(--muted)] leading-relaxed">
                Daily typing practice offers numerous benefits beyond just increasing speed. It improves hand-eye coordination,
                reduces strain from poor typing habits, and boosts overall productivity in professional and educational settings.
              </p>
              <h3 className="text-xl font-semibold text-[var(--text)] mt-6">Key Benefits:</h3>
              <ul className="text-[var(--muted)] space-y-2 list-disc list-inside">
                <li>Increased typing speed and accuracy</li>
                <li>Better job performance and career prospects</li>
                <li>Reduced typing-related strain and injuries</li>
                <li>Enhanced focus and concentration</li>
                <li>Improved confidence in professional environments</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="w-full bg-[var(--bg)] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <FAQItem question="What is a good typing speed?" answer="An average typing speed is around 40 WPM. A speed of 60+ WPM is considered above average, while 80+ WPM is professional level. The benchmark depends on your profession, but consistent practice will help you improve." />
            <FAQItem
              question="How can I increase my typing speed?"
              answer="The key to improving typing speed is consistent practice. Use our free typing test regularly with different difficulty levels, focus on accuracy first, maintain proper posture and finger placement, and practice touch typing without looking at your keyboard."
            />
            <FAQItem question="How accurate should my typing be?" answer="Aim for at least 95% accuracy while typing. While speed is important, accuracy is equally crucial. Making fewer errors improves productivity and reduces the need for correction, which ultimately saves time." />
            <FAQItem question="Is free typing practice effective?" answer="Yes! Free typing tests are very effective for improving your typing skills. Consistent practice with varied difficulty levels helps develop muscle memory and improves reflexes. Our test provides real-time feedback on speed and accuracy." />
            <FAQItem question="How often should I practice typing?" answer="For best results, practice typing for at least 15-30 minutes daily. Regular, short practice sessions are more effective than occasional long sessions. This helps build muscle memory and maintains consistency." />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value, sub }) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3">
      <p className="text-xs uppercase tracking-wider text-[var(--muted)]">{label}</p>
      <p className="text-xl font-semibold text-[var(--text)] mt-0.5">{value}</p>
      {sub && <p className="text-xs text-[var(--muted)] mt-1">{sub}</p>}
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border border-[var(--border)] rounded-lg p-6 bg-[var(--surface)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 text-left focus:outline-none"
      >
        <h3 className="text-lg font-semibold text-[var(--text)]">{question}</h3>
        <span className={`text-[var(--accent)] text-xl flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 text-[var(--muted)] leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
