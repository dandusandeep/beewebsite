
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useLocation } from "react-router-dom";
import { getWooCommerceUrl } from "@/config/woocommerce";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  colors: string[];
  capacity: string;
  keyFeatures?: string[];
  featured?: boolean;
  placeholder?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const location = useLocation();
  const isFilterBottlesPage = location.pathname === '/filter-bottles';
  const isFilterStrawsPage = location.pathname === '/filter-straws';
  const isSimplifiedView = isFilterBottlesPage || isFilterStrawsPage;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!product.placeholder) {
      // Redirect to WooCommerce add to cart
      window.location.href = getWooCommerceUrl('addToCart', product.id);
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
      <CardContent className="p-0">
        <Link to={`/product/${product.id}`}>
          <div className="relative overflow-hidden bg-white rounded-t-lg cursor-pointer">
            {product.placeholder ? (
              <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400">Product Image Coming Soon</span>
              </div>
            ) : (
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-contain p-6 group-hover:scale-105 transition-transform duration-300"
              />
            )}
            {product.featured && (
              <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </div>
            )}
            {product.placeholder && (
              <div className="absolute top-4 right-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Coming Soon
              </div>
            )}
          </div>
        </Link>

        <div className="p-6 space-y-4">
          <Link to={`/product/${product.id}`}>
            <div className="cursor-pointer">
              <h3 className="font-semibold text-gray-900 text-lg mb-2 hover:text-green-600 transition-colors">{product.name}</h3>
              {!isSimplifiedView && (
                <p className="text-gray-600 text-sm">{product.description}</p>
              )}
            </div>
          </Link>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-500">Color:</span>
              <span className="text-sm text-gray-700">{product.colors.join(", ")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-500">Capacity:</span>
              <span className="text-sm text-gray-700">{product.capacity}</span>
            </div>
            {!isSimplifiedView && product.keyFeatures && (
              <div>
                <span className="text-sm font-medium text-gray-500 block mb-2">Key Features:</span>
                <ul className="text-sm text-gray-700 space-y-1">
                  {product.keyFeatures.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {product.keyFeatures.length > 3 && (
                    <li className="text-gray-500 text-xs">+{product.keyFeatures.length - 3} more features</li>
                  )}
                </ul>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-2xl font-bold text-green-600">{product.price}</span>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white"
              disabled={product.placeholder}
              onClick={handleAddToCart}
            >
              {product.placeholder ? "Coming Soon" : "Add to Cart"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
