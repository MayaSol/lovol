/* global document */

const autosize = require('autosize');
const ready = require('../../js/utils/documentReady.js');

ready(function(){
  console.log('fieldtext js ');
  console.log(autosize);
  console.log(document.querySelectorAll('textarea'));
  autosize(document.querySelectorAll('textarea'));

});
