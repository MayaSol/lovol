const ready = require('./utils/documentReady.js');
import animateScrollTo from 'animated-scroll-to';

ready(function() {
  console.log('DOM героически построен!');

  // var anchorLinks = document.querySelectorAll('a[href^="#"]');
  // console.log(anchorLinks);

  var header = document.querySelector('.page-header');
  var headerHeight = header.offsetHeight;

  var nav = document.getElementById('nav');
  var toggler = document.querySelector('.main-nav__toggler');
  nav.addEventListener('click', function(event) {
    var href = event.target.getAttribute('href');
    if (href && href.indexOf('#') == 0) {
      event.preventDefault();
      var section = document.getElementById(href.slice(1, href.length));
      console.log(section);
      var viewportOffset = section && section.getBoundingClientRect();
      viewportOffset && animateScrollTo(viewportOffset.top + window.scrollY - headerHeight);
      this.classList.remove('main-nav--open');
      toggler.classList.remove('burger--close');
    }
  })

  var links = document.querySelectorAll('a:not(.main-nav__link)[href^="#"]');
  for (link of links) {
    link.addEventListener('click', function(event) {
      var href = this.getAttribute("href");
      if (href && href.indexOf('#') == 0) {
        event.preventDefault();
        var section = document.getElementById(href.slice(1, href.length));
        var viewportOffset = section && section.getBoundingClientRect();
        viewportOffset && animateScrollTo(viewportOffset.top + window.scrollY - headerHeight);
      }
    })
  }


  var particles = document.getElementsByClassName('particles-js');

  if (window.innerWidth >= 1280) {
    for (var i = 0; i < particles.length; i++) {
      console.log(particles[i].getAttribute('id'));
      particlesJS(particles[i].getAttribute('id'), {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#455764"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 8,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#4B6175",
            "opacity": 0.7,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 0.5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    }
  }

});

// const $ = require('jquery');
// $( document ).ready(function() {});
