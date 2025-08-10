import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          icons: ["react-icons", "lucide-react"],
          slick: ["react-slick", "slick-carousel"],
          slider: ["keen-slider", "swiper"],
          utils: ["date-fns", "sort-by", "match-sorter", "localforage"],
        },
      },
    },
  },
});
