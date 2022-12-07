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

    // // ширина аккордеона в выпадающем списке в шапке
    // accordionWidth = document.querySelector('#dropdown-accordion').offsetWidth;
    // document.querySelector('#dropdown-accordion').parentElement.setAttribute('style', `min-width:${accordionWidth}px`);


    const sortingSelect = new Choices('.sorting-select', {
        searchEnabled: false,
        shouldSort: false,
        itemSelectText: '',
    })
})