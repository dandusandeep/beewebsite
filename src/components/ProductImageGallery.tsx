
import { ProductImage } from "@/data/productDetail";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductImageGalleryProps {
  images: ProductImage[];
  selectedColor: string;
  selectedImage: number;
  onImageSelect: (index: number) => void;
  productName: string;
}

const ProductImageGallery = ({ 
  images, 
  selectedColor, 
  selectedImage, 
  onImageSelect, 
  productName 
}: ProductImageGalleryProps) => {
  const currentImages = images.filter(img => img.color === selectedColor);
  const displayImages = currentImages.length > 0 ? currentImages : images;

  const goToPrevious = () => {
    const newIndex = selectedImage === 0 ? displayImages.length - 1 : selectedImage - 1;
    onImageSelect(newIndex);
  };

  const goToNext = () => {
    const newIndex = selectedImage === displayImages.length - 1 ? 0 : selectedImage + 1;
    onImageSelect(newIndex);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-white border border-gray-200 rounded-lg overflow-hidden">
        <img 
          src={displayImages[selectedImage]?.url || images[0].url}
          alt={productName}
          className="w-full h-full object-contain p-8"
        />
        
        {/* Navigation Arrows - Show for all products */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={goToNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Thumbnail Images */}
      {displayImages.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {displayImages.map((image, index) => (
            <button
              key={index}
              onClick={() => onImageSelect(index)}
              className={`aspect-square border-2 rounded-lg overflow-hidden ${
                selectedImage === index ? 'border-green-600' : 'border-gray-200'
              }`}
            >
              <img 
                src={image.url}
                alt={`${productName} view ${index + 1}`}
                className="w-full h-full object-contain p-2"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;
