var g1, g2, g3, b1, b2, b3;
var lg1, lg2, lg3, lb1, lb2, lb3;
var array;
$(document).ready(function () {
    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });
    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        g1 = svgDocument.getElementById("G1"); //получаем любой элемент внутри svg
        g2 = svgDocument.getElementById("G2"); //получаем любой элемент внутри svg
        g3 = svgDocument.getElementById("G3"); //получаем любой элемент внутри svg
        b1 = svgDocument.getElementById("B1"); //получаем любой элемент внутри svg
        b2 = svgDocument.getElementById("B2"); //получаем любой элемент внутри svg
        b3 = svgDocument.getElementById("B3"); //получаем любой элемент внутри svg
        lg1 = svgDocument.getElementById("LG1"); //получаем любой элемент внутри svg
        lg2 = svgDocument.getElementById("LG2"); //получаем любой элемент внутри svg
        lg3 = svgDocument.getElementById("LG3"); //получаем любой элемент внутри svg
        lb1 = svgDocument.getElementById("LB1"); //получаем любой элемент внутри svg
        lb2 = svgDocument.getElementById("LB2"); //получаем любой элемент внутри svg
        lb3 = svgDocument.getElementById("LB3"); //получаем любой элемент внутри svg
        array = [g1, g2, g3, b1, b2, b3];
        $(g1).click(function () {
            playSlideVoice('sound/2', 1);
            makeInv('lg1');
        });
        $(g2).click(function () {
            playSlideVoice('sound/2', 1);
            makeInv('lg2');
        });
        $(g3).click(function () {
            playSlideVoice('sound/2', 1);
            makeInv('lg3');
        });
        $(b1).click(function () {
            playSlideVoice('sound/3', 1);
            makeInv('lb1');
        });
        $(b2).click(function () {
            playSlideVoice('sound/3', 1);
            makeInv('lb2');
        });
        $(b3).click(function () {
            playSlideVoice('sound/3', 1);
            makeInv('lb3');
        })
        $(lg1).click(function () {
            playSlideVoice('sound/2', 1);
            makeInv('lg1');
        });
        $(lg2).click(function () {
            playSlideVoice('sound/2', 1);
            makeInv('lg2');
        });
        $(lg3).click(function () {
            playSlideVoice('sound/2', 1);
            makeInv('lg3');
        });
        $(lb1).click(function () {
            playSlideVoice('sound/3', 1);
            makeInv('lb1');
        });
        $(lb2).click(function () {
            playSlideVoice('sound/3', 1);
            makeInv('lb2');
        });
        $(lb3).click(function () {
            playSlideVoice('sound/3', 1);
            makeInv('lb3');
        })
        function makeInv(el) {
            $(lg1).attr('fill-opacity', '0.2');
            $(lg2).attr('fill-opacity', '0.2');
            $(lg3).attr('fill-opacity', '0.2');
            $(lb1).attr('fill-opacity', '0.2');
            $(lb2).attr('fill-opacity', '0.2');
            $(lb3).attr('fill-opacity', '0.2');
            if(el == 'lg1') { $(lg1).attr('fill-opacity', '1') }
            if(el == 'lg2') { $(lg2).attr('fill-opacity', '1') }
            if(el == 'lg3') { $(lg3).attr('fill-opacity', '1') }
            if(el == 'lb1') { $(lb1).attr('fill-opacity', '1') }
            if(el == 'lb2') { $(lb2).attr('fill-opacity', '1') }
            if(el == 'lb3') { $(lb3).attr('fill-opacity', '1') }
            setTimeout(function (args) {
                $(lg1).attr('fill-opacity', '1');
                $(lg2).attr('fill-opacity', '1');
                $(lg3).attr('fill-opacity', '1');
                $(lb1).attr('fill-opacity', '1');
                $(lb2).attr('fill-opacity', '1');
                $(lb3).attr('fill-opacity', '1');
            }, 2000);
        }
    });


    $('.button, .replay').click(function () {
        $('.table__elem.active').removeClass('active').removeClass('on-top');
        var elem = $(this).attr('data-action');
        buttonAction(elem);
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
        playSlideVoice('sound/1', 1);

    }
    if (elem == 2) {

        playSlideVoice('sound/2', 1);
    }
    if (elem == 3) {
        playSlideVoice('sound/3', 1);

        setTimeout(function () {
            svgElement2.setAttribute("opacity", "0");
        }, 2000)
    }
    if (elem == 4) {
        playSlideVoice('sound/i', 1);
        // litCandles(5);
    }

}