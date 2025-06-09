
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

export const filterStrawProducts: Product[] = [
  {
    id: 3,
    name: "BEEGEAR Water Filter Straw",
    price: "$22.99",
    image: "/lovable-uploads/d26770a0-2ded-4685-b6d2-e51b6f477126.png",
    description: "Lightweight and portable water filter straw designed for emergency situations and outdoor adventures. Provides instant access to clean drinking water from any freshwater source.",
    colors: ["Orange"],
    capacity: "350 Gallons",
    keyFeatures: [
      "350 gallon filtration capacity",
      "Advanced Ahlstrom filtration technology",
      "Removes 99.99% of bacteria and parasites",
      "Ultra-lightweight design",
      "No batteries or moving parts required",
      "Perfect for emergency preparedness",
      "Compact and portable"
    ],
    featured: true
  },
  {
    id: 4,
    name: "BEEGEAR Water Filter Straw",
    price: "$22.99",
    image: "/lovable-uploads/d26770a0-2ded-4685-b6d2-e51b6f477126.png",
    description: "Premium water filter straw with advanced filtration technology. Ideal for hiking, camping, and travel where clean water access is uncertain.",
    colors: ["Blue"],
    capacity: "350 Gallons",
    keyFeatures: [
      "Advanced Ahlstrom filtration technology",
      "Long-lasting filter life",
      "Easy to use and maintain",
      "Durable construction",
      "Fast flow rate",
      "Travel-friendly size"
    ]
  },
  {
    id: 5,
    name: "BEEGEAR Water Filter Straw",
    price: "$22.99",
    image: "/lovable-uploads/d26770a0-2ded-4685-b6d2-e51b6f477126.png",
    description: "Reliable water filter straw engineered for outdoor enthusiasts. Transforms questionable water sources into safe, clean drinking water instantly.",
    colors: ["Green"],
    capacity: "250 Gallons",
    keyFeatures: [
      "250 gallon filtration capacity",
      "Advanced Ahlstrom filtration technology",
      "Instant water purification",
      "Removes harmful contaminants",
      "Lightweight and durable",
      "No setup required",
      "Perfect for backpacking",
      "Emergency water solution"
    ]
  },
  {
    id: 7,
    name: "Replacement Filter for Straws",
    price: "$9.99",
    image: "/placeholder.svg",
    description: "High-quality replacement filter designed specifically for BEEGEAR filter straws. Maintains the same advanced filtration performance as the original.",
    colors: ["Universal"],
    capacity: "250 Gallons",
    keyFeatures: [
      "Advanced Ahlstrom filtration technology",
      "Easy to replace",
      "Compatible with all BEEGEAR straws",
      "Long-lasting performance",
      "Removes 99.99% of bacteria and parasites",
      "Compact design"
    ]
  }
];

export const blogPosts = [
  {
    title: "Using Your Filter Straw in the Wild",
    excerpt: "Essential tips for maximizing your BEEGEAR filter straw performance during outdoor adventures and emergency situations",
    image: "/lovable-uploads/29df100f-7149-441c-9463-afc0e7b65349.png"
  },
  {
    title: "Filter Straw vs Filter Bottle: Which is Right for You?",
    excerpt: "Compare the benefits of BEEGEAR filter straws and bottles for different outdoor activities and situations",
    image: "/lovable-uploads/2066a3ac-f593-4c5b-b5f0-e2474e7b68b6.png"
  }
];
