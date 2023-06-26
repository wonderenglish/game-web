var C1, C2, C3, C4, C5, C6, C7, C8, C9, C10;
$(document).ready(function () {
    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });

    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        C1 = svgDocument.getElementById("J"); //получаем любой элемент внутри svg
        C2 = svgDocument.getElementById("K"); //получаем любой элемент внутри svg
        C3 = svgDocument.getElementById("L"); //получаем любой элемент внутри svg
        C4 = svgDocument.getElementById("M"); //получаем любой элемент внутри svg
        C5 = svgDocument.getElementById("N"); //получаем любой элемент внутри svg
        C6 = svgDocument.getElementById("O"); //получаем любой элемент внутри svg
        C7 = svgDocument.getElementById("P"); //получаем любой элемент внутри svg
        C8 = svgDocument.getElementById("Q"); //получаем любой элемент внутри svg
        C9 = svgDocument.getElementById("R"); //получаем любой элемент внутри svg

        $(C1).click(function () {
            C1.setAttribute('transform', 'translate (0, 0) scale (1.5)');
            setTimeout(function (args) {
                C1.setAttribute('transform', 'translate (0, 0) scale (1)');
            }, 2000);
           playSlideVoice('sound/1',1,1);
        });

        $(C2).click(function () {
            C2.setAttribute('transform', 'translate (0, 0) scale (1.5)');
            setTimeout(function (args) {
                C2.setAttribute('transform', 'translate (0, 0) scale (1)');
            }, 2000);
            playSlideVoice('sound/2',1,1);
        });

        $(C3).click(function () {
            C3.setAttribute('transform', 'translate (0, 0) scale (1.5)');
            setTimeout(function (args) {
                C3.setAttribute('transform', 'translate (0, 0) scale (1)');
            }, 2000);
            playSlideVoice('sound/3',1,1);
        });

        $(C4).click(function () {
            C4.setAttribute('transform', 'translate (0, 0) scale (1.5)');
            setTimeout(function (args) {
                C4.setAttribute('transform', 'translate (0, 0) scale (1)');
            }, 2000);
            playSlideVoice('sound/4',1,1);
        });

        $(C5).click(function () {
            C5.setAttribute('transform', 'translate (0, 0) scale (1.5)');
            setTimeout(function (args) {
                C5.setAttribute('transform', 'translate (0, 0) scale (1)');
            }, 2000);
            playSlideVoice('sound/5',1,1);
        });

        $(C6).click(function () {
            C6.setAttribute('transform', 'translate (0, 0) scale (1.5)');
            setTimeout(function (args) {
                C6.setAttribute('transform', 'translate (0, 0) scale (1)');
            }, 2000);
            playSlideVoice('sound/6',1,1);
        });

        $(C7).click(function () {
            C7.setAttribute('transform', 'translate (0, 0) scale (1.5)');
            setTimeout(function (args) {
                C7.setAttribute('transform', 'translate (0, 0) scale (1)');
            }, 2000);
            playSlideVoice('sound/7',1,1);
        });

        $(C8).click(function () {
            C8.setAttribute('transform', 'translate (0, 0) scale (1.5)');
            setTimeout(function (args) {
                C8.setAttribute('transform', 'translate (0, 0) scale (1)');
            }, 2000);
            playSlideVoice('sound/8',1,1);
        });

        $(C9).click(function () {
            C9.setAttribute('transform', 'translate (0, 0) scale (1.5)');
            setTimeout(function (args) {
                C9.setAttribute('transform', 'translate (0, 0) scale (1)');
            }, 2000);
            playSlideVoice('sound/9',1,1);
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
        C1.setAttribute('transform', 'translate (0, 0) scale (1.5)');
        setTimeout(function (args) {
            $(C1).find('path').removeClass('red');
            C1.setAttribute('transform', 'translate (0, 0) scale (1)');
        }, 2000);
        playSlideVoice('sound/1', 1);
    }

    if (elem == 2) {
        C2.setAttribute('transform', 'translate (0, 0) scale (1.5)');
        setTimeout(function (args) {
            $(C2).removeClass('green');
            C2.setAttribute('transform', 'translate (0, 0) scale (1)');
        }, 2000);
        playSlideVoice('sound/2', 1);

    }

    if (elem == 3) {
        C3.setAttribute('transform', 'translate (0, 0) scale (1.5)');
        setTimeout(function (args) {
            C3.setAttribute('transform', 'translate (0, 0) scale (1)');
        }, 2000);
        playSlideVoice('sound/3', 1);

    }

    if (elem == 4) {
        C4.setAttribute('transform', 'translate (0, 0) scale (1.5)');
        setTimeout(function (args) {
            $(C4).find('path').removeClass('brown');
            C4.setAttribute('transform', 'translate (0, 0) scale (1)');
        }, 2000);
        playSlideVoice('sound/4', 1);

    }

    if (elem == 5) {
        C5.setAttribute('transform', 'translate (0, 0) scale (1.5)');
        setTimeout(function (args) {
            $(C5).find('path').removeClass('red');
            C5.setAttribute('transform', 'translate (0, 0) scale (1)');
        }, 2000);
        playSlideVoice('sound/5', 1);

    }

    if (elem == 6) {
        C6.setAttribute('transform', 'translate (0, 0) scale (1.5)');
        setTimeout(function (args) {
            $(C6).find('path').removeClass('purple');
            C6.setAttribute('transform', 'translate (0, 0) scale (1)');
        }, 2000);
        playSlideVoice('sound/6', 1);

    }

    if (elem == 7) {
        C7.setAttribute('transform', 'translate (-70, 0) scale (3.5)');
        setTimeout(function (args) {
            $(C7).find('path').removeClass('red');
            C7.setAttribute('transform', 'translate (0, 0) scale (1)');
        }, 2000);
        playSlideVoice('sound/7', 1);

    }

    if (elem == 8) {
        C8.setAttribute('transform', 'translate (0, 0) scale (4.5)');
        setTimeout(function (args) {
            $(C8).find('path').removeClass('blue');
            C8.setAttribute('transform', 'translate (0, 0) scale (1)');
        }, 2000);
        playSlideVoice('sound/8', 1);

    }
}