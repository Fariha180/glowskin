import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: [
      '3000-ipw7ga1ofdmfsmm2yvg6n-fa280b8e.us4.manus.computer',
      '8328-ipw7ga1ofdmfsmm2yvg6n-fa280b8e.us4.manus.computer',
    ],
  },
});
