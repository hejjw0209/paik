const visualSlider = new Swiper(".visual-slider", {
    loop: true, // 반복
    autoplay: true,
    speed: 1000, // 기본값은 300ms

    spaceBetween: 0, // 사이 간격(px)
    centeredSlides: true, // 첫번째 슬라이드를 가운데로

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",

        clickable: true, // 클릭가능
    },

    // Navigation arrows
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
    },
});
const menuSlider = new Swiper(".menu-slider", {
    loop: true, // 반복
    autoplay: true,
    speed: 1000, // 기본값은 300ms

    spaceBetween: 20, // 사이 간격(px)
    centeredSlides: true, // 첫번째 슬라이드를 가운데로

    // If we need pagination
    pagination: {
        el: ".menu-slider-wrap .swiper-pagination",

        clickable: true, // 클릭가능
    },
});
const snsSlider = new Swiper(".sns-slider", {
    loop: true, // 반복
    autoplay: true,
    speed: 1000, // 기본값은 300ms

    spaceBetween: 20, // 사이 간격(px)
    centeredSlides: true, // 첫번째 슬라이드를 가운데로
    slidesPerView: 1.5,

    // If we need pagination
    pagination: {
        el: ".sns-slider-wrap .swiper-pagination",

        clickable: true, // 클릭가능
    },

    // Navigation arrows
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
    },

    // Responsive breakpoints
    breakpoints: {
        1280: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});
