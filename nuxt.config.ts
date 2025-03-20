import { nodePolyfills } from "@bangjelkoski/vite-plugin-node-polyfills";

export default defineNuxtConfig({
  ssr: false,
  modules: ["@pinia/nuxt", "@vueuse/nuxt", "@nuxtjs/tailwindcss"],
  css: ["@/assets/css/tailwind.css"],

  typescript: {
    typeCheck: "build",
  },

  imports: {
    dirs: ["store/**"],
  },

  pinia: {
    autoImports: ["defineStore"],
  },

  plugins: [
    {
      src: "./plugins/buffer.client.ts",
      ssr: false,
    },
  ],

  sourcemap: {
    server: false,
    client: false,
  },

  // Vite related config
  vite: {
    define: {
      "process.env": JSON.stringify({}),
      "process.env.DEBUG": JSON.stringify(process.env.DEBUG || false),
    },

    plugins: [nodePolyfills({ protocolImports: false })],

    build: {
      sourcemap: false,

      // default rollup options
      rollupOptions: {
        cache: false,
        output: {
          manualChunks: (id: string) => {
            //
          },
        },
      },
    },

    optimizeDeps: {
      exclude: ["fsevents"],
    },
  },

  compatibilityDate: "2025-03-20",
});
