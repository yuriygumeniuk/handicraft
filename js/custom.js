$(document).ready(function () {

  var mySwiper = new Swiper('.slider', {
      roundLengths: true,
      slidesPerView: 1,
      speed: 2000,
      loop: true,
      navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
      },
  });

  var mySwiper = new Swiper('.new-product-block', {
    slidesPerView: 4,    
    slidesPerGroup: 2,
    loop: true,    
    spaceBetween: 8,
    freeMode: false,
    speed: 4000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
  
    var featuredSwiper = document.querySelector('#featured-slider').swiper;
        $('#featured-slider').hover(function(){
             featuredSwiper.autoplay.stop();
             console.log('featured Stop');
        }, function(){
             featuredSwiper.autoplay.start();
             console.log('featured Start');
        });

    var newSwiper = document.querySelector('#new-slider').swiper;
        $('#new-slider').hover(function(){
             newSwiper.autoplay.stop();
             console.log('new Stop');
        }, function(){
             newSwiper.autoplay.start();
             console.log('new Start');
        });


});