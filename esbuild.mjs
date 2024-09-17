import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["prepackage/index.js"],
  bundle: true,
  minify: true,
  outfile: "docs/index.js",
});

await esbuild.build({
  entryPoints: ["src/style.css"],
  bundle: true,
  minify: true,
  outfile: "docs/style.css",
});

await esbuild.build({
  entryPoints: [
    "node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js",
  ],
  bundle: true,
  minify: true,
  outfile: "docs/webcomponents-loader.js",
});

await esbuild.build({
  entryPoints: ["node_modules/lit/polyfill-support.js"],
  bundle: true,
  minify: true,
  outfile: "docs/polyfill-support.js",
});

console.log("Package done. 🦧");
