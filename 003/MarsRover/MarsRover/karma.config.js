// Karma configuration
// Generated on Sat Aug 10 2013 12:54:42 GMT+0000 (UTC)

process.env['CHROME_BIN'] =  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'app.js',
      'tests.js'
    ],


    // list of files to exclude
    exclude: [
      
    ],

     preprocessors: {
         'app.js': 'coverage'
     },

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
     reporters: ['dots', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
