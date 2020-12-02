const paths = require("./config/paths");
const postcssPresetEnv = require("postcss-preset-env");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = ({ env }) => ({
  plugins: [
    postcssPresetEnv({
      browsers: "last 2 versions",
    }),
    env === "production"
      ? purgecss({
          content: [
            `${paths.html}/*.html`,
            `${paths.src}/**/*.js`,
            "node_modules/bootstrap/js/**/*.js",
          ],
          rejected: true,
        })
      : false,
  ],
});
