// ABOUT SECTION SCRIPT
// section About variables
const cardsArray = [
  {
    dateString: 'Пятница, 2 июля 2021г',
    titleString: '«LEAVING THE DIGITAL» — ИЛИ КАК СОЕДИНИТЬ ЦИФРОВОЕ, ТЕХНОЛОГИЧЕСКОЕ И БИОЛОГ…',
    description: 'Преподаватели центра Art & Science Университета ИТМО провели открытый воркшоп, посвященный созданию произведений, объединяющих в себе биологическую и синтетическую среды. Серия занятий приурочена к приемной кампании в магистратуру центра.',
  },
  {
    dateString: 'Пятница, 2 июля 2021г',
    titleString: 'В ИТМО ЗАПУСКАЕТСЯ ПЕРВАЯ ПРОЕТНАЯ МАГИСТРАТУРА — ДЛЯ АБИТУРИЕНТОВ ФАКУЛЬТЕТА П…',
    description: 'Особенность нового формата магистратуры в том, что студенты смогут составлять программу своего обучения, выбирать только те курсы, которые им интересны, а главное — работать над технологически сложным проектом под руководством менторов из топовых IT-компаний.',
  },
  {
    dateString: 'Пятница, 2 июля 2021г',
    titleString: 'КОГДА НЕ ЗАНИМАЕШЬСЯ СВОИМ ОБРАЗОВАНИЕМ, МОЖНО ПРИЙТИ К СОТСТОЯНИ…',
    description: 'Владислав Танков поступил в ИТМО будучи специалистом в компании JetBrains. На одном из хакатонов в рамках программы с JetBrains он сделал плагин для проверки грамотности текстов в среде разработки IntelliJ IDEA. После окончания магистратуры Владислав возглавил команду разработки.',
  },
  {
    dateString: 'Четверг, 1 июля 2021г',
    titleString: 'СТУДЕНТЫ ИТМО И ВЫПУСКНИКИ ЛЭТИ РАЗРАБОТАЛИ МОДУЛЬ ДЛЯ БЫ…',
    description: 'Интеллектуальный модуль для станций зарядки позволяет заряжать накопители в электрокарах и электросамокатах быстрее, чем при питании от сети. Программное обеспечение модуля обеспечивает защиту в случае аварийных ситуаций и повышает эффективность всего зарядного устройства.',
  },
  {
    dateString: 'Четверг, 1 июля 2021г',
    titleString: 'КАКИЕ СУЩЕСТВУЮТ ВАКЦИНЫ, КАК ИХ ИСПЫТЫВАЮТ, И ПО КАКИМ ПРИНЦЫПАМ ИХ СЛЕДУ…',
    description: 'Вакцинация от коронавируса стала одной из главных тем. Весь мир следит за количеством привитых. Прививочная кампания дает результат — снижается смертность, количество госпитализаций. Но вокруг вакцинации остается много мифов, которые вызывают у скептиков споры.',
  },
  {
    dateString: 'Среда, 30 июня 2021г',
    titleString: 'УНИВЕРСИТЕТ ИТМО ЗАПУСКАЕТ НОВУЮ КОРПОРАТИВНУЮ СПЕЦИАЛИЗАЦИЮ В МАГИСТРА…',
    description: 'Партнером нового направления станет Napoleon IT. Сотрудники компании и преподаватели ИТМО будут готовить магистров, которые смогут работать в проектах, связанных с распознаванием лиц, технологиями deepfake, созданием приложений для распознавания предметов.',
  },
  {
    dateString: 'Среда, 30 июня 2021г',
    titleString: 'СТУДЕНТКА И СОТРУДНИЦА ИТМО АННА ВОЛОШИНА ПОЛУЧИЛА БРОНЗОВОГО СФИН...',
    description: 'В Петропавловской крепости состоялась торжественная церемония вручения наград лучшим выпускникам Санкт-Петербурга. Среди тех, кто получил памятную статуэтку, была выпускница факультета технологического менеджмента и инноваций Анна Волошина. ',
  },
];

const cardTemplate = document.querySelector('#about-card-template').content;
const containerElement = document.querySelector('.about__card-container');
const aboutNavButtons = Array.from(document.querySelectorAll('.about__button'));

//about render functions
const addCard = (args) => {
  const cardElement = cardTemplate.querySelector('.about__card').cloneNode(true);
  cardElement.querySelector('.about__date').textContent = args.dateString;
  cardElement.querySelector('.about__card-title').textContent = args.titleString;
  cardElement.querySelector('.about__description').textContent = args.description;
  return cardElement;
};

const renderCards = (arg) => {
  arg.forEach((el) => {
    containerElement.prepend(addCard(el));
  });
};

// swiper section
const aboutSwiper = new Swiper(".about__swiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  //margin works better
  spaceBetween: 0,
  speed: 800,
  watchOverflow: false,
  observer: true,
  observeParents: true,
  watchSlidesProgress: true,

  //to hide slides outside ow view:
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
    1280: {
      initialSlide: 1,
      centeredSlides: true,
      spaceBetween: 0
    }
  },
});

// listner for changing aboutSwiper object
const tabletMedia = window.matchMedia("screen and (min-width: 1280px)");

//hiding navigation by media queries
const handleTablet = (med) => {
  if (med.matches){
    aboutNavButtons.forEach(elem => {elem.classList.remove('about__button_hidden')});
  } else {
    aboutNavButtons.forEach(elem => {elem.classList.add('about__button_hidden')});
  }
}

tabletMedia.addListener(handleTablet);

//functions call
window.onload = () => {
  renderCards(cardsArray);
  handleTablet(tabletMedia);
};

//END OF ABOUT SECTION SCRIPT
