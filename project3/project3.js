const swiper = new Swiper(".swiper-slider", {
  // Optional parameters
  centeredSlides: true,
  slidesPerView: 1,
  grabCursor: true,
  freeMode: false,
  loop: true,
  mousewheel: false,
  keyboard: {
    enabled: true
  },

  // Enabled autoplay mode
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
    clickable: true
  },

  // If we need navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  // Responsive breakpoints
  breakpoints: {
    640: {
      slidesPerView: 1.25,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});

$(document).ready(function () {
  // 초기 slide-menu는 숨김 상태
  $(".slide-menu").hide();

  // 메뉴 열기 버튼
  $(".toggle-open").click(function () {
    $(".slide-menu").slideDown(800); // 500ms 동안 슬라이드 다운
  });

  // 메뉴 닫기 버튼
  $(".toggle-close").click(function () {
    $(".slide-menu").slideUp(800); // 500ms 동안 슬라이드 업
  });
});


//gsap
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  smooth: 2, 
  effects: true
});
gsap.config({trialWarn: false});


//

$(document).ready(function () {
  // 초기 slide-menu는 숨김 상태
  $(".slide-menu").hide();

  // 메뉴 열기 버튼
  $(".toggle-open").click(function () {
    $(".slide-menu").slideDown(500); // 500ms 동안 슬라이드 다운
  });

  // 메뉴 닫기 버튼
  $(".toggle-close").click(function () {
    $(".slide-menu").slideUp(500); // 500ms 동안 슬라이드 업
  });
});