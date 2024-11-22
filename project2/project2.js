const mainSwiper = new Swiper("#main-slide", {
  speed: 600,
  parallax: true,// 시간차 움직임
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
    type: 'fraction'  
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop : true,
  autoplay : {
    delay: 2500,
  }
});