import path from "path"
import ts from "rollup-plugin-typescript2"
import server from "rollup-plugin-serve"
import livereload from "rollup-plugin-livereload"
import { terser } from "rollup-plugin-terser"
import replace from "rollup-plugin-replace"
const isDev = process.env.NODE_ENV === 'development'

export default {
    input: path.resolve(__dirname, "./src/index.ts"),
    output: {
        file: path.resolve(__dirname, './lib/index.js'),
        format: 'umd',
        sourcemap: true
    },
    plugins: [
        ts(),
        isDev && livereload(),
        !isDev && terser({
            compress:{
                // drop_console: true
            }
        }),
        replace({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        }),
        isDev && server({
            open: true,
            port:1988,
            openPage: "/public/index.html"
        })
    ]
}


// const path = require('path')
// const ts = require('rollup-plugin-typescript2')
//
// module.exports = {
//     input: path.resolve(__dirname, "./src/index.ts"),
//     output: {
//         file:path.resolve(__dirname, './lib/index.js'),
//         format: 'umd'
//     },
//     plugins:[
//         ts()
//     ]
// }
