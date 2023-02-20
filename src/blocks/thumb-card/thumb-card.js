/* global document */

const ready = require('../../js/utils/documentReady.js');
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

ready(function(){
  console.log(lgThumbnail);
  const galleries = document.querySelectorAll('.thumb-card--gallery');

  for(let i=0; i<galleries.length; i++) {
  //   let el = this.querySelector('.my');
  //   lightGallery(el);

    galleries[i].addEventListener('click',function() {
      console.log('click');
      console.log(this);
      console.log(this.querySelector('.thumb-card__gallery'));
      var gallery = this.querySelector('.thumb-card__gallery');
      if (gallery) {
        var plugin;
        if (!gallery.lightGalleryPlugin) {
          plugin = lightGallery(gallery,{
            plugins: [lgThumbnail],
          });
          gallery.lightGalleryPlugin = plugin;
        }
        else {
          plugin = gallery.lightGalleryPlugin;
        }
        console.log(plugin);
        // var firstImg = this.querySelector('.thumb-card__gallery > li:first-child');
        plugin.openGallery(0);
      }
    })
  }

});
