$("#menuToggle").click(function() {
  var nav = $(".global-navigation-bar");
  if (nav.css('max-height') === '0px') {
      nav.css('max-height', '900px'); // 충분히 큰 값을 설정하여 슬라이드 확장
  } else {
      nav.css('max-height', '0'); // 슬라이드 닫기
  }
});

// PC 메뉴에서 마우스 올리면 서브 메뉴 보이기/숨기기
document.querySelectorAll('.menu-item').forEach(menuItem => {
    menuItem.addEventListener('mouseenter', () => {
        // 서브 메뉴를 보여주기
        const subMenu = menuItem.querySelector('.sub-global-navigation-bar');
        if (subMenu) {
            subMenu.style.display = 'block';
        } 
    });
    menuItem.addEventListener('mouseleave', () => {
        // 서브 메뉴를 숨기기
        const subMenu = menuItem.querySelector('.sub-global-navigation-bar');
        if (subMenu) {
            subMenu.style.display = 'none';
        }
    });
    // 서브 메뉴 항목 클릭 시 해당 메뉴가 클릭된 상태 유지
    const subMenu = menuItem.querySelector('.sub-global-navigation-bar');
    if (subMenu) {
        subMenu.addEventListener('mouseenter', () => {
            subMenu.style.display = 'block'; // 마우스를 서브 메뉴에 올렸을 때 보이게 유지
        });
        subMenu.addEventListener('mouseleave', () => {
            subMenu.style.display = 'none'; // 마우스를 서브 메뉴에서 내리면 사라지게
        });
    }
});

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

$('a[href="#"]').on('click', function(e) {
  e.preventDefault()
});