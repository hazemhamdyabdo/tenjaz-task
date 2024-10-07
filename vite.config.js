import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
/** @type {import('vite').UserConfig} */
export default {
  plugins: [vue(), svgLoader()],
};
