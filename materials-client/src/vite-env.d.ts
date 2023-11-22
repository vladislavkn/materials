/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_APPS_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
