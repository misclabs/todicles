import * as esbuild from "esbuild";
import esbuildPostcss from "esbuild-postcss";

await esbuild.build({
  entryPoints: ["src/index.ts"],
  outfile: "docs/index.js",
  target: "es2015",
  bundle: true,
  minify: true,
});

await esbuild.build({
  entryPoints: ["src/style.css"],
  outfile: "docs/style.css",
  bundle: true,
  minify: true,
  plugins: [esbuildPostcss()],
});

await esbuild.build({
  entryPoints: [
    "node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js",
  ],
  outfile: "docs/webcomponents-loader.js",
  target: "es2015",
  bundle: true,
  minify: true,
});

await esbuild.build({
  entryPoints: ["node_modules/lit/polyfill-support.js"],
  outfile: "docs/polyfill-support.js",
  target: "es2015",
  bundle: true,
  minify: true,
});

console.log("Package done. 🦧");
