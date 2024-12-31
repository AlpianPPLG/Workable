import React, { useState } from "react";

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqData: FAQItem[] = [
    // General FAQs
    {
      category: "General",
      question: "What is this platform?",
      answer: "This is a platform to learn React and Tailwind CSS.",
    },
    {
      category: "General",
      question: "How do I sign up?",
      answer: "Click on the sign-up button at the top right corner.",
    },
    {
      category: "General",
      question: "Is this platform suitable for beginners?",
      answer: "Yes, we provide resources for all skill levels.",
    },
    {
      category: "General",
      question: "Can I access the content offline?",
      answer: "Currently, our platform is online-only.",
    },
    {
      category: "General",
      question: "Are there any community forums?",
      answer:
        "Yes, we have active community forums to connect with other learners.",
    },

    // Pricing FAQs
    {
      category: "Pricing",
      question: "Is this platform free?",
      answer: "Yes, the platform offers free and premium plans.",
    },
    {
      category: "Pricing",
      question: "What is the refund policy?",
      answer: "We offer a 30-day money-back guarantee.",
    },
    {
      category: "Pricing",
      question: "Do you offer discounts?",
      answer: "Yes, we offer seasonal discounts and promotions.",
    },
    {
      category: "Pricing",
      question: "Can I upgrade my plan?",
      answer:
        "Absolutely, you can upgrade at any time from your account settings.",
    },
    {
      category: "Pricing",
      question: "Are there any hidden fees?",
      answer:
        "No, all costs are transparent and listed in the pricing section.",
    },

    // Technical FAQs
    {
      category: "Technical",
      question: "What technologies are used?",
      answer: "This platform uses React and Tailwind CSS.",
    },
    {
      category: "Technical",
      question: "Can I integrate this with my app?",
      answer: "Yes, you can integrate it using our APIs.",
    },
    {
      category: "Technical",
      question: "Is there technical support available?",
      answer: "Yes, we offer 24/7 technical support for premium members.",
    },
    {
      category: "Technical",
      question: "What browsers are supported?",
      answer:
        "Our platform supports all modern browsers like Chrome, Firefox, and Edge.",
    },
    {
      category: "Technical",
      question: "Can I deploy this on my server?",
      answer:
        "Yes, deployment instructions are available in the documentation.",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("General");
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.category === selectedCategory &&
      faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [...new Set(faqData.map((faq) => faq.category))];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>

      {/* Tabs for Categories */}
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search for a question..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFAQs.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow">
            <button
              className="w-full px-4 py-2 flex justify-between items-center text-left font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => handleToggle(index)}
            >
              {faq.question}
              <span
                className={`transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-2 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
        {filteredFAQs.length === 0 && (
          <p className="text-center text-gray-500">No questions found.</p>
        )}
      </div>
    </div>
  );
};

export default FAQ;
