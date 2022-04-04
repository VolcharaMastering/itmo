// initializing swiper for section "about"
const aboutSwiper = new Swiper(".about__swiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 0,
  speed: 800,
  watchOverflow: false,
  observer: true,
  observeParents: true,
  watchSlidesProgress: true,

  watchSlidesVisibility: true,
  slideClass: 'about__card',
  slideVisibleClass: 'about__card_visable',

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    481: {
      centeredSlides: false,
    },
    1024: {
      initialSlide: 1,
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
