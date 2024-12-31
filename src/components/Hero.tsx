import { Play, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-teal-800 min-h-screen mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Big ideas. Amazing talent. The recruiting software that brings
              them together.
            </h1>
            <p className="text-xl md:text-2xl text-teal-100">
              Find, hire, onboard, and manage the right person for every job.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="inline-flex items-center px-6 py-3 bg-teal-700 hover:bg-teal-600 rounded-md transition-colors">
                <Play className="w-5 h-5 mr-2" />
                SEE WORKABLE IN ACTION
              </button>
              <button className="inline-flex items-center px-6 py-3 border-2 border-teal-600 hover:bg-teal-700 rounded-md transition-colors">
                GET STARTED
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-8 h-8 bg-yellow-400 rounded-full" />
            <div className="absolute top-1/2 -right-5 w-6 h-6 bg-orange-400 rounded-full" />
            <div className="absolute -bottom-5 left-1/4 w-6 h-6 bg-green-400 rounded-full" />

            <div className="relative">
              <img
                src="/img/sapiens.svg"
                alt="Remote work illustration showing people collaborating"
                className="w-full h-auto max-w-2xl mx-auto"
              />
            </div>

            <div className="absolute top-20 -right-8 w-8 h-8 bg-yellow-400 rounded-full" />
            <div className="absolute bottom-20 -left-5 w-6 h-6 bg-green-400 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
