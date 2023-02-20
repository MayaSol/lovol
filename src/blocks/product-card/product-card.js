const ready = require('../../js/utils/documentReady.js');
var MicroModal = require("../../../node_modules/micromodal/dist/micromodal");

ready(function(){
  console.log(MicroModal);

  var btnsMore = document.getElementsByClassName('.product-card__more');
  for (btn of btnsMore) {
    btn.addEventListener('click',function(event) {
      console.log('btn click');
      console.log(btn);
    })
  }

    MicroModal.init({
      onShow: modal => onShow(modal), // [1]
      onClose: modal => onClose(modal), // [2]
      openTrigger: 'data-custom-open', // [3]
      closeTrigger: 'data-custom-close', // [4]
      openClass: 'is-open', // [5]
      disableScroll: true, // [6]
      disableFocus: false, // [7]
      awaitOpenAnimation: false, // [8]
      awaitCloseAnimation: false, // [9]
      debugMode: true // [10]
    });


    function onShow(modal) {
      console.info(`${modal.id} is shown`);
      var inner = modal.getElementsByClassName('modal__inner')[0];
      inner && (inner.scrollTop = 0);
      document.body.classList.add('noscroll');
    }

    function onClose(modal) {
      console.info(`${modal.id} is hidden`)
      document.body.classList.remove('noscroll')
    }

});
