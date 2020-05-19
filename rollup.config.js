import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [resolve(), typescript(), terser()],
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies),
  ],
};
