


function numbers_init(id) {
    var show = true;
    var countbox = `#${id}`;
    $(window).on("scroll load resize", function () {
        if (!show) return false;                   // Отменяем показ анимации, если она уже была 
        // выполнена
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена 
        // страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего 
        // документа
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.spincrement').spincrement({
                duration: 2200
            })
            show = false;
        }
    });
}

$(document).ready(function () {
    if (document.getElementById('about')) { numbers_init('about') }
    if (document.getElementById('company')) { numbers_init('company') }
});


if (document.querySelector('.advantages__list')) {
    $('.advantages__list').owlCarousel({
        loop: false,
        dots: false,
        margin: 10,
        nav: true,
        navText: ['<button type="button" class="slider-arrow slider-arrow--prev slick-arrow" aria-disabled="false" style=""><svg><use xlink:href="images/svg/sprite.svg#arrow-slider"></use></svg></button>', '<button type="button" class="slider-arrow slider-arrow--next slick-arrow" style="" aria-disabled="false"><svg><use xlink:href="images/svg/sprite.svg#arrow-slider"></use></svg></button>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
}

$(".js-modal").click(function (e) {
    e.preventDefault(), $.fancybox.open(modal);
})

$(".js-parthers").click(function (e) {
    e.preventDefault(), $.fancybox.open('parthners');
})



$(".menu-btn").click(function () {
    $(".menu").addClass("menu--active")
    $("body").toggleClass("overflow");
})
$(".menu__close").click(function () {
    $(".menu").toggleClass("menu--active"), $("body").toggleClass("overflow");
})
$(".menu__link--submenu").click(function (e) {
    e.preventDefault()

    $('.submenu').each(el => {
        el.removeClass('submenu--active')
    })    
    $(this).parent().toggleClass("submenu--active");

})
$(".menu a:not(.menu__link--submenu)").click(function () {
    $(".menu").removeClass("menu--active"), $("body").toggleClass("overflow");
})



var header = $('.header'),
    scrollPrev = 0;

let scrolled = $(window).scrollTop();
if (scrolled > 500) {
    header.addClass('header--bg');
}

$(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 200 && scrolled > scrollPrev) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    //console.log(scrolled)
    if (scrolled > 500) {
        header.addClass('header--bg');
    }
    if(scrolled < 500){
        header.removeClass('header--bg');
    }
    scrollPrev = scrolled;
});