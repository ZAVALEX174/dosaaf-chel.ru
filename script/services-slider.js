

    // navigation: {
    //     nextEl: '.servises-btn-next',
    //     prevEl: '.servises-btn-prev',


const servisesSlider = new Swiper('.swiper-servises', {
        loop: true,
    slidesPerView: 4,
    spaceBetween: 23,
    // Responsive breakpoints
    breakpoints: {

        // when window width is >= 480px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 23,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 23,
        },
        // when window width is >= 1680px
        1680: {
            slidesPerView: 4,
            spaceBetween: 23,
        },
    },
    // effect: "coverflow",
    // coverflowEffect: {
    //     slideShadows : true,
    // },

    navigation: {
            nextEl: '.servises-btn-next',
            prevEl: '.servises-btn-prev',
        },
    }
);