import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dtsPlugin from 'vite-plugin-dts'; // 生成ts声明

const COMPONENTS_NAMES = [
  "Cyberpunk"
] as const

export default defineConfig({
  plugins: [vue()],
})