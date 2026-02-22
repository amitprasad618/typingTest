import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TypingTestPage from "./pages/TypingTestPage";
import TypingPracticePage from "./pages/TypingPracticePage";
import LearnTypingPage from "./pages/LearnTypingPage";
import ImproveTypingSpeedPage from "./pages/ImproveTypingSpeedPage";
import WPMCalculatorPage from "./pages/WPMCalculatorPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] text-[var(--text)] p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-[var(--muted)] mb-6">The page you're looking for doesn't exist.</p>
        <a href="/" className="inline-block bg-[var(--accent)] text-white px-6 py-2 rounded-lg hover:opacity-90">
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/typing-test" element={<TypingTestPage />} />
            <Route path="/typing-practice" element={<TypingPracticePage />} />
            <Route path="/learn-typing" element={<LearnTypingPage />} />
            <Route path="/improve-typing-speed" element={<ImproveTypingSpeedPage />} />
            <Route path="/wpm-calculator" element={<WPMCalculatorPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
