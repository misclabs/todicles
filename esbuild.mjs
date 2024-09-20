import * as esbuild from "esbuild";
import esbuildPostcss from "esbuild-postcss";
import fs from "node:fs";

const mode = process.env.MODE || "dev";
if (!["dev", "prod"].includes(mode)) {
  throw new Error(`MODE must be "dev" or "prod", was "${mode}"`);
}

switch(process.argv[2]) {
  case "build":
    await build();
    break;

  case "watch":
    await watch();
    break;

  case "serve":
    await serve();
    break;

  default:
    console.warning("Not sure what to do. Only know build, watch, serve. 😖");
    break;
}

function createEsBuildConf() {
  const conf = {
    entryPoints: [
      "src/index.html",
      "src/index.ts",
      "src/style.css",
      {
        in: "node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js",
        out: "webcomponents-loader",
      },
      { in: "node_modules/lit/polyfill-support.js", out: "lit-polyfill-support" },
    ],
    target: "es2015",
    bundle: true,
    loader: { ".html": "copy" },
    metafile: true,
    color: true,
    plugins: [esbuildPostcss()],
  };  

  if (mode === "dev") {
    conf.outdir = "test/build";
    conf.sourcemap = true;
  } else {
    conf.outdir = "docs";
    conf.minify = true;
    conf.drop = ["console"];
    conf.dropLabels = ["DEV"];
  }  

  return conf;
}

async function build() {
  console.log(`👷 Building mode=${mode} ${mode === "dev" ? "🛠️" : "🚀"}\n`);

  const conf = createEsBuildConf();

  try {
    const result = await esbuild.build(conf);
    
    if (result.metafile) {
      // console.log(await esbuild.analyzeMetafile(result.metafile, { color: true, verbose: false}));
      fs.writeFileSync("esbuild.meta.json", JSON.stringify(result.metafile));
      console.log("esbuild metafile written to esbuild.meta.json. View w/ https://esbuild.github.io/analyze/\n")

      const outputs = result.metafile.outputs;
      for (const okey in outputs) {
        console.log(`${(outputs[okey].bytes / 1024).toFixed(1)}kb\t${okey}`);
      }
    }
  
    console.log(`\nBuild's done. ${result.warnings.length > 0 ? "😒" : "😁"}`);
    
  } catch(e) {
    console.log("Went not-great. 😭");
  }
}

async function watch() {
  console.log(`👀 Watching mode=${mode} ${mode === "dev" ? "🛠️" : "🚀"}\n`);
  const conf = createEsBuildConf();
  const ctx = await esbuild.context(conf);
  await ctx.watch();
  console.log("ctrl+c to exit...");
}

async function serve() {
  const conf = createEsBuildConf();
  const ctx = await esbuild.context(conf);

  const serveConf = {
    host: "127.0.0.1",
  };
  if (mode === "dev") {
    serveConf.servedir = "test";
  } else {
    serveConf.servedir = "docs";
  }
  
  const result = await ctx.serve(serveConf);
  console.log(
    `🏪 Serving ${serveConf.servedir} at ${result.host}:${result.port} mode=${mode} ${mode === "dev" ? "🛠️" : "🚀"}\n`,
  );
  console.log("ctrl+c to exit...");
}
