/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REACT_APP_WOOCOMMERCE_URL?: string;
  readonly REACT_APP_MY_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
