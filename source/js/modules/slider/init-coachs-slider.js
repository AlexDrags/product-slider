import Swiper from 'swiper';
import {
  Navigation, Pagination
} from 'swiper';
import '../../vendor/swiper';


const slider = new Swiper('.products__swiper', {
  modules: [Navigation, Pagination],

  direction: 'horizontal',
  // slidesPerView: 1,
  spaceBetween: 0,
  // loopedSlides: 8,
  autoHeight: true,


  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  loop: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  navigation: {
    nextEl: '.products__swiper-button-next',
    prevEl: '.products__swiper-button-prev',
  },

});


export default slider;
