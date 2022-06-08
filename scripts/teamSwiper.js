const teamArray = [
    {
        image: 'images/team/bobtsov.png',
        name: 'Бобцов \nАлексей Алексеевич',
        post: 'Директор, профессор, ДТН'
    },
    {
        image: 'images/team/buchanovskiy.png',
        name: 'Буханоский \nАлександр Валерьевич',
        post: 'Директор, руководитель, ДТН'
    },  
    {
        image: 'images/team/muromtsev.png',
        name: 'Муромцев \nДмитрий Ильич',
        post: 'Руководитель, доцент, КТН'
    },
    {
        image: 'images/team/matveev.png',
        name: 'Матвеев \nЮрий Николаевич',
        post: 'Руководитель, профессор, ДТН'
    },
    {
        image: 'images/team/shalito.png',
        name: 'Шалыто \nАнатолий Абрамович',
        post: 'Профессор, ДТН'
    },
    {
        image: 'images/team/kolubin.png',
        name: 'Колюбин \nСергей Алексеевич',
        post: 'Начальник, профессор, ДТН'
    },
    {
        image: 'images/team/pirkin.png',
        name: 'Пыркин \nАнтон Александрович',
        post: 'Декан, профессор, ДТН'
    }
]

const teamTemplate = document.querySelector('#team-card-template')
       .content;

const teamContainer = document.querySelector('.team__card-container');
const teamNavButtons = Array.from(document.querySelectorAll('.team__button'));

const teamInfo = teamArray.map(function (item) {
    return {
        image: item.image,
        name: item.name,
        post: item.post
    };
});

function renderTeam() {
    teamInfo.forEach(renderCardTeam)
} 
         
function renderCardTeam( {image, name, post} ) {
    const teamElement = document.querySelector('.team__card')
        .cloneNode(true);
    teamElement.querySelector('.team__image').src = image;
    teamElement.querySelector('.team__name').textContent = name;
    teamElement.querySelector('.team__post').textContent = post;

    teamContainer.prepend(teamElement)
}

const teamSwiper = new Swiper('.team__swiper', {   
    centeredSlides: true,
    speed: 800,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideClass: 'team__card',
    slideVisibleClass: 'team__card_visible',
    slidesPerView: 'auto',
    spaceBetween: 8,
  
    breakpoints: {
      710: {
        spaceBetween: 30,
        centeredSlides: false,
        watchOverflow: false,
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 'auto',
        centeredSlides: true,
        initialSlide: 1
      }
    },
    
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

renderTeam();