
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Product } from "@/data/productDetail";

interface ProductInfoProps {
  product: Product;
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const ProductInfo = ({ product, selectedColor, onColorChange }: ProductInfoProps) => {
  const isFilterBottle = product.category === "filter-bottles";
  const isFilterStraw = product.category === "filter-straws";
  const isSimplifiedProduct = isFilterBottle || isFilterStraw;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
        <p className="text-2xl font-bold text-green-600">{product.price}</p>
      </div>

      <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>

      {/* Color Selection - Only show if not a simplified product */}
      {!isSimplifiedProduct && (
        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-900">Color</label>
          <RadioGroup value={selectedColor} onValueChange={onColorChange}>
            <div className="flex flex-wrap gap-4">
              {product.colors.map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <RadioGroupItem value={color} id={color} />
                  <label htmlFor={color} className="text-sm text-gray-700 cursor-pointer">
                    {color}
                  </label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
      )}

      {/* Show color as text for simplified products */}
      {isSimplifiedProduct && (
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-900">Color:</span>
          <span className="text-sm text-gray-700">{product.colors.join(", ")}</span>
        </div>
      )}

      {/* Capacity */}
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-900">Capacity:</span>
        <span className="text-sm text-gray-700">{product.capacity}</span>
      </div>

      {/* Features */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
