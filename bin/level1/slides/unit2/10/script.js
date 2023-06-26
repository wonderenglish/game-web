$(document).ready(function () {
    hideOverlay(500);
    // playSong('sound/jingle.mp3');
    // var arr = [1, 2, 3, 4, 5];
    // storySetRandom(arr);

    $('.next-slide').click(function () {
        nextSlide();
    });

    var object = document.getElementById("svgelem");

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;
        var svgElement1 = svgDocument.getElementById("L1");
        var svgElement2 = svgDocument.getElementById("L2");
        var svgElement3 = svgDocument.getElementById("L3");
        var svgElement4 = svgDocument.getElementById("L4");
        $(svgElement1).click(function () {
            var question = $('#question').attr('data-id');
            if (question) {
                if (question == 1) {
                    var last = svgDocument.getElementById('L4');
                    $('svg').append(svgElement1);
                    setTimeout(function (args) {
                        svgElement1.setAttribute("transform", "translate(30,80)"); //меняем атрибуты выбранного элемента
                    }, 100);
                    setTimeout(function (args) {
                        svgElement1.setAttribute("transform", "translate(0,0)"); //меняем атрибуты выбранного элемента
                    }, 1500);
                    playSlideVoice('sound/1', 500);
                } else {
                    playSong('sound/bad.mp3');
                }
            }
        });
        $(svgElement2).click(function () {
            var question = $('#question').attr('data-id');
            if (question) {
                if (question == 2) {
                    var last = svgDocument.getElementById('L1');
                    $('svg').append(svgElement2);
                    setTimeout(function (args) {
                        svgElement2.setAttribute("transform", "translate(-30,80)"); //меняем атрибуты выбранного элемента
                    }, 100);
                    setTimeout(function (args) {
                        svgElement2.setAttribute("transform", "translate(0,0)"); //меняем атрибуты выбранного элемента
                    }, 1500);
                    playSlideVoice('sound/2', 500);
                } else {
                    playSong('sound/bad.mp3');
                }
            }
        });
        $(svgElement3).click(function () {
            var question = $('#question').attr('data-id');
            if (question) {
                if (question == 3) {
                    var last = svgDocument.getElementById('L2');
                    $('svg').append(svgElement3);
                    setTimeout(function (args) {
                        svgElement3.setAttribute("transform", "translate(130,50)"); //меняем атрибуты выбранного элемента
                    }, 100);
                    setTimeout(function (args) {
                        svgElement3.setAttribute("transform", "translate(0,0)"); //меняем атрибуты выбранного элемента
                    }, 1500);
                    playSlideVoice('sound/3', 500);
                } else {
                    playSong('sound/bad.mp3');
                }
            }
        });
        $(svgElement4).click(function () {
            var question = $('#question').attr('data-id');
            if (question) {
                if (question == 4) {
                    var last = svgDocument.getElementById('L3');
                    $('svg').append(svgElement4);
                    setTimeout(function (args) {
                        svgElement4.setAttribute("transform", "translate(-130,50)"); //меняем атрибуты выбранного элемента
                    }, 100);
                    setTimeout(function (args) {
                        svgElement4.setAttribute("transform", "translate(0,0)"); //меняем атрибуты выбранного элемента
                    }, 1500);
                    playSlideVoice('sound/4', 500);
                } else {
                    playSong('sound/bad.mp3');
                }
            }
        });
    });
        $('.button, .replay').click(function () {
            if ($('#block').val() != 1) {
                $('.table__elem.active').removeClass('active').removeClass('on-top');
                var elem = $(this).attr('data-action');
                buttonAction(elem);
            }
        });

        $('.table__elem').click(function () {
            var id = $(this).attr('data-id');
            rate = $('#rate').val();
            playSlideVoice('sound/' + id, 1, rate);
        });
        $('.speeddown').click(function () {
            $('#rate').val(0.8);
            playSlideVoice('sound/slow', 1, 1);
        });

        $('.speedup').click(function () {
            $('#rate').val(1.5);
            playSlideVoice('sound/fast', 1, 1);
        });
    });

    /* Buttons */
    function buttonAction(elem) {

        $(elem).addClass('active').addClass('on-top');
        if (elem == 1) {
            phonicsSetQuestion(1);

            playSlideVoice('sound/1', 500);

        }

        if (elem == 2) {
            phonicsSetQuestion(2);

            playSlideVoice('sound/2', 500);

        }

        if (elem == 3) {
            phonicsSetQuestion(3);

            playSlideVoice('sound/3', 500);

        }

        if (elem == 4) {
            phonicsSetQuestion(4);

            playSlideVoice('sound/4', 500);

        }

        if (elem == 5) {

            playSlideVoice('sound/5', 500);

        }

    }