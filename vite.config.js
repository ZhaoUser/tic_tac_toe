import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'src/index.jsx',  // aqui você define o arquivo de entrada correto
    },
  },
});
