import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  // input: 'lib/js/src/RemarkCurlie.bs.js',
  input: 'index.js',
  output: {
    dir: 'dist',
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [
    commonjs(),
    resolve()
  ],
};
