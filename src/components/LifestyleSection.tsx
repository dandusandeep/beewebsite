import { Link } from "react-router-dom";

const LifestyleSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ultimate Sidekick */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <Link to="/filter-bottles">
              <img 
                src="/lovable-uploads/e5d10f20-65c6-4cb8-91ef-72630cbed5ee.png" 
                alt="The Ultimate Sidekick - BPA-Free, Available in 22oz + 1L" 
                className="w-full rounded-lg shadow-xl cursor-pointer hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              The Ultimate Sidekick
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're commuting to work, traveling, or exploring the outdoors, 
              BeeGear bottles are designed to be your reliable companion for clean hydration.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  BPA-Free
                </span>
                <span className="text-gray-600">Safe materials for everyday use</span>
              </div>
            </div>
          </div>
        </div>

        {/* Adventure Couple */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Adventure Ready
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From mountain trails to city streets, BeeGear products are built for adventurers 
              who demand reliable, portable water filtration solutions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600 mb-1">Lightweight</div>
                <div className="text-sm text-gray-600">Easy to carry</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600 mb-1">Durable</div>
                <div className="text-sm text-gray-600">Built to last</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Link to="/product/4">
              <img 
                src="/lovable-uploads/7bebc56e-37f1-418d-a3ff-2efa55549786.png" 
                alt="Adventure couple with BeeGear bottles" 
                className="w-full rounded-lg shadow-xl cursor-pointer hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>
        </div>

        {/* Emergency Essentials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Link to="/filter-straws">
              <img 
                src="/lovable-uploads/3bcdf81a-62b0-4fd2-bba8-6ee81d2e5857.png" 
                alt="Emergency Essentials - BeeGear for emergency preparedness" 
                className="w-full rounded-lg shadow-xl cursor-pointer hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Emergency Essentials
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Be prepared for any situation. BeeGear water filters are essential components 
              of emergency kits, ensuring you have access to clean water when you need it most.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Perfect for emergency preparedness kits
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                No electricity or power required
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Long-lasting filtration capacity
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
