/**
 * Testacular configuration. Visit https://github.com/vojtajina/testacular/blob/stable/lib/config.js#L54
 * for all available config options and defaults.
 */

/* Base path, that will be used to resolve files and exclude. */
basePath = './..'

/* Frameworks. */
// frameworks = ['jasmine']

/* Files and patterns to load in the browser. */
files = [
  JASMINE,
  JASMINE_ADAPTER,
  'http://code.jquery.com/jquery-1.9.1.js',
  'http://code.angularjs.org/1.1.4/angular.js',
  'http://code.angularjs.org/1.1.4/angular-mocks.js',
  'https://raw.github.com/mde/timezone-js/master/src/date.js',
  'js/timezone.js',
  'test/directives/*Spec.js'
]

/* Files to exclude. */
exclude = []

/* CLI progress reporters. Use dots, Travis terminal does not support escaping
 * sequences. Legal values: 'dots', 'progress', 'junit'. */
reporters = ['progress']

/* web server port */
// --port 9876
port = 9876

/* CLI runner port. */
// --runner-port 9100
runnerPort = 9100

/* Enable colors in the output (reporters and logs). */
// --colors
// --no-colors
colors = true

/* Logging level. Possible values: LOG_DISABLE, LOG_ERROR, LOG_WARN, LOG_INFO,
 * LOG_DEBUG. */
// --log-level debug
logLevel = LOG_INFO

/* Enable watching file and executing tests whenever any file changes. */
// --auto-watch
// --no-auto-watch
autoWatch = true

/* Testing environment. Options are (as available) Chrome, ChromeCanary,
 * Firefox, Opera, Safari, PhantomJS, and IE. */
// --browsers Chrome,Firefox,Safari
browsers = ['PhantomJS']

/* Timeout (in milliseconds) for browser capture. */
// --capture-timeout 5000
captureTimeout = 5000

/* Run tests on start (when browsers are captured) and exit. */
// --single-run
// --no-single-run
singleRun = false

/* Report which specs are take longer than 500 ms to complete. */
// --report-slower-than 500
reportSlowerThan = 500
