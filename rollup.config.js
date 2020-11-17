/**
 * Created by WebStorm.
 * User: martin
 * Date: 01/06/2020
 * Time: 15:04

 */
import pkg from './package.json';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import {terser} from "rollup-plugin-terser";

export default {
  input: 'src/index.js',
  output: [{
    file: pkg.main,
    format: 'cjs',
    name: pkg.name
  },{
    file: pkg.module,
    format: 'es',
    name: pkg.name
  }],
  plugins:[resolve(), commonjs()
    ,terser()
  ],
  external:[
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ]
};
