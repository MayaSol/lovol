const ready = require('../../js/utils/documentReady.js');
import Swiper, { Thumbs } from 'swiper';

ready(function(){
  console.log('product-slider.js');

  let swiperNav = new Swiper('.product-slider-nav', {
    focusableElements: 'input, select, option, textarea, button, video, label',
    slidesPerView: 3,
    speed: 400,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 28
      },
    }
  });

  console.log(swiperNav);

  let swiperMain = new Swiper('.product-slider-main', {
    modules: [Thumbs],
    thumbs: {
      swiper: swiperNav
    },
    focusableElements: 'input, select, option, textarea, button, video, label',
    slidesPerView: 1,
    speed: 400,
    loop: true,
  });

  console.log(swiperMain);

});
