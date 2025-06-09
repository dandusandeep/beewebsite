import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { filterBottleProducts } from "@/data/filterBottles";
import { filterStrawProducts } from "@/data/filterStraws";
import { getWooCommerceUrl } from "@/config/woocommerce";

const ProductGrid = () => {
  // Get specific products for the homepage grid
  const blackFilterBottle = filterBottleProducts.find(p => p.colors.includes("Black"));
  const orangeFilterStraw = filterStrawProducts.find(p => p.colors.includes("Orange"));
  const greenFilterStraw = filterStrawProducts.find(p => p.colors.includes("Green"));
  
  const collapsibleBottle = {
    id: 8, // Using a different ID to avoid conflicts
    name: "BEEGEAR Collapsible Bottle",
    price: "$19.99",
    image: "/lovable-uploads/f558c979-4d7f-4bed-af15-9c7f4a1e30f0.png",
    description: "Portable and space-saving design",
    colors: ["Teal"],
    capacity: "500ml",
    featured: false,
    linkTo: "/collapsible-bottles"
  };

  const products = [
    blackFilterBottle && {
      ...blackFilterBottle,
      name: "BEEGEAR Tritan Filter Bottle with Ahlstrom Filter",
      linkTo: "/filter-bottles"
    },
    orangeFilterStraw && {
      ...orangeFilterStraw,
      name: "BEEGEAR Water Filter Straw 350 Gallons",
      linkTo: "/filter-straws"
    },
    greenFilterStraw && {
      ...greenFilterStraw,
      name: "BEEGEAR Water Filter Straw 250 Gallons",
      linkTo: `/product/${greenFilterStraw.id}`
    },
    collapsibleBottle
  ].filter(Boolean);

  const handleAddToCart = (productId: number) => {
    window.location.href = getWooCommerceUrl('addToCart', productId);
  };

  const handleViewAllProducts = () => {
    window.location.href = getWooCommerceUrl('products');
  };

  return (
    <section id="product-grid" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Premium Water Filtration
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete range of water filtration solutions designed for outdoor enthusiasts and everyday hydration needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-0">
                {/* Product Image */}
                <Link to={product.linkTo}>
                  <div className="relative overflow-hidden bg-white rounded-t-lg cursor-pointer">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.featured && (
                      <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                  </div>
                </Link>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <Link to={product.linkTo}>
                    <div className="cursor-pointer">
                      <h3 className="font-semibold text-gray-900 text-lg mb-2 hover:text-green-600 transition-colors">{product.name}</h3>
                    </div>
                  </Link>

                  {/* Product Details - Only Colors and Capacity */}
                  <div className="space-y-2">
                    {product.colors && (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">Colors:</span>
                        <span className="text-sm text-gray-700">{product.colors.join(", ")}</span>
                      </div>
                    )}
                    {product.capacity && (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">Capacity:</span>
                        <span className="text-sm text-gray-700">{product.capacity}</span>
                      </div>
                    )}
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => handleAddToCart(product.id)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg"
            onClick={handleViewAllProducts}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
