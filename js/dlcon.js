$(function () {
    $('.main_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.controls i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPause');
    })

    $('.controls i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickPlay');
    })

    $('.tech_slider').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '250px'
    });
})