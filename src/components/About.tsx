import React, { useState } from "react";
import {
  CheckCircle,
  Users,
  Briefcase,
  Globe,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ icon, value, label }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
    <div className="text-teal-600 mb-3">{icon}</div>
    <div className="text-4xl font-bold text-gray-900 mb-2">{value}</div>
    <div className="text-sm text-gray-600 text-center">{label}</div>
  </div>
);

interface FeatureProps {
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-800">{title}</span>
        {isOpen ? (
          <ChevronUp className="text-teal-600" />
        ) : (
          <ChevronDown className="text-teal-600" />
        )}
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-600 animate-fadeIn">{description}</p>
      )}
    </div>
  );
};

const About: React.FC = () => {
  const stats = [
    {
      icon: <CheckCircle size={32} />,
      value: "99%",
      label: "Customer Satisfaction",
    },
    { icon: <Users size={32} />, value: "10M+", label: "Candidates Hired" },
    {
      icon: <Briefcase size={32} />,
      value: "50K+",
      label: "Companies Using Workable",
    },
    { icon: <Globe size={32} />, value: "100+", label: "Countries Served" },
  ];

  const features = [
    {
      title: "Streamlined hiring process",
      description:
        "Our intuitive platform simplifies every step of the hiring journey, from job posting to offer management.",
    },
    {
      title: "AI-powered candidate matching",
      description:
        "Leverage advanced AI algorithms to find the perfect candidates for your open positions quickly and efficiently.",
    },
    {
      title: "Collaborative team features",
      description:
        "Enhance teamwork with built-in collaboration tools, ensuring seamless communication throughout the hiring process.",
    },
    {
      title: "Comprehensive analytics",
      description:
        "Gain valuable insights into your hiring process with detailed analytics and customizable reports.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            About Workable
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering businesses to build exceptional teams through innovative
            hiring solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Workable is the leading hiring platform for ambitious companies.
              With our powerful tools and intuitive software, we've helped
              thousands of businesses find and hire the best talent across the
              globe. Our mission is to streamline the hiring process, making it
              more efficient, effective, and enjoyable for both employers and
              candidates.
            </p>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Key Features
              </h3>
              {features.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Stat key={index} {...stat} />
              ))}
            </div>
            <div className="bg-teal-700 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Why Choose Workable?</h3>
              <ul className="space-y-3">
                {[
                  "Industry-leading technology",
                  "Exceptional customer support",
                  "Customizable to fit your needs",
                  "Continuous innovation and updates",
                ].map((reason, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="mr-3" size={20} />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                alt="Amazon logo"
                className="h-12"
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                alt="Microsoft logo"
                className="h-12"
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook logo"
                className="h-12"
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
                alt="LinkedIn logo"
                className="h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
