import Swiper from 'swiper/bundle';


const swiper = new Swiper('.swiper', {
    speed: 200,
    loop: true,
  
    pagination: {
      el: '.pagination',
      clickable: true,
    },

    slidesPerView: 1,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
      }
    },
  });
  