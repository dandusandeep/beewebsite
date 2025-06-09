import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  colors: string[];
  capacity: string;
  collapsible: boolean;
  placeholder?: boolean;
}

const CollapsibleBottles = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "BeeGear Collapsible Bottle",
      price: "$19.99",
      image: "/lovable-uploads/f558c979-4d7f-4bed-af15-9c7f4a1e30f0.png",
      description: "Portable and space-saving design",
      colors: ["Teal"],
      capacity: "500ml",
      collapsible: true
    },
    // Placeholder products for the 9 mentioned
    ...Array.from({ length: 8 }, (_, i) => ({
      id: i + 2,
      name: `BeeGear Collapsible Bottle ${i + 2}`,
      price: "$19.99",
      image: "/placeholder-product.png",
      description: "Portable and space-saving design - Coming Soon",
      colors: ["Multiple Colors"],
      capacity: "Various Sizes",
      collapsible: true,
      placeholder: true
    }))
  ];

  const blogPosts = [
    {
      title: "Space-Saving Solutions for Travelers",
      excerpt: "How collapsible bottles can revolutionize your travel experience",
      image: "/lovable-uploads/972b7637-d102-4178-a0c6-4cc2b7b328dd.png"
    },
    {
      title: "Care and Maintenance for Collapsible Bottles",
      excerpt: "Keep your collapsible bottle in perfect condition with these tips",
      image: "/lovable-uploads/e4f72dc0-51f3-443c-8892-372df60a3943.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Collapsible Bottles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Space-saving hydration solutions that collapse down to fit in your pocket. Perfect for travel, commuting, and storage.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="relative overflow-hidden bg-white rounded-t-lg">
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
                  {product.id === 1 && (
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Available Now
                    </div>
                  )}
                  {product.placeholder && (
                    <div className="absolute top-4 right-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Coming Soon
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Colors:</span>
                      <span className="text-sm text-gray-700">{product.colors.join(", ")}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Capacity:</span>
                      <span className="text-sm text-gray-700">{product.capacity}</span>
                    </div>
                    {product.collapsible && (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">Feature:</span>
                        <span className="text-sm text-green-600 font-medium">Collapsible</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white"
                      disabled={product.placeholder}
                    >
                      {product.placeholder ? "Coming Soon" : "Add to Cart"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Blog Section */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Collapsible Bottle Tips & Guides
            </h2>
            <p className="text-lg text-gray-600">
              Maximize the benefits of your space-saving hydration solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapsibleBottles;
