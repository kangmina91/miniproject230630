$(function () {




    // 스와이퍼 메인 슬라이드
    const MainSlide = new Swiper('.main_slide', {
        loop: true,
        loopAdditionalSlides: 3,
        slidesPerView: 'auto',
        speed: 2000,
        // autoplay: {
        //     delay: 6000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });

    // 헤더 텍스트 스와이퍼
    const ContentSlide = new Swiper('.txt_slide', {
        loop: true,
        speed: 15000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });

    const ItemSlide = new Swiper('.itm_slide', {
        loop: true,
        loopAdditionalSlides: 2,
        slidesPerView: 'auto',
        speed: 1000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        },
    });




    // 게시판 탭
    $('.tab_link li').on('click', function (event) {
        event.preventDefault();

        let idx = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');

        $('.tab_content .con').eq(idx).addClass('on').siblings().removeClass('on');

        console.log(event, event.target, event.currentTarget, $(this), $(this).index());





    });


    // 서브 페이지 탭
    $('.tab_link li').on('click', function (event) {
        event.preventDefault();

        let idx = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');

        $('.content .con').eq(idx).addClass('on').siblings().removeClass('on');

        console.log(event, event.target, event.currentTarget, $(this), $(this).index());





    });

    // 스크린샷 좋아요
    $('span .like').on('click', function (e) {
        e.preventDefault();

        $(this).toggleClass('on');

    })




});
