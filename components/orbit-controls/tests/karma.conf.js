// Karma configuration.
var path = require('path');
var webpackConfiguration = require("../webpack.config.js");
webpackConfiguration.output.path = path.resolve(__dirname, '../../../build')

module.exports = function (config) {
  config.set({
    basePath: '../',
    webpack: webpackConfiguration,
    browsers: ['Firefox', 'Chrome'],
    client: {
      captureConsole: true,
      mocha: {ui: 'tdd'}
    },
    envPreprocessor: ['TEST_ENV'],
    files: [
      // Define test files.
      {pattern: 'tests/**/*.test.js'},
      // Serve test assets.
      {pattern: 'tests/assets/**/*', included: false, served: true}
    ],
    frameworks: ['mocha', 'sinon-chai', 'chai-shallow-deep-equal', 'webpack'],
    preprocessors: {'tests/**/*.js': ['webpack', 'env']},
    reporters: ['mocha']
  });
};
