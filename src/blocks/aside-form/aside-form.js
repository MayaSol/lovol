const ready = require('../../js/utils/documentReady.js');

ready(function(){
  var openBtns = document.querySelectorAll('body *[data-aside-open]');
  console.log(openBtns);

   for (let btn of openBtns) {
    console.log(btn.dataset.asideOpen);
    btn.addEventListener('click', function(event) {
      let form = document.querySelector(this.dataset.asideOpen);
      form && form.classList.add('aside-form--show');
    })
   }

  var asideForms = document.getElementsByClassName('aside-form');
  var closeBtns = document.querySelectorAll('body *[data-aside-close]');
  console.log(closeBtns);
  for (btn of closeBtns) {
    btn.addEventListener('click', function(event) {
      console.log(asideForms);
      for (form of asideForms) {
        form.classList.remove('aside-form--show');
      }
    })
  }

  document.addEventListener('keydown', function(e) {
    if (e.key == "Escape") {
      for (form of asideForms) {
        form.classList.remove('aside-form--show');
      }
    }
  });
});
