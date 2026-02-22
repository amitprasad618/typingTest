import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[var(--text)]">Quick Links</h3>
            <ul className="space-y-2 text-[var(--muted)]">
              <li>
                <Link to="/" className="hover:text-[var(--accent)] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/typing-test" className="hover:text-[var(--accent)] transition">
                  Typing Test
                </Link>
              </li>
              <li>
                <Link to="/typing-practice" className="hover:text-[var(--accent)] transition">
                  Practice
                </Link>
              </li>
              <li>
                <Link to="/learn-typing" className="hover:text-[var(--accent)] transition">
                  Learn Typing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[var(--text)]">Resources</h3>
            <ul className="space-y-2 text-[var(--muted)]">
              <li>
                <Link to="/typing-practice" className="hover:text-[var(--accent)] transition">
                  Typing Guide
                </Link>
              </li>
              <li>
                <Link to="/improve-typing-speed" className="hover:text-[var(--accent)] transition">
                  Speed Tips
                </Link>
              </li>
              <li>
                <Link to="/wpm-calculator" className="hover:text-[var(--accent)] transition">
                  WPM Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[var(--text)]">Tools</h3>
            <ul className="space-y-2 text-[var(--muted)]">
              <li>
                <Link to="/wpm-calculator" className="hover:text-[var(--accent)] transition">
                  WPM Calculator
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[var(--accent)] transition">
                  Typing Test
                </Link>
              </li>
              <li>
                <Link to="/typing-practice" className="hover:text-[var(--accent)] transition">
                  Practice Exercises
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[var(--text)]">About</h3>
            <p className="text-[var(--muted)] text-sm mb-4">
              Free online typing test and practice tool to help you improve your typing speed and accuracy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[var(--muted)] hover:text-[var(--accent)] transition">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.097 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-[var(--muted)] hover:text-[var(--accent)] transition">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.543 2.914 1.186.092-.923.35-1.543.636-1.897-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[var(--border)] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--muted)]">
            <p>&copy; {currentYear} Free Typing Test. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[var(--accent)] transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[var(--accent)] transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[var(--accent)] transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
