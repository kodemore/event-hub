import {defineConfig} from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      sveltekit(),
  ],
  ssr: {
    noExternal: ["svelte-hero-icons"],
  },
  server: {
     fs: {
      allow: ['.'],
    },
  }
});
