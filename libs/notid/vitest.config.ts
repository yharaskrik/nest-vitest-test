import { mergeConfig } from 'vite';
import baseConfig from '../../vitest.config';

export default mergeConfig(baseConfig, {
  test: {
    dir: __dirname
  },
  plugins: [],
});
