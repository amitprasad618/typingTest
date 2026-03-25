import React, { useState } from "react";
import { usePageMeta } from "../hooks/usePageMeta";

export default function ContactUs() {
  usePageMeta({
    title: "Contact Us - Typing Test",
    description: "Get in touch with our support team. Send us your feedback, questions, or suggestions about our free typing speed test.",
    keywords: "contact us, support, feedback, typing test help, customer support",
    ogTitle: "Contact Us - Typing Test",
    ogDescription: "Contact our support team with your questions or feedback.",
    canonicalUrl: "https://typingtest.example.com/contact-us",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend service
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-[var(--muted)] mb-12">
          Have questions or feedback? We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
            <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <a href="mailto:amitprasad618@gmail.com" className="text-[var(--accent)] hover:underline">
              amitprasad618@gmail.com
            </a>
          </div>

          <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
            <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Response Time</h3>
            <p className="text-[var(--muted)] text-sm">We typically respond within 24-48 hours</p>
          </div>

          <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)]">
            <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Support</h3>
            <p className="text-[var(--muted)] text-sm">We're here to help with any questions</p>
          </div>
        </div>

        <div className="bg-[var(--surface)] rounded-lg border border-[var(--border)] p-8">
          {submitted && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
              <p className="text-green-500 font-semibold">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                placeholder="What is this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/80 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[var(--accent)]/30 transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12 bg-[var(--surface)] rounded-lg p-8 border border-[var(--border)]">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 text-[var(--muted)]">
            <div>
              <p className="font-semibold text-[var(--text)] mb-2">How do I submit feedback?</p>
              <p>Simply fill out the contact form above with your feedback, and we'll review it promptly.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--text)] mb-2">How long does it take to receive a response?</p>
              <p>We aim to respond to all inquiries within 24-48 hours during business days.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--text)] mb-2">Can I report a bug?</p>
              <p>Yes, please use the contact form to report any issues or bugs you encounter. Include details about what happened and your browser information.</p>
            </div>
            <div>
              <p className="font-semibold text-[var(--text)] mb-2">Do you accept partnership requests?</p>
              <p>We're open to partnerships and collaborations. Please contact us to discuss opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
