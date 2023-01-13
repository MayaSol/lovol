/* global document */

const ready = require('../../js/utils/documentReady.js');
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgVideo from 'lightgallery/plugins/video';

ready(function(){
  lightGallery(document.getElementById('gallery-video-list'), {
      plugins: [lgVideo],
    });
});
