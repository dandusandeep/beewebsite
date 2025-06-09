
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  const categories = [
    { name: "How-to Guides", count: 12, color: "bg-green-100 text-green-700" },
    { name: "Adventure Stories", count: 8, color: "bg-blue-100 text-blue-700" },
    { name: "Environmental Benefits", count: 6, color: "bg-purple-100 text-purple-700" },
    { name: "Product Updates", count: 4, color: "bg-orange-100 text-orange-700" }
  ];

  const featuredPosts = [
    {
      title: "How to Properly Use Your BeeGear Filter for Maximum Effectiveness",
      excerpt: "Learn the best practices for using your BeeGear water filter to ensure optimal performance and longevity.",
      category: "How-to Guides",
      image: "/lovable-uploads/972b7637-d102-4178-a0c6-4cc2b7b328dd.png",
      readTime: "5 min read"
    },
    {
      title: "Epic Mountain Adventure: 7 Days with Only BeeGear Filtration",
      excerpt: "Follow our journey through the Rocky Mountains, relying solely on BeeGear products for clean water.",
      category: "Adventure Stories",
      image: "/lovable-uploads/f6f90381-21f3-4d9e-912c-df36a096836b.png",
      readTime: "8 min read"
    },
    {
      title: "The Environmental Impact of Plastic Water Bottles vs. Reusable Filters",
      excerpt: "Discover how switching to filtered water can significantly reduce your environmental footprint.",
      category: "Environmental Benefits",
      image: "/lovable-uploads/28308ff7-2753-4d20-83fb-c5afb4f2c1fb.png",
      readTime: "6 min read"
    }
  ];

  const recentPosts = [
    {
      title: "Emergency Preparedness: Why Every Home Needs a Water Filter",
      excerpt: "Essential tips for emergency water filtration and preparedness planning.",
      category: "How-to Guides",
      image: "/lovable-uploads/e01bd342-7ea5-46c6-bb5d-00cc53aaa41a.png",
      readTime: "4 min read"
    },
    {
      title: "Urban Hydration: Clean Water in the City",
      excerpt: "How BeeGear filters work in urban environments and daily commuting.",
      category: "Product Updates",
      image: "/lovable-uploads/2066a3ac-f593-4c5b-b5f0-e2474e7b68b6.png",
      readTime: "3 min read"
    },
    {
      title: "Filter Maintenance: Extending the Life of Your BeeGear Products",
      excerpt: "Simple maintenance tips to keep your filters working at peak performance.",
      category: "How-to Guides",
      image: "/lovable-uploads/29df100f-7149-441c-9463-afc0e7b65349.png",
      readTime: "5 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            BeeGear Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how-to guides, adventure stories, and insights about clean water and outdoor living.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {categories.map((category) => (
            <Card key={category.name} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${category.color}`}>
                  {category.count} posts
                </div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                        Read More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="text-sm text-green-600 font-medium mb-2">{post.category}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50">
                        Read More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-green-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated with BeeGear
          </h3>
          <p className="text-gray-600 mb-6">
            Get the latest articles, product updates, and outdoor tips delivered to your inbox.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
