import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES
    ? 'util-page' // レポジトリ名を設定
    : './',
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
    tsconfigPaths(),
  ],
})
