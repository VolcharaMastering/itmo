const cardsSwiper = new Swiper(".about", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 0,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const tabletMedia = window.matchMedia("(min-width: 481px)");
const handleTablet = (med) => {
  if (med.matches){
    console.log('RAZ')
  } else {
    console.log('DWA')
  }
}
handleTablet(tabletMedia);
tabletMedia.addListener(handleTablet);
