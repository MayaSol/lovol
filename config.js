/* global module */

let config = {
  'notGetBlocks': [
    'blocks-demo.html',
  ],
  'ignoredBlocks': [
    'no-js',
  ],
  'alwaysAddBlocks': [
    'sprite-svg',
    // 'sprite-png',
    'object-fit-polyfill',
  ],
  'addStyleBefore': [
    'bootstrap/scss/_functions.scss',
    'bootstrap/scss/_variables.scss',
    'bootstrap/scss/_mixins.scss',
    'bootstrap/scss/_transitions.scss',
    'bootstrap/scss/_nav.scss',
    'bootstrap/scss/_navbar.scss',
    'src/scss/_tailwind-colours.scss',
    'src/scss/_tailwind-screens.scss',
    'src/scss/variables.scss',
    'src/scss/mixins.scss',
    'src/scss/awesome/fontawesome.scss',
    'src/scss/awesome/solid.scss',
    'lightgallery/scss/lightgallery.scss',
    'lightgallery/scss/lg-thumbnail.scss',
    'lightgallery/scss/lg-video.scss',
    // 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
  ],
  'addStyleAfter': [
    'src/scss/test.scss', //!!!
    // 'src/scss/print.scss',
  ],
  'addJsBefore': [
    'bootstrap/js/dist/tab.js',
    'lightgallery/lightgallery.min.js',
    '../blocks/field-text/field-text.js'
    // 'somePackage/dist/somePackage.js', // для 'node_modules/somePackage/dist/somePackage.js',
  ],
  'addJsAfter': [
    './script.js',
  ],
  'addAssets': {
    'src/fonts/*.{woff,woff2,ttf}': 'fonts/',
    'src/webfonts/*.{woff,woff2}': 'webfonts/',
    'src/img/*.{png,svg,jpg,jpeg}': 'img/',
    'src/blocks/sprite-svg/img/sprite.svg': 'img/',
    'src/img/screens/*.{png,svg,jpg,jpeg}': 'img/',
    'src/img/content/*.{png,svg,jpg,jpeg}': 'img/',
    'src/images/*.gif': 'images/'
    // 'src/favicon/*.{png,ico,svg,xml,webmanifest}': 'img/favicon',
    // 'node_modules/somePackage/images/*.{png,svg,jpg,jpeg}': 'img/',
  },
  'dir': {
    'src': 'src/',
    'build': 'build/',
    'blocks': 'src/blocks/'
  }
};

module.exports = config;
