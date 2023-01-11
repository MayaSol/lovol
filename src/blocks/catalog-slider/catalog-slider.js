const ready = require('../../js/utils/documentReady.js');
import Swiper, { Navigation } from 'swiper';

ready(function(){
  const swiper = new Swiper('.catalog-slider', {
    modules: [Navigation],
    navigation: {
      nextEl: '.catalog-slider__nav--next',
      prevEl: '.catalog-slider__nav--prev',
    },
    slidesPerView: 1,
    breakpoints: {
      // when window width is >= 320px
      1280: {
        slidesPerView: 2,
        spaceBetween: 80,
        simulateTouch: false,
      },
    },
    // autoHeight: true,
    speed: 400,
    loop: true,
    loopedSlides: 2
  });
});
