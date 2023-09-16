import * as esbuild from 'esbuild'
import path from 'node:path'

let envPlugin = {
  name: 'env',
  setup(build) {
    build.onResolve({ filter: /\.js$/ }, async (args) => {
      console.log(path.join(args.resolveDir, args.path))
      return { path: path.join(args.resolveDir, args.path) };
    });
  },
}

await esbuild.build({
  entryPoints: ['a.js'],
  bundle: true,
  outfile: 'out.js',
  plugins: [envPlugin],
})