// 1. main home - 텍스트 타이핑
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};
TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 160 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
  }

  setTimeout(function () {
      that.tick();
  }, delta);
};
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
  }

// 2. swiper
document.addEventListener("DOMContentLoaded", () => {
  const cardActionsControllers = document.querySelectorAll(
    ".card-actions-controller"
  );
  
  cardActionsControllers.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const cardActionsContent = document.getElementById(targetId);
  
      if (cardActionsContent) {
        const isVisible = cardActionsContent.getAttribute("data-visible");
  
        if (isVisible === "false") {
          cardActionsContent.setAttribute("data-visible", "true");
          cardActionsContent.setAttribute("aria-hidden", "false");
          btn.setAttribute("aria-expanded", "true");
        } else {
          cardActionsContent.setAttribute("data-visible", "false");
          cardActionsContent.setAttribute("aria-hidden", "true");
          btn.setAttribute("aria-expanded", "false");
        }
      }
    });
  });
  
  function handleClickOutside(event) {
    cardActionsControllers.forEach((btn) => {
      const targetId = btn.getAttribute("data-target");
      const cardActionsContent = document.getElementById(targetId);
  
      if (cardActionsContent && cardActionsContent.getAttribute("data-visible") === "true") {
        if (!cardActionsContent.contains(event.target) && event.target !== btn) {
          cardActionsContent.setAttribute("data-visible", "false");
          cardActionsContent.setAttribute("aria-hidden", "true");
          btn.setAttribute("aria-expanded", "false");
        }
      }
    });
  }
  
  document.addEventListener("click", handleClickOutside);
  
  cardActionsControllers.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
  
  const likeBtns = document.querySelectorAll(".card-like");
  
  likeBtns.forEach((likeBtn) => {
    likeBtn.addEventListener("click", () => {
      if (likeBtn.classList.contains("active")) {
        likeBtn.classList.remove("active");
      } else {
        likeBtn.classList.add("active");
      }
    });
  });
  
// Swiper
  
  var swiper = new Swiper(".swiper", {
    grabCursor: true,
    speed: 400,
    mousewheel: {
      invert: false,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      900: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
});

// 3. 마우스이벤트 

document.addEventListener("DOMContentLoaded", () => {
  gsap.set(".ball", { xPercent: -50, yPercent: -50 });

  const ball = document.querySelector(".ball");
  if (!ball) {
    console.error("Cannot find .ball element.");
    return;
  }

  let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }; // 화면 중앙 초기화
  let mouse = { x: pos.x, y: pos.y };
  let speed = 0.1;

  const xSet = gsap.quickSetter(ball, "x", "px");
  const ySet = gsap.quickSetter(ball, "y", "px");

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  gsap.ticker.add(() => {
    let dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
  });

  gsap.set(ball, { scale: 0 });

  const projectWrappers = document.querySelectorAll(".project_wrapper"); // 수정된 부분
  if (!projectWrappers.length) {
    console.error("Cannot find any .project_wrapper element.");
    return;
  }

  // 각 .project_wrapper에 대해 이벤트 리스너 추가
  projectWrappers.forEach((projectWrapper) => {
    projectWrapper.addEventListener("mouseenter", () => {
      gsap.to(ball, { scale: 1, duration: 0.3 });
    });

    projectWrapper.addEventListener("mousedown", () => {
      gsap.to(ball, { scale: 0.7, duration: 0.3 });
    });

    projectWrapper.addEventListener("mouseup", () => {
      gsap.to(ball, { scale: 1, duration: 0.3 });
    });

    projectWrapper.addEventListener("mouseleave", () => {
      gsap.to(ball, { scale: 0, duration: 0.3 });
    });
  });
});
