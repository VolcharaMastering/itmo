const burgerButton = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const logo = document.querySelector('.header__logo');

const openMenu = () => {
  if(!burgerButton.classList.contains('active-burger')){
  burgerButton.classList.add('active-burger');
  menu.classList.add('active-burger');
  logo.classList.add('active-burger');
  }else{
    burgerButton.classList.remove('active-burger');
    menu.classList.remove('active-burger');
    logo.classList.remove('active-burger');
  }
};

burgerButton.addEventListener('click', openMenu);
