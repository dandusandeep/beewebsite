
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/5db963b6-5f71-4430-a2b8-aceb9f5800cd.png" 
              alt="BeeGear" 
              className="h-12 w-auto filter brightness-0 invert"
            />
            <p className="text-gray-400">
              Premium water filtration solutions for outdoor adventures and everyday hydration.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">Filter Bottles</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Filter Straws</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Collapsible Bottles</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Replacement Filters</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BeeGear. All rights reserved. | Clean water, everywhere you go.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
