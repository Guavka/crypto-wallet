/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';

import vue from '@vitejs/plugin-vue';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Inspect from 'vite-plugin-inspect';

import vuetify from 'vite-plugin-vuetify';

const folderURL = new URL('src', import.meta.url)

const autoImportPath = fileURLToPath(new URL('configs/', folderURL))
const srcPath = fileURLToPath(new URL('src', folderURL))

const srcURL = new URL('src/', folderURL)

const assetsPath = fileURLToPath(new URL('assets/', srcURL))
const modulesPath = fileURLToPath(new URL('modules/', srcURL))
const pluginsPath = fileURLToPath(new URL('plugins/', srcURL))
const routerPath = fileURLToPath(new URL('router/', srcURL))
const stylesPath = fileURLToPath(new URL('styles/', srcURL))
const viewsPath = fileURLToPath(new URL('views/', srcURL))

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom'
  },
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    AutoImport({
      imports: [
        'vue',
        'pinia'
      ],
      eslintrc: {
        enabled: true,
        filepath: path.resolve(autoImportPath, '.eslintrc-auto-import.json'),
      },
      dts: path.resolve(autoImportPath, 'auto-imports.d.ts'),
    }),
    Components({
      dts: path.resolve(autoImportPath, 'components.d.ts'),
      dirs: ['./src/modules/layout/**./*.vue', './src/modules/**/components/', './src/views/'],
    }),
    Inspect(),
  ],
  resolve: {
    alias: {
      '@src': srcPath,
      '@assets': assetsPath,
      '@router': routerPath,
      '@styles': stylesPath,
      '@modules': modulesPath,
      '@plugins': pluginsPath,
      '@views': viewsPath
    },
  }
});

