// Karma configuration
// Generated on Tue Mar 13 2018 09:20:50 GMT+0100 (CET)

module.exports = function(config) {
  config.set({
      browsers: ['Chrome'],
      files: [
          { pattern: 'test-context.js', watched: false }
      ],
      frameworks: ['jasmine'],
      preprocessors: {
          'test-context.js': ['webpack']
      },
      webpack: {
          module: {
              loaders: [
                  { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' }
              ]
          },
          watch: true
      },
      webpackServer: {
          noInfo: true
      }
  });
}
