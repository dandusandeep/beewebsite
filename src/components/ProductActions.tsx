
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { getWooCommerceUrl } from "@/config/woocommerce";

interface ProductActionsProps {
  productId?: number;
}

const ProductActions = ({ productId }: ProductActionsProps) => {
  const handleAddToCart = () => {
    if (productId) {
      // Redirect to WooCommerce add to cart URL
      window.location.href = getWooCommerceUrl('addToCart', productId);
    }
  };

  const handleBuyNow = () => {
    if (productId) {
      // Add to cart and redirect to checkout
      const addToCartUrl = getWooCommerceUrl('addToCart', productId);
      const checkoutUrl = getWooCommerceUrl('checkout');
      
      // First add to cart, then redirect to checkout
      window.location.href = `${addToCartUrl}&redirect_to=${encodeURIComponent(checkoutUrl)}`;
    }
  };

  const handleViewCart = () => {
    window.location.href = getWooCommerceUrl('cart');
  };

  return (
    <div className="pt-6 space-y-4">
      <Button 
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
        onClick={handleAddToCart}
        disabled={!productId}
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        Add to Cart
      </Button>
      <Button 
        variant="outline" 
        className="w-full border-green-600 text-green-600 hover:bg-green-50 py-3"
        onClick={handleBuyNow}
        disabled={!productId}
      >
        Buy Now
      </Button>
      <Button 
        variant="ghost" 
        className="w-full text-green-600 hover:bg-green-50"
        onClick={handleViewCart}
      >
        View Cart
      </Button>
    </div>
  );
};

export default ProductActions;
