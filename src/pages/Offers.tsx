import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Offers = () => {
  const websitePackages = [
    {
      name: "Basic Website",
      price: "₹699",
      originalPrice: "₹1,499",
      features: [
        "5 Pages Website",
        "Mobile Responsive",
        "Contact Form",
        "SEO Optimized",
        "1 Year Support",
        "Fast Loading"
      ],
      popular: false
    },
    {
      name: "E-commerce Store",
      price: "₹1,999",
      originalPrice: "₹3,999",
      features: [
        "10+ Pages",
        "Product Catalog",
        "Payment Gateway",
        "Order Management",
        "Admin Panel",
        "Analytics Setup"
      ],
      popular: true
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Special Offers
            </h1>
            <p className="text-xl text-gray-600">
              Get your business online with our special pricing
            </p>
          </div>
        </div>
      </section>

      {/* Website Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Website Packages</h2>
            <p className="text-lg text-gray-600">Affordable pricing for your business website with third-party hosting</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {websitePackages.map((pkg, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-shadow ${pkg.popular ? 'border-primary ring-2 ring-primary/20' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                    <p className="text-sm text-gray-600 mt-2">With Third-Party Hosting</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white"
        aria-label="Call to action">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Take Your Business Online?
            </h2>
            <p className="text-xl mb-8">
              Register your business online with digital marketing solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Start Your Website</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;