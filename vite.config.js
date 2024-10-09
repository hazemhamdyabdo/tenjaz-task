import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';

/** @type {import('vite').UserConfig} */
export default {
  plugins: [vue(), svgLoader(),
    Components({
      resolvers: [PrimeVueResolver()], // PrimeVue component auto-import
    }),
  ],

};
