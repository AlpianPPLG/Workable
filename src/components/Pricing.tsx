import React, { useState } from "react";

interface Plan {
  title: string;
  monthlyPrice: string;
  annualPrice: string;
  features: { feature: string; description: string }[];
  isPopular?: boolean;
}

const plans: Plan[] = [
  {
    title: "Basic",
    monthlyPrice: "$19/month",
    annualPrice: "$190/year",
    features: [
      {
        feature: "Basic Support",
        description: "Email support during business hours.",
      },
      {
        feature: "Up to 5 Job Postings",
        description: "Post 5 job listings at a time.",
      },
      {
        feature: "Candidate Tracking",
        description: "Manage applicants easily.",
      },
      {
        feature: "Email Notifications",
        description: "Stay informed about applicants.",
      },
    ],
  },
  {
    title: "Pro",
    monthlyPrice: "$49/month",
    annualPrice: "$490/year",
    features: [
      {
        feature: "Priority Support",
        description: "24/7 support for all your needs.",
      },
      {
        feature: "Up to 20 Job Postings",
        description: "Post more jobs simultaneously.",
      },
      {
        feature: "Advanced Tracking",
        description: "Detailed analytics on applicants.",
      },
      {
        feature: "Custom Branding",
        description: "Personalize your job listings.",
      },
    ],
    isPopular: true,
  },
  {
    title: "Enterprise",
    monthlyPrice: "$99/month",
    annualPrice: "$990/year",
    features: [
      {
        feature: "Dedicated Account Manager",
        description: "Personal support for your team.",
      },
      {
        feature: "Unlimited Job Postings",
        description: "Post as many jobs as you need.",
      },
      {
        feature: "Comprehensive Analytics",
        description: "In-depth insights into your hiring process.",
      },
      {
        feature: "Custom Integrations",
        description: "Integrate with your existing tools.",
      },
    ],
  },
];

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Simple Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose a plan that suits your needs. Enjoy transparent pricing
            without hidden fees.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 rounded-md ${
              !isAnnual ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              isAnnual ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setIsAnnual(true)}
          >
            Annual
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 ${
                plan.isPopular ? "border-4 border-teal-600" : ""
              }`}
            >
              {plan.isPopular && (
                <span className="absolute top-0 right-0 bg-teal-600 text-white text-sm font-semibold rounded-bl-lg px-3 py-1">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {plan.title}
              </h3>
              <p className="text-3xl font-extrabold text-teal-600 mb-6">
                {isAnnual ? plan.annualPrice : plan.monthlyPrice}
              </p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-teal-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12l5 5L20 7"
                      />
                    </svg>
                    <div>
                      <span className="text-gray-600">{item.feature}</span>
                      <p className="text-gray-500 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-300">
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            "The Pro plan transformed our hiring process! Highly recommended."
          </p>
          <p className="text-gray-500 mt-2">- Jane Doe, HR Manager</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
