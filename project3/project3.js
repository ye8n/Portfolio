// swiper
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: "auto",
//   centeredSlides: true,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });


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


// marq2
const marqueeContainer = document.querySelector('.marquee-s-container');
    const totalWidth = Array.from(marqueeContainer.children).reduce((acc, item) => acc + item.offsetWidth, 0);

    // 애니메이션 설정: marquee-s-container만 왼쪽으로 이동
    gsap.fromTo(
      marqueeContainer, 
      {
        x: '100%'  // 시작 위치 (화면 오른쪽 끝)
      }, 
      {
        x: `-${totalWidth}px`,  // 끝 위치 (전체 텍스트 길이만큼 왼쪽으로 이동)
        duration: 10,  // 애니메이션 시간 (10초)
        repeat: -1,  // 무한 반복
        ease: "linear",  // 일정한 속도로 애니메이션
      }
    );