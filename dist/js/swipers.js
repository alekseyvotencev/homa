// Пересчет rem в px для swiper
const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100 / 375) * (0.1 * $(window).width()) * rem;
    }
}

const getTwoDigitNumber = function (number) {
    if (number < 10) return String('0' + number)
    else return String(number)
}

const introSwiper = new Swiper('.intro__swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 500,
    allowTouchMove: false,
    slidesPerView: 'auto',

    navigation: {
        nextEl: '.intro__swiper-next',
        prevEl: '.intro__swiper-prev',
    },

    pagination: {
        el: '.intro__swiper-pagination',
    },
    breakpoints: {
        320: {
            pagination: {
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    return `<span class="current">${getTwoDigitNumber(current)}</span>`;
                }
            },
        },
        769: {
            pagination: {
                renderBullet: function (index, className) {
                    if (index < 10) {
                        return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
                    } else {
                        return '<span class="' + className + '">' + (index + 1) + '</span>';
                    }
                }
            },
        }
    }
});

const introSwiperImages = new Swiper('.intro__swiper-images', {
    direction: 'horizontal',
    speed: 500,
    allowTouchMove: false,
    loop: true,
    slidesPerView: 1,

    navigation: {
        nextEl: '.intro__swiper-images__next',
        prevEl: '.intro__swiper-images__prev',
    },

    pagination: {
        el: '.intro__swiper-images__pagination',
        type: 'bullets',
    },
});


const swiperNews = new Swiper('.swiper__news', {
    direction: 'horizontal',
    speed: 500,
    allowTouchMove: false,
    navigation: {
        nextEl: '.swiper__news-controls__next',
        prevEl: '.swiper__news-controls__prev',
    },

    pagination: {
        el: '.swiper__news-controls__pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return `<span class="current">${getTwoDigitNumber(current)}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
        }
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: rem(2.5)
        },
        769: {
            slidesPerView: 4,
            spaceBetween: rem(3.3)
        }
    }
});

const swiperRecommendations = new Swiper('.swiper__recommendations', {
    direction: 'horizontal',
    speed: 500,
    allowTouchMove: false,

    navigation: {
        nextEl: '.swiper__recommendations-controls__next',
        prevEl: '.swiper__recommendations-controls__prev',
    },

    pagination: {
        el: '.swiper__recommendations-controls__pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return `<span class="current">${getTwoDigitNumber(current)}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
        }
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: rem(3)
        },
        769: {
            slidesPerView: 'auto',
            spaceBetween: 0
        }
    }
});

const swiperReviews = new Swiper('.swiper__reviews', {
    direction: 'horizontal',
    speed: 500,
    allowTouchMove: false,
    loop: false,

    navigation: {
        nextEl: '.swiper__reviews-controls__next',
        prevEl: '.swiper__reviews-controls__prev',
    },

    pagination: {
        el: '.swiper__reviews-controls__pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return `<span class="current">${getTwoDigitNumber(current)}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
        }
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerColumn: 2,
            spaceBetween: rem(4)
        },
        769: {
            slidesPerView: 2,
            slidesPerColumn: 1,
            spaceBetween: rem(3.3)
        }
    }
});

const swiperVideo = new Swiper('.swiper__video', {
    direction: 'horizontal',
    speed: 500,
    allowTouchMove: false,
    loop: false,

    navigation: {
        nextEl: '.swiper__video-controls__next',
        prevEl: '.swiper__video-controls__prev',
    },

    pagination: {
        el: '.swiper__video-controls__pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return `<span class="current">${getTwoDigitNumber(current)}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
        }
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerColumn: 2,
            spaceBetween: rem(4)
        },
        769: {
            slidesPerView: 4,
            slidesPerColumn: 1,
            spaceBetween: rem(3.3)
        }
    }
});

const swiperPolymer = new Swiper('.swiper__polymer', {
    direction: 'horizontal',
    speed: 500,
    allowTouchMove: false,
    loop: false,
    slidesPerView: 1,

    navigation: {
        nextEl: '.swiper__polymer-controls__next',
        prevEl: '.swiper__polymer-controls__prev',
    },

    pagination: {
        el: '.swiper__polymer-controls__pagination',
        renderBullet: function (index, className) {
            return `<span class="${className}">${getTwoDigitNumber(index + 1)}</span>`;
        }
    },
});

const swiperSame = new Swiper('.swiper__same', {
    direction: 'horizontal',
    speed: 500,
    allowTouchMove: false,
    loop: false,
    spaceBetween: rem(4),
    slidesPerView: 'auto',

    navigation: {
        nextEl: '.swiper__same-next',
        prevEl: '.swiper__same-prev',
    },

    pagination: {
        el: '.swiper__same-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return `<span class="current">${getTwoDigitNumber(current)}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
        }
    },
});

const swiperRelated = new Swiper('.swiper__related', {
    direction: 'horizontal',
    speed: 500,
    allowTouchMove: false,
    loop: false,
    spaceBetween: rem(4),
    slidesPerView: 'auto',

    navigation: {
        nextEl: '.swiper__related-next',
        prevEl: '.swiper__related-prev',
    },

    pagination: {
        el: '.swiper__related-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return `<span class="current">${getTwoDigitNumber(current)}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
        }
    },
});

const swiperProductRecommendations = new Swiper('.product .swiper__recommendations', {
    direction: 'horizontal',
    speed: 500,
    allowTouchMove: false,
    loop: false,
    spaceBetween: rem(3.2),
    slidesPerView: 'auto',

    navigation: {
        nextEl: '.swiper__recommendations-next',
        prevEl: '.swiper__recommendations-prev',
    },

    pagination: {
        el: '.swiper__recommendations-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return `<span class="current">${getTwoDigitNumber(current)}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
        }
    },
});





