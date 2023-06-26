var A1, A2, A3, A4;
var B1, B2, B3, B4;
var A = 0
var B = 0;
var As;
var Bs;
var timeout;
var order = 0;

$(document).ready(function () {
    hideOverlay(500);
    // playSong('sound/jingle.mp3');
    // var arr = [1, 2, 3, 4, 5];
    // storySetRandom(arr);

    $('.next-slide').click(function () {
        nextSlide();
    });

    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        A1 = svgDocument.getElementById("A1");
        A2 = svgDocument.getElementById("A2");
        A3 = svgDocument.getElementById("A3");
        A4 = svgDocument.getElementById("A4");

        B1 = svgDocument.getElementById("B1");
        B2 = svgDocument.getElementById("B2");
        B3 = svgDocument.getElementById("B3");
        B4 = svgDocument.getElementById("B4");


        A1.setAttribute('fill-opacity', '0.2');
        A2.setAttribute('fill-opacity', '0.2');
        A3.setAttribute('fill-opacity', '0.2');
        A4.setAttribute('fill-opacity', '0.2');

        B1.setAttribute('fill-opacity', '0.2');
        B2.setAttribute('fill-opacity', '0.2');
        B3.setAttribute('fill-opacity', '0.2');
        B4.setAttribute('fill-opacity', '0.2');

        As = [A1, A2, A3, A4];
        Bs = [B1, B2, B3, B4];

        $(As).each(function (i, e) {
            $(e).click(function () {
                if ($(e).hasClass('blink')) {
                    clearTimeout(timeout);
                    setTimeout(function () {
                        playSlideVoice('sound/2', 1);
                        e.setAttribute('fill-opacity', 1);
                        $(e).removeClass('blink');
                        A = A + 1;
                    }, 500);
                }
            })
        });

        $(Bs).each(function (i, e) {
            $(e).click(function () {
                if ($(e).hasClass('blink')) {
                    clearTimeout(timeout);
                    setTimeout(function () {
                        playSlideVoice('sound/3', 1);
                        e.setAttribute('fill-opacity', 1);
                        $(e).removeClass('blink');
                        B = B + 1;
                    }, 500);
                }
            })
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

function blink(elem) {
    elem.setAttribute('fill-opacity', '1');
    setTimeout(function () {
        elem.setAttribute('fill-opacity', '0.2');
    }, 500);

    timeout = setTimeout(function () {
        blink(elem);
    }, 1000);
}

/* Buttons */
function buttonAction(elem) {

    $(elem).addClass('active').addClass('on-top');
    if (elem == 1) {
        if (order == 0) {
            $(As[A]).addClass('blink');
            timeout = blink(As[A]);
            order = 1;
        } else {
            $(Bs[B]).addClass('blink');
            timeout = blink(Bs[B]);
            order = 0;
        }

        playSlideVoice('sound/1', 1);
    }

    if (elem == 2) {
        playSlideVoice('sound/2', 1);
    }

    if (elem == 3) {

        playSlideVoice('sound/3', 1);
    }

    if (elem == 4) {
        replaySlide();
    }


}