
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Pure Water,
                <span className="text-green-600"> Anywhere</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Advanced filtration technology meets outdoor adventure. BeeGear's premium filter bottles and straws ensure clean, safe water wherever your journey takes you.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/filter-bottles">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                  Shop Filter Bottles
                </Button>
              </Link>
              <a href="#product-grid">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg">
                  View All Products
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">250</div>
                <div className="text-sm text-gray-600">Bottle Refills</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">99.9%</div>
                <div className="text-sm text-gray-600">Bacteria Filtered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">BPA</div>
                <div className="text-sm text-gray-600">Free Materials</div>
              </div>
            </div>
          </div>

          {/* Right side - Product image only */}
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/e0a2fe9d-47f8-4e84-81e3-37326a71962f.png" 
              alt="BeeGear Filter Bottle" 
              className="w-full max-w-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
