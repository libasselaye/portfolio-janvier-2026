import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const base = mode === 'production' ? process.env.BASE_PATH ?? '/' : '/';

  return {
    base,
    plugins: [react()]
  };
});
