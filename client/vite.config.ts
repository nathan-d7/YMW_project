import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSvgr from 'vite-plugin-svgr'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginSvgr(),
    dts({
      outDir: 'dist/types', // Example: Output to a 'types' folder within 'dist'
      // include: ['src/components/layout/header/index.tsx'], // Example: Only include files in the 'src' directory
    }),
  ],
})
