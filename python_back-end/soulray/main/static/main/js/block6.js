document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 3, // начальное количество отображаемых слайдов
        centeredSlides: false, // если вы хотите центрировать активный слайд
        spaceBetween: 10, // расстояние между слайдами
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: false, // зависит от того, хотите ли вы зацикливать слайды
    });
});
