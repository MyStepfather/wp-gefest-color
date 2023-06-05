var mainSlider = new Swiper('.swiper-container.main-slider', {
    // параметры слайдера
    autoplay: {
        delay: 2500,
        speed: 100,
        disableOnInteraction: false
    },
    loop: false,
    spaceBetween: 200,
    navigation: {
        nextEl: '.main-slider__button-next',
        prevEl: '.main-slider__button-prev'
    },
});

var secondSlider = new Swiper('.swiper-container.second-slider', {
    loop: false,
    speed: 500,
    spaceBetween: 20,
    controller: true,
    slidesPerView: "auto",
    pagination: {
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-prev'
    },
});

var managerSlider = new Swiper('.swiper-container.managers-slider', {
    loop: false,
    speed: 500,
    spaceBetween: 20,
    controller: true,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination.managers-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            centeredSlides: true,
            centeredSlidesBounds: true,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 3
        }
    },
})

/* var servicesSlider = new Swiper('.swiper-container.services-container', {
    loop: false,
    speed: 500,
    spaceBetween: 20,
    controller: true,
    slidesPerView: "auto",
    navigation: {
        nextEl: '.services__button-next',
        prevEl: '.services__button-prev'
    },

}) */

var reviewsSlider = new Swiper('.swiper-container.reviews__slider', {
    loop: false,
    speed: 500,
    spaceBetween: 200,
    centeredSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    navigation: {
        nextEl: '.reviews__button-next',
        prevEl: '.reviews__button-prev'
    },
})

var topicsSlider = new Swiper('.swiper-container.topics__container', {
    loop: false,
    speed: 500,
    spaceBetween: 40,
    centeredSlides: false,
    // slidesPerView: 1,
    breakpoints: {
        0: {
            slidesPerView: 'auto',
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 3
        }
    },
    navigation: {
        nextEl: '.topics__button-next',
        prevEl: '.topics__button-prev'
    },
})

var clientsSlider = new Swiper('.swiper-container.clients-container', {
    autoplay: true,
    loop: true,
    speed: 500,
    spaceBetween: 20,
    // centeredSlides: false,
    navigation: {
        nextEl: '.clients__button-next',
        prevEl: '.clients__button-prev'
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        }
    },
})

/* var videoSlider = new Swiper('.swiper-container.video__container', {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
        nextEl: '.video__button-next',
        prevEl: '.video__button-prev'
    },
    pagination: {
        el: '.swiper-pagination.video__pagination',
        clickable: true,
    },
})
 */
/* videoSlider.on('slideChange', function () {
    // получить текущий активный слайд
    var activeSlide = ;
    // вызвать функцию клика для активного слайда
    activeSlide.click();
  }); */

/* var galleryThumbs = new Swiper('.swiper-container.gallery-thumbs__container', {
    spaceBetween: 20,
    slidesPerView: 4,
    centeredSlides: false,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slidesPerGroup: 4,
    navigation: {
        nextEl: '.gallery-thumbs__button-next',
        prevEl: '.gallery-thumbs__button-prev'
    },

}) */

var gallerySlider = new Swiper('.swiper-container.gallery__container', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
        nextEl: '.gallery__button-next',
        prevEl: '.gallery__button-prev'
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    },
/*     thumbs: {
        swiper: galleryThumbs
    } */
})

