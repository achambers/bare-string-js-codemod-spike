'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({ 
  name: 'extract-bare-strings',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});