document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-links");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hide-menu");

    if (mobileMenu.classList.contains("hide-menu")) {
      menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
      menuBtn.innerHTML = '<i class="fa-solid fa-close"></i>';
    }
  });

  /* swipper js */

  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });


  var swiper = new Swiper(".testimonial-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30, 
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    
      1024: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },

  });


  const top = document.querySelector('.top');

  top.addEventListener('click', ()=>{
    window.scroll({
      left:0,
      top:0,
      behavior:'smooth'
    })
  })

});

