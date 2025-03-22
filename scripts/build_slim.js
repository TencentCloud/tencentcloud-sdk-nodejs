const esbuild = require("esbuild");
const path = require("path");
const fs = require("fs");

const root = path.join(__dirname, "..");

const buildOptions = {
  platform: 'node',
  target: ["node10"],
  bundle: true,
  format: "cjs",
  mainFields: ["main"],
  allowOverwrite: true,
  entryPoints: [path.join(root, "src", "index.ts")],
  supported: {
    "dynamic-import": false,
  },
  outfile: path.join(root, "tencentcloud", "index.js"),
  keepNames: true,
  packages: "external",
  external: ["node_modules/*"],
  minify: true,
};

(async () => {
  await esbuild.build(buildOptions);
})();
