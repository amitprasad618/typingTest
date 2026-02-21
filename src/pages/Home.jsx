import React, { useState, useCallback, useEffect, useRef } from "react";
import AdSlot from "../components/AdSlot";
import HeroIllustration from "../components/HeroIllustration";
import typingGirl from "../assets/images/typing-girl.svg";
import typingBoy from "../assets/images/typing-boy.svg";

const DIFFICULTY_TEXTS = {
  Easy: `cat dog run sit the and is it we go to be at so on in up do can get see look come here this that have like play.`,
  Medium: `The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump. Sphinx of black quartz judge my vow.`,
  Hard: `Entrepreneurship requires resilience and adaptability in volatile markets. Sophisticated algorithms process enormous datasets with remarkable efficiency. Philosophical discourse often explores existential quandaries and metaphysical boundaries.`,
  "Super Hard": `Pneumonoultramicroscopicsilicovolcanoconiosis exemplifies antidisestablishmentarianism. Floccinaucinihilipilification and honorificabilitudinitatibus challenge lexicographers. Sesquipedalian phraseology obfuscates straightforward communication.`,
};

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

function getWordsForDifficulty(difficulty) {
  const text = DIFFICULTY_TEXTS[difficulty] ?? DIFFICULTY_TEXTS.Medium;
  return text.split(" ").filter(Boolean);
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <div className="w-full max-w-[1580px] mx-auto px-4 flex flex-col items-center">
        <div className="flex-shrink-0 flex justify-center w-full mb-6">
          <AdSlot position="top" width={728} height={90} />
        </div>

        <div className="w-full grid grid-cols-1 min-[1200px]:grid-cols-[auto_1fr_auto] gap-6 min-[1200px]:gap-8 items-start justify-items-center">
          <div className="hidden min-[1200px]:flex justify-center">
            <AdSlot position="left" width={160} height={600} />
          </div>

          <div className="w-full max-w-[1100px] mx-auto min-w-0">
            <section className="w-full min-h-[520px] rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-10 shadow-xl transition-all duration-300 fade-in grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-8 items-center overflow-visible">
              <div className="hidden md:flex justify-center items-center min-h-[200px] -mx-2">
                <HeroIllustration src={typingGirl} alt="Person typing" />
              </div>

              <div className="min-w-0 space-y-6 max-w-[520px] mx-auto w-full text-center px-2">
                {status === "idle" && (
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text)] line-clamp-2">
                        Check your typing skills in a minute
                      </h1>
                      <p className="text-[var(--muted)]">Type away to join 1+ million test takers!</p>
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

                    <div className="min-h-[120px] cursor-text rounded-lg p-3 border border-[var(--border)]/50" onClick={() => status === "running" && document.getElementById("typing-input")?.focus()}>
                      <div className="flex flex-wrap gap-x-2 gap-y-2 text-lg leading-relaxed">
                        {words.map((word, i) => (
                          <span key={i}>
                            {i < currentWordIndex ? (
                              <span className="text-[var(--correct)]">{word}</span>
                            ) : i === currentWordIndex ? (
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
                            {i < words.length - 1 ? " " : ""}
                          </span>
                        ))}
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

              <div className="hidden md:flex justify-center items-center min-h-[200px] -mx-2">
                <HeroIllustration src={typingBoy} alt="Person typing" />
              </div>
            </section>
          </div>

          <div className="hidden min-[1200px]:flex justify-center">
            <AdSlot position="right" width={300} height={600} />
          </div>
        </div>

        <div className="flex-shrink-0 flex justify-center w-full mt-8">
          <AdSlot position="bottom" width={728} height={250} />
        </div>
      </div>
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
