import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external'; // TODO

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      // exports: 'named', // TODO?
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    // peerDepsExternal(), // TODO
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    typescript(),
    terser(),
  ],
  // TODO
  // TODO || => ??
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    'figma-plugin-ds/dist/figma-plugin-ds.css',
  ],
};
