document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 3, // Показывать 3 слайда одновременно
        spaceBetween: 10, // Расстояние между слайдами
        breakpoints: {
            // Настройки для разных размеров экранов
            320: {
                slidesPerView: 1.2,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.nav__burger');
    const menu = document.querySelector('.nav__menu');

    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    });
});
