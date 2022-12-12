const coachesSection = document.querySelector('.coaches');

const createSwiper = (selector, options = {}) =>
  new window.Swiper(selector, options);

export const initializeSwipers = () => {
  if (coachesSection) {
    createSwiper('.coaches__swiper', {
      loopFillGroupWithBlank: true,
      slidesPerGroup: 1,
      autoHeight: true,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          initialSlide: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          initialSlide: 2,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
          initialSlide: 0,
        },
      },
      navigation: {
        nextEl: '.coaches__toggle--next',
        prevEl: '.coaches__toggle--previous',
        disabledClass: '.coaches__toggle--disabled',
      },
    });
  }
};
