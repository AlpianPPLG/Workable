import React, { useState } from "react";
import {
  Search,
  UserPlus,
  FileCheck,
  Briefcase,
  ArrowRight,
} from "lucide-react";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: Step[] = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Post Your Job",
      description:
        "Create and publish your job listing with our easy-to-use interface.",
    },
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Attract Candidates",
      description:
        "Our AI-powered system matches your job with the most suitable candidates.",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Review Applications",
      description:
        "Efficiently review and shortlist candidates with our collaborative tools.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Hire the Best",
      description:
        "Make informed decisions and hire the perfect candidate for your team.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes hiring top talent easier than ever.
            Follow these simple steps to find your next star employee.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 rounded-lg transition-all duration-300 cursor-pointer ${
                activeStep === index
                  ? "bg-teal-50 shadow-lg scale-105"
                  : "bg-white"
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 ${
                  activeStep === index
                    ? "bg-teal-600 text-white"
                    : "bg-teal-100 text-teal-600"
                }`}
              >
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-teal-600 mt-4 lg:rotate-90 lg:mt-0 lg:-mr-7" />
              )}
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-10 h-1 ${
                  index <= activeStep ? "bg-teal-600" : "bg-gray-300"
                } transition-colors duration-300`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="inline-flex items-center px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 text-lg font-semibold">
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
