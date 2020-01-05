$(document).ready(function () {
 
var homeSwiper = new Swiper(".slider", {
  fadeEffect: { crossFade: true },
  virtualTranslate: true,
  autoplay: {
      delay: 8000,
      disableOnInteraction: false,
  },
  speed: 1500, 
  slidersPerView: 1,
  effect: "fade",
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});


  // var mySwiper = new Swiper ('.slider', {
  //   effect: 'fade',
  //   // roundLengths: true,
  //  	// slidesPerView: 1,
  //   // spaceBetween: 22,
  //   // freeMode: false,
  //   // loop: true,
  //   speed: 1500,
  //   autoplay: {
  //       delay: 10000,
  //       disableOnInteraction: false,
  //   }

  // })

});
