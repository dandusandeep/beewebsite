
import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/ProductGrid";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import LifestyleSection from "@/components/LifestyleSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { getWooCommerceUrl } from "@/config/woocommerce";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCartClick = () => {
    window.location.href = getWooCommerceUrl('cart');
  };

  const handleUserClick = () => {
    window.location.href = getWooCommerceUrl('myAccount');
  };

  const handleShopClick = () => {
    window.location.href = getWooCommerceUrl('products');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/10ad467d-e1f9-45ce-af5a-a29cc70ad41f.png" 
                alt="BeeGear" 
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/filter-bottles" className="text-gray-900 hover:text-green-600 transition-colors">Filter Bottles</Link>
              <Link to="/filter-straws" className="text-gray-900 hover:text-green-600 transition-colors">Filter Straws</Link>
              <Link to="/collapsible-bottles" className="text-gray-900 hover:text-green-600 transition-colors">Collapsible Bottles</Link>
              <button 
                onClick={handleShopClick}
                className="text-gray-900 hover:text-green-600 transition-colors"
              >
                Shop All
              </button>
              <Link to="/blog" className="text-gray-900 hover:text-green-600 transition-colors">Blog</Link>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-gray-600 hover:text-green-600 cursor-pointer transition-colors" />
              <button onClick={handleUserClick}>
                <User className="h-5 w-5 text-gray-600 hover:text-green-600 cursor-pointer transition-colors" />
              </button>
              <div className="relative">
                <button onClick={handleCartClick}>
                  <ShoppingCart className="h-5 w-5 text-gray-600 hover:text-green-600 cursor-pointer transition-colors" />
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
                </button>
              </div>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-3">
                <Link to="/filter-bottles" className="text-gray-900 hover:text-green-600 transition-colors">Filter Bottles</Link>
                <Link to="/filter-straws" className="text-gray-900 hover:text-green-600 transition-colors">Filter Straws</Link>
                <Link to="/collapsible-bottles" className="text-gray-900 hover:text-green-600 transition-colors">Collapsible Bottles</Link>
                <button 
                  onClick={handleShopClick}
                  className="text-gray-900 hover:text-green-600 transition-colors text-left"
                >
                  Shop All
                </button>
                <Link to="/blog" className="text-gray-900 hover:text-green-600 transition-colors">Blog</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductGrid />
        <LifestyleSection />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
