
export interface ProductImage {
  url: string;
  color: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  images: ProductImage[];
  description: string;
  colors: string[];
  capacity: string;
  features: string[];
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "BEEGEAR Titan™ Filter Bottle with Ahlstrom Filter",
    price: "$29.99",
    images: [
      { url: "/lovable-uploads/ebb15e28-f38a-4b19-8e2c-a53f64c0918a.png", color: "Black" },
      { url: "/lovable-uploads/531f5287-a0ad-4f48-939f-c157125214fd.png", color: "Black" },
      { url: "/lovable-uploads/7a0fe2ec-2f48-48e5-bed2-3497d97471df.png", color: "Black" },
      { url: "/lovable-uploads/35c2c1d5-cad0-4a95-8e5e-5491dbb82ea0.png", color: "Black" },
      { url: "/lovable-uploads/3fe07c83-7de9-43e0-b439-12549076a94a.png", color: "Black" },
      { url: "/lovable-uploads/0a45587f-3697-49c3-a9e7-b3865b5afe15.png", color: "Green" }
    ],
    description: "Premium Tritan™ Filter Bottle with advanced Ahlstrom filtration technology. Perfect for outdoor adventures, travel, and everyday hydration needs.",
    colors: ["Black"],
    capacity: "250 Refills",
    features: [
      "Advanced Ahlstrom filtration technology",
      "BPA-free Tritan™ construction",
      "Removes 99.99% of bacteria and parasites",
      "Easy-squeeze design",
      "Leak-proof cap",
      "Dishwasher safe"
    ],
    category: "filter-bottles"
  },
  {
    id: 2,
    name: "BEEGEAR Filter Bottle - Green",
    price: "$29.99",
    images: [
      { url: "/lovable-uploads/0a45587f-3697-49c3-a9e7-b3865b5afe15.png", color: "Green" }
    ],
    description: "Sleek and durable filter bottle with premium filtration system. Designed for reliability in any environment.",
    colors: ["Green"],
    capacity: "250 Refills",
    features: [
      "Premium filtration system",
      "Durable construction",
      "Easy-grip design",
      "Fast flow rate",
      "Compact and portable"
    ],
    category: "filter-bottles"
  },
  {
    id: 3,
    name: "BEEGEAR Water Filter Straw",
    price: "$22.99",
    images: [
      { url: "/lovable-uploads/d26770a0-2ded-4685-b6d2-e51b6f477126.png", color: "Orange" }
    ],
    description: "Lightweight and portable water filter straw designed for emergency situations and outdoor adventures. Provides instant access to clean drinking water from any freshwater source.",
    colors: ["Orange"],
    capacity: "350 Gallons",
    features: [
      "350 gallon filtration capacity",
      "Advanced Ahlstrom filtration technology",
      "Removes 99.99% of bacteria and parasites",
      "Ultra-lightweight design",
      "No batteries or moving parts required",
      "Perfect for emergency preparedness",
      "Compact and portable"
    ],
    category: "filter-straws"
  },
  {
    id: 4,
    name: "BEEGEAR Water Filter Straw",
    price: "$22.99",
    images: [
      { url: "/lovable-uploads/d26770a0-2ded-4685-b6d2-e51b6f477126.png", color: "Blue" }
    ],
    description: "Premium water filter straw with advanced filtration technology. Ideal for hiking, camping, and travel where clean water access is uncertain.",
    colors: ["Blue"],
    capacity: "350 Gallons",
    features: [
      "Advanced Ahlstrom filtration technology",
      "Long-lasting filter life",
      "Easy to use and maintain",
      "Durable construction",
      "Fast flow rate",
      "Travel-friendly size"
    ],
    category: "filter-straws"
  },
  {
    id: 5,
    name: "BEEGEAR Water Filter Straw",
    price: "$22.99",
    images: [
      { url: "/lovable-uploads/efbbbab3-8cb6-4450-a165-bb0aeeee7831.png", color: "Green" },
      { url: "/lovable-uploads/9f718023-c315-447b-a1ec-6b416a24969a.png", color: "Green" },
      { url: "/lovable-uploads/5101a2ee-313d-4594-a500-d218c36cd281.png", color: "Green" },
      { url: "/lovable-uploads/a7fabea5-e5ef-4e82-84e8-ad9b5c631e54.png", color: "Green" }
    ],
    description: "Reliable water filter straw engineered for outdoor enthusiasts. Transforms questionable water sources into safe, clean drinking water instantly.",
    colors: ["Green"],
    capacity: "250 Gallons",
    features: [
      "250 gallon filtration capacity",
      "Advanced Ahlstrom filtration technology",
      "Instant water purification",
      "Removes harmful contaminants",
      "Lightweight and durable",
      "No setup required",
      "Perfect for backpacking",
      "Emergency water solution"
    ],
    category: "filter-straws"
  },
  {
    id: 6,
    name: "Replacement Filter for Bottle",
    price: "$12.99",
    images: [
      { url: "/placeholder.svg", color: "Universal" }
    ],
    description: "High-quality replacement filter designed specifically for BEEGEAR filter bottles. Maintains the same advanced filtration performance as the original.",
    colors: ["Universal"],
    capacity: "250 Refills",
    features: [
      "Advanced Ahlstrom filtration technology",
      "Easy to replace",
      "Compatible with all BEEGEAR bottles",
      "Long-lasting performance",
      "Removes 99.99% of bacteria and parasites"
    ],
    category: "filter-bottles"
  },
  {
    id: 7,
    name: "Replacement Filter for Straws",
    price: "$9.99",
    images: [
      { url: "/placeholder.svg", color: "Universal" }
    ],
    description: "High-quality replacement filter designed specifically for BEEGEAR filter straws. Maintains the same advanced filtration performance as the original.",
    colors: ["Universal"],
    capacity: "250 Gallons",
    features: [
      "Advanced Ahlstrom filtration technology",
      "Easy to replace",
      "Compatible with all BEEGEAR straws",
      "Long-lasting performance",
      "Removes 99.99% of bacteria and parasites",
      "Compact design"
    ],
    category: "filter-straws"
  }
];
