/** @type {import('postcss-load-config').Config} */

// check
// stylelint https://github.com/stylelint/stylelint

// build
// autoprefixer (part of postcss-preset-env)
// postcss-preset-env https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env
// cssnano https://cssnano.github.io/cssnano/

const config = {
  plugins: [
    require("postcss-preset-env")({
      features: {},
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};

module.exports = config;
