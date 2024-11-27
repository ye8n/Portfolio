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

/* 
// PC 메뉴에서 마우스 올리면 서브 메뉴 보이기/숨기기
document.querySelectorAll('.menu-item').forEach(menuItem => {
  menuItem.addEventListener('mouseenter', () => {
      // 서브 메뉴를 보여주기
      const subMenu = menuItem.querySelector('.sub-global-navigation-bar');
      if (subMenu) {
          subMenu.style.display = 'block';
      } 
  });
  // 서브 메뉴 항목 클릭 시 해당 메뉴가 클릭된 상태 유지
  const subMenu = menuItem.querySelector('.sub-global-navigation-bar');
  if (subMenu) {
      subMenu.addEventListener('mouseenter', () => {
          subMenu.style.display = 'block'; // 마우스를 서브 메뉴에 올렸을 때 보이게 유지
      });
      // subMenu.addEventListener('mouseleave', () => {
      //     subMenu.style.display = 'none'; // 마우스를 서브 메뉴에서 내리면 사라지게
      // });
  }
});
 */


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

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header-container');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY) {
          // 스크롤 아래로 내려가면
          header.classList.add('scrolled');
      } else {
          // 스크롤 위로 올라가면
          header.classList.remove('scrolled');
      }
      lastScrollY = window.scrollY;
  });
});



const track = document.querySelector('.carousel-track');
let position = 0;
let animationId; // 애니메이션 ID 저장 변수

// 이미지 스크롤 함수
function scrollImages() {
  position -= 1; // 왼쪽으로 이동
  if (Math.abs(position) >= track.offsetWidth / 2) {
    position = 0; // 무한 스크롤 효과
  }
  track.style.transform = `translateX(${position}px)`;
  animationId = requestAnimationFrame(scrollImages); // 애니메이션 ID 저장
}

// 마우스 올리면 애니메이션 멈춤
track.addEventListener('mouseenter', () => {
  cancelAnimationFrame(animationId); // 현재 진행 중인 애니메이션 중단
});

// 마우스 떼면 애니메이션 다시 시작
track.addEventListener('mouseleave', () => {
  scrollImages(); // 애니메이션 다시 시작
});

// 초기 애니메이션 실행
scrollImages();