const servisesSlider = new Swiper('.swiper-servises', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 3,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    navigation: {
        nextEl: '.servises-btn-next',
        prevEl: '.servises-btn-prev',
    },
}
);