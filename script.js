document?.addEventListener('DOMContentLoaded', function () {
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

document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.nav__list-linkk.info');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращаем стандартное действие ссылки

            const parentItem = this.parentElement;
            const submenu = parentItem.querySelector('.nav__list-info');

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
});


var myForm = document.getElementById("myForm");

myForm?.addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    var formData = new FormData(myForm);

    fetch('main.php', {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Ошибка ' + response.status);
        }
        return response.text();
    })
    .then(function(data) {
        alert('Данные успешно отправлены');
        closeModal(); // Закрываем модальное окно после успешной отправки
    })
    .catch(function(error) {
        console.error('Произошла ошибка:', error);
        alert('Произошла ошибка при отправке данных');
    });
});