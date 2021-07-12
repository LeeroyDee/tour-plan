var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  keyboard: {
    enabled: true,
  },

});

//swiper.slideNext();
// document.addEventListener("keydown", (e) =>{
//   if(e.keycode===39) swiper.slideNext();
//   if(e.keycode===37) swiper.slidePref();
// })