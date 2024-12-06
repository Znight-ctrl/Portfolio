$(document).ready(function () {
    $(window).scroll(function () {
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
    });
  
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      $("html").css("scrollBehavior", "smooth");
    });
  
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    var typed = new Typed(".typing", {
      strings: ["developer", "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
  });
  
  const circles = document.querySelectorAll(".circle");
  circles.forEach((elem) => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor((dots * marked) / 100);
    var rotate = 360 / dots;
    var points = "";
    for (let i = 0; i < dots; i++) {
      points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
  });
  
  let observer = new IntersectionObserver((entries, observer) => {
    setTimeout(() => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const circles = document.querySelectorAll(".circle");
          circles.forEach((elem) => {
            var dots = elem.getAttribute("data-dots");
            var marked = elem.getAttribute("data-percent");
            var percent = Math.floor((dots * marked) / 100);
            var rotate = 360 / dots;
            var points = "";
            for (let i = 0; i < dots; i++) {
              points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
            }
            elem.innerHTML = points;
            const pointsMarked = elem.querySelectorAll(".points");
            for (let i = 0; i < percent; i++) {
              pointsMarked[i].classList.add("marked");
            }
          });
        }
      });
    }, 3500);
  });
  
  let section = document.querySelector("#skills");
  
  observer.observe(section);
  