export default function Privacy() {
  return (
    <div className="section">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: April 20, 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              ShopIQ ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you use our
              Shopify application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4">We collect the following information:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Store Information:</strong> Store name, domain, and owner email address</li>
              <li><strong>Product Data:</strong> Product titles, descriptions, images, prices, variants, and tags</li>
              <li><strong>Audit Results:</strong> Historical audit data and scores</li>
              <li><strong>Usage Data:</strong> Number of audits run and products scanned</li>
              <li><strong>Authentication Data:</strong> OAuth access tokens (encrypted)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Perform AI-powered product audits</li>
              <li>Generate recommendations and reports</li>
              <li>Track usage and enforce plan limits</li>
              <li>Provide customer support</li>
              <li>Improve our service and develop new features</li>
              <li>Send service-related notifications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Third Parties</h2>
            <p className="text-gray-700 mb-4">
              We do NOT sell your data. We share data only with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Google Gemini AI:</strong> Product data is sent to Google's Gemini API for AI analysis.
                Google's privacy policy applies to this processing.</li>
              <li><strong>Service Providers:</strong> MongoDB Atlas (database), Railway (hosting),
                Redis Cloud (caching) - all under strict data protection agreements</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement industry-standard security measures:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>All data transmission encrypted with HTTPS/TLS</li>
              <li>Access tokens encrypted at rest</li>
              <li>Database access restricted and monitored</li>
              <li>Regular security audits and updates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your data for the duration of your subscription. When you uninstall the app:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Audit history is retained for 90 days (for reactivation)</li>
              <li>After 90 days, all data is permanently deleted</li>
              <li>You can request immediate deletion by contacting support</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access your data at any time through the app</li>
              <li>Request data export in JSON format</li>
              <li>Request data deletion</li>
              <li>Object to data processing</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. GDPR Compliance</h2>
            <p className="text-gray-700 mb-4">
              For EU users, we comply with GDPR requirements:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Legal basis for processing: Legitimate interest and consent</li>
              <li>Data processing agreements with all third parties</li>
              <li>Right to data portability and erasure</li>
              <li>Data Protection Officer: dpo@shopiq.app</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our service is not intended for individuals under 18. We do not knowingly collect
              data from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of changes by
              posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For privacy-related questions or to exercise your rights:
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> privacy@shopiq.app<br />
              <strong>Support:</strong> <a href="/support" className="text-primary-600 underline">Contact Support</a><br />
              <strong>Mail:</strong> ShopIQ Privacy Team, [Your Address]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
