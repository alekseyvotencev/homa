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

    // модалка отклика на вакансии (страницы Вакансия и Страница вакансии)

    if (document.querySelector('.modal-response')) {
        const modalResponse = document.querySelector('.modal-response');

        const responseVacancyBtn = document.querySelector('.vacancy-page__main-right__btn');

        responseVacancyBtn.addEventListener('click', function () {
            modalResponse.classList.add('active');
            document.body.classList.add('lock');
        })

        const modalCloseBtn = document.querySelector('.modal-response .modal__close-btn');
        modalCloseBtn.addEventListener('click', function () {
            modalResponse.classList.remove('active');
            document.body.classList.remove('lock');
        })

        const inputFile = document.querySelector('#resume-file');
        const label = inputFile.nextElementSibling;
        const labelVal = label.innerHTML;

        inputFile.addEventListener('change', function (e) {
            var fileName = '';
            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else {
                console.log(e)
                fileName = e.target.value.split('\\').pop();
            }


            if (fileName)
                label.querySelector('span').innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
    }

    // модалка об ошибке нас странице Чем приклеить ПВХ плитку

    if (document.querySelector('.modal-mistake')) {
        const modalResponse = document.querySelector('.modal-mistake');

        const mistakeBtn = document.querySelector('.qa__btn-error');

        mistakeBtn.addEventListener('click', function () {
            modalResponse.classList.add('active');
            document.body.classList.add('lock');
        })

        const modalCloseBtn = document.querySelector('.modal-mistake .modal__close-btn');
        modalCloseBtn.addEventListener('click', function () {
            modalResponse.classList.remove('active');
            document.body.classList.remove('lock');
        })
    }

    // модалка заявку не техподдержку на Главной
    if (document.querySelector('.modal-request')) {
        const modalRequest = document.querySelector('.modal-request');

        const requestBtn = document.querySelector('.support__left-links__request');

        requestBtn.addEventListener('click', function () {
            modalRequest.classList.add('active');
            document.body.classList.add('lock');
        })

        const modalCloseBtn = document.querySelector('.modal-request .modal__close-btn');
        modalCloseBtn.addEventListener('click', function () {
            modalRequest.classList.remove('active');
            document.body.classList.remove('lock');
        })
    }

    // модалка запроса тех описания на Странице товара
    if (document.querySelector('.modal-description')) {
        const modalDescription = document.querySelector('.modal-description');

        // десктоп
        const descriptionBtn = document.querySelector('.product__right-card__right-actions-email');

        descriptionBtn.addEventListener('click', function () {
            modalDescription.classList.add('active');
            document.body.classList.add('lock');
        })

        const modalCloseBtn = document.querySelector('.modal-description .modal__close-btn');
        modalCloseBtn.addEventListener('click', function () {
            modalDescription.classList.remove('active');
            document.body.classList.remove('lock');
        })

        // мобилка

        const descriptionMobileBtn = document.querySelector('.product__right-card__left-actions-email');

        descriptionMobileBtn.addEventListener('click', function () {
            modalDescription.classList.add('active');
            document.body.classList.add('lock');
        })
    }

    // модалка задать вопрос на Странице товара ()
    if (document.querySelector('.modal-question')) {

        // десктоп
        const modalQuestion = document.querySelector('.modal-question');

        const questionBtn = document.querySelector('.product__right-card__right-actions-question');

        questionBtn.addEventListener('click', function () {
            modalQuestion.classList.add('active');
            document.body.classList.add('lock');
        })

        const modalCloseBtn = document.querySelector('.modal-question .modal__close-btn');
        modalCloseBtn.addEventListener('click', function () {
            modalQuestion.classList.remove('active');
            document.body.classList.remove('lock');
        })

        // мобилка
        const questionMobileBtn = document.querySelector('.product__right-card__left-actions-question');
        questionMobileBtn.addEventListener('click', function () {
            modalQuestion.classList.add('active');
            document.body.classList.add('lock');
        })
    }
})