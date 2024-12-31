import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Sample dropdown data
  const productDropdown = [
    "Features",
    "Solutions",
    "Integrations",
    "Enterprise",
    "Security",
  ];

  const resourcesDropdown = [
    "Blog",
    "Guides",
    "Help Center",
    "API Documentation",
    "Community",
  ];

  return (
    <nav className="bg-teal-800 fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-white text-xl font-bold">
                Workable
              </a>
            </div>

            {/* Desktop Primary Menu */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Product Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("product")}
                  className="flex items-center space-x-1 text-white hover:text-gray-200"
                >
                  <span>Product</span>
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === "product" && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    {productDropdown.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#" className="text-white hover:text-gray-200">
                Pricing
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                Our customers
              </a>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("resources")}
                  className="flex items-center space-x-1 text-white hover:text-gray-200"
                >
                  <span>Resources</span>
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === "resources" && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    {resourcesDropdown.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Desktop Secondary Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-200">
              Log in
            </a>
            <a
              href="#"
              className="text-white px-4 py-2 rounded border border-teal-600 hover:bg-teal-700"
            >
              Request a demo
            </a>
            <a
              href="#"
              className="bg-white text-teal-800 px-4 py-2 rounded hover:bg-gray-100"
            >
              Start a free trial →
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-teal-800 pb-4 px-4`}
      >
        <div className="flex flex-col space-y-3">
          {/* Mobile Product Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("mobile-product")}
              className="flex items-center justify-between w-full text-white hover:text-gray-200 py-2"
            >
              <span>Product</span>
              <ChevronDown size={16} />
            </button>
            {activeDropdown === "mobile-product" && (
              <div className="pl-4 space-y-2">
                {productDropdown.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-white hover:text-gray-200 py-1"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="text-white hover:text-gray-200 py-2">
            Pricing
          </a>
          <a href="#" className="text-white hover:text-gray-200 py-2">
            Our customers
          </a>

          {/* Mobile Resources Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("mobile-resources")}
              className="flex items-center justify-between w-full text-white hover:text-gray-200 py-2"
            >
              <span>Resources</span>
              <ChevronDown size={16} />
            </button>
            {activeDropdown === "mobile-resources" && (
              <div className="pl-4 space-y-2">
                {resourcesDropdown.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-white hover:text-gray-200 py-1"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="text-white hover:text-gray-200 py-2">
            Log in
          </a>
          <a
            href="#"
            className="text-white px-4 py-2 rounded border border-teal-600 text-center hover:bg-teal-700"
          >
            Request a demo
          </a>
          <a
            href="#"
            className="bg-white text-teal-800 px-4 py-2 rounded text-center hover:bg-gray-100"
          >
            Start a free trial →
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
