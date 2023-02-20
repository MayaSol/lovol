const ready = require('../../js/utils/documentReady.js');
import Swiper, { Thumbs, Navigation } from 'swiper';

ready(function(){
  console.log('product-slider.js');

  var productModal = document.querySelectorAll('[id^=product-details]');
  console.log(productModal);

  for (var modal of productModal) {
    let swiperNav = new Swiper(modal.querySelector('.product-slider-nav'), {
      modules: [Navigation],
      focusableElements: 'input, select, option, textarea, button, video, label',
      slidesPerView: 3,
      speed: 400,
      loop: true,
      navigation: {
        nextEl: '.product-slider-nav__nav-btn--next',
        prevEl: '.product-slider-nav__nav-btn--prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 4,
          spaceBetween: 28
        },
      }
    });

    console.log(swiperNav);

    let swiperMain = new Swiper(modal.querySelector('.product-slider-main'), {
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
  }



});
