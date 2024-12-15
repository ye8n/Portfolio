const swiper = new Swiper(".swiper-slider", {
  // Optional parameters
  centeredSlides: true,
  slidesPerView: 1,
  grabCursor: false,
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
    $("body").css("overflow", "hidden"); // 메뉴가 열리면 스크롤 비활성화 // 추가함
  });

  // 메뉴 닫기 버튼
  $(".toggle-close").click(function () {
    $(".slide-menu").slideUp(800); // 500ms 동안 슬라이드 업
    $("body").css("overflow", "auto"); // 메뉴가 닫히면 스크롤 활성화
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
// GSAP 및 ScrollTrigger 등록
gsap.registerPlugin(ScrollTrigger);

gsap.set(".intro-bottom h1", { x: "18vw" }); 

gsap.to(".intro-bottom h1", {
  x: "-35vw", // 텍스트를 화면 왼쪽으로 이동 (조정 가능)
  ease: "none", // 일정한 속도로 이동
  scrollTrigger: {
    trigger: ".intro-bottom", // 트리거할 요소
    start: "top 100%", // 화면 상단과 요소 상단이 만날 때 시작
    end: "bottom top", // 100vh 스크롤 종료 지점
    scrub: 1, // 스크롤 진행에 따라 부드럽게 애니메이션
  },
});

// 


const lines = [
  { selector: '.line1 .text', duration: 8 },
  { selector: '.line2 .text', duration: 10 },
  { selector: '.line3 .text', duration: 6 }
];

// 반복되는 부분을 함수로 처리
lines.forEach(line => {
  const textElement = document.querySelector(line.selector);
  const textWidth = textElement.offsetWidth;

  gsap.fromTo(textElement,
    { x: -textWidth / 2 },
    {
      x: 0,
      duration: line.duration,
      repeat: -1,
      ease: 'linear'
    }
  );
});

// 
gsap.to(".event-icon", {
  rotation: 360, // 2바퀴 회전 (720도)
  scrollTrigger: {
    trigger: ".event-top", // 스크롤 트리거
    start: "top 60%", // 화면의 50%부터 시작
    end: "bottom top", // 스크롤이 끝날 때 (스크롤 끝에서 2바퀴 회전)
    scrub: 5, // 스크롤에 따라 애니메이션 진행, 숫자를 키우면 더 부드럽고 느리게 회전
    ease: "linear", // 일정한 속도로 회전
  }
});

// 

const marquee = gsap.to(".marquee-s-container", {
  x: "-100%", // 오른쪽에서 왼쪽으로 이동
  duration: 15, // 15초 동안 이동
  repeat: -1, // 무한 반복
  ease: "linear", // 일정한 속도로 이동
});

// 마우스를 올리면 애니메이션 일시정지
document.querySelector('.marquee-s').addEventListener('mouseenter', () => {
  marquee.pause(); // 애니메이션 일시정지
});

// 마우스를 떼면 애니메이션 다시 시작
document.querySelector('.marquee-s').addEventListener('mouseleave', () => {
  marquee.resume(); // 애니메이션 재개
});


