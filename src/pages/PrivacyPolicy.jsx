import React from "react";
import { usePageMeta } from "../hooks/usePageMeta";

export default function PrivacyPolicy() {
  usePageMeta({
    title: "Privacy Policy - Typing Test",
    description: "Privacy policy for our free typing speed test website. Learn how we collect, use, and protect your information.",
    keywords: "privacy policy, data protection, user privacy, typing test privacy",
    ogTitle: "Privacy Policy - Typing Test",
    ogDescription: "Read our privacy policy to understand how we protect your data.",
    canonicalUrl: "https://typingtest.example.com/privacy-policy",
  });

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-[var(--muted)] mb-8">Last updated: March 25, 2026</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              At Typing Test ("we," "us," "our," or "Company"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our typing speed test services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p className="text-[var(--muted)] mb-4">We collect information in the following ways:</p>
            <ul className="list-disc list-inside space-y-2 text-[var(--muted)]">
              <li>
                <strong>Automatically Collected Information:</strong> When you visit our website, we automatically collect certain information about your device, including browser type, IP address, pages visited, and time spent on pages.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies and similar technologies to enhance your experience and analyze website usage.
              </li>
              <li>
                <strong>Google Analytics:</strong> We use Google Analytics to track website performance and user behavior.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-[var(--muted)] mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 text-[var(--muted)]">
              <li>Improve our website and typing test services</li>
              <li>Understand user behavior and preferences</li>
              <li>Display relevant advertisements through Google AdSense</li>
              <li>Provide technical support and customer service</li>
              <li>Analyze website performance and usability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>
            <p className="text-[var(--muted)] mb-4 leading-relaxed">
              Our website may use third-party services including Google Analytics, Google AdSense, and other advertising networks. These third parties may collect information about your browsing habits. Please review their privacy policies for more information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--muted)]">
              <li>
                <a href="https://policies.google.com/privacy" className="text-[var(--accent)] hover:underline">
                  Google Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://support.google.com/adsense/answer/1348695" className="text-[var(--accent)] hover:underline">
                  Google AdSense Privacy & Terms
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. User Rights</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              Depending on your location, you may have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at the email address provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the "Last updated" date at the top of this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:support@typingtest.example.com" className="text-[var(--accent)] hover:underline">
                support@typingtest.example.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
