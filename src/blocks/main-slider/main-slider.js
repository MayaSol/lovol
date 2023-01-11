const ready = require('../../js/utils/documentReady.js');
import Swiper, { Pagination } from 'swiper';

ready(function() {
  console.log('main-slider');
  const swiper = new Swiper('.main-slider', {
    modules: [Pagination],
    pagination: {
      el: '.main-slider__pagination',
      clickable: true,
      renderBullet: function(index, className) {
        return `<span class="${className}"><span class="${className}__inner"><span>${`0${index + 1}`.slice(-4)}</span></span></span>`;
      }
    },
    speed: 400,
    loop: true
  });

  // function onBulletClick(bullets) {
  //   console.log('onBulletsClick');
  //   let invertBeforeActive = true;
  //   for (let bullet of bullets) {
  //     console.log(bullet);
  //     console.log(bullet.classList.contains('swiper-pagination-bullet-active'));
  //     if (!bullet.classList.contains('swiper-pagination-bullet-active')) {
  //       if (invertBeforeActive) {
  //         bullet.classList.add('swiper-pagination-bullet--invert-animation');
  //       }
  //     } else {
  //       invertBeforeActive = false;
  //     }
  //   }
  // }


  let prevActiveIndex = swiper.activeIndex;

  swiper.on('slideChangeTransitionStart', function () {
    console.log('slideChangeTransitionStart');
    let bulletPrev    = swiper.pagination.bullets[swiper.slides[prevActiveIndex].dataset.swiperSlideIndex];
    let bulletCurrent = swiper.pagination.bullets[swiper.slides[swiper.activeIndex].dataset.swiperSlideIndex];
    // bulletPrev.classList.add('test-prev');
    // bulletCurrent.classList.add('test-current');
    // bulletPrev.addEventListener('transitionend', function(event) {
    //   console.log('bulletPrev transitionend');
    //   this.classList.remove('swiper-pagination-bullet--prev');
    // },{once: 'true'});
    // bulletCurrent.addEventListener('transitionend', function(event) {
    //   this.classList.remove('swiper-pagination-bullet--current');
    // },{once: 'true'});
  });

  // swiper.on('slideChangeTransitionEnd', function () {
  //   console.log('slideChangeTransitionEnd');
  //   console.log({...swiper});
  //   prevActiveIndex = swiper.activeIndex;
  // });


});
