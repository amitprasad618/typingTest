"use client";

import { useState, useCallback, useEffect, useRef } from "react";

const DIFFICULTY_TEXTS: Record<string, string> = {
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

const DIFFICULTY_OPTIONS: { value: string; label: string }[] = [
  { value: "Easy", label: "Easy" },
  { value: "Medium", label: "Medium Text" },
  { value: "Hard", label: "Hard" },
  { value: "Super Hard", label: "Super Hard" },
];

type TestStatus = "idle" | "running" | "finished";

function getWordsForDifficulty(difficulty: string): string[] {
  const text = DIFFICULTY_TEXTS[difficulty] ?? DIFFICULTY_TEXTS.Medium;
  return text.split(" ").filter(Boolean);
}

export default function TypingTestDashboard() {
  const [status, setStatus] = useState<TestStatus>("idle");
  const [durationOption, setDurationOption] = useState(DURATION_OPTIONS[0]);
  const [difficulty, setDifficulty] = useState("Medium");
  const [words, setWords] = useState<string[]>(() => getWordsForDifficulty("Medium"));
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [correctChars, setCorrectChars] = useState(0);
  const [totalTypedChars, setTotalTypedChars] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentWord = words[currentWordIndex] ?? "";
  const isComplete = currentWordIndex >= words.length;
  const durationSeconds = durationOption.seconds;

  // Countdown timer: when running, decrement timeLeft every second; at 0, end test
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

  // End test when time runs out
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

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (status !== "running" || isComplete) return;

      if (e.key === " ") {
        e.preventDefault();
        const typed = input.trim();
        const expected = currentWord;
        setTotalTypedChars((c) => c + typed.length);
        setCorrectChars((c) => c + typed.split("").filter((ch, i) => expected[i] === ch).length);
        setCurrentWordIndex((i) => i + 1);
        setInput("");
        return;
      }
    },
    [status, input, currentWord, isComplete]
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
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
  const accuracy =
    totalTypedChars > 0 ? Math.round((correctChars / totalTypedChars) * 100) : null;

  const timeDisplay =
    status === "finished" && startTime && endTime
      ? `${((endTime - startTime) / 1000).toFixed(1)}s`
      : status === "running"
        ? `${timeLeft}s left`
        : "—";

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] p-6 md:p-10">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Check your typing skills in a minute
          </h1>
          <p className="text-[var(--muted)] mt-1">
            Type away to join 1+ million test takers!
          </p>
        </header>

        {/* Scoreboard */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <StatCard
            label="WPM"
            value={wpm != null ? String(wpm) : "—"}
            sub={status === "running" ? `${durationSeconds - timeLeft}s` : undefined}
          />
          <StatCard label="Accuracy" value={accuracy != null ? `${accuracy}%` : "—"} />
          <StatCard label="Words" value={`${currentWordIndex} / ${words.length}`} />
          <StatCard label="Time" value={timeDisplay} />
        </div>

        {/* Dynamic test container: selection vs running test */}
        <section className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all fade-in">
          {status === "idle" && (
            <div>
              <h2 className="text-lg font-semibold text-white mb-4">Select Your Test</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--muted)] mb-2">
                    Test Duration
                  </label>
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
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--muted)] mb-2">
                    Difficulty Level
                  </label>
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
              <button
                onClick={startTest}
                className="w-full sm:w-auto rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
              >
                Start Test
              </button>
            </div>
          )}

          {status !== "idle" && (
            <div className="space-y-4">
              {/* Top controls */}
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-white">Typing Test</h2>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={startTest}
                    className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-1.5 text-xs font-medium text-[var(--text)] hover:bg-[var(--border)] transition"
                  >
                    Restart
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setInput("");
                      setCurrentWordIndex(0);
                    }}
                    className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-1.5 text-xs font-medium text-[var(--text)] hover:bg-[var(--border)] transition"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Typing text display */}
              <div
                className="min-h-[120px] cursor-text"
                onClick={() =>
                  status === "running" && document.getElementById("typing-input")?.focus()
                }
              >
                <div className="flex flex-wrap gap-x-2 gap-y-2 text-lg leading-relaxed">
                  {words.map((word, i) => (
                    <span key={i}>
                      {i < currentWordIndex ? (
                        <span className="text-[var(--correct)]">{word}</span>
                      ) : i === currentWordIndex ? (
                        <span
                          className="relative inline-block rounded px-0.5 py-0.5 bg-[var(--accent)]/15 ring-1 ring-[var(--accent)]/40"
                          style={{ boxDecorationBreak: "clone" }}
                        >
                          {word.split("").map((char, j) => (
                            <span
                              key={j}
                              className={
                                j < input.length
                                  ? char === input[j]
                                    ? "text-[var(--correct)]"
                                    : "text-[var(--incorrect)] underline decoration-wavy"
                                  : j === input.length
                                    ? "text-[var(--cursor)] bg-[var(--cursor)]/20"
                                    : "text-[var(--text)]"
                              }
                            >
                              {char}
                            </span>
                          ))}
                          {input.length >= word.length && (
                            <span className="text-[var(--incorrect)]">
                              {input.slice(word.length)}
                            </span>
                          )}
                        </span>
                      ) : (
                        <span className="text-[var(--muted)]">{word}</span>
                      )}
                      {i < words.length - 1 ? " " : ""}
                    </span>
                  ))}
                </div>
              </div>

              {/* Typing input */}
              <input
                id="typing-input"
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder={status === "running" ? "Type here..." : "Test paused"}
                disabled={status !== "running"}
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent disabled:opacity-60 disabled:cursor-not-allowed"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
      <p className="text-xs uppercase tracking-wider text-[var(--muted)]">{label}</p>
      <p className="text-2xl font-semibold text-white mt-0.5">{value}</p>
      {sub && <p className="text-xs text-[var(--muted)] mt-1">{sub}</p>}
    </div>
  );
}
