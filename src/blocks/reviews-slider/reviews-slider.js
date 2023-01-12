/* global document */

const ready = require('../../js/utils/documentReady.js');
import Swiper, { Navigation } from 'swiper';

ready(function(){

  var slidesTotal = document.querySelectorAll('.reviews-slider__inner .reviews-slider__item').length;

  const swiperReviews = new Swiper('.reviews-slider', {
    modules: [Navigation],
    navigation: {
      nextEl: '.swiper-navbtn.swiper-navbtn--next',
      prevEl: '.swiper-navbtn.swiper-navbtn--prev',
    },
    slidesPerView: 1,
    speed: 400,
    loop: true
  });

  console.log(swiperReviews);

  var sliderAmount = swiperReviews.el.getElementsByClassName('reviews-slider__amount')[0];
  sliderAmount.textContent = slidesTotal;
  var sliderCurrent = swiperReviews.el.getElementsByClassName('reviews-slider__current')[0];
  sliderCurrent.textContent = swiperReviews.activeIndex;

  swiperReviews.on('slideChangeTransitionStart', function () {
    console.log('slide changed');
    console.log(this);
    sliderCurrent.textContent = +this.slides[this.activeIndex].dataset.swiperSlideIndex + 1;
    console.log(this.trueIndex);
  });



  console.log(swiperReviews);
});
