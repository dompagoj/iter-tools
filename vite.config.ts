/// <reference types="vitest" />
import { defineConfig } from 'vite'

import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'iter-tools',
      fileName: 'iter-tools',
    },
  },
  plugins: [
    dts({
      // entryRoot: resolve(__dirname, 'lib'),
      include: ['lib'],
      exclude: ['test'],
    }),
  ],
  test: {},
})
