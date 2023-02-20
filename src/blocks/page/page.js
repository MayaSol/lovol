const ready = require('../../js/utils/documentReady.js');
const throttle = require('lodash/throttle');

ready(function(){


  let viewportHeight = window.innerHeight; //!!!!
  window.addEventListener('resize', throttle(() => {
    viewportHeight = window.innerHeight;
  }));

  let navbar = document.querySelector('.page-header');
  let navPos = navbar.getBoundingClientRect().top;
  let navLinks = navbar.querySelectorAll('.main-nav__link');
  let navSections = {};
  let currentLink = navbar.querySelector('.main-nav__item:first-child');
  for (let i=0; i<navLinks.length; i++) {
    if (navLinks[i].hash) {
      navSections[navLinks[i].hash] = document.querySelector(navLinks[i].hash);
    }
  }

  console.log('navSections');
  console.log(navSections);

  toggleClassesOnScroll();

  window.addEventListener('scroll',throttle(toggleClassesOnScroll, 100));


  function toggleClassesOnScroll() {
    let scrollPos = window.scrollY;
    let navBarHeight = 0;
    // if (scrollPos > navPos) {
    if (scrollPos > 0) {
      document.body.classList.add('scrolled');
      let navBarHeight = navbar.offsetHeight;
    } else {
      document.body.classList.remove('scrolled');
      if (currentLink.querySelector('span')) {
        currentLink.querySelector('span').remove();
      }
    }

    // console.log(scrollPos);
    // console.log(scrollPos + viewportHeight);

    for (link of navLinks) {
      // console.log(link);
      // console.log(link.hash);

      if  (navSections[link.hash]) {
        // console.log(link.hash + ': ' + navSections[link.hash].offsetTop);
        let top = scrollPos + navBarHeight;
        let bottom = scrollPos + viewportHeight;
        let sectionStart = navSections[link.hash].offsetTop;

        if (    (top < sectionStart && bottom > sectionStart)
             || (top > sectionStart && bottom < sectionStart + navSections[link.hash].offsetHeight)
            )
        {
          let span;
          let innerSpan = currentLink.getElementsByTagName('span')[0];
          if (innerSpan) {
            span = innerSpan;
          }
          else {
            span = document.createElement('span');
            span.classList.add('main-nav__link');
            currentLink.append(span);
          }
          // console.log(`.main-nav__link[href='${window.location.href.split('#')[0] + link.hash}']`);
          var curLink = navbar.querySelector(`.main-nav__link[href='${link.hash}']`);
          if (curLink) {
            span.textContent = curLink.textContent;
          }
        }
      }
    }

  }

});


