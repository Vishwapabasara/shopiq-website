export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI-Powered Product Audits
            <br />
            <span className="text-primary-600">for Shopify Stores</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Automatically scan your entire product catalog to identify SEO issues, missing descriptions,
            poor images, and pricing problems. Boost your conversions with AI-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://shopiq-production.up.railway.app/auth/shopify/install" className="btn-primary text-lg">
              Install Free on Shopify
            </a>
            <a href="#features" className="btn-secondary text-lg">
              See How It Works
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            ✨ 6 free audits/month • No credit card required
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to optimize your product catalog</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Scoring</h3>
              <p className="text-gray-600">
                Google Gemini analyzes each product for SEO, content quality, user experience, and catalog completeness.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Insights</h3>
              <p className="text-gray-600">
                Get actionable recommendations for every product. Fix issues that hurt sales and conversions.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Bulk Auditing</h3>
              <p className="text-gray-600">
                Scan up to 1,000 products in minutes. Perfect for stores of any size.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">SEO Optimization</h3>
              <p className="text-gray-600">
                Identify missing meta descriptions, poor titles, and SEO opportunities across your catalog.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Image Analysis</h3>
              <p className="text-gray-600">
                Detect missing product images, low-quality photos, and variants without visuals.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Scheduled Audits</h3>
              <p className="text-gray-600">
                Automatically audit your catalog weekly or monthly. Stay on top of quality issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Start free, upgrade when you need more</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $0<span className="text-lg text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['6 audits per month', 'Up to 50 products', 'Basic scoring', 'Email support'].map((item) => (
                  <li key={item} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://shopiq-production.up.railway.app/auth/shopify/install" className="btn-secondary w-full text-center block">
                Get Started
              </a>
            </div>

            {/* Pro Plan - Highlighted */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-8 rounded-xl shadow-2xl transform scale-105">
              <div className="bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-2">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $29<span className="text-lg text-primary-100">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-white">
                {[
                  <><strong>50 audits</strong> per month</>,
                  <>Up to <strong>1,000 products</strong></>,
                  'AI-powered scoring',
                  'Scheduled audits',
                  'Priority support',
                  <><strong>7-day free trial</strong></>,
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://shopiq-production.up.railway.app/auth/shopify/install" className="bg-white text-primary-600 hover:bg-gray-50 w-full text-center block py-3 rounded-lg font-semibold transition">
                Start Free Trial
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $99<span className="text-lg text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  <><strong>Unlimited</strong> audits</>,
                  <><strong>Unlimited</strong> products</>,
                  'White-label reports',
                  'API access',
                  'Dedicated support',
                  '14-day free trial',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://shopiq-production.up.railway.app/auth/shopify/install" className="btn-secondary w-full text-center block">
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'How does ShopIQ work?',
                a: 'ShopIQ connects to your Shopify store and analyzes your entire product catalog using AI. It checks for SEO issues, missing descriptions, image problems, and more. You get a detailed report with actionable recommendations for each product.',
              },
              {
                q: 'Is my data secure?',
                a: 'Yes! We use industry-standard encryption and only access the data necessary to perform audits. Your product data is never shared with third parties (except Google Gemini for AI processing). See our Privacy Policy for details.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Absolutely! You can cancel your subscription at any time from your Shopify admin. No questions asked, no cancellation fees.',
              },
              {
                q: 'What happens after my free trial?',
                a: "Your 7-day (Pro) or 14-day (Enterprise) free trial starts when you upgrade. After the trial, you'll be charged monthly unless you cancel. You can downgrade to the free plan anytime.",
              },
              {
                q: 'Do you offer refunds?',
                a: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied, contact us at support@shopiq.app within 30 days of your first charge for a full refund.',
              },
            ].map(({ q, a }) => (
              <details key={q} className="bg-white p-6 rounded-lg shadow">
                <summary className="font-semibold text-lg cursor-pointer">{q}</summary>
                <p className="mt-4 text-gray-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Optimize Your Products?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Start your free trial today. No credit card required.
          </p>
          <a
            href="https://shopiq-production.up.railway.app/auth/shopify/install"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition shadow-xl"
          >
            Install ShopIQ for Free
          </a>
          <p className="text-sm text-primary-100 mt-4">
            Join 1,000+ Shopify stores using ShopIQ
          </p>
        </div>
      </section>
    </>
  );
}
