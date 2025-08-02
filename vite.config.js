import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/PlantCareLV/', // 👈 MUST match your repo name exactly (case-sensitive)
  plugins: [react()],
});
