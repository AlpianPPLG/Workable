import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Company Logo
          </h3>
          <p className="text-sm">
            We are committed to delivering the best solutions for your business
            needs with cutting-edge technologies and expert support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-blue-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <a href="#faq" className="hover:text-blue-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-blue-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-blue-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#support" className="hover:text-blue-400">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>
              <span className="text-gray-400">Email:</span> support@example.com
            </li>
            <li>
              <span className="text-gray-400">Phone:</span> +123 456 7890
            </li>
            <li>
              <span className="text-gray-400">Address:</span> 123 Business St,
              Tech City
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
