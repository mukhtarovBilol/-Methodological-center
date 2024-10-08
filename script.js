document.addEventListener('DOMContentLoaded', function () {
    // Проверяем, существует ли элемент с классом .mySwiper
    const swiperContainer = document.querySelector('.mySwiper');

    if (swiperContainer) {
        var swiper = new Swiper(swiperContainer, {
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
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.nav__burger');
    const menu = document.querySelector('.nav__menu');

    burger?.addEventListener('click', () => {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    function loadContent(url, elementId) {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка сети');
                }
                return response.text();
            })
            .then(data => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.innerHTML = data;

                    // Инициализация навигации после загрузки
                    initializeNav();
                }
            })
            .catch(error => console.error(`Ошибка загрузки ${elementId}:`, error));
    }

    function initializeNav() {
        const menuLinks = document.querySelectorAll('.nav__list-linkk.info');

        menuLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault(); // Предотвращаем стандартное действие ссылки

                const parentItem = this.parentElement;
                
                // Закрываем все другие подменю
                document.querySelectorAll('.nav__list-item.active').forEach(item => {
                    if (item !== parentItem) {
                        item.classList.remove('active');
                    }
                });

                // Переключаем текущее подменю
                parentItem.classList.toggle('active');
            });
        });
    }

    // Загружаем навигацию без проверки наличия элемента
    loadContent('./CommonNav.html', 'navbar')
        .catch(error => console.error('Ошибка при загрузке навигации:', error));
});