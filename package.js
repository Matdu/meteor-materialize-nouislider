Package.describe({
  name: 'matdu:meteor-materialize-nouislider',
  version: '0.0.2',
  summary: 'Just a simple libray usage of NoUiSlider with Materialize styling',
  git: 'https://github.com/matdu/meteor-materialize-nouislider',
  documentation: 'README.md'
});

Npm.depends({
  brfs: '1.4.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');
  api.use('cosmos:browserify@0.8.1');
  api.addFiles([
    'lib/nouislider.css',
    'lib/nouislider.min.js',
    'package.browserify.js'
  ], 'client');
  api.export('noUiSlider', 'client');
});
