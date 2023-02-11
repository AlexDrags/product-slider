import Swiper from 'swiper';
import {
  Navigation, Pagination, Scrollbar
} from 'swiper';
import '../../vendor/swiper';

const cardSlider = new Swiper('.card__swiper', {
  modules: [Navigation, Pagination, Scrollbar],
  direction: 'horizontal',
  slidesPerView: 1,
  autoHeight: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

export default cardSlider;
