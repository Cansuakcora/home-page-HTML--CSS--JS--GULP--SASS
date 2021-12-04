var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    slidesPerGroup: 1,
    centeredSlides: true,
    spaceBetween: 10,
    grabCursor: true,
    // init: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is <= 1400px
        1600: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        // when window width is <= 1200px
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        // when window width is <= 999px
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

        // when window width is <= 767px
        767: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        600: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});