module.exports = {
  extends: [
    './rules/practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/strict',
    './rules/variables',
    './rules/es6',
  ].map(require.resolve),
};
