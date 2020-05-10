exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'firefox'
  },

  // Spec patterns are relative to this directory.
  specs: [
    'features/*.feature'
  ],

  baseURL: 'http://localhost:8080/',

  cucumberOpts: {
    require: 'features/step_definitions/steps.js',
    tags: false,
    format: 'pretty',
    profile: false,
    'no-source': true
  }
};