const Terms = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using Gromo's services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
              <p className="text-gray-600 mb-4">
                Gromo provides website development services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Custom website design and development</li>
                <li>E-commerce solutions</li>
                <li>Mobile-responsive websites</li>
                <li>SEO optimization</li>
                <li>Website maintenance and support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                Payment terms are agreed upon during project initiation. Standard pricing:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Basic Website: ₹699</li>
                <li>E-commerce Store: ₹1,999 (with third-party hosting)</li>
                <li>E-commerce Website: ₹3,000</li>
                <li>Custom projects: As per quotation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                Upon full payment, the client owns the website content and design. Gromo retains the right to showcase the work in our portfolio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                Gromo shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For any questions regarding these terms, please contact us:
              </p>
              <ul className="list-none text-gray-600">
                <li>Email: gromolink@gmail.com</li>
                <li>Phone: 8438785779</li>
                <li>WhatsApp: 8438785779</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;