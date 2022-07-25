document.addEventListener('DOMContentLoaded', () => {

    function limitInput () {
        $('.calculator-characteristic-size-width input, .calculator-characteristic-size-height input').keyup(function() {
          let inputValue = $(this).val();
          if (inputValue >= 99999 ) {
              $(this).val("99999");
          }
        });
        $('.calculator-characteristic-size-width button, .calculator-characteristic-size-height button').mousedown(function() {
            let inputValue = $(this).next().val();
            if (inputValue >= 99998 ) {
                $(this).next().val("99998");
            }
        });
      }
      limitInput();

    function sizeWindow () {
        $('.calculator-characteristic-size-width input').keyup(function() {
            $('.calculator-characteristic-image__size-left .num').text($(this).val());
        });
        $('.calculator-characteristic-size-height input').keyup(function() {
            $('.calculator-characteristic-image__size-top .num').text($(this).val());
        });

        $('.calculator-characteristic-size-width button').eq(0).mousedown(function() {
            setTimeout(() => {
                $('.calculator-characteristic-image__size-left .num').text($(this).next().val());
            }, 100);
        });
        $('.calculator-characteristic-size-width button').eq(1).mousedown(function() {
            setTimeout(() => {
                $('.calculator-characteristic-image__size-left .num').text($(this).prev().val());
            }, 100);
        });
        $('.calculator-characteristic-size-height button').eq(0).mousedown(function() {  
            setTimeout(() => {
                $('.calculator-characteristic-image__size-top .num').text($(this).next().val());
            }, 100);
        });
        $('.calculator-characteristic-size-height button').eq(1).mousedown(function() {
            setTimeout(() => {
                $('.calculator-characteristic-image__size-top .num').text($(this).prev().val());
            }, 100);
        });
    }
    sizeWindow();

    // calculattor
    function select() {
        $('.select').mousedown(function() {
            $(this).find('.select-list').toggleClass('open');
            $(this).find('.select-item').mousedown(function() {
                let textCopy = $(this).text();
                $(this).parent().parent().find('.select__text').text(textCopy);
                $(this).parent().find('.select-item').removeClass('selected')
                $(this).addClass('selected');
            });
        })
    }
    select();
    function calculator() {
        $('.calculator-construction-btn').mousedown(function() {
            //Если деревянное, или финское окно
            if($(this).hasClass('_euro-window') || $(this).hasClass('_finnish-window')) {
                $('.calculator-construction-type').removeClass('slides');
                $('.calculator-configuration').addClass('slides');

                $('.calculator-configuration-btn').mousedown(function() {
                    if($(this).hasClass('_window')) {
                        //Если окна
                        $('.calculator-characteristic').addClass('slides');
                        // Если одностворчатое
                        if($(this).hasClass('_window-one')) {
                            $('.calculator-characteristic-sash-block').addClass('no-active');
                            $('.calculator-characteristic-sash-block').eq(0).removeClass('no-active');
                            $('.calculator-characteristic-image__img').attr("src", "images/calculator/single-leaf/window-three.svg");
                            // Первая настройка
                            $('.calculator-characteristic-sash-block').eq(0).find('.calculator-characteristic-sash-elem').eq(0).find('.calculator-characteristic-sash-elem-item').mousedown(function() {   
                                setTimeout(() => {
                                    // Если глухая
                                    if($('._deaf').hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/single-leaf/window-three.svg"); 
                                    }
                                    // Если поворотная
                                    if($('._rotary').hasClass('selected')) {
                                        setTimeout(() => {
                                            // Если поворотная вправо
                                            if($(this).parent().parent().next().find('.calculator-characteristic-sash-elem-item').eq(0).hasClass('selected')) {
                                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/single-leaf/window-two.svg");
                                            }
                                            // Если поворотная влево
                                            if($(this).parent().parent().next().find('.calculator-characteristic-sash-elem-item').eq(1).hasClass('selected')) {
                                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/single-leaf/window-one.svg");
                                            } 
                                        }, 100);
                                        $(this).parent().parent().next().find('.calculator-characteristic-sash-elem-item').mousedown(function() {
                                            setTimeout(() => {
                                                // Если поворотная вправо
                                                if($(this).parent().find('.calculator-characteristic-sash-elem-item').eq(0).hasClass('selected')) {
                                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/single-leaf/window-two.svg");
                                                }
                                                // Если поворотная влево
                                                if($(this).parent().find('.calculator-characteristic-sash-elem-item').eq(1).hasClass('selected')) {
                                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/single-leaf/window-one.svg");
                                                } 
                                            }, 100);
                                        });
                                    }
                                    // Если поворотно-откидная
                                    if($('._swing-out').hasClass('selected')) {
                                        setTimeout(() => {
                                            // Если поворотная вправо
                                            if($(this).parent().parent().next().find('.calculator-characteristic-sash-elem-item').eq(0).hasClass('selected')) {
                                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/single-leaf/window-two.svg");
                                            }
                                            // Если поворотно-откидная влево
                                            if($(this).parent().parent().next().find('.calculator-characteristic-sash-elem-item').eq(1).hasClass('selected')) {
                                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/single-leaf/window-one.svg");
                                            } 
                                        }, 100);
                                        $(this).parent().parent().next().find('.calculator-characteristic-sash-elem-item').mousedown(function() {
                                            setTimeout(() => {
                                                // Если поворотно-откидная вправо
                                                if($(this).parent().find('.calculator-characteristic-sash-elem-item').eq(0).hasClass('selected')) {
                                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/single-leaf/window-two.svg");
                                                }
                                                // Если поворотно-откидная влево
                                                if($(this).parent().find('.calculator-characteristic-sash-elem-item').eq(1).hasClass('selected')) {
                                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/single-leaf/window-one.svg");
                                                } 
                                            }, 100);
                                        });
                                    }
                                }, 100);
                            });
                        }
                        // Если двустворчатое
                        if($(this).hasClass('_window-two')) {
                            $('.calculator-characteristic-sash-block').addClass('no-active');
                            $('.calculator-characteristic-sash-block').eq(0).removeClass('no-active');
                            $('.calculator-characteristic-sash-block').eq(1).removeClass('no-active');
                            $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-nine.svg");
                            // Если 2 глухие
                            function doubleWingDeafTwo () {
                                if($('.calculator-characteristic-sash-block').eq(0).find('.calculator-characteristic-sash-elem').eq(0).find('.calculator-characteristic-sash-elem-item').eq(0).hasClass('selected') && $('.calculator-characteristic-sash-block').eq(1).find('.calculator-characteristic-sash-elem').eq(0).find('.calculator-characteristic-sash-elem-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-nine.svg");
                                }
                                // Нажали на 1 поле
                                $('.calculator-characteristic-sash-block').eq(0).find('.calculator-characteristic-sash-elem').eq(0).find('.calculator-characteristic-sash-elem-item').eq(0).mousedown(function() {
                                    // Если во втором поле глухая
                                    if($('.calculator-characteristic-sash-block').eq(1).find('.calculator-characteristic-sash-elem').eq(0).find('.calculator-characteristic-sash-elem-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-nine.svg");
                                    }
                                });
                                // Нажали на 2 поле
                                $('.calculator-characteristic-sash-block').eq(1).find('.calculator-characteristic-sash-elem').eq(0).find('.calculator-characteristic-sash-elem-item').eq(0).mousedown(function() {
                                    // Если в первом поле глухая
                                    if($('.calculator-characteristic-sash-block').eq(0).find('.calculator-characteristic-sash-elem').eq(0).find('.calculator-characteristic-sash-elem-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-nine.svg");
                                    }
                                })
                            }
                            doubleWingDeafTwo();
                            // Если 2 поворотные вправо
                            function doubleWingRotaryTwo () {
                               /* if($('.calculator-characteristic-sash-block').eq(0).find('.calculator-characteristic-sash-elem').eq(0).find('.calculator-characteristic-sash-elem-item').eq(1).hasClass('selected') && $('.calculator-characteristic-sash-block').eq(1).find('.calculator-characteristic-sash-elem').eq(0).find('.calculator-characteristic-sash-elem-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-three.svg");
                                }*/
                                // Нажали на 1 поле
                                $('.calculator-characteristic-sash-block').eq(0).find('.calculator-characteristic-sash-elem').eq(0).find('.calculator-characteristic-sash-elem-item').eq(0).mousedown(function() {
                                    // Если во втором поле поворотная
                                    if($('.calculator-characteristic-sash-block').eq(1).find('.calculator-characteristic-sash-elem').eq(0).find('.calculator-characteristic-sash-elem-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-nine.svg");
                                        
                                    }
                                });
                                // Нажали на 2 поле
                                $('.calculator-characteristic-sash-block').eq(1).find('.calculator-characteristic-sash-elem').eq(0).find('.calculator-characteristic-sash-elem-item').eq(0).mousedown(function() {
                                    // Если в первом поле глухая
                                    if($('.calculator-characteristic-sash-block').eq(0).find('.calculator-characteristic-sash-elem').eq(0).find('.calculator-characteristic-sash-elem-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-nine.svg");
                                    }
                                });
                            };
                            doubleWingRotaryTwo();
                            // Если 2 поворотные влево

                            // Если 1 поворотная вправо 1 поворотная влево
                            // Если 1 поворотная влево 1 поворотная вправо

                            // Если 1 глухая 1 поворотная вправо
                            // Если 1 глухая 1 поворотная влево

                            // Если 1 поворотная вправо 1 глухая 
                            // Если 1 поворотная влево 1 глухая 

                            
                        } 
                        // Если трехстворчатое
                        if($(this).hasClass('_window-three')) {
                            $('.calculator-characteristic-sash-block').addClass('no-active');
                            $('.calculator-characteristic-sash-block').eq(0).removeClass('no-active');
                            $('.calculator-characteristic-sash-block').eq(1).removeClass('no-active');
                            $('.calculator-characteristic-sash-block').eq(2).removeClass('no-active');
                            $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-one.svg");
                        } 
                    } else {
                    // Если двери
                    }
                });
            } else {
                // Если портальные двери
                $('.calculator-construction-type').addClass('slides');
            }
            //Евроокно
            if($(this).hasClass('_euro-window')) {
                $('._swing-out').css({"display":"block"});
            }
            //Финское окно
            if($(this).hasClass('_finnish-window')) {
                $('._swing-out').css({"display":"none"});
            }

        });
        //
        $('.calculator-characteristic-sash-elem-item').mousedown(function() {
            if($(this).hasClass('_deaf')) {
                $(this).parent().parent().parent().find('.calculator-characteristic-sash-elem-side').addClass('hidden');
            } else {
                $(this).parent().parent().parent().find('.calculator-characteristic-sash-elem-side').removeClass('hidden');
            }
        })
        $('._window-one').mousedown(function() {
            $('.calculator-characteristic-sash-elem-item').removeClass('selected');
            $('._deaf').addClass('selected');
        })
        $('._window-two').mousedown(function() {
            $('.calculator-characteristic-sash-elem-item').removeClass('selected');
            $('._deaf').addClass('selected');
        })
        $('._window-three').mousedown(function() {
            $('.calculator-characteristic-sash-elem-item').removeClass('selected');
            $('._deaf').addClass('selected');
        })
    }
    calculator();
});
