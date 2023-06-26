$(document).ready(function () {
    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });

    $('.button').click(function () {
        $('.table__elem.active').removeClass('active').removeClass('on-top');
        var elem = $(this).attr('data-action');
        buttonAction(elem);
    });

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        var svgElement1 = svgDocument.getElementById("L1"); //получаем любой элемент внутри svg
        var svgElement2 = svgDocument.getElementById("L2"); //получаем любой элемент внутри svg
        var svgElement3 = svgDocument.getElementById("L3"); //получаем любой элемент внутри svg
        var svgElement4 = svgDocument.getElementById("L4"); //получаем любой элемент внутри svg
        var svgElement5 = svgDocument.getElementById("L5"); //получаем любой элемент внутри svg
        var svgElement6 = svgDocument.getElementById("L6"); //получаем любой элемент внутри svg
        var svgElement7 = svgDocument.getElementById("L7"); //получаем любой элемент внутри svg
        var svgElement8 = svgDocument.getElementById("L8"); //получаем любой элемент внутри svg
        var svgElement9 = svgDocument.getElementById("L9"); //получаем любой элемент внутри svg
        var svgElement10 = svgDocument.getElementById("L10"); //получаем любой элемент внутри svg
        var svgElement11 = svgDocument.getElementById("L11"); //получаем любой элемент внутри svg
        var svgElement12 = svgDocument.getElementById("L12"); //получаем любой элемент внутри svg
        $(svgElement7).attr('opacity', 0);
        $(svgElement8).attr('opacity', 0);
        $(svgElement9).attr('opacity', 0);
        $(svgElement10).attr('opacity', 0);
        $(svgElement11).attr('opacity', 0);
        $(svgElement12).attr('opacity', 0);

        $(svgElement1).click(function () {
            if ($('#question')) {
                if ($('#question').attr('data-id') == 5) {
                    playSlideVoice('sound/5', 1);
                    $(svgElement7).attr('opacity', 1);
                } else {
                    playSlideVoice('sound/bad.mp3', 1)
                }
            }

        });
        $(svgElement2).click(function () {
            if ($('#question')) {
                if ($('#question').attr('data-id') == 4) {
                    playSlideVoice('sound/4', 1);
                    $(svgElement8).attr('opacity', 1);
                } else {
                    playSlideVoice('sound/bad.mp3', 1)
                }
            }

        });
        $(svgElement3).click(function () {
            if ($('#question')) {
                if ($('#question').attr('data-id') == 2) {
                    playSlideVoice('sound/2', 1);
                    $(svgElement9).attr('opacity', 1);
                } else {
                    playSlideVoice('sound/bad.mp3', 1)
                }
            }

        });
        $(svgElement4).click(function () {
            if ($('#question')) {
                if ($('#question').attr('data-id') == 6) {
                    playSlideVoice('sound/6', 1);
                    $(svgElement10).attr('opacity', 1);
                } else {
                    playSlideVoice('sound/bad.mp3', 1)
                }
            }

        });
        $(svgElement5).click(function () {
            if ($('#question')) {
                if ($('#question').attr('data-id') == 1) {
                    playSlideVoice('sound/1', 1);
                    $(svgElement11).attr('opacity', 1);
                } else {
                    playSlideVoice('sound/bad.mp3', 1)
                }
            }

        });
        $(svgElement6).click(function () {
            if ($('#question')) {
                if ($('#question').attr('data-id') == 3) {
                    playSlideVoice('sound/3', 1);
                    $(svgElement12).attr('opacity', 1);
                } else {
                    playSlideVoice('sound/bad.mp3', 1)
                }
            }

        });

    });
});


/* Buttons */
function buttonAction(elem) {
    $(elem).addClass('active').addClass('on-top');
    if (elem == 1) {
        playSlideVoice('sound/i', 1);
    }

    if (elem == 2) {
        playSlideVoice('sound/1', 1);
        phonicsSetQuestion(1);
    }
    if (elem == 3) {
        playSlideVoice('sound/2', 1);
        phonicsSetQuestion(2);
    }
    if (elem == 4) {
        playSlideVoice('sound/3', 1);
        phonicsSetQuestion(3);
    }
    if (elem == 5) {
        playSlideVoice('sound/4', 1);
        phonicsSetQuestion(4);
    }
    if (elem == 6) {
        playSlideVoice('sound/5', 1);
        phonicsSetQuestion(5);
    }
    if (elem == 7) {
        playSlideVoice('sound/6', 1);
        phonicsSetQuestion(6);
    }
    if (elem == 8) {
        replaySlide()
    }

}

