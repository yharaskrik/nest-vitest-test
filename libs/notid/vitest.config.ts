import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    dir: __dirname,
    globals: true,
    watch: false
  },
});
