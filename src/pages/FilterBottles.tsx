
import ProductCard from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import PageHeader from "@/components/PageHeader";
import { filterBottleProducts, blogPosts } from "@/data/filterBottles";

const FilterBottles = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PageHeader 
          title="Filter Bottles"
          description="Advanced filtration technology in portable, durable bottles designed for outdoor adventures and everyday use."
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {filterBottleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Blog Section */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Filter Bottle Guides & Tips
            </h2>
            <p className="text-lg text-gray-600">
              Learn how to get the most out of your BeeGear filter bottles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBottles;
