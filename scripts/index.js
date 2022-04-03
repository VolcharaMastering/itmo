// initializing swiper for section "about"
const aboutSwiper = new Swiper(".about", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 0,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: "auto",
      spaceBetween: 0
    },
    481: {
      slidesPerView: "auto",
      centeredSlides: false,
      spaceBetween: 0
    },
    1024: {
      initialSlide: 1,
      slidesPerView: "auto",
      spaceBetween: 0
    }
  },
});

const aboutNavButtons = Array.from(document.querySelectorAll('.about__button'));

// listner for changing aboutSwiper object
const tabletMedia = window.matchMedia("screen and (min-width: 1024px)");

const handleTablet = (med) => {
  if (med.matches){
    aboutNavButtons.forEach(elem => {elem.classList.remove('about__button_hidden')});
  } else {
    aboutNavButtons.forEach(elem => {elem.classList.add('about__button_hidden')});
  }
}
handleTablet(tabletMedia);
tabletMedia.addListener(handleTablet);
