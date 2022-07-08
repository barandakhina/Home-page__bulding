//Slider

new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
          return `<button class="btn btn_round ${className}" aria-label="Переключение слайда"></button>`
      }
  },
});

//burger

let burger = document.querySelector('.header__burger');
let menuClose = document.querySelector('.header__burger_close');
let menu = document.querySelector('.header__list_wrapper');

burger.addEventListener('click', function() {
  menu.classList.add('burger-active');
});

menuClose.addEventListener('click', function () {
  menu.classList.remove('burger-active');
});

//tabs

let tabsBtn = document.querySelectorAll('.how-work__button-link');
let tabsItem = document.querySelectorAll('.how-work__content');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) {
      btn.classList.remove('how-work__button-link--active');
    });
    e.currentTarget.classList.add('how-work__button-link--active');

    tabsItem.forEach(function(element){
      element.classList.remove('how-work__content--active');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('how-work__content--active');

  })
})


//accordion

$(".accordion").accordion({
  heightStyle: "content",
  active: 5,
  collapsible: true

  });

//search

let lyp = document.querySelector('.header__button');
let pole = document.querySelector('.header__search-icon');
let exit = document.querySelector('.exit');

lyp.addEventListener('click', function(){
  pole.classList.toggle('header__search-icon-active');
});

exit.addEventListener('click', function(){
  pole.classList.toggle('header__search-icon-active');
});

