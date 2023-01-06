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
            var myMap = new ymaps.Map("map", {
                center: [55.678402, 37.853416],
                zoom: 14
            });

            var dzerzhinskMap = new ymaps.Map("dzerzhinsk-map", {
                center: [56.290484, 43.603766],
                zoom: 14
            });
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

            e.path[1].classList.add('active');

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
})