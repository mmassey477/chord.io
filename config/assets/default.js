'use strict';

/* eslint comma-dangle:[0, "only-multiline"] */

module.exports = {
  client: {
    lib: {
      // these should be in alphabetical order
      css: [
        // bower:css
        'public/lib/bootstrap/dist/css/bootstrap.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.css',
        'public/lib/angularjs-slider/dist/rzslider.min.css',
        'public/lib/angular-material/angular-material.css'
        // endbower
      ],
      js: [
        // bower:js
        'public/lib/angular/angular.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-aria/angular-aria.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/angular-file-upload/dist/angular-file-upload.min.js',
        'public/lib/angular-material/angular-material.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-mocks/angular-mocks.js',
        'public/lib/angular-payments/lib/angular-payments.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
        'public/lib/suncalc/suncalc.js',
        'public/lib/svg-pan-zoom/dist/svg-pan-zoom.js',
        'public/lib/three.js/three.js',
        'public/lib/jszip/dist/jszip.min.js',
        'public/lib/file-saver/FileSaver.min.js',
        'public/lib/bluebird/js/browser/bluebird.min.js',
        'public/lib/angularUtils-pagination/dirPagination.js',
        'public/lib/angularjs-slider/dist/rzslider.min.js',
        'public/lib/pikaday/pikaday.js',
        'public/lib/oboe/dist/oboe-browser.js',
        'public/lib/mobile-drag-drop/release/index.min.js',
        // endbower

        // Modernizr
        'public/modernizr/modernizr.js',

        //google analytics script
        'public/ga/ga.js',
        // angular drag-and-drop library
        'public/dragdrop/angular-drag-drop.min.js'

      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/css/*.css'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js'
    ],
    img: [
      'modules/**/*/img/**/*.jpg',
      'modules/**/*/img/**/*.png',
      'modules/**/*/img/**/*.gif',
      'modules/**/*/img/**/*.svg'
    ],
    views: ['modules/*/client/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gulpConfig: ['gulpfile.js'],
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    config: ['modules/*/server/config/*.js'],
    policies: 'modules/*/server/policies/*.js',
    views: ['modules/*/server/views/*.html']
  }
};
