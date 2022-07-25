// import '~/app/libs/jquery-3.6.0.min.js'
// import '~/app/libs/fancybox/jquery.fancybox.min.js';
// import '~/app/libs/slick/slick.min.js';
// import '~/app/libs/jquery.maskedinput.min.js';
document.addEventListener('DOMContentLoaded', () => {
    $.fancybox.defaults.hideScrollbar = true;
    $.fancybox.defaults.autoFocus = false;
    $.fancybox.defaults.backFocus = false;
    $.fancybox.defaults.trapFocus = false;
    $.fancybox.defaults.touch = false;

    // $("input[type='tel']").mask("+7 (999) 999-99-99");

    $(`.reviews__slider`).slick({
      dots: false,
      fade: false,
      arrows: true,
      infinite: false,
      swipe: false,
      draggable: false,
      speed: 300,
      slidesToShow: 2,
      variableWidth: true,
      adaptiveHeight: true,
      appendArrows: '.reviews__nav',
      prevArrow: '<button type="button" class="slider-arrow slider-arrow--prev"><svg><use xlink:href="images/svg/sprite.svg#arrow-slider"></use></svg></button>',
      nextArrow: '<button type="button" class="slider-arrow slider-arrow--next"><svg><use xlink:href="images/svg/sprite.svg#arrow-slider"></use></svg></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            variableWidth: false,
            slidesToShow: 1
          }
        },
      ]
    });

    $(`.product-advantages__slider`).slick({
      dots: true,
      fade: false,
      arrows: true,
      infinite: false,
      swipe: false,
      draggable: false,
      speed: 300,
      slidesToShow: 3,
      variableWidth: true,
      adaptiveHeight: true,
      appendDots: '.product-advantages__dots',
      appendArrows: '.product-advantages__nav',
      prevArrow: '<button type="button" class="slider-arrow--mini slider-arrow--prev"><svg><use xlink:href="images/svg/sprite.svg#arrow-slider2"></use></svg></button>',
      nextArrow: '<button type="button" class="slider-arrow--mini slider-arrow--next"><svg><use xlink:href="images/svg/sprite.svg#arrow-slider2"></use></svg></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            variableWidth: false,
            slidesToShow: 1
          }
        },
      ]
    });

    $(`.portal__gallery`).slick({
      dots: true,
      fade: true,
      arrows: true,
      infinite: true,
      swipe: false,
      draggable: false,
      appendArrows: '.portal__nav',
      asNavFor: '.portal__info',
      prevArrow: '<button type="button" class="slider-arrow--square slider-arrow--prev"><svg><use xlink:href="images/svg/sprite.svg#arrow-slider3"></use></svg></button>',
      nextArrow: '<button type="button" class="slider-arrow--square slider-arrow--next"><svg><use xlink:href="images/svg/sprite.svg#arrow-slider3"></use></svg></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: false,
            adaptiveHeight: true,
            fade: false,
          }
        },
      ]
    });

    $(`.portal__info`).slick({
      dots: false,
      fade: false,
      arrows: false,
      infinite: true,
      swipe: false,
      draggable: false,
      asNavFor: '.portal__gallery',
    });

    $(`.principle__slider`).slick({
      dots: false,
      fade: false,
      arrows: true,
      infinite: true,
      swipe: false,
      draggable: false,
      appendArrows: '.principle__nav',
      appendDots: '.principle__dots',
      prevArrow: '<button type="button" class="slider-arrow--square slider-arrow--prev"><svg><use xlink:href="images/svg/sprite.svg#arrow-slider3"></use></svg></button>',
      nextArrow: '<button type="button" class="slider-arrow--square slider-arrow--next"><svg><use xlink:href="images/svg/sprite.svg#arrow-slider3"></use></svg></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            adaptiveHeight: true,
            dots: true,
          }
        },
      ]
    });

    $(`.promo__slider`).slick({
      dots: true,
      fade: false,
      arrows: false,
      infinite: true,
      swipe: false,
      draggable: false,
      appendArrows: '.promo__dots',
      autoplay: true,
      speed: 300,
    });

    $(`.area__slider`).slick({
      dots: false,
      fade: false,
      arrows: true,
      infinite: false,
      swipe: false,
      draggable: false,
      speed: 300,
      slidesToShow: 2,
      variableWidth: true,
      adaptiveHeight: true,
      appendArrows: '.area__nav',
      prevArrow: '<button type="button" class="slider-arrow--mini slider-arrow--prev"><svg><use xlink:href="images/svg/sprite.svg#arrow-slider2"></use></svg></button>',
      nextArrow: '<button type="button" class="slider-arrow--mini slider-arrow--next"><svg><use xlink:href="images/svg/sprite.svg#arrow-slider2"></use></svg></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            variableWidth: false,
            slidesToShow: 1
          }
        },
      ]
    });

    $('.js-modal').click(function(e) {
      e.preventDefault();
      $.fancybox.open(modal);
    });

    $(window).on("resize", function (e) {
      if($(window).width() <= 992) {
        $('.menu-btn').click(function() {
          $('.menu').addClass('menu--active');
          $('body').toggleClass('overflow');
        });
    
        $('.menu__close').click(function() {
          $('.menu').toggleClass('menu--active');
          $('body').toggleClass('overflow');
        });
    
        $('.menu__link--submenu').click(function(e) {
          e.preventDefault();
          $(this).parent().toggleClass('submenu--active');
        });
    
        $('.menu a:not(.menu__link--submenu)').click(function() {
          $('.menu').removeClass('menu--active');
          $('body').toggleClass('overflow');
        })
      }
    })
});