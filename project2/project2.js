$("#menuToggle").click(function() {
  var nav = $(".global-navigation-bar");
  if (nav.css('max-height') === '0px') {
      nav.css('max-height', '1200px'); // 충분히 큰 값을 설정하여 슬라이드 확장
  } else {
      nav.css('max-height', '0'); // 슬라이드 닫기
  }
});

  // menu-item 클릭 시 하위 GNB 제어
  $(".menu-item > a").click(function (e) {
    e.preventDefault(); // 기본 링크 동작 방지
    var subMenu = $(this).next(".sub-global-navigation-bar");

    // 다른 하위 메뉴 닫기
    $(".sub-global-navigation-bar").not(subMenu).css("max-height", "0");

    // 현재 클릭한 하위 메뉴 토글
    if (subMenu.css("max-height") === "0px" || !subMenu.css("max-height")) {
        subMenu.css("max-height", subMenu.prop("scrollHeight") + "px");
    } else {
        subMenu.css("max-height", "0");
    }
});


const mainSwiper = new Swiper("#main-slide", {
  speed: 900,
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

$('a[href="#"]').on('click', function(e) {
  e.preventDefault()
});

const header = document.querySelector('.header-container');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    lastScrollY = window.scrollY;
});


// AOS 초기화 코드
AOS.init({
    offset: 100,
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });
