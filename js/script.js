$(function () {
    // 대상을 변수에 저장
    const $header = $("header");
    const $subMenu = $(".submenu");
    const $menu = $(".gnb > li");
    const duration = 400;
    console.log($menu);

    // 메뉴 영역에 마우스가 들어오면(event: mouseenter )
    $menu.on("mouseenter", function () {
        $subMenu.stop().slideDown(duration); // 모든 서브메뉴 떨어뜨리기

        // 메뉴 활성화 표시: on클래스 부여
        $(this).addClass("on");

        $header.addClass("active");
    });

    // 메뉴 영역에 마우스가 나가면
    $menu.on("mouseleave", function () {
        // submenu를 찾아서 슬라이드 업
        $subMenu.stop().slideUp(duration);
        $menu.removeClass("on");
        $header.removeClass("active");
    });

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
        slidesPerView: 1,

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
            500: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
        },
        // Responsive breakpoints
        breakpoints: {
            700: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        },
        // Responsive breakpoints
        breakpoints: {
            900: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
});
