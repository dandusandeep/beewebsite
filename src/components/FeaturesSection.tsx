
import { Droplets, Shield, Zap } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced Water Filtration for Outdoor Adventures and Everyday Life
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BeeGear's cutting-edge filtration technology ensures you have access to clean, safe water wherever life takes you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Features list */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Droplets className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Filtration Technology</h3>
                <p className="text-gray-600">Remove 99.99% of bacteria, parasites, and harmful contaminants from any freshwater source with our state-of-the-art Ahlstrom filters.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">BPA-Free & Safe Materials</h3>
                <p className="text-gray-600">Constructed with premium Tritan™ and food-safe materials, ensuring your water stays pure and free from harmful chemicals.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Long-Lasting Performance</h3>
                <p className="text-gray-600">Each filter provides up to 250 gallons of clean water, making it perfect for extended outdoor adventures and emergency preparedness.</p>
              </div>
            </div>
          </div>

          {/* Right side - Product image */}
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/df51bb32-b35a-44fc-bad0-10dc41fb00c0.png" 
              alt="BeeGear Water Filter Technology" 
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">99.99%</div>
            <div className="text-gray-600">Bacteria & Parasites Removed</div>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">250+</div>
            <div className="text-gray-600">Gallons Per Filter</div>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600">BPA-Free Materials</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
