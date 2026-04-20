export default function Documentation() {
  return (
    <div className="section">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Documentation</h1>
        <p className="text-xl text-gray-600 mb-12">
          Everything you need to know about using ShopIQ
        </p>

        {/* Quick Start */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Quick Start Guide</h2>

          <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">1. Install ShopIQ</h3>
            <p className="text-gray-700 mb-4">
              Click the "Install App" button on our homepage. You'll be redirected to Shopify to approve the app.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-mono">
                Required permissions: read_products, write_products, read_orders, read_inventory
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">2. Run Your First Audit</h3>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>Open ShopIQ from your Shopify admin apps section</li>
              <li>Click "Run New Audit" button on the dashboard</li>
              <li>Wait 2-5 minutes while AI analyzes your products</li>
              <li>Review the results and recommendations</li>
            </ol>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">3. Review Product Details</h3>
            <p className="text-gray-700 mb-4">
              Click any product in the audit results to see:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Overall score and severity (Critical, Warning, Info)</li>
              <li>SEO score and recommendations</li>
              <li>Content quality analysis</li>
              <li>User experience issues</li>
              <li>Catalog completeness check</li>
              <li>AI-generated improvement suggestions</li>
            </ul>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Features</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">AI-Powered Scoring</h3>
              <p className="text-gray-700 mb-4">
                Each product receives a score from 0-100 based on four categories:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>SEO (0-25 points):</strong> Meta descriptions, titles, keywords</li>
                <li><strong>Content Quality (0-25 points):</strong> Description length, clarity, features</li>
                <li><strong>User Experience (0-25 points):</strong> Images, variants, pricing</li>
                <li><strong>Catalog Completeness (0-25 points):</strong> Tags, vendor, product type</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">Severity Levels</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold mr-3">Critical</span>
                  <p className="text-gray-700">Score 0-69: Significant issues blocking sales</p>
                </div>
                <div className="flex items-start">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mr-3">Warning</span>
                  <p className="text-gray-700">Score 70-84: Moderate issues affecting performance</p>
                </div>
                <div className="flex items-start">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mr-3">Good</span>
                  <p className="text-gray-700">Score 85-100: Minor improvements available</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">Usage Tracking</h3>
              <p className="text-gray-700 mb-4">
                Monitor your plan usage in the dashboard:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Audits used this month vs. plan limit</li>
                <li>Products scanned this month vs. plan limit</li>
                <li>Usage resets on the 1st of each month</li>
                <li>Upgrade prompt when approaching limits</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              {
                q: 'How long does an audit take?',
                a: 'Typically 2-5 minutes depending on your product count. Larger catalogs (500+ products) may take up to 10 minutes.',
              },
              {
                q: 'What happens if I exceed my plan limits?',
                a: "You'll see an upgrade prompt. You can either upgrade to a higher plan or wait until next month when limits reset.",
              },
              {
                q: 'Can I export audit results?',
                a: 'Currently, you can view and filter results in the dashboard. CSV export is coming soon in a future update.',
              },
              {
                q: 'Does ShopIQ modify my products?',
                a: 'No. ShopIQ only reads your product data to perform analysis. It never modifies your products without explicit action from you.',
              },
              {
                q: 'How accurate is the AI analysis?',
                a: "We use Google's Gemini AI which is highly accurate. However, recommendations are suggestions to help guide improvements, not absolute requirements.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="bg-white p-6 rounded-lg shadow">
                <summary className="font-semibold text-lg cursor-pointer">{q}</summary>
                <p className="mt-4 text-gray-600">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Support CTA */}
        <section className="bg-primary-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-700 mb-6">
            Our support team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <a href="/support" className="btn-primary inline-block">
            Contact Support
          </a>
        </section>
      </div>
    </div>
  );
}
