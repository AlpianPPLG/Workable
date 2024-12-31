import React, { useState } from "react";
import {
  Users,
  Target,
  Briefcase,
  LineChart,
  ArrowRight,
  Building2,
  Network,
  Workflow,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${
          isHovered ? "bg-teal-600 text-white" : "bg-teal-100 text-teal-600"
        }`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="text-teal-600 mr-2 mt-1">
              <ArrowRight size={16} />
            </div>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`flex items-center text-sm font-semibold transition-colors duration-300 ${
          isHovered ? "text-teal-600" : "text-gray-600"
        }`}
      >
        Learn more
        <ArrowRight size={16} className="ml-2" />
      </button>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Users size={24} />,
      title: "Talent Acquisition",
      description:
        "Streamline your recruitment process with our comprehensive talent acquisition solutions.",
      features: [
        "AI-powered candidate matching",
        "Automated screening processes",
        "Advanced applicant tracking",
        "Interview scheduling",
      ],
    },
    {
      icon: <Target size={24} />,
      title: "Strategic Hiring",
      description:
        "Develop and implement effective hiring strategies tailored to your needs.",
      features: [
        "Custom hiring workflows",
        "Role requirement analysis",
        "Market compensation insights",
        "Diversity hiring initiatives",
      ],
    },
    {
      icon: <Building2 size={24} />,
      title: "Employer Branding",
      description:
        "Build and promote your employer brand to attract top talent.",
      features: [
        "Career site builder",
        "Social media integration",
        "Custom job templates",
        "Brand consistency tools",
      ],
    },
    {
      icon: <Network size={24} />,
      title: "Team Collaboration",
      description:
        "Enable seamless collaboration between hiring teams and stakeholders.",
      features: [
        "Real-time communication",
        "Shared candidate profiles",
        "Collaborative evaluation",
        "Permission management",
      ],
    },
    {
      icon: <Workflow size={24} />,
      title: "Workflow Automation",
      description:
        "Automate repetitive tasks and streamline your hiring workflow.",
      features: [
        "Custom workflow builder",
        "Automated notifications",
        "Task management",
        "Integration capabilities",
      ],
    },
    {
      icon: <LineChart size={24} />,
      title: "Analytics & Reporting",
      description:
        "Gain valuable insights into your hiring process with advanced analytics.",
      features: [
        "Custom report builder",
        "Real-time metrics",
        "Performance tracking",
        "Data visualization",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive recruiting solutions designed to transform your hiring
            process and help you build exceptional teams.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300">
            View all services
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
