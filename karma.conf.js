module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    files: [
      { pattern: 'src/test.ts', watched: false }
    ],
    preprocessors: {
      'src/test.ts': ['webpack']
    },
    webpack: {
      mode: 'development',
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['Chrome'],
    restartOnFileChange: true,
    singleRun: false,
    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ]
  });
};
