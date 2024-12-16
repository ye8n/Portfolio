const swiper = new Swiper(".swiper-slider", {
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  breakpoints: {
    640: {
      slidesPerView: 1.25,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
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

// gsap.set(".intro-bottom h1", { x: "8%" }); 
gsap.to(".intro-bottom h1", {
  x: "-35%", 
  ease: "none", 
  scrollTrigger: {
    trigger: ".intro-bottom",
    start: "top 100%",
    end: "bottom top", 
    scrub: 1,
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


// 

gsap.from(".product-main-slogan", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".product-main-slogan",
    start: "top 90%", // 트리거 시작 지점
    once: true, // 스크롤 처음에만 애니메이션 실행
  },
});

gsap.from(".product-main-text", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".product-main-text",
    start: "top 85%", // 트리거 시작 지점
    once: true, // 스크롤 처음에만 애니메이션 실행
  },
});
gsap.from(".event-slogan", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".event-slogan",
    start: "top 90%", // 트리거 시작 지점
    once: true, // 스크롤 처음에만 애니메이션 실행
  },
});

gsap.from(".event-text", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".event-text",
    start: "top 85%", // 트리거 시작 지점
    once: true, // 스크롤 처음에만 애니메이션 실행
  },
});
// 

window.onload = function() {
  // 모든 이미지 요소 선택
  const images = document.querySelectorAll('.intro-image-wrapper img');

  // GSAP 애니메이션 적용
  images.forEach((image, index) => {
    gsap.fromTo(image, 
      {
        opacity: 0,        // 초기 상태에서 투명도 0
        scale: 3        // 초기 상태에서 크기 1.15
      },
      {
        opacity: 1,        // 최종 상태에서 투명도 1
        scale: 1,          // 최종 상태에서 크기 1
        duration: 1,       // 애니메이션 지속 시간 1초
        delay: index * 0.3, // 각 이미지마다 0.3초씩 지연
        ease: "back.inOut(1.7)" // 시작과 끝에서 과도하게 움직이는 효과입니다. back.out()과 달리 두 방향에서 모두 과도한 움직임이 있습니다.
      }
    );
  });
};

// 
let menuOpen = false; // 메뉴 열림 상태 추적 변수

// 메뉴 열기 버튼
$(".global-menu-toggle").click(function () {
  if (!menuOpen) {
    $(".slide-menu").slideDown(800); // 메뉴 열기
    $("body").css("overflow", "hidden"); // 메뉴가 열리면 스크롤 비활성화
    menuOpen = true;

    // 메뉴 열릴 때 각 메뉴 항목에 애니메이션 적용
    $(".menu-item-wrapper").each(function (index) {
      gsap.to($(this).find(".menu-border"), {
        duration: 0.3,  // 보더 애니메이션 속도를 더 빠르게 설정
        width: "100%",  // 보더가 왼쪽에서 오른쪽으로 차례대로 등장
        delay: index * 0.1, // 각 항목마다 0.1초씩 차이 두고 애니메이션
        ease: "power2.out" // ease로 부드러운 효과 추가
      });
    });
  }
});

// 메뉴 닫기 버튼
$(".toggle-close").click(function () {
  if (menuOpen) {
    // 보더 애니메이션 먼저 실행
    $(".menu-item-wrapper").each(function (index) {
      gsap.to($(this).find(".menu-border"), {
        duration: 0.08,  // 보더 애니메이션 속도를 더 빠르게 설정
        width: "0%",  // 보더가 오른쪽에서 왼쪽으로 사라짐
        delay: ($(".menu-item-wrapper").length - index - 1) * 0.1, // 역순으로 애니메이션
        ease: "power2.in" // ease로 부드럽게
      });
    });

    // 메뉴 닫기 애니메이션
    $(".slide-menu").slideUp(800, function () {
      $("body").css("overflow", "auto"); // 메뉴가 닫히면 스크롤 활성화
      menuOpen = false;
    });
  }
});