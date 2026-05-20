import React from 'react';
import Link from 'next/link';

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-10 scroll-mt-24" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className="text-lg sm:text-xl font-700 text-foreground mb-4 pb-3 border-b border-border">
        {title}
      </h2>
      <div className="prose-article space-y-0">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyContent() {
  return (
    <article className="max-w-none">
      {/* Intro */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-10">
        <p className="text-sm text-secondary-foreground leading-relaxed">
          Welcome to <strong className="text-foreground">ScreenSizer</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We operate the website at{' '}
          <Link href="/" className="text-primary hover:underline">screensizer.io</Link> (the &ldquo;Site&rdquo;). This Privacy Policy explains what information we collect when you visit our Site, how we use it, and your rights regarding that information. By using our Site, you agree to the practices described in this policy.
        </p>
      </div>

      <Section id="information-we-collect" title="1. Information We Collect">
        <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
          ScreenSizer is designed to be a privacy-respecting tool. We collect minimal personal information. The categories of data we may collect include:
        </p>
        <h3 className="text-base font-700 text-foreground mb-2">1.1 Automatically Collected Technical Data</h3>
        <p className="text-sm text-secondary-foreground leading-relaxed mb-3">
          When you visit ScreenSizer, our servers and third-party analytics services may automatically record standard technical information, including:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-secondary-foreground mb-4">
          <li>IP address (anonymized where possible)</li>
          <li>Browser type and version (e.g., Chrome 124, Safari 17)</li>
          <li>Operating system (e.g., Windows 11, macOS Sonoma, Android 14)</li>
          <li>Referring URL (the page that linked you to our Site)</li>
          <li>Pages visited and time spent on each page</li>
          <li>Date and time of your visit</li>
          <li>Country and general geographic region (derived from IP, not precise location)</li>
        </ul>
        <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
          <strong className="text-foreground">Important:</strong> The screen size detection tool on our homepage reads your screen metrics (width, height, DPR, viewport size, device type) directly in your browser using JavaScript APIs. <strong className="text-foreground">This data is processed entirely client-side and is never transmitted to our servers.</strong> We do not store, log, or share your screen dimensions.
        </p>
        <h3 className="text-base font-700 text-foreground mb-2">1.2 Voluntarily Provided Data</h3>
        <p className="text-sm text-secondary-foreground leading-relaxed mb-3">
          If you choose to subscribe to our newsletter or contact us, we collect:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-secondary-foreground mb-4">
          <li>Email address (newsletter subscription)</li>
          <li>Name and message content (contact form submissions)</li>
        </ul>
        <p className="text-sm text-secondary-foreground leading-relaxed">
          This information is only collected with your explicit consent and is used solely for the purpose you provided it.
        </p>
      </Section>

      <Section id="how-we-use-information" title="2. How We Use Information">
        <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-secondary-foreground mb-4">
          <li><strong className="text-foreground">Site operation:</strong> To deliver and maintain the ScreenSizer tool and website functionality</li>
          <li><strong className="text-foreground">Analytics:</strong> To understand how visitors use our Site and improve our content and tools</li>
          <li><strong className="text-foreground">Advertising:</strong> To display relevant advertisements through Google AdSense (see Section 4)</li>
          <li><strong className="text-foreground">Newsletter:</strong> To send you screen size tips and web development articles (only if you subscribed)</li>
          <li><strong className="text-foreground">Security:</strong> To detect and prevent fraudulent or abusive use of our Site</li>
          <li><strong className="text-foreground">Legal compliance:</strong> To comply with applicable laws and regulations</li>
        </ul>
        <p className="text-sm text-secondary-foreground leading-relaxed">
          We do not sell your personal information to third parties. We do not use your data to build advertising profiles outside of what Google AdSense processes as described below.
        </p>
      </Section>

      <Section id="cookies" title="3. Cookies & Tracking Technologies">
        <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
          ScreenSizer uses cookies and similar tracking technologies. A cookie is a small text file stored on your device by your browser. We use the following categories of cookies:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-xs border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left p-3 font-600 text-foreground border-b border-border">Cookie Type</th>
                <th className="text-left p-3 font-600 text-foreground border-b border-border">Purpose</th>
                <th className="text-left p-3 font-600 text-foreground border-b border-border">Duration</th>
                <th className="text-left p-3 font-600 text-foreground border-b border-border">Removable?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Essential', 'Theme preference (dark/light mode), session state', 'Session / 1 year', 'No (required for function)'],
                ['Analytics', 'Google Analytics — page views, session duration, traffic source', '2 years', 'Yes (opt-out below)'],
                ['Advertising', 'Google AdSense — ad personalization and frequency capping', '13 months', 'Yes (opt-out below)'],
                ['Functional', 'Newsletter subscription state', '1 year', 'Yes'],
              ].map(([type, purpose, duration, removable]) => (
                <tr key={`cookie-${type}`} className="border-b border-border/50 last:border-0">
                  <td className="p-3 font-600 text-foreground">{type}</td>
                  <td className="p-3 text-secondary-foreground">{purpose}</td>
                  <td className="p-3 text-secondary-foreground">{duration}</td>
                  <td className="p-3 text-secondary-foreground">{removable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-secondary-foreground leading-relaxed mb-3">
          <strong className="text-foreground">Managing cookies:</strong> You can control and delete cookies through your browser settings. Most browsers allow you to block third-party cookies, clear existing cookies, and set preferences for specific sites. Note that disabling certain cookies may affect the functionality of our Site.
        </p>
        <p className="text-sm text-secondary-foreground leading-relaxed">
          To opt out of Google Analytics tracking across all websites, install the{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
            Google Analytics Opt-out Browser Add-on
          </a>.
        </p>
      </Section>

      <Section id="google-adsense" title="4. Google AdSense & Advertising">
        <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
          ScreenSizer uses <strong className="text-foreground">Google AdSense</strong> to display advertisements on our Site. Google AdSense is operated by Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
        </p>
        <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
          Google AdSense uses cookies and web beacons to serve ads based on your prior visits to our website and other websites on the internet. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to our Site and/or other sites on the Internet.
        </p>
        <h3 className="text-base font-700 text-foreground mb-2">What Google AdSense Collects</h3>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-secondary-foreground mb-4">
          <li>Browsing behavior across websites in the Google Display Network</li>
          <li>Your approximate geographic location (country/city level)</li>
          <li>Device type, browser type, and operating system</li>
          <li>Ad interaction data (impressions, clicks)</li>
          <li>Interest categories inferred from your browsing history</li>
        </ul>
        <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
          <strong className="text-foreground">Opting out of personalized ads:</strong> You may opt out of personalized advertising by visiting{' '}
          <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>{' '}
          or by visiting{' '}
          <a href="https://www.aboutads.info/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">AboutAds.info</a>.
          You will still see advertisements, but they will not be personalized to your interests.
        </p>
        <p className="text-sm text-secondary-foreground leading-relaxed">
          For more information about how Google uses data from sites that use its advertising services, please review{' '}
          <a href="https://policies.google.com/technologies/partner-sites" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
            Google&apos;s Privacy & Terms
          </a>.
        </p>
      </Section>

      <Section id="google-analytics" title="5. Google Analytics">
        <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
          We use <strong className="text-foreground">Google Analytics 4 (GA4)</strong> to analyze how visitors use our Site. Google Analytics collects information such as how often users visit the Site, what pages they visit, and what other sites they used prior to coming to our Site.
        </p>
        <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
          We use this information to improve our Site and its content. Google Analytics collects only the IP address assigned to you on the date you visit our Site, rather than your name or other identifying information. We do not combine the information collected through Google Analytics with personally identifiable information.
        </p>
        <p className="text-sm text-secondary-foreground leading-relaxed mb-3">
          We have enabled the following privacy features in Google Analytics:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-secondary-foreground mb-4">
          <li>IP anonymization (last octet of IP address masked before storage)</li>
          <li>Data retention set to 14 months</li>
          <li>Advertising features disabled (no remarketing lists from Analytics data)</li>
          <li>User ID feature not enabled</li>
        </ul>
        <p className="text-sm text-secondary-foreground leading-relaxed">
          Google&apos;s ability to use and share information collected by Google Analytics about your visits to our Site is restricted by the{' '}
          <a href="https://marketingplatform.google.com/about/analytics/terms/us/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
            Google Analytics Terms of Service
          </a>{' '}
          and{' '}
          <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
            Google Privacy Policy
          </a>.
        </p>
      </Section>

      <Section id="third-party-links" title="6. Third-Party Links">
        <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
          Our Site may contain links to third-party websites, tools, or services that are not operated by us. If you click on a third-party link, you will be directed to that third party&apos;s site. We strongly advise you to review the Privacy Policy of every site you visit.
        </p>
        <p className="text-sm text-secondary-foreground leading-relaxed">
          We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. This includes, but is not limited to, links in our Blog articles, tool recommendations, and external resources referenced in our content.
        </p>
      </Section>

      <Section id="data-retention" title="7. Data Retention">
        <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
          We retain different categories of data for different periods:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-secondary-foreground mb-4">
          <li><strong className="text-foreground">Server logs:</strong> Automatically deleted after 30 days</li>
          <li><strong className="text-foreground">Google Analytics data:</strong> Retained for 14 months, then automatically deleted</li>
          <li><strong className="text-foreground">Newsletter email addresses:</strong> Retained until you unsubscribe. You can unsubscribe at any time using the link in any email we send.</li>
          <li><strong className="text-foreground">Contact form submissions:</strong> Retained for up to 12 months for support continuity, then deleted</li>
          <li><strong className="text-foreground">Screen detection data:</strong> Not retained — processed entirely in your browser, never sent to our servers</li>
        </ul>
        <p className="text-sm text-secondary-foreground leading-relaxed">
          Upon your request, we will delete any personal data we hold about you within 30 days, subject to legal retention requirements.
        </p>
      </Section>

      <Section id="your-rights" title="8. Your Rights (GDPR & CCPA)">
        <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
          Depending on your location, you may have certain rights regarding your personal data. Under the <strong className="text-foreground">General Data Protection Regulation (GDPR)</strong> and similar laws, these rights include:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-secondary-foreground mb-4">
          <li><strong className="text-foreground">Right of Access:</strong> Request a copy of the personal data we hold about you</li>
          <li><strong className="text-foreground">Right to Rectification:</strong> Request correction of inaccurate personal data</li>
          <li><strong className="text-foreground">Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> Request deletion of your personal data</li>
          <li><strong className="text-foreground">Right to Restrict Processing:</strong> Request that we limit how we use your data</li>
          <li><strong className="text-foreground">Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
          <li><strong className="text-foreground">Right to Object:</strong> Object to our processing of your data for direct marketing or legitimate interests</li>
          <li><strong className="text-foreground">Right to Withdraw Consent:</strong> Where processing is based on consent, withdraw it at any time</li>
        </ul>
        <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
          <strong className="text-foreground">California residents (CCPA):</strong> You have the right to know what personal information is collected, the right to delete personal information, the right to opt-out of the sale of personal information (we do not sell personal information), and the right to non-discrimination for exercising your privacy rights.
        </p>
        <p className="text-sm text-secondary-foreground leading-relaxed">
          To exercise any of these rights, please contact us at <strong className="text-foreground">privacy@screensizer.io</strong>. We will respond to your request within 30 days.
        </p>
      </Section>

      <Section id="childrens-privacy" title="9. Children's Privacy">
        <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
          ScreenSizer is not directed to children under the age of 13 (or 16 in the European Union). We do not knowingly collect personal information from children. Our screen size detection tool is a general-purpose utility tool intended for use by developers, designers, and general audiences aged 13 and older.
        </p>
        <p className="text-sm text-secondary-foreground leading-relaxed">
          If you are a parent or guardian and you believe your child has provided us with personal information, please contact us immediately at <strong className="text-foreground">privacy@screensizer.io</strong>. If we discover that a child under 13 has provided us with personal information, we will delete such information from our servers immediately.
        </p>
      </Section>

      <Section id="changes" title="10. Changes to This Privacy Policy">
        <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
          We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will update the &ldquo;Last updated&rdquo; date at the top of this policy.
        </p>
        <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
          We encourage you to review this Privacy Policy periodically. Your continued use of ScreenSizer after any changes to this policy constitutes your acceptance of those changes.
        </p>
        <p className="text-sm text-secondary-foreground leading-relaxed">
          For significant changes that materially affect how we handle your personal data, we will provide a more prominent notice — such as a banner on our homepage or an email to newsletter subscribers.
        </p>
      </Section>

      <Section id="contact" title="11. Contact Us">
        <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
          If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
        </p>
        <div className="bg-secondary rounded-xl p-5 border border-border">
          <ul className="space-y-2.5 text-sm text-secondary-foreground">
            <li><strong className="text-foreground">Company:</strong> ScreenSizer</li>
            <li><strong className="text-foreground">Website:</strong> <Link href="/" className="text-primary hover:underline">https://screensizer.io</Link></li>
            <li><strong className="text-foreground">Privacy inquiries:</strong> privacy@screensizer.io</li>
            <li><strong className="text-foreground">General contact:</strong> hello@screensizer.io</li>
            <li><strong className="text-foreground">Response time:</strong> Within 30 business days</li>
          </ul>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          If you are located in the European Union and believe your data protection rights have been violated, you have the right to lodge a complaint with your national data protection authority.
        </p>
      </Section>

      {/* Related pages */}
      <div className="mt-10 pt-8 border-t border-border">
        <h2 className="text-sm font-700 text-foreground mb-4">Related Legal Pages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'Terms & Conditions', desc: 'Rules governing your use of ScreenSizer', href: '/privacy-policy' },
            { label: 'Disclaimer', desc: 'Accuracy and liability disclaimers', href: '/privacy-policy' },
            { label: 'Cookie Policy', desc: 'Detailed information about cookies we use', href: '/privacy-policy' },
          ].map((page) => (
            <Link
              key={`legal-link-${page.label}`}
              href={page.href}
              className="block bg-card border border-border rounded-xl p-4 card-shadow hover:card-shadow-hover hover:-translate-y-0.5 transition-all duration-200"
            >
              <p className="text-sm font-600 text-foreground mb-1">{page.label}</p>
              <p className="text-xs text-muted-foreground">{page.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}