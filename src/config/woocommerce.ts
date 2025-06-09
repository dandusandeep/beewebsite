
// WooCommerce backend configuration
export const WOOCOMMERCE_CONFIG = {
  baseUrl: process.env.REACT_APP_WOOCOMMERCE_URL || 'https://beegears.com',
  endpoints: {
    products: '/shop',
    productDetail: '/product',
    addToCart: '/?add-to-cart=',
    cart: '/cart',
    checkout: '/checkout',
    myAccount: '/my-account',
    orders: '/my-account/orders',
    editProfile: '/my-account/edit-account',
    orderReceived: '/order-received'
  }
};

// Helper function to construct WooCommerce URLs
export const getWooCommerceUrl = (endpoint: string, params?: string | number) => {
  const baseUrl = WOOCOMMERCE_CONFIG.baseUrl;
  
  switch (endpoint) {
    case 'addToCart':
      return `${baseUrl}${WOOCOMMERCE_CONFIG.endpoints.addToCart}${params}`;
    case 'productDetail':
      return `${baseUrl}${WOOCOMMERCE_CONFIG.endpoints.productDetail}/${params}`;
    case 'orderReceived':
      return `${baseUrl}${WOOCOMMERCE_CONFIG.endpoints.orderReceived}/${params}`;
    default:
      return `${baseUrl}${WOOCOMMERCE_CONFIG.endpoints[endpoint as keyof typeof WOOCOMMERCE_CONFIG.endpoints]}`;
  }
};
