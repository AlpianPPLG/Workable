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
          <li key={index} className="flex items-center space-x-3">
            <ArrowRight className="text-teal-600" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
        Learn More
        <ArrowRight className="ml-2" />
      </button>
    </div>
  );
};

const Service: React.FC = () => {
  const services = [
    {
      icon: <Users size={28} />,
      title: "Team Collaboration",
      description:
        "Enhance your team's efficiency with seamless communication tools.",
      features: [
        "Real-time chat integration",
        "Task management dashboard",
        "Collaboration analytics",
      ],
    },
    {
      icon: <Target size={28} />,
      title: "Targeted Marketing",
      description:
        "Reach the right audience with precision-targeted campaigns.",
      features: [
        "Data-driven insights",
        "Social media integration",
        "Email marketing automation",
      ],
    },
    {
      icon: <LineChart size={28} />,
      title: "Analytics & Reports",
      description: "Get comprehensive insights into your business performance.",
      features: [
        "Customizable reports",
        "Advanced analytics tools",
        "Real-time data visualization",
      ],
    },
    {
      icon: <Briefcase size={28} />,
      title: "Business Solutions",
      description:
        "Tailored solutions to meet the unique challenges of your business.",
      features: [
        "Scalable architecture",
        "Cloud-based services",
        "24/7 support",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Featured Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we empower businesses with innovative solutions and
            cutting-edge technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
