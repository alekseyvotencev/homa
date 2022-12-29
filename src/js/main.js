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

    const sortingSelect = new Choices('.sorting-select', {
        searchEnabled: false,
        shouldSort: false,
        itemSelectText: '',
    })
})