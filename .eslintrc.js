module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: "@cybozu/eslint-config/presets/node-prettier",
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {},
};
