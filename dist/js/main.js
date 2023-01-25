document.addEventListener('DOMContentLoaded', function () {

    // переключаение языков
    const rusBtn = document.querySelector('.header__top-rus');
    const enBtn = document.querySelector('.header__top-en');

    enBtn.addEventListener('click', function () {
        rusBtn.classList.remove('active');
        enBtn.classList.add('active');
    })

    rusBtn.addEventListener('click', function () {
        enBtn.classList.remove('active');
        rusBtn.classList.add('active');
    })

    // селект на странице ...
    if (document.querySelector('.sorting-select')) {
        const sortingSelect = new Choices('.sorting-select', {
            searchEnabled: false,
            shouldSort: false,
            itemSelectText: '',
        })

    }

    // карта на странице Контакты
    if (document.querySelector('#map')) {
        ymaps.ready(init);
        function init() {
            const myMap = new ymaps.Map("map", {
                center: [55.678402, 37.853416],
                zoom: 14
            });

            const dzerzhinskMap = new ymaps.Map("dzerzhinsk-map", {
                center: [56.290484, 43.603766],
                zoom: 14
            });

            const homaPlacemark = new ymaps.Placemark([55.678402, 37.853416], {},
                {
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: '../images/svg/homaPoint.svg',
                    // Размеры метки.
                    iconImageSize: [rem(13.2), rem(8.5)],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [rem(-5), rem(-4)]
                })

            myMap.geoObjects.add(homaPlacemark);

            const dzerzhinskPlacemark = new ymaps.Placemark([56.290484, 43.603766], null, {
                preset: 'islands#redDotIcon'
            });
            dzerzhinskMap.geoObjects.add(dzerzhinskPlacemark);
        }


    }

    // переключалка складов на странице Контакты

    const tabsBtns = document.querySelectorAll('.contacts-hero__left-list__item button');
    const main = document.querySelectorAll(`[data-target="main"]`);
    const dzerzhinsk = document.querySelectorAll(`[data-target="dzerzhinsk"]`);

    tabsBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const path = e.currentTarget.parentElement.dataset.path;

            tabsBtns.forEach(function (tab) {
                tab.parentElement.classList.remove('active');
            })

            tabsBtns.forEach(tabBtn => {
                if (tabBtn.parentElement.dataset.path === path) {
                    tabBtn.parentElement.classList.add('active');
                }
            })

            if (path === 'main') {
                dzerzhinsk.forEach(element => {
                    element.classList.remove('active');
                })
                main.forEach(element => {
                    element.classList.add('active');
                })
            } else if (path === 'dzerzhinsk') {
                main.forEach(element => {
                    element.classList.remove('active');
                })
                dzerzhinsk.forEach(element => {
                    element.classList.add('active');
                })
            }
        })
    })

    // плавный скролл на странице Пресс-центр

    document.querySelectorAll('a[href^="#"').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);

            // const topOffset = document.querySelector('.scrollto').offsetHeight;
            const topOffset = 0; // если не нужен отступ сверху 
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
})