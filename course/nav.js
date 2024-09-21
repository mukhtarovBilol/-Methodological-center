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
                }
            })
            .catch(error => console.error(`Ошибка загрузки ${elementId}:`, error));
    }

    loadContent('../CommonNav.html', 'navbar')
        .then(() => {
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
        })
        .catch(error => console.error('Ошибка при загрузке навигации:', error));
});