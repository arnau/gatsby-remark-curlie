import commonjs from '@rollup/plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'input.js',
  output: {
    // dir: 'dist',
    file: 'index.js',
    format: 'cjs'
  },
  plugins: [
    commonjs(),
    resolve()
  ],
};
