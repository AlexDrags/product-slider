import coachSlider from './init-coachs-slider';
import reviewsSlider from './init-reviews-slider';
const swiperPrev = document.querySelector('.coachs__swiper-button-prev');
const swiperNext = document.querySelector('.coachs__swiper-button-next');
const reviewSwiperPrev = document.querySelector('.reviews__swiper-button-prev');
const reviewSwiperNext = document.querySelector('.reviews__swiper-button-next');

const handlerSlider = () => {


  swiperPrev.addEventListener('click', () => {
    coachSlider.slidePrev();
  });

  swiperNext.addEventListener('click', () => {
    coachSlider.slideNext();
  });

  swiperPrev.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      coachSlider.slidePrev();
    }
  });

  swiperNext.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      coachSlider.slideNext();
    }
  });

  reviewSwiperPrev.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      reviewsSlider.slidePrev();
    }
  });

  reviewSwiperNext.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      reviewsSlider.slideNext();
    }
  });
};

export default handlerSlider;
