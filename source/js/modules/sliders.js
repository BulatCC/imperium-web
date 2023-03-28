import Swiper, { Navigation, Pagination } from 'swiper';

export const initSliders = () => {
    const singleSlider = document.querySelector('[data-single-slide-slider]');
    new Swiper(singleSlider, {
        modules: [Navigation, Pagination],
        pagination: {
            el: '[data-single-slide-pagination]',
            type: 'fraction',
        },
        breakpoints: {
            768: {
                navigation: {
                    nextEl: '[data-single-slder-next]',
                    prevEl: '[data-single-slder-prev]',
                },
                pagination: {
                    type: 'fraction',
                },
            },
            320: {
                pagination: {
                    type: 'bullets',
                },
            },
        },
    });

    const popularSlider = document.querySelector('[data-popular-slider]');
    new Swiper(popularSlider, {
        modules: [Navigation, Pagination],
        slidesPerView: 1.5,
        navigation: {
            nextEl: '[data-popular-slider-next]',
            prevEl: '[data-popular-slider-prev]',
        },
        pagination: {
            el: '[data-popular-slider-pagination]',
            type: 'fraction',
        },
        spaceBetween: 32,
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            500: {
                slidesPerView: 2,
            },
        },
    });
};
