
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much does a website cost?",
      answer: "Our pricing starts from ₹699 for basic websites and ₹1,999 for full e-commerce solutions with third-party hosting. We offer transparent pricing with no hidden costs, and we'll provide a detailed quote based on your specific requirements."
    },
    {
      question: "How fast can I get my website?",
      answer: "Most websites are completed within 7-10 business days. Complex e-commerce sites may take 2-3 weeks. We'll give you a clear timeline during our initial consultation and keep you updated throughout the process."
    },
    {
      question: "Do you offer hosting or just development?",
      answer: "We provide both! We can handle the complete setup including hosting, domain registration, and ongoing maintenance. We also offer hosting recommendations if you prefer to manage it yourself."
    },
    {
      question: "Can I update the website myself later?",
      answer: "Absolutely! We build user-friendly websites with content management systems that allow you to easily update text, images, and products. We also provide training and documentation to help you manage your site."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer ongoing support packages including regular updates, security monitoring, and technical assistance. Our support team is always ready to help you succeed online."
    },
    {
      question: "Will my website work on mobile phones?",
      answer: "All our websites are fully responsive and mobile-optimized. They look and work perfectly on all devices - phones, tablets, and desktops. Mobile-first design is our standard approach."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600">
          Get answers to common questions about our services
        </p>
      </div>
      
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
