
export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  colors: string[];
  capacity: string;
  keyFeatures: string[];
  featured?: boolean;
  placeholder?: boolean;
}

export const filterBottleProducts: Product[] = [
  {
    id: 1,
    name: "BEEGEAR Titan™ Filter Bottle with Ahlstrom Filter",
    price: "$29.99",
    image: "/lovable-uploads/dfb91d66-d739-40e0-8c3c-4945d5686fb3.png",
    description: "Premium Tritan™ Filter Bottle with advanced Ahlstrom filtration technology. Perfect for outdoor adventures, travel, and everyday hydration needs.",
    colors: ["Black"],
    capacity: "250 Refills",
    keyFeatures: [
      "Advanced Ahlstrom filtration technology",
      "BPA-free Tritan™ construction", 
      "Removes 99.99% of bacteria and parasites",
      "Easy-squeeze design",
      "Leak-proof cap",
      "Dishwasher safe"
    ],
    featured: true
  },
  {
    id: 2,
    name: "BEEGEAR Titan™ Filter Bottle with Ahlstrom Filter",
    price: "$29.99",
    image: "/lovable-uploads/0a45587f-3697-49c3-a9e7-b3865b5afe15.png",
    description: "Premium Tritan™ Filter Bottle with advanced Ahlstrom filtration technology. Durable construction designed for reliability in any environment.",
    colors: ["Green"],
    capacity: "250 Refills",
    keyFeatures: [
      "Advanced Ahlstrom filtration technology",
      "Premium Tritan™ construction",
      "Easy-grip design",
      "Fast flow rate",
      "Compact and portable",
      "Long-lasting filter life"
    ]
  },
  {
    id: 6,
    name: "Replacement Filter for Bottle",
    price: "$12.99",
    image: "/placeholder.svg",
    description: "High-quality replacement filter designed specifically for BEEGEAR filter bottles. Maintains the same advanced filtration performance as the original.",
    colors: ["Universal"],
    capacity: "250 Refills",
    keyFeatures: [
      "Advanced Ahlstrom filtration technology",
      "Easy to replace",
      "Compatible with all BEEGEAR bottles",
      "Long-lasting performance",
      "Removes 99.99% of bacteria and parasites"
    ]
  }
];

export const blogPosts = [
  {
    title: "Why Choose BEEGEAR Titan™ Filter Bottles?",
    excerpt: "Discover the advanced Ahlstrom filtration technology that makes BEEGEAR bottles the perfect choice for clean water anywhere",
    image: "/lovable-uploads/972b7637-d102-4178-a0c6-4cc2b7b328dd.png"
  },
  {
    title: "Maximizing Your BEEGEAR Filter Bottle Performance",
    excerpt: "Essential tips for maintaining your Titan™ filter bottle and getting the most out of your 250 refills",
    image: "/lovable-uploads/2066a3ac-f593-4c5b-b5f0-e2474e7b68b6.png"
  }
];
