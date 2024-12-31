import React, { useState } from "react";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  feedback: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Jane Doe",
    position: "HR Manager",
    company: "Tech Innovations",
    feedback:
      "This platform has transformed our hiring process. The features are intuitive and save us so much time!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
  },
  {
    name: "John Smith",
    position: "Recruitment Specialist",
    company: "Global Solutions",
    feedback:
      "An incredible tool for any HR team! The analytics help us make informed decisions.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 4,
  },
  {
    name: "Emily Johnson",
    position: "Talent Acquisition Lead",
    company: "Creative Agency",
    feedback:
      "The customer support is outstanding. They helped us every step of the way!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
  },
  {
    name: "Michael Brown",
    position: "CEO",
    company: "Innovate Corp",
    feedback:
      "A must-have tool for any organization looking to streamline their hiring process.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
  },
  {
    name: "Sarah Connor",
    position: "Operations Manager",
    company: "Future Tech",
    feedback:
      "Fantastic experience! The interface is user-friendly and saved us hours of work.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 4,
  },
  {
    name: "David Wilson",
    position: "Marketing Director",
    company: "Creative Minds",
    feedback:
      "Highly effective platform! We were able to find the right talent quickly.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
  },
];

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + testimonials.length) % testimonials.length
    );
  };

  const displayedTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from those who have transformed their hiring process using our
            platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.position} at {testimonial.company}
                  </p>
                  <div className="flex mt-1">
                    {Array.from({ length: testimonial.rating }, (_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.5 3 2.1-6.5L0 6h6L10 0l4 6h6l-6.6 5.5L15.5 18z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons with Icons */}
        <div className="flex justify-between mt-8">
          <button
            className="p-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors duration-300"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="p-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors duration-300"
            onClick={handleNext}
            disabled={currentIndex + 3 >= testimonials.length}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
