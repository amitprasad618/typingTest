import React from "react";
import { usePageMeta } from "../hooks/usePageMeta";

export default function TermsAndConditions() {
  usePageMeta({
    title: "Terms & Conditions - Typing Test",
    description: "Terms and conditions for using our free typing speed test website. Please read carefully before using our services.",
    keywords: "terms and conditions, terms of service, usage terms, typing test terms",
    ogTitle: "Terms & Conditions - Typing Test",
    ogDescription: "Review our terms and conditions for using Typing Test services.",
    canonicalUrl: "https://typingtest.example.com/terms-and-conditions",
  });

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
        <p className="text-[var(--muted)] mb-8">Last updated: March 25, 2026</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. License and Access</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              We grant you a limited, non-exclusive, non-transferable license to access and use our typing speed test website for personal, non-commercial purposes. This license is revocable at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
            <p className="text-[var(--muted)] mb-4">You agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-[var(--muted)]">
              <li>Use the website only for lawful purposes</li>
              <li>Not interfere with or disrupt the website or its services</li>
              <li>Not attempt to gain unauthorized access to the website</li>
              <li>Not transmit viruses, malware, or harmful code</li>
              <li>Respect intellectual property rights of the Company and others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Disclaimer of Warranties</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              Our website and services are provided on an "as-is" basis. We make no warranties, express or implied, regarding the website's operation or the information, content, or materials included on the website. To the fullest extent permissible by law, we disclaim all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              In no event shall Typing Test, its owners, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, or for any damages resulting from loss of data, business interruption, or any other commercial loss arising from or relating to your use of the website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Third-Party Content</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              Our website may include advertisements, links, and content from third parties. We are not responsible for the content, accuracy, or practices of external websites. Please review the terms and privacy policies of third-party services before using them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Advertisements</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              We display advertisements through Google AdSense and other advertising networks. These advertisements are served by third parties and may be used to customize content based on your browsing history.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              All content on our website, including text, graphics, logos, images, and software, is the property of Typing Test or our content suppliers and is protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              We reserve the right to modify these terms and conditions at any time. Your continued use of the website following the posting of revised terms means that you accept and agree to the changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              If you have questions about these Terms & Conditions, please contact us at{" "}
              <a href="mailto:amitprasad618@gmail.com" className="text-[var(--accent)] hover:underline">
                amitprasad618@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
