document.addEventListener('DOMContentLoaded', () => {
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

    function select() {
        $('.select').click(function() {
            $(this).find('.select-list').toggleClass('open');
            $(this).find('.select-item').click(function() {
                let textCopy = $(this).text();
                $(this).parent().parent().find('.select__text').text(textCopy);
                if($(this).parent().parent().find('.select__text').length == 0) {
                    $(this).parent().parent().parent().find('.select__text').text(textCopy);
                }
                $(this).parent().find('.select-item').removeClass('selected');
                $(this).addClass('selected');
            });
        })
    }
    select();

    function calculator() {
        let calculatorCharSashBlockOne = $('.calculator-characteristic-sash-block').eq(0); //Переключалка 1
        let calculatorCharSashBlockTwo = $('.calculator-characteristic-sash-block').eq(1); //Переключалка 2
        let calculatorCharSashBlockThree = $('.calculator-characteristic-sash-block').eq(2); //Переключалка 3
        let calculatorCharSashBlockFour = $('.calculator-characteristic-sash-block').eq(3); //Переключалка 4
        let calculatorCharSashBlockFive = $('.calculator-characteristic-sash-block').eq(4); //Переключалка 4
        
        let calculatorCharSashBlockOneElemOne = calculatorCharSashBlockOne.find('.calculator-characteristic-sash-elem').eq(0);  //Переключалка 1 Какая
        let calculatorCharSashBlockOneElemTwo = calculatorCharSashBlockOne.find('.calculator-characteristic-sash-elem').eq(1); //Переключалка 1 Направление
        let calculatorCharSashBlockTwoElemOne = calculatorCharSashBlockTwo.find('.calculator-characteristic-sash-elem').eq(0); //Переключалка 2 Какая
        let calculatorCharSashBlockTwoElemTwo = calculatorCharSashBlockTwo.find('.calculator-characteristic-sash-elem').eq(1); //Переключалка 2 Направление
        let calculatorCharSashBlockThreeElemOne = calculatorCharSashBlockThree.find('.calculator-characteristic-sash-elem').eq(0); //Переключалка 3 Какая
        let calculatorCharSashBlockThreeElemTwo = calculatorCharSashBlockThree.find('.calculator-characteristic-sash-elem').eq(1); //Переключалка 3 Направление

        let calculatorCharSashBlockFourElemTwo = calculatorCharSashBlockFour.find('.calculator-characteristic-sash-elem').eq(1); //Переключалка 4 Направление
        
        let calculatorCharSashBlockFiveElemTwo = calculatorCharSashBlockFive.find('.calculator-characteristic-sash-elem').eq(0); //Переключалка 4 Направление


        function calculatorStageOne() {
            $('.calculator-construction-btn').click(function() {
                // Евроокно
                if($(this).hasClass('_euro-window'))  {

                    $('.calculator-construction-type').removeClass('slides');
                    $('.calculator-configuration').addClass('slides');
                    $('.calculator-configuration-block').eq(0).addClass('active');
                    $('.calculator-configuration-block').eq(1).removeClass('active');
                    $('._swing-out').css({"display":"block"});
                    $('.calculator-configuration').css({"width":""});
                    $('.calculator-characteristic-count').css({"display":"flex"});
                    $('.calculator-characteristic-size').css({"margin-bottom":""});
                    $('.calculator-characteristic-sash-block').css({"display":""});
                    calculatorCharSashBlockFive.addClass('no-active');
                    $('.calculator-other-windowsill').css({"display":"block"});
                    $('.calculator-other-additionally-btn').eq(0).css({"display":"flex"});
                    $('.calculator-other-additionally-btn').eq(1).css({"display":"flex"});
                }
                // Финское окно
                if($(this).hasClass('_finnish-window')) {
                    $('.calculator-construction-type').removeClass('slides');
                    $('.calculator-configuration').addClass('slides');
                    $('.calculator-configuration-block').eq(0).addClass('active');
                    $('.calculator-configuration-block').eq(1).removeClass('active');
                    $('._swing-out').css({"display":"none"});
                    $('.calculator-configuration').css({"width":""});
                    $('.calculator-characteristic-count').css({"display":"flex"});
                    $('.calculator-characteristic-size').css({"margin-bottom":""});
                    $('.calculator-characteristic-sash-block').css({"display":""});
                    calculatorCharSashBlockFive.css({"display":""});
                    calculatorCharSashBlockFive.addClass('no-active');
                    $('.calculator-other-windowsill').css({"display":"block"});
                    $('.calculator-other-additionally-btn').eq(0).css({"display":"flex"});
                    $('.calculator-other-additionally-btn').eq(1).css({"display":"flex"});
                }
                // Портальные двери
                if($(this).hasClass('_portal-doors')) {
                    $('.calculator-construction-type').addClass('slides');
                    $('.calculator-configuration').addClass('slides');
                    $('.calculator-configuration-block').eq(0).removeClass('active');
                    $('.calculator-configuration-block').eq(1).addClass('active');
                    $('.calculator-configuration').css({"width":"fit-content"});
                    $('.calculator-characteristic-count').css({"display":"none"});
                    $('.calculator-characteristic-size').css({"margin-bottom":"20px"});
                    $('.calculator-characteristic-sash-block').css({"display":"none"});
                    $('.calculator-characteristic-sash-block').addClass('no-active');
                    calculatorCharSashBlockFive.css({"display":"flex"});
                    calculatorCharSashBlockFive.removeClass('no-active');
                    calculatorCharSashBlockFour.removeClass('active');
                    calculatorCharSashBlockFive.find('.calculator-characteristic-sash-elem').css({"left":"-13px"});
                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-one.svg");
                    $('.calculator-other-windowsill').css({"display":"none"});
                    $('.calculator-other-additionally-btn').eq(0).css({"display":"none"});
                    $('.calculator-other-additionally-btn').eq(1).css({"display":"none"});
                }
            });
        }
        calculatorStageOne();

        function calculatorStageTwo() {
            $('.calculator-configuration-btn').click(function() {
                $('.calculator-characteristic').addClass('slides');
                // Если одностворчатое
                if($(this).hasClass('_window-one')) {
                    $('.calculator-characteristic-sash-block').addClass('no-active');
                    calculatorCharSashBlockOne.removeClass('no-active');
                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/single-leaf/window-three.svg");
                    calculatorCharSashBlockOneElemOne.find('.select-item').removeClass('selected');
                    calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).addClass('selected');
                    calculatorCharSashBlockOneElemOne.find('.select__text').text(calculatorCharSashBlockOneElemOne.find('.selected').text());
                    calculatorCharSashBlockOneElemTwo.addClass('hidden');
                }
                // Если двустворчатое
                if($(this).hasClass('_window-two')) {
                    $('.calculator-characteristic-sash-block').addClass('no-active');
                    calculatorCharSashBlockOne.removeClass('no-active');
                    calculatorCharSashBlockTwo.removeClass('no-active');
                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-nine.svg");
                    calculatorCharSashBlockOneElemOne.find('.select-item').removeClass('selected');
                    calculatorCharSashBlockTwoElemOne.find('.select-item').removeClass('selected');
                    calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).addClass('selected')
                    calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).addClass('selected');
                    calculatorCharSashBlockOneElemOne.find('.select__text').text(calculatorCharSashBlockOneElemOne.find('.selected').text());
                    calculatorCharSashBlockTwoElemOne.find('.select__text').text(calculatorCharSashBlockTwoElemOne.find('.selected').text());
                    calculatorCharSashBlockOneElemTwo.addClass('hidden');
                    calculatorCharSashBlockTwoElemTwo.addClass('hidden');
                };
                // Если трехстворчатое
                if($(this).hasClass('_window-three')) {
                    $('.calculator-characteristic-sash-block').addClass('no-active');
                    calculatorCharSashBlockOne.removeClass('no-active');
                    calculatorCharSashBlockTwo.removeClass('no-active');
                    calculatorCharSashBlockThree.removeClass('no-active');
                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-one.svg");
                    calculatorCharSashBlockOneElemOne.find('.select-item').removeClass('selected');
                    calculatorCharSashBlockTwoElemOne.find('.select-item').removeClass('selected');
                    calculatorCharSashBlockThreeElemOne.find('.select-item').removeClass('selected');
                    calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).addClass('selected');
                    calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).addClass('selected');
                    calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).addClass('selected');
                    calculatorCharSashBlockOneElemOne.find('.select__text').text(calculatorCharSashBlockOneElemOne.find('.selected').text());
                    calculatorCharSashBlockTwoElemOne.find('.select__text').text(calculatorCharSashBlockTwoElemOne.find('.selected').text());
                    calculatorCharSashBlockThreeElemOne.find('.select__text').text(calculatorCharSashBlockThreeElemOne.find('.selected').text());
                    calculatorCharSashBlockOneElemTwo.addClass('hidden');
                    calculatorCharSashBlockTwoElemTwo.addClass('hidden');
                    calculatorCharSashBlockThreeElemTwo.addClass('hidden');
                };
                


                $('.calculator-characteristic-size-elem input').keyup(function() {
                    if($('.calculator-characteristic-size-height input').val().length > 0 && $('.calculator-characteristic-size-width input').val().length > 0) {
                        $('.calculator-other').addClass('slides');
                        $('.calculator-buttons').addClass('slides');
                    }
                });
            });
        }
        calculatorStageTwo();

        function calculatorStageThree () {
            $('.calculator-other-cover-elem').find('.calculator-other-cover-item').click(function() {
                setTimeout(() => {
                    if($('.calculator-other-cover-item').eq(0).hasClass('selected') || $('.calculator-other-cover-item').eq(1).hasClass('selected')) {
                        $('.calculator-other-color').removeClass('hidden');
                    } else {
                        $('.calculator-other-color').addClass('hidden');
                    }
                }, 50);
            })
            $('.calculator-other-color-item').click(function () {
                $('.calculator-other-color-item').removeClass('active');
                $(this).addClass('active');
            })
        }
        calculatorStageThree()

        function calculatorImage() {
            $('.calculator-configuration-btn').click(function() {
                //Одностворчатое
                if($(this).hasClass('_window-one')) {
                    calculatorCharSashBlockOne.css({"display":"flex"});
                    calculatorCharSashBlockTwo.css({"display":"flex"});
                    calculatorCharSashBlockThree.css({"display":"flex"});
                    calculatorCharSashBlockOne.removeClass('no-active');
                    calculatorCharSashBlockFour.removeClass('active');
                    //Глухая
                    function deafOneWindow() {
                        calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).click(function () {
                            calculatorCharSashBlockOneElemTwo.addClass('hidden');
                            $('.calculator-characteristic-image__img').attr("src", "images/calculator/single-leaf/window-three.svg");
                        });
                    }
                    deafOneWindow();
                    //Поворотная
                    function rotaryOneWindow() {
                        calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).click(function () {
                            calculatorCharSashBlockOneElemTwo.removeClass('hidden');
                            //Условия
                            if(calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/single-leaf/window-one.svg");
                            }
                            if(calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/single-leaf/window-two.svg");
                            }
                            // Кнопки
                            calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).click(function () {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/single-leaf/window-one.svg");
                            });
                            calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).click(function () {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/single-leaf/window-two.svg");
                            });
                        });
                    }
                    rotaryOneWindow();
                    //Поворотно-откидная
                    function swingoutOneWindow() {
                        calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).click(function () {
                            calculatorCharSashBlockOneElemTwo.removeClass('hidden');
                            //Условия
                            if(calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/single-leaf/window-one.svg");
                            }
                            if(calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/single-leaf/window-two.svg");
                            }
                            // Кнопки
                            calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).click(function () {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/single-leaf/window-one.svg");
                            });
                            calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).click(function () {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/single-leaf/window-two.svg");
                            });
                        });
                    }
                    swingoutOneWindow();
                }
                //Двустворчатое
                if($(this).hasClass('_window-two')) {
                    calculatorCharSashBlockOne.css({"display":"flex"});
                    calculatorCharSashBlockTwo.css({"display":"flex"});
                    calculatorCharSashBlockThree.css({"display":"flex"});
                    calculatorCharSashBlockOne.removeClass('no-active');
                    calculatorCharSashBlockTwo.removeClass('no-active');
                    calculatorCharSashBlockFour.removeClass('active');
                    function deafTwoWindow() {
                        calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).click(function () {
                            calculatorCharSashBlockOneElemTwo.addClass('hidden');
                            calculatorCharSashBlockOneElemTwo.find('.select-item').removeClass('selected');
                            calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).addClass('selected');
                            calculatorCharSashBlockOneElemTwo.find('.select__text').text(calculatorCharSashBlockOneElemTwo.find('.selected').text());
                            //Если во втором поле глухая выдаем это
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-nine.svg");
                            }
                            //Если во втором поле поворотная вправо выдаем это
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-eith.svg");
                            }
                            //Если во втором поле поворотная влево выдаем это
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-seven.svg");
                            }
                            //Если во втором поле поворотная-откидная вправо выдаем это
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-eith.svg");
                            }
                            //Если во втором поле поворотная-откидная влево выдаем это
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-seven.svg");
                            }
                        });
                        calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).click(function () {
                            calculatorCharSashBlockTwoElemTwo.addClass('hidden');
                            calculatorCharSashBlockTwoElemTwo.find('.select-item').removeClass('selected');
                            calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).addClass('selected');
                            calculatorCharSashBlockTwoElemTwo.find('.select__text').text(calculatorCharSashBlockTwoElemTwo.find('.selected').text());
                            //Если в первом поле глухая выдаем это
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-nine.svg");
                            }
                            //Если в первом поле поворотная вправо выдаем это
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-six.svg");
                            }
                            //Если в первом поле поворотная влево выдаем это
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-four.svg");
                            }
                            //Если в первом поле поворотная-откидная вправо выдаем это
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-six.svg");
                            }
                            //Если в первом поле поворотная-откидная влево выдаем это
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-four.svg");
                            }
                        });
                    }
                    deafTwoWindow();

                    function rotaryTwoWindow() {
                        calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).click(function () {
                            calculatorCharSashBlockOneElemTwo.removeClass('hidden');
                            calculatorCharSashBlockOneElemTwo.find('.select-item').removeClass('selected');
                            calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).addClass('selected');
                            calculatorCharSashBlockOneElemTwo.find('.select__text').text(calculatorCharSashBlockOneElemTwo.find('.selected').text());
                            //Если во втором поле глухая выдаем это
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-six.svg");
                            }
                            //Если во втором поле поворотная вправо выдаем это
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-two.svg");
                            }
                            //Если во втором поле поворотная влево выдаем это
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-one.svg");
                            }
                            //Если во втором поле поворотная-откидная вправо выдаем это
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-two.svg");
                            }
                            //Если во втором поле поворотная-откидная влево выдаем это
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-one.svg");
                            }

                            // Кнопки
                            calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).click(function () {
                                //Если во втором поле глухая выдаем это
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-six.svg");
                                }
                                //Если во втором поле поворотная вправо выдаем это
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-two.svg");
                                }
                                //Если во втором поле поворотная влево выдаем это
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-one.svg");
                                }
                                //Если во втором поле поворотная-откидная вправо выдаем это
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-two.svg");
                                }
                                //Если во втором поле поворотная-откидная влево выдаем это
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-one.svg");
                                }
                            });
                            calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).click(function () {
                                //Если во втором поле глухая выдаем это
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-four.svg");
                                }
                                //Если во втором поле поворотная вправо выдаем это
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-five.svg");
                                }
                                //Если во втором поле поворотная влево выдаем это
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-three.svg");
                                }
                                //Если во втором поле поворотная-откидная вправо выдаем это
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-five.svg");
                                }
                                //Если во втором поле поворотная-откидная влево выдаем это
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-three.svg");
                                }
                            });
                        });
                        calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).click(function () {
                            calculatorCharSashBlockTwoElemTwo.removeClass('hidden');
                            calculatorCharSashBlockTwoElemTwo.find('.select-item').removeClass('selected');
                            calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).addClass('selected');
                            calculatorCharSashBlockTwoElemTwo.find('.select__text').text(calculatorCharSashBlockTwoElemTwo.find('.selected').text());
                            //Если в первом поле глухая выдаем это
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-eith.svg");
                            }
                            //Если в первом поле поворотная вправо выдаем это
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-two.svg");
                            }
                            //Если в первом поле поворотная влево выдаем это
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-five.svg");
                            }
                            //Если в первом поле поворотная-откидная вправо выдаем это
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-two.svg");
                            }
                            //Если в первом поле поворотная-откидная влево выдаем это
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-five.svg");
                            }

                            calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).click(function () {
                                //Если в первом поле глухая выдаем это
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-eith.svg");
                                }
                                //Если в первом поле поворотная вправо выдаем это
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-two.svg");
                                }
                                //Если в первом поле поворотная влево выдаем это
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-five.svg");
                                }
                                //Если в первом поле поворотная-откидная вправо выдаем это
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-two.svg");
                                }
                                //Если в первом поле поворотная-откидная влево выдаем это
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-five.svg");
                                }
                            });

                            calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).click(function () {
                                //Если в первом поле глухая выдаем это
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-seven.svg");
                                }
                                //Если в первом поле поворотная вправо выдаем это
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-one.svg");
                                }
                                //Если в первом поле поворотная влево выдаем это
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-three.svg");
                                }
                                //Если в первом поле поворотная-откидная вправо выдаем это
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-one.svg");
                                }
                                //Если в первом поле поворотная-откидная влево выдаем это
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-three.svg");
                                }
                            });
                        });
                    }
                    rotaryTwoWindow();

                    function swingoutTwoWindow() {
                        calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).click(function () {
                            calculatorCharSashBlockOneElemTwo.removeClass('hidden');
                            calculatorCharSashBlockOneElemTwo.find('.select-item').removeClass('selected');
                            calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).addClass('selected');
                            calculatorCharSashBlockOneElemTwo.find('.select__text').text(calculatorCharSashBlockOneElemTwo.find('.selected').text());
                            //Если во втором поле глухая выдаем это
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-six.svg");
                            }
                            //Если во втором поле поворотная вправо выдаем это
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-two.svg");
                            }
                            //Если во втором поле поворотная влево выдаем это
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-one.svg");
                            }
                            //Если во втором поле поворотная-откидная вправо выдаем это
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-two.svg");
                            }
                            //Если во втором поле поворотная-откидная влево выдаем это
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-one.svg");
                            }

                            // Кнопки
                            calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).click(function () {
                                //Если во втором поле глухая выдаем это
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-six.svg");
                                }
                                //Если во втором поле поворотная вправо выдаем это
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-two.svg");
                                }
                                //Если во втором поле поворотная влево выдаем это
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-one.svg");
                                }
                                //Если во втором поле поворотная-откидная вправо выдаем это
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-two.svg");
                                }
                                //Если во втором поле поворотная-откидная влево выдаем это
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-one.svg");
                                }
                            });
                            calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).click(function () {
                                //Если во втором поле глухая выдаем это
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-four.svg");
                                }
                                //Если во втором поле поворотная вправо выдаем это
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-five.svg");
                                }
                                //Если во втором поле поворотная влево выдаем это
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-three.svg");
                                }
                                //Если во втором поле поворотная-откидная вправо выдаем это
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-five.svg");
                                }
                                //Если во втором поле поворотная-откидная влево выдаем это
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-three.svg");
                                }
                            });
                        });
                        calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).click(function () {
                            calculatorCharSashBlockTwoElemTwo.removeClass('hidden');
                            calculatorCharSashBlockTwoElemTwo.find('.select-item').removeClass('selected');
                            calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).addClass('selected');
                            calculatorCharSashBlockTwoElemTwo.find('.select__text').text(calculatorCharSashBlockTwoElemTwo.find('.selected').text());
                            //Если в первом поле глухая выдаем это
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-eith.svg");
                            }
                            //Если в первом поле поворотная вправо выдаем это
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-two.svg");
                            }
                            //Если в первом поле поворотная влево выдаем это
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-five.svg");
                            }
                            //Если в первом поле поворотная-откидная вправо выдаем это
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-two.svg");
                            }
                            //Если в первом поле поворотная-откидная влево выдаем это
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-five.svg");
                            }

                            calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).click(function () {
                                //Если в первом поле глухая выдаем это
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-eith.svg");
                                }
                                //Если в первом поле поворотная вправо выдаем это
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-two.svg");
                                }
                                //Если в первом поле поворотная влево выдаем это
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-five.svg");
                                }
                                //Если в первом поле поворотная-откидная вправо выдаем это
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-two.svg");
                                }
                                //Если в первом поле поворотная-откидная влево выдаем это
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-five.svg");
                                }
                            });

                            calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).click(function () {
                                //Если в первом поле глухая выдаем это
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-seven.svg");
                                }
                                //Если в первом поле поворотная вправо выдаем это
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-one.svg");
                                }
                                //Если в первом поле поворотная влево выдаем это
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-three.svg");
                                }
                                //Если в первом поле поворотная-откидная вправо выдаем это
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-one.svg");
                                }
                                //Если в первом поле поворотная-откидная влево выдаем это
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/double-wing/window-three.svg");
                                }
                            });
                        });
                    }
                    swingoutTwoWindow();
                }
                //Трехстворчатое
                if($(this).hasClass('_window-three')) {
                    calculatorCharSashBlockOne.css({"display":"flex"});
                    calculatorCharSashBlockTwo.css({"display":"flex"});
                    calculatorCharSashBlockThree.css({"display":"flex"});
                    calculatorCharSashBlockOne.removeClass('no-active');
                    calculatorCharSashBlockTwo.removeClass('no-active');
                    calculatorCharSashBlockThree.removeClass('no-active');
                    calculatorCharSashBlockFour.removeClass('active');
                    //Глухая
                    function deafThreeWindow() {
                        // Если в первом поле глухое
                        calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).click(function () {
                            calculatorCharSashBlockOneElemTwo.addClass('hidden');
                            calculatorCharSashBlockOneElemTwo.find('.select-item').removeClass('selected');
                            calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).addClass('selected');
                            calculatorCharSashBlockOneElemTwo.find('.select__text').text(calculatorCharSashBlockOneElemTwo.find('.selected').text());
                            //Если во втором поле глухая
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-one.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-three.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-two.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-three.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-two.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная вправо
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-four.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eith.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nine.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eith.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nine.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная влево
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-five.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-ten.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eleven.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-ten.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eleven.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная-откидная вправо
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-four.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eith.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nine.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eith.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nine.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная-откидная влево
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-five.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-ten.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eleven.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-ten.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eleven.svg");
                                }
                            }
                        });
                        // Если во втором глухое
                        calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).click(function () {
                            calculatorCharSashBlockTwoElemTwo.addClass('hidden');
                            calculatorCharSashBlockTwoElemTwo.find('.select-item').removeClass('selected');
                            calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).addClass('selected');
                            calculatorCharSashBlockTwoElemTwo.find('.select__text').text(calculatorCharSashBlockTwoElemTwo.find('.selected').text());
                            //Если в первом поле глухая
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-one.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-three.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-two.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-three.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-two.svg");
                                }
                            }
                            ////////////////
                            //Если в первом поле поворотная вправо
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seven.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eithteen.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twenty.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eithteen.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twenty.svg");
                                }
                            }
                            ////////////////
                            //Если в первом поле поворотная влево
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seven.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyone.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nineteen.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyone.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nineteen.svg");
                                }
                            }
                            ////////////////
                            //Если в первом поле поворотная-откидная вправо
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seven.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eithteen.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twenty.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eithteen.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twenty.svg");
                                }
                            }
                            ////////////////
                            //Если в первом поле поворотная-откидная влево
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seven.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyone.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nineteen.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyone.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nineteen.svg");
                                }
                            }
                        });
                        // Если в третьем глухое
                        calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).click(function () {
                            calculatorCharSashBlockThreeElemTwo.addClass('hidden');
                            calculatorCharSashBlockThreeElemTwo.find('.select-item').removeClass('selected');
                            calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).addClass('selected');
                            calculatorCharSashBlockThreeElemTwo.find('.select__text').text(calculatorCharSashBlockThreeElemTwo.find('.selected').text());
                            //Если в первом поле глухая
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                // И во втором поле глухая
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-one.svg");
                                }
                                // во втором поле поворотная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-four.svg");
                                }
                                // во втором поле поворотная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-five.svg");
                                }
                                // во втором поле поворотная-откидная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-four.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-five.svg");
                                }
                            }
                            ////////////////
                            //Если в первом поле поворотная вправо
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seven.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fourteen.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fifteen.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fourteen.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fifteen.svg");
                                }
                            }
                            ////////////////
                            //Если в первом поле поворотная влево
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seven.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seventeen.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-sixteen.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seventeen.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-sixteen.svg");
                                }
                            }
                            ////////////////
                            //Если в первом поле поворотная-откидная вправо
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seven.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fourteen.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fifteen.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fourteen.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fifteen.svg");
                                }
                            }
                            ////////////////
                            //Если в первом поле поворотная-откидная влево
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seven.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seventeen.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-sixteen.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seventeen.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-sixteen.svg");
                                }
                            }
                        });
                    }
                    deafThreeWindow();

                    function rotaryThreeWindow() {
                        calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).click(function () {
                            calculatorCharSashBlockOneElemTwo.removeClass('hidden');
                            calculatorCharSashBlockOneElemTwo.find('.select-item').removeClass('selected');
                            calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).addClass('selected');
                            calculatorCharSashBlockOneElemTwo.find('.select__text').text(calculatorCharSashBlockOneElemTwo.find('.selected').text());
                            //Если во втором поле глухая
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seven.svg");
                                };
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eithteen.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twenty.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eithteen.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twenty.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная вправо
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fourteen.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная влево
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fifteen.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная-откидная вправо
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fourteen.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная-откидная влево
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fifteen.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                }
                            }
                            calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).click(function () {
                                //Если во втором поле глухая
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seven.svg");
                                    };
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eithteen.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twenty.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eithteen.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twenty.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fourteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fifteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fourteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fifteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                }
                            });

                            calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).click(function () {
                                //Если во втором поле глухая
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-six.svg");
                                    };
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyone.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nineteen.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyone.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nineteen.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seventeen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-sixteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seventeen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-sixteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                }
                            });
                        });
                        calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).click(function () {
                            calculatorCharSashBlockTwoElemTwo.removeClass('hidden');
                            calculatorCharSashBlockTwoElemTwo.find('.select-item').removeClass('selected');
                            calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).addClass('selected');
                            calculatorCharSashBlockTwoElemTwo.find('.select__text').text(calculatorCharSashBlockTwoElemTwo.find('.selected').text());
                            //Если во втором поле глухая
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-four.svg");
                                };
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eith.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nine.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eith.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nine.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная вправо
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fourteen.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная влево
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seventeen.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная-откидная вправо
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fourteen.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная-откидная влево
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seventeen.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                }
                            }
                            calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).click(function () {
                                //Если во втором поле глухая
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-four.svg");
                                    };
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eith.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nine.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eith.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nine.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная вправо
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fourteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная влево
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seventeen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная вправо
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fourteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная влево
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seventeen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                }
                            });

                            calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).click(function () {
                                //Если во втором поле глухая
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-five.svg");
                                    };
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-ten.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eleven.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-ten.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eleven.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная вправо
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fifteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная влево
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-sixteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная вправо
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fifteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная влево
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-sixteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                }
                            });
                        });
                        calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).click(function () {
                            calculatorCharSashBlockThreeElemTwo.removeClass('hidden');
                            calculatorCharSashBlockThreeElemTwo.find('.select-item').removeClass('selected');
                            calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).addClass('selected');
                            calculatorCharSashBlockThreeElemTwo.find('.select__text').text(calculatorCharSashBlockThreeElemTwo.find('.selected').text());
                            //Если во втором поле глухая
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-three.svg");
                                };
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eith.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-ten.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eith.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-ten.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная вправо
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eithteen.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная влево
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyone.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная-откидная вправо
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eithteen.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная-откидная влево
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyone.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                }
                            }
                            calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).click(function () {
                                //Если во втором поле глухая
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-three.svg");
                                    };
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eith.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-ten.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eith.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-ten.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная вправо
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eithteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная влево
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyone.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная вправо
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eithteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная влево
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyone.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                }
                            });

                            calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).click(function () {
                                //Если во втором поле глухая
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-two.svg");
                                    };
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nine.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eleven.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nine.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eleven.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная вправо
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twenty.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная влево
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nineteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная вправо
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twenty.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная влево
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nineteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                }
                            });
                        });
                    }  
                    rotaryThreeWindow();

                    function swingoutThreeWindow() {
                        calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).click(function () {
                            calculatorCharSashBlockOneElemTwo.removeClass('hidden');
                            calculatorCharSashBlockOneElemTwo.find('.select-item').removeClass('selected');
                            calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).addClass('selected');
                            calculatorCharSashBlockOneElemTwo.find('.select__text').text(calculatorCharSashBlockOneElemTwo.find('.selected').text());
                            //Если во втором поле глухая
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seven.svg");
                                };
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eithteen.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twenty.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eithteen.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twenty.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная вправо
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fourteen.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная влево
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fifteen.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная-откидная вправо
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fourteen.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная-откидная влево
                            if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fifteen.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                }
                            }
                            calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).click(function () {
                                //Если во втором поле глухая
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seven.svg");
                                    };
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eithteen.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twenty.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eithteen.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twenty.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fourteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fifteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fourteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fifteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                }
                            });

                            calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).click(function () {
                                //Если во втором поле глухая
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-six.svg");
                                    };
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyone.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nineteen.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyone.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nineteen.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seventeen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-sixteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seventeen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-sixteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                }
                            });
                        });
                        calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).click(function () {
                            calculatorCharSashBlockTwoElemTwo.removeClass('hidden');
                            calculatorCharSashBlockTwoElemTwo.find('.select-item').removeClass('selected');
                            calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).addClass('selected');
                            calculatorCharSashBlockTwoElemTwo.find('.select__text').text(calculatorCharSashBlockTwoElemTwo.find('.selected').text());
                            //Если во втором поле глухая
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-four.svg");
                                };
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eith.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nine.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eith.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nine.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная вправо
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fourteen.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная влево
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seventeen.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная-откидная вправо
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fourteen.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная-откидная влево
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seventeen.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                }
                            }
                            calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).click(function () {
                                //Если во втором поле глухая
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-four.svg");
                                    };
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eith.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nine.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eith.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nine.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная вправо
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fourteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная влево
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seventeen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная вправо
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fourteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная влево
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-seventeen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                }
                            });

                            calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).click(function () {
                                //Если во втором поле глухая
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-five.svg");
                                    };
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-ten.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eleven.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-ten.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eleven.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная вправо
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fifteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная влево
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-sixteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная вправо
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-fifteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная влево
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-sixteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                }
                            });
                        });
                        calculatorCharSashBlockThreeElemOne.find('.select-item').eq(2).click(function () {
                            calculatorCharSashBlockThreeElemTwo.removeClass('hidden');
                            calculatorCharSashBlockThreeElemTwo.find('.select-item').removeClass('selected');
                            calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).addClass('selected');
                            calculatorCharSashBlockThreeElemTwo.find('.select__text').text(calculatorCharSashBlockThreeElemTwo.find('.selected').text());
                            //Если во втором поле глухая
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-three.svg");
                                };
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eith.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-ten.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eith.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-ten.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная вправо
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eithteen.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная влево
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyone.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная-откидная вправо
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eithteen.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                }
                            }
                            ////////////////
                            //Если во втором поле поворотная-откидная влево
                            if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                // И в третьем поле глухая
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyone.svg");
                                }
                                // И в третьем поле поворотная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                }
                                // И в третьем поле поворотная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                }
                                // И в третьем поле поворотная-откидная вправо
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                }
                                // И в третьем поле поворотная-откидная влево
                                if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                }
                            }
                            calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(0).click(function () {
                                //Если во втором поле глухая
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-three.svg");
                                    };
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eith.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-ten.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eith.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-ten.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная вправо
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eithteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная влево
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyone.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyseven.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная вправо
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eithteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentysix.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentynine.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная влево
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyone.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfive.svg");
                                    }
                                }
                            });

                            calculatorCharSashBlockThreeElemTwo.find('.select-item').eq(1).click(function () {
                                //Если во втором поле глухая
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-two.svg");
                                    };
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nine.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eleven.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nine.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-eleven.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная вправо
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twenty.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная влево
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nineteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная вправо
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twenty.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentytwo.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyeith.svg");
                                    }
                                }
                                ////////////////
                                //Если во втором поле поворотная-откидная влево
                                if(calculatorCharSashBlockOneElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockOneElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                    // И в третьем поле глухая
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-nineteen.svg");
                                    }
                                    // И в третьем поле поворотная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(1).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                    // И в третьем поле поворотная-откидная вправо
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentythree.svg");
                                    }
                                    // И в третьем поле поворотная-откидная влево
                                    if(calculatorCharSashBlockTwoElemOne.find('.select-item').eq(2).hasClass('selected') && calculatorCharSashBlockTwoElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/tricuspid/window-twentyfour.svg");
                                    }
                                }
                            });
                        });
                    }
                    swingoutThreeWindow();
                }
                // Балконная дверь
                if($(this).hasClass('_door')) {
                    calculatorCharSashBlockOne.css({"display":"none"});
                    calculatorCharSashBlockTwo.css({"display":"none"});
                    calculatorCharSashBlockThree.css({"display":"none"});
                    calculatorCharSashBlockOne.addClass('no-active');
                    calculatorCharSashBlockTwo.addClass('no-active');
                    calculatorCharSashBlockThree.addClass('no-active');
                    calculatorCharSashBlockFour.addClass('active');
                    calculatorCharSashBlockFour.removeClass('no-active');
                    function rotaryDoor() {
                        if(calculatorCharSashBlockFourElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                            $('.calculator-characteristic-image__img').attr("src", "images/calculator/balcony-door/balcony-door-one.svg");
                        }
                        if(calculatorCharSashBlockFourElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                            $('.calculator-characteristic-image__img').attr("src", "images/calculator/balcony-door/balcony-door-two.svg");
                        }
                        calculatorCharSashBlockFourElemTwo.find('.select-item').eq(0).click(function () {
                            $('.calculator-characteristic-image__img').attr("src", "images/calculator/balcony-door/balcony-door-one.svg");
                        });
                        calculatorCharSashBlockFourElemTwo.find('.select-item').eq(1).click(function () {
                            $('.calculator-characteristic-image__img').attr("src", "images/calculator/balcony-door/balcony-door-two.svg");
                        });
                    }
                    rotaryDoor();
                }
                // Портальные двери
                if($(this).hasClass('_portal-door')) {
                    
                }
            });
            $('.calculator-construction-type').click(function() {
                
            })
        }
        calculatorImage();
        
        function portalDoorsBTN() {
            function doorActiveImage() {
                //ДВЕРИ HS
                if($('.calculator-construction-type-btn').eq(0).hasClass('active') && $('.calculator-configuration-block').eq(1).find('.calculator-configuration-btn').eq(0).hasClass('active')) {                
                    calculatorCharSashBlockFive.removeClass('no-active')
                    if(calculatorCharSashBlockFiveElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-eleven.svg");
                    }
                    if(calculatorCharSashBlockFiveElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-ten.svg");
                    }
                    calculatorCharSashBlockFiveElemTwo.find('.select-item').eq(0).click(function () {
                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-eleven.svg");
                    })
                    calculatorCharSashBlockFiveElemTwo.find('.select-item').eq(1).click(function () {
                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-ten.svg");
                    })
                }
                if($('.calculator-construction-type-btn').eq(0).hasClass('active') && $('.calculator-configuration-block').eq(1).find('.calculator-configuration-btn').eq(2).hasClass('active')) {
                    calculatorCharSashBlockFive.addClass('no-active')
                    $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-one.svg");
                }
                //ДВЕРИ FS
                if($('.calculator-construction-type-btn').eq(1).hasClass('active') && $('.calculator-configuration-block').eq(1).find('.calculator-configuration-btn').eq(0).hasClass('active')) {
                    calculatorCharSashBlockFive.removeClass('no-active')
                    if(calculatorCharSashBlockFiveElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-four.svg");
                    }
                    if(calculatorCharSashBlockFiveElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-five.svg");
                    }
                    calculatorCharSashBlockFiveElemTwo.find('.select-item').eq(0).click(function () {
                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-four.svg");
                    })
                    calculatorCharSashBlockFiveElemTwo.find('.select-item').eq(1).click(function () {
                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-five.svg");
                    })
                }
                if($('.calculator-construction-type-btn').eq(1).hasClass('active') && $('.calculator-configuration-block').eq(1).find('.calculator-configuration-btn').eq(1).hasClass('active')) {
                    calculatorCharSashBlockFive.removeClass('no-active')
                    if(calculatorCharSashBlockFiveElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-seven.svg");
                    }
                    if(calculatorCharSashBlockFiveElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-six.svg");
                    }
                    calculatorCharSashBlockFiveElemTwo.find('.select-item').eq(0).click(function () {
                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-seven.svg");
                    })
                    calculatorCharSashBlockFiveElemTwo.find('.select-item').eq(1).click(function () {
                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-six.svg");
                    })
                }
                if($('.calculator-construction-type-btn').eq(1).hasClass('active') && $('.calculator-configuration-block').eq(1).find('.calculator-configuration-btn').eq(2).hasClass('active')) {
                    calculatorCharSashBlockFive.removeClass('no-active')
                    if(calculatorCharSashBlockFiveElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-nine.svg");
                    }
                    if(calculatorCharSashBlockFiveElemTwo.find('.select-item').eq(1).hasClass('selected')) {
                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-eith.svg");
                    }
                    calculatorCharSashBlockFiveElemTwo.find('.select-item').eq(0).click(function () {
                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-nine.svg");
                    })
                    calculatorCharSashBlockFiveElemTwo.find('.select-item').eq(1).click(function () {
                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-eith.svg");
                    })
                }
                //ДВЕРИ PSK
                if($('.calculator-construction-type-btn').eq(2).hasClass('active') && $('.calculator-configuration-block').eq(1).find('.calculator-configuration-btn').eq(0).hasClass('active')) {
                    calculatorCharSashBlockFive.removeClass('no-active')
                    if(calculatorCharSashBlockFiveElemTwo.find('.select-item').eq(0).hasClass('selected')) {
                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-two.svg");
                    }
                    if(calculatorCharSashBlockFiveElemTwo.eq(1).find('.select-item').hasClass('selected')) {
                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-three.svg");
                    }
                    calculatorCharSashBlockFiveElemTwo.find('.select-item').eq(0).click(function () {
                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-two.svg");
                    })
                    calculatorCharSashBlockFiveElemTwo.find('.select-item').eq(1).click(function () {
                        $('.calculator-characteristic-image__img').attr("src", "images/calculator/portal-door/door-three.svg");
                    })
                }
            }
            $('.calculator-construction-type-btn').click(function() {
                $('.calculator-construction-type-btn').removeClass('active')
                $(this).addClass('active');
                doorActiveImage()
                calculatorCharSashBlockFiveElemTwo.find('.select-item').removeClass('selected');
                calculatorCharSashBlockFiveElemTwo.find('.select-item').eq(0).addClass('selected');
                calculatorCharSashBlockFiveElemTwo.find('.select__text').text(calculatorCharSashBlockFiveElemTwo.find('.selected').text());
                if($('.calculator-construction-type-btn').eq(0).hasClass('active')) {
                    $('._portal-door').eq(0).css({"display":"flex"});
                    $('._portal-door').eq(0).find('svg').replaceWith(`
                    <svg width="69" height="67" viewBox="0 0 69 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.723877" y="1.31421" width="33.558" height="64.8016" stroke="#BBBBBB"/>
                        <path d="M4 5H30.7644L31 63H4V5Z" stroke="#BBBBBB"/>
                        <rect x="34.282" y="1.31421" width="33.558" height="64.8016" stroke="#BBBBBB"/>
                        <path d="M38 5H64.7644L65 63H38V5Z" stroke="#BBBBBB"/>
                        <line x1="0.5" y1="-0.5" x2="11.0717" y2="-0.5" transform="matrix(0.707107 0.707107 -0.634405 0.773001 47.0107 29.6238)" stroke="#E0E0E0" stroke-linecap="round"/>
                        <line x1="0.5" y1="-0.5" x2="11.0717" y2="-0.5" transform="matrix(-0.707107 0.707107 0.634405 0.773001 55.1931 29.6238)" stroke="#E0E0E0" stroke-linecap="round"/>
                        <path d="M11.1384 37.7651H21.553" stroke="#E0E0E0"/>
                    </svg>
                    `)
                    $('._portal-door').eq(1).css({"display":"none"});
                    $('._portal-door').eq(2).css({"display":"flex"});
                    $('._portal-door').eq(2).find('svg').replaceWith(`
                    <svg width="85" height="67" viewBox="0 0 85 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1.31421" width="20.8291" height="64.8016" stroke="#BBBBBB"/>
                        <path d="M3 4H18.8604L19 63H3V4Z" stroke="#BBBBBB"/>
                        <rect x="21.4912" y="1.31421" width="20.8291" height="64.8016" stroke="#BBBBBB"/>
                        <path d="M24 4H39.8604L40 63H24V4Z" stroke="#BBBBBB"/>
                        <rect x="42.3203" y="1.31421" width="20.8291" height="64.8016" stroke="#BBBBBB"/>
                        <path d="M45 4H60.8604L61 63H45V4Z" stroke="#BBBBBB"/>
                        <rect x="63.1494" y="1.31421" width="20.8291" height="64.8016" stroke="#BBBBBB"/>
                        <path d="M66 4H81.8604L82 63H66V4Z" stroke="#BBBBBB"/>
                        <line x1="0.5" y1="-0.5" x2="11.0717" y2="-0.5" transform="matrix(0.707107 0.707107 -0.634405 0.773001 69.4729 29.6238)" stroke="#E0E0E0" stroke-linecap="round"/>
                        <line x1="0.5" y1="-0.5" x2="11.0717" y2="-0.5" transform="matrix(-0.707107 0.707107 0.634405 0.773001 77.6553 29.6238)" stroke="#E0E0E0" stroke-linecap="round"/>
                        <line x1="0.5" y1="-0.5" x2="11.0717" y2="-0.5" transform="matrix(0.707107 0.707107 -0.634405 0.773001 7.02661 29.6238)" stroke="#E0E0E0" stroke-linecap="round"/>
                        <line x1="0.5" y1="-0.5" x2="11.0717" y2="-0.5" transform="matrix(-0.707107 0.707107 0.634405 0.773001 15.209 29.6238)" stroke="#E0E0E0" stroke-linecap="round"/>
                        <path d="M47.5276 37.7651H57.9421" stroke="#E0E0E0"/>
                        <path d="M37.113 37.7651H26.6985" stroke="#E0E0E0"/>
                        </svg>

                    `)

                }
                if($('.calculator-construction-type-btn').eq(1).hasClass('active')) {
                    $('._portal-door').eq(0).css({"display":"flex"});
                    $('._portal-door').eq(0).find('svg').replaceWith(`
                    <svg width="75" height="67" viewBox="0 0 75 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="1" y="1" width="24.3006" height="64.8016" stroke="#BBBBBB"/>
                                            <path d="M4 4H22.8342L23 63H4V4Z" stroke="#BBBBBB"/>
                                            <rect x="25.3005" y="1" width="24.3006" height="64.8016" stroke="#BBBBBB"/>
                                            <path d="M28 4H46.8342L47 63H28V4Z" stroke="#BBBBBB"/>
                                            <rect x="49.6011" y="1" width="24.3006" height="64.8016" stroke="#BBBBBB"/>
                                            <line x1="0.5" y1="-0.5" x2="16.7456" y2="-0.5" transform="matrix(-0.854964 0.518687 0.518687 0.854964 68.9741 28.7722)" stroke="#E0E0E0" stroke-linecap="round"/>
                                            <path d="M52 4H70.8342L71 63H52V4Z" stroke="#BBBBBB"/>
                                            <line x1="6.31549" y1="28.6041" x2="20.2048" y2="37.0304" stroke="#E0E0E0" stroke-linecap="round"/>
                                            <line x1="0.5" y1="-0.5" x2="16.7456" y2="-0.5" transform="matrix(0.854964 -0.518687 -0.518687 -0.854964 29.9292 37.717)" stroke="#E0E0E0" stroke-linecap="round"/>
                                        </svg>
                    `)
                    $('._portal-door').eq(1).css({"display":"flex"});
                    $('._portal-door').eq(1).find('svg').replaceWith(`
                    <svg width="75" height="67" viewBox="0 0 75 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="1" y="1" width="24.3006" height="64.8016" stroke="#BBBBBB"/>
                                            <path d="M4 4H22.8342L23 63H4V4Z" stroke="#BBBBBB"/>
                                            <rect x="25.3005" y="1" width="24.3006" height="64.8016" stroke="#BBBBBB"/>
                                            <path d="M27.9998 4H46.834L46.9998 63H27.9998V4Z" stroke="#BBBBBB"/>
                                            <rect x="49.6011" y="1" width="24.3006" height="64.8016" stroke="#BBBBBB"/>
                                            <path d="M52 4H70.8342L71 63H52V4Z" stroke="#BBBBBB"/>
                                            <line x1="6.31573" y1="28.6041" x2="20.2051" y2="37.0304" stroke="#E0E0E0" stroke-linecap="round"/>
                                            <line x1="54.9168" y1="28.6041" x2="68.8062" y2="37.0304" stroke="#E0E0E0" stroke-linecap="round"/>
                                            <line x1="0.5" y1="-0.5" x2="16.7456" y2="-0.5" transform="matrix(0.854964 -0.518687 -0.518687 -0.854964 29.9292 37.717)" stroke="#E0E0E0" stroke-linecap="round"/>
                                        </svg> 
                    `)
                    $('._portal-door').eq(2).css({"display":"flex"});
                    $('._portal-door').eq(2).find('svg').replaceWith(`
                    <svg width="85" height="67" viewBox="0 0 85 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="1" y="1.31421" width="20.8291" height="64.8016" stroke="#BBBBBB"/>
                                            <path d="M4 4H18.8691L19 63H4V4Z" stroke="#BBBBBB"/>
                                            <rect x="21.8291" y="1.31421" width="20.8291" height="64.8016" stroke="#BBBBBB"/>
                                            <path d="M24.8291 4H39.6982L39.8291 63H24.8291V4Z" stroke="#BBBBBB"/>
                                            <rect x="42.6582" y="1.31421" width="20.8291" height="64.8016" stroke="#BBBBBB"/>
                                            <path d="M46 4H60.8691L61 63H46V4Z" stroke="#BBBBBB"/>
                                            <rect x="63.4873" y="1.31421" width="20.8291" height="64.8016" stroke="#BBBBBB"/>
                                            <path d="M66.4878 4H81.3569L81.4878 63H66.4878V4Z" stroke="#BBBBBB"/>
                                            <line x1="0.5" y1="-0.5" x2="13.5" y2="-0.5" transform="matrix(0.821383 0.570377 -0.468314 0.883562 5 29)" stroke="#E0E0E0" stroke-linecap="round"/>
                                            <line x1="0.5" y1="-0.5" x2="13.5" y2="-0.5" transform="matrix(0.821383 0.570377 -0.468314 0.883562 48 30)" stroke="#E0E0E0" stroke-linecap="round"/>
                                            <line x1="0.5" y1="-0.5" x2="13.5" y2="-0.5" transform="matrix(0.821383 -0.570377 -0.468314 -0.883562 26 36.9854)" stroke="#E0E0E0" stroke-linecap="round"/>
                                            <line x1="0.5" y1="-0.5" x2="13.5" y2="-0.5" transform="matrix(0.821383 -0.570377 -0.468314 -0.883562 68 36.9854)" stroke="#E0E0E0" stroke-linecap="round"/>
                                        </svg> 
                    `)
                }
                if($('.calculator-construction-type-btn').eq(2).hasClass('active')) {
                    $('._portal-door').eq(0).css({"display":"flex"});
                    $('._portal-door').eq(0).find('svg').replaceWith(`
                    <svg width="89" height="71" viewBox="0 0 89 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 3.31421H28.7721L28.7721 68.0008H1V3.31421Z" stroke="#BBBBBB"/>
<path d="M3 6H28.766V65H3V6Z" stroke="#BBBBBB"/>
<rect x="60.5942" y="3.31421" width="27.7722" height="64.6866" stroke="#BBBBBB"/>
<path d="M60.6511 6H86V65H60.651L60.6511 6Z" stroke="#BBBBBB"/>
<rect x="28.772" y="1" width="31.8222" height="69.4303" stroke="#BBBBBB"/>
<rect x="31" y="4" width="27" height="63" stroke="#BBBBBB"/>
<line x1="0.5" y1="-0.5" x2="11.0717" y2="-0.5" transform="matrix(0.707107 0.707107 -0.634405 0.773001 13.1504 31.624)" stroke="#E0E0E0" stroke-linecap="round"/>
<line x1="0.5" y1="-0.5" x2="11.0717" y2="-0.5" transform="matrix(-0.707107 0.707107 0.634405 0.773001 21.3328 31.624)" stroke="#E0E0E0" stroke-linecap="round"/>
<line x1="0.5" y1="-0.5" x2="11.0717" y2="-0.5" transform="matrix(0.707107 0.707107 -0.634405 0.773001 69.8516 31.624)" stroke="#E0E0E0" stroke-linecap="round"/>
<line x1="0.5" y1="-0.5" x2="11.0717" y2="-0.5" transform="matrix(-0.707107 0.707107 0.634405 0.773001 78.0342 31.624)" stroke="#E0E0E0" stroke-linecap="round"/>
<path d="M40.3438 35.7151H50.7583" stroke="#E0E0E0"/>
</svg>

                    `);
                    $('._portal-door').eq(1).css({"display":"none"});
                    $('._portal-door').eq(2).css({"display":"none"});
                }
            })
            $('.calculator-configuration-block').eq(1).find('.calculator-configuration-btn').click(function() {
                $('.calculator-configuration-block').eq(1).find('.calculator-configuration-btn').removeClass('active')
                $(this).addClass('active');
                doorActiveImage();
                calculatorCharSashBlockFiveElemTwo.find('.select-item').removeClass('selected');
                calculatorCharSashBlockFiveElemTwo.find('.select-item').eq(0).addClass('selected');
                calculatorCharSashBlockFiveElemTwo.find('.select__text').text(calculatorCharSashBlockFiveElemTwo.find('.selected').text());
            })
            
        }
        portalDoorsBTN ();

        $('.calculator-other-color-item').click(function () {
            $('.color').val($(this).find('.calculator-other-color-item__title').text())
        })
        function resultStageOne() {
            $('.calculator-btn.next').click(function() {
                let resultInput = '';
                if(!calculatorCharSashBlockOne.hasClass('no-active')) {
                    $('.setting-one').val($('.setting-one').next().text().trim());
                    $('.setting-one-side').val($('.setting-one-side').next().text().trim());
                }
                if(!calculatorCharSashBlockTwo.hasClass('no-active')) {
                    $('.setting-two').val($('.setting-two').next().text().trim());
                    $('.setting-two-side').val($('.setting-two-side').next().text().trim());
                }
                if(!calculatorCharSashBlockThree.hasClass('no-active')) {
                    $('.setting-three').val($('.setting-three').next().text().trim());
                    $('.setting-three-side').val($('.setting-three-side').next().text().trim());
                } 
                if(!calculatorCharSashBlockFour.hasClass('no-active')) {
                    $('.setting-balcony').val($('.setting-balcony').next().text().trim());
                    $('.setting-balcony-side').val($('.setting-balcony-side').next().text().trim());
                } 
                if(!calculatorCharSashBlockFive.hasClass('no-active')) {
                    $('.setting-portal-side').val($('.setting-balcony-side').next().text().trim());
                } 
                $('.breed').val($('.breed').next().text().trim());
                $('.cover').val($('.cover').next().text().trim());
                $('.slopes').val($('.slopes').next().text().trim());
                $('.windowsill').val($('.windowsill').next().text().trim());

                // Переносим данные в инпут с датой
                setTimeout(() => {
                    if($('.calculator-stage-item').length <= 1) {
                        if($('.calculator-construction-btn').find('input').is(':checked')) {
                            $('.calculator-stage-item__text_construction').text($('.calculator-construction-btn').find('input:checked').val())
                        }
                        if($('.calculator-configuration-btn').find('input').is(':checked')) {
                            $('.calculator-stage-item__text_type').text($('.calculator-configuration-btn').find('input:checked').val())
                        }
                        $('.calculator-stage-item__text_num').text($('.calculator-characteristic-count-elem').find('input').val())
                        $('.calculator-stage-list').css({"display":"block"});
                    } else {
                        if($('.calculator-construction-btn').find('input').is(':checked')) {
                            $('.calculator-stage-item').last().find('.calculator-stage-item__text_construction').text($('.calculator-construction-btn').find('input:checked').val())
                        }
                        if($('.calculator-configuration-btn').find('input').is(':checked')) {
                            $('.calculator-stage-item').last().find('.calculator-stage-item__text_type').text($('.calculator-configuration-btn').find('input:checked').val())
                        }
                        $('.calculator-stage-item').last().find('.calculator-stage-item__text_num').text($('.calculator-characteristic-count-elem').find('input').val())
                    }
                }, 200);
                $('.calculator-stage-block').css({"display":"none"});
                $('.calculator-stage').eq(0).removeClass('active');
                $('.calculator-stage').eq(1).addClass('slides-stage');
                $('.calculator-stage').eq(1).addClass('active');

                let resultRadioCheckbox = []
                $('.calculator-other-additionally-btn input:checked').each(function() {  
                    return resultRadioCheckbox.push($(this).val())
                })

                resultInput = "Конструкция: " + $('.calculator-construction-btn').find('input:checked').val() + "\n" 
                + "Тип конструкции: " + $('.calculator-construction-type-btn').find('input:checked').val() + "\n"
                + "Конфигурация: " + $('.calculator-configuration-btn').find('input:checked').val() + "\n"
                + "Высота: " + $('.calculator-characteristic-size-height').find('input').val() + "\n"
                + "Ширина: " + $('.calculator-characteristic-size-width').find('input').val() + "\n"
                + "Количество: " + $('.calculator-characteristic-count-elem').find('input').val() + "\n"
                + "Настройка 1: " + $('.setting-one').val() + "\n"
                + "Настройка 1 - сторона: " + $('.setting-one').val() + "\n"
                + "Настройка 2: " + $('.setting-two').val() + "\n"
                + "Настройка 2 - сторона: " + $('.setting-two-side').val() + "\n"
                + "Настройка 3: " + $('.setting-three').val() + "\n"
                + "Настройка 3 - сторона: " + $('.setting-three-side').val() + "\n"
                + "Настройка балконной двери: " + $('.setting-balcony').val() + "\n"
                + "Настройка портальной двери: " + $('.setting-portal-side').val() + "\n"
                + "Порода дерева: " + $('.breed ').val() + "\n"
                + "Покрытие конструкции: " + $('.cover').val() + "\n"
                + "Цвет: " + $('.color').val() + "\n"
                + "Откосы: " + $('.slopes').val() + "\n"
                + "Подоконник: " + $('.windowsill ').val() + "\n"
                + "Дополнительно: " + resultRadioCheckbox.join(" | ");
                $('.calculator-data-stage-one__input').val(resultInput)
            })
        }
        resultStageOne();

        function houseInput () {
            $('.calculator-structure-elem').eq(0).find('.select-item').click(function() {
                setTimeout(() => {
                    //Если частный дом
                    if($('.calculator-structure-elem').eq(0).find('.select-item').eq(0).hasClass('selected')) {
                        $('.calculator-structure-elem').eq(1).removeClass('no-active');
                        $('.calculator-structure-elem').eq(1).find('ul').removeClass('select-list');
                        $('.calculator-structure-elem-text').addClass('no-active');
                        $('.calculator-structure-elem').eq(1).find('ul').eq(0).addClass('select-list');   

                        $('.calculator-structure-elem').eq(1).find('.select__text').text($('.calculator-structure-elem').eq(1).find('.private-list').find('.select-item').eq(0).text())
                        $('.calculator-structure-elem').eq(1).find('.private-list').find('.select-item').removeClass('selected')
                        $('.calculator-structure-elem').eq(1).find('.private-list').find('.select-item').eq(0).addClass('selected')  
                    }
                    //Если квартира
                    if($('.calculator-structure-elem').eq(0).find('.select-item').eq(1).hasClass('selected')) {
                        $('.calculator-structure-elem').eq(1).removeClass('no-active');           
                        $('.calculator-structure-elem').eq(1).find('ul').removeClass('select-list');
                        $('.calculator-structure-elem-text').addClass('no-active');
                        $('.calculator-structure-elem').eq(1).find('ul').eq(1).addClass('select-list');   
                        
                        $('.calculator-structure-elem').eq(1).find('.select__text').text($('.calculator-structure-elem').eq(1).find('.flat-list').find('.select-item').eq(0).text())
                        $('.calculator-structure-elem').eq(1).find('.flat-list').find('.select-item').removeClass('selected')
                        $('.calculator-structure-elem').eq(1).find('.flat-list').find('.select-item').eq(0).addClass('selected')
                    }
                    //Если другое
                    if($('.calculator-structure-elem').eq(0).find('.select-item').eq(2).hasClass('selected')) {
                        $('.calculator-structure-elem').eq(1).addClass('no-active');
                        $('.calculator-structure-elem-text').removeClass('no-active');
                    }
                }, 100);
            })
        }
        houseInput();

        function dopConstruction() {
            $('.calculator-btn.still').click(function () {
                let count = $('.calculator-stage-item').length
                let resultInput = '';
                $('.calculator-data-stage-one').append(`<input type="hidden" name="data-stage-one${count}" class="calculator-data-stage-one__input${count}">`)

                


                if(!calculatorCharSashBlockOne.hasClass('no-active')) {
                    $('.setting-one').val($('.setting-one').next().text().trim());
                    $('.setting-one-side').val($('.setting-one-side').next().text().trim());
                }
                if(!calculatorCharSashBlockTwo.hasClass('no-active')) {
                    $('.setting-two').val($('.setting-two').next().text().trim());
                    $('.setting-two-side').val($('.setting-two-side').next().text().trim());
                }
                if(!calculatorCharSashBlockThree.hasClass('no-active')) {
                    $('.setting-three').val($('.setting-three').next().text().trim());
                    $('.setting-three-side').val($('.setting-three-side').next().text().trim());
                } 
                if(!calculatorCharSashBlockFour.hasClass('no-active')) {
                    $('.setting-balcony').val($('.setting-balcony').next().text().trim());
                    $('.setting-balcony-side').val($('.setting-balcony-side').next().text().trim());
                } 
                if(!calculatorCharSashBlockFive.hasClass('no-active')) {
                    $('.setting-portal-side').val($('.setting-balcony-side').next().text().trim());
                } 
                $('.breed').val($('.breed').next().text().trim());
                $('.cover').val($('.cover').next().text().trim());
                $('.slopes').val($('.slopes').next().text().trim());
                $('.windowsill').val($('.windowsill').next().text().trim());
                $('.calculator-stage-list').css({"display":"block"});

                let resultRadioCheckbox = []
                $('.calculator-other-additionally-btn input:checked').each(function() {  
                    return resultRadioCheckbox.push($(this).val())
                })
                resultInput = "Конструкция: " + $('.calculator-construction-btn').find('input:checked').val() + "\n" 
                + "Тип конструкции: " + $('.calculator-construction-type-btn').find('input:checked').val() + "\n"
                + "Конфигурация: " + $('.calculator-configuration-btn').find('input:checked').val() + "\n"
                + "Высота: " + $('.calculator-characteristic-size-height').find('input').val() + "\n"
                + "Ширина: " + $('.calculator-characteristic-size-width').find('input').val() + "\n"
                + "Количество: " + $('.calculator-characteristic-count-elem').find('input').val() + "\n"
                + "Настройка 1: " + $('.setting-one').val() + "\n"
                + "Настройка 1 - сторона: " + $('.setting-one').val() + "\n"
                + "Настройка 2: " + $('.setting-two').val() + "\n"
                + "Настройка 2 - сторона: " + $('.setting-two-side').val() + "\n"
                + "Настройка 3: " + $('.setting-three').val() + "\n"
                + "Настройка 3 - сторона: " + $('.setting-three-side').val() + "\n"
                + "Настройка балконной двери: " + $('.setting-balcony').val() + "\n"
                + "Настройка портальной двери: " + $('.setting-portal-side').val() + "\n"
                + "Порода дерева: " + $('.breed ').val() + "\n"
                + "Покрытие конструкции: " + $('.cover').val() + "\n"
                + "Цвет: " + $('.color').val() + "\n"
                + "Откосы: " + $('.slopes').val() + "\n"
                + "Подоконник: " + $('.windowsill ').val() + "\n"
                + "Дополнительно: " + resultRadioCheckbox.join(" | ");

                console.log(resultInput)
                $(`.calculator-data-stage-one__input${count}`).val(resultInput)
                //console.log(ll)
                setTimeout(() => {
                    $('.setting-one').val('');
                    $('.setting-one-side').val('');
                    $('.setting-two').val('');
                    $('.setting-two-side').val('');
                    $('.setting-three').val('');
                    $('.setting-three-side').val('');
                    $('.setting-balcony').val('');
                    $('.setting-balcony-side').val('');
                    $('.breed').val('');
                    $('.cover').val('');
                    $('.slopes').val('');
                    $('.windowsill').val('');

                    $('.calculator-configuration').removeClass('slides');
                    $('.calculator-characteristic').removeClass('slides');
                    $('.calculator-other').removeClass('slides');
                    $('.calculator-buttons').removeClass('slides');

                    $('.calculator-stage-list').append(`
                        <li class="calculator-stage-item">
                            <p class="calculator-stage-item__text">
                                <span class="calculator-stage-item__text_construction">Расчитываем еще одну конструкцию</span>, 
                                <span class="calculator-stage-item__text_type">тип</span> - 
                                <span class="calculator-stage-item__text_num">0</span> шт.
                            </p>
                        </li>
                    `)
                }, 200);
                setTimeout(() => {
                    if($('.calculator-stage-item').length <= 1) {
                        if($('.calculator-construction-btn').find('input').is(':checked')) {
                            $('.calculator-stage-item__text_construction').text($('.calculator-construction-btn').find('input:checked').val())
                        }
                        if($('.calculator-configuration-btn').find('input').is(':checked')) {
                            $('.calculator-stage-item__text_type').text($('.calculator-configuration-btn').find('input:checked').val())
                        }
                        $('.calculator-stage-item__text_num').text($('.calculator-characteristic-count-elem').find('input').val())
                    } else {
                        if($('.calculator-construction-btn').find('input').is(':checked')) {
                            $('.calculator-stage-item').last().find('.calculator-stage-item__text_construction').text($('.calculator-construction-btn').find('input:checked').val())
                        }
                        if($('.calculator-configuration-btn').find('input').is(':checked')) {
                            $('.calculator-stage-item').last().find('.calculator-stage-item__text_type').text($('.calculator-configuration-btn').find('input:checked').val())
                        }
                        $('.calculator-stage-item').last().find('.calculator-stage-item__text_num').text($('.calculator-characteristic-count-elem').find('input').val())
                    }
                }, 50);
            })
        }
        dopConstruction()


        function stageTwo() {
            $('.calculator-btn.next').click(function() {
                $('.calculator-structure-elem').eq(0).find('input').val($('.calculator-structure-elem').eq(0).find('.select__text').text().trim());
                $('.calculator-structure-elem').eq(1).find('input').val($('.calculator-structure-elem').eq(1).find('.select__text').text().trim());
            })
            $('.calculator-structure-elem').eq(0).find('.select-item').click(function() {
                setTimeout(() => {
                    $('.calculator-structure-elem').eq(0).find('input').val($('.calculator-structure-elem').eq(0).find('.select__text').text().trim());
                    $('.calculator-structure-elem').eq(1).find('input').val($('.calculator-structure-elem').eq(1).find('.select__text').text().trim());
                    if(!$('.calculator-structure-elem-text').hasClass('no-active')) {
                        $('.calculator-structure-elem').eq(1).find('input').val('');
                    }
                }, 100);
            })
            $('.calculator-structure-elem').eq(1).find('.select-item').click(function() {
                setTimeout(() => {
                    $('.calculator-structure-elem').eq(1).find('input').val($('.calculator-structure-elem').eq(1).find('.select__text').text().trim());
                }, 100);
            })



            $('.calculator-stage-two__btn').click(function() {
                let resultRadioCheckboxWork = []
                $('.calculator-work-btn input:checked').each(function() {  
                    return resultRadioCheckboxWork.push($(this).val())
                })
                
                resultInput = "Тип сооружения: " + $('.calculator-structure-elem').eq(0).find('input').val() + "\n" 
                + "Тип сооружения: " + $('.calculator-structure-elem').eq(1).find('input').val() + "\n"
                + "Тип сооружения (Если выбрано: Другое):" + $('.house-text').val() + "\n"
                + "Толщина стены: " + $('.depth').val() + "\n"
                + "Дополнительная информация: " + $('.calculator-dop-elem').find('textarea').val() + "\n"
                + "Населенный пункт: " + $('.locality').val() + "\n"
                + "Дополнительно: " + resultRadioCheckboxWork.join(" | ");
                $('.calculator-data-stage-two__input').val(resultInput)
                
                $('.calculator-structure').css({"display":"none"});
                $('.calculator-stage').eq(1).removeClass('active');
                $('.calculator-stage').eq(2).addClass('slides-stage');
                $('.calculator-stage').eq(2).addClass('active');
            })
        }
        stageTwo()
    }
    calculator();
});