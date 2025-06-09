
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { products } from "@/data/productDetail";
import ProductImageGallery from "@/components/ProductImageGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductActions from "@/components/ProductActions";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id || ""));
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/" className="text-green-600 hover:text-green-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link 
          to={`/${product.category}`}
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <ProductImageGallery
            images={product.images}
            selectedColor={selectedColor}
            selectedImage={selectedImage}
            onImageSelect={setSelectedImage}
            productName={product.name}
          />

          {/* Product Info */}
          <div className="space-y-6">
            <ProductInfo
              product={product}
              selectedColor={selectedColor}
              onColorChange={setSelectedColor}
            />

            {/* Add to Cart with WooCommerce integration */}
            <ProductActions productId={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
