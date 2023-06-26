$(document).ready(function () {
    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });
    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        console.log(svgDocument);
        var svgElement2 = svgDocument.getElementById("L1"); //получаем любой элемент внутри svg
        svgElement2.setAttribute("opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement3 = svgDocument.getElementById("L2"); //получаем любой элемент внутри svg
        svgElement3.setAttribute("opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement4 = svgDocument.getElementById("L3"); //получаем любой элемент внутри svg
        svgElement4.setAttribute("opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement5 = svgDocument.getElementById("L4"); //получаем любой элемент внутри svg
        svgElement5.setAttribute("opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement6 = svgDocument.getElementById("L5"); //получаем любой элемент внутри svg
        svgElement6.setAttribute("opacity", "0"); //меняем атрибуты выбранного элемента

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
function litCandles(script) {
    var object = document.getElementById("svgelem"); //получаем элмент object
    var svgDocument = object.contentDocument; //получаем svg элемент внутри object
    if (script == 3) {
        var svgElement = svgDocument.getElementById("L1");
        svgElement.setAttribute("opacity", "1");
        setTimeout(function () {
            svgElement.setAttribute("opacity", "0"); //меняем атрибуты выбранного элемента
        }, 2000);
    }
    if (script == 4) {
        var svgElement = svgDocument.getElementById("L1");
        svgElement.setAttribute("opacity", "1");
        setTimeout(function () {
            svgElement.setAttribute("opacity", "0"); //меняем атрибуты выбранного элемента
        }, 2000);
        var svgElement2 = svgDocument.getElementById("L2");
        svgElement2.setAttribute("opacity", "1");
        setTimeout(function () {
            svgElement2.setAttribute("opacity", "0"); //меняем атрибуты выбранного элемента
        }, 2000);
    }
    if (script == 5) {
        var svgElement = svgDocument.getElementById("L1");
        svgElement.setAttribute("opacity", "1");
        setTimeout(function () {
            svgElement.setAttribute("opacity", "0"); //меняем атрибуты выбранного элемента
        }, 2000);
        var svgElement2 = svgDocument.getElementById("L2");
        svgElement2.setAttribute("opacity", "1");
        setTimeout(function () {
            svgElement2.setAttribute("opacity", "0"); //меняем атрибуты выбранного элемента
        }, 2000);
        var svgElement3 = svgDocument.getElementById("L3");
        svgElement3.setAttribute("opacity", "1");
        setTimeout(function () {
            svgElement3.setAttribute("opacity", "0"); //меняем атрибуты выбранного элемента
        }, 2000);
    }
    if (script == 6) {
        var svgElement = svgDocument.getElementById("L1");
        svgElement.setAttribute("opacity", "1");
        setTimeout(function () {
            svgElement.setAttribute("opacity", "0"); //меняем атрибуты выбранного элемента
        }, 2000);
        var svgElement2 = svgDocument.getElementById("L2");
        svgElement2.setAttribute("opacity", "1");
        setTimeout(function () {
            svgElement2.setAttribute("opacity", "0"); //меняем атрибуты выбранного элемента
        }, 2000);
        var svgElement3 = svgDocument.getElementById("L3");
        svgElement3.setAttribute("opacity", "1");
        setTimeout(function () {
            svgElement3.setAttribute("opacity", "0"); //меняем атрибуты выбранного элемента
        }, 2000);
        var svgElement4 = svgDocument.getElementById("L4");
        svgElement4.setAttribute("opacity", "1");
        setTimeout(function () {
            svgElement4.setAttribute("opacity", "0"); //меняем атрибуты выбранного элемента
        }, 2000);
    }
    if (script == 7) {
        var svgElement = svgDocument.getElementById("L1");
        svgElement.setAttribute("opacity", "1");
        setTimeout(function () {
            svgElement.setAttribute("opacity", "0"); //меняем атрибуты выбранного элемента
        }, 2000);
        var svgElement2 = svgDocument.getElementById("L2");
        svgElement2.setAttribute("opacity", "1");
        setTimeout(function () {
            svgElement2.setAttribute("opacity", "0"); //меняем атрибуты выбранного элемента
        }, 2000);
        var svgElement3 = svgDocument.getElementById("L3");
        svgElement3.setAttribute("opacity", "1");
        setTimeout(function () {
            svgElement3.setAttribute("opacity", "0"); //меняем атрибуты выбранного элемента
        }, 2000);
        var svgElement4 = svgDocument.getElementById("L4");
        svgElement4.setAttribute("opacity", "1");
        setTimeout(function () {
            svgElement4.setAttribute("opacity", "0"); //меняем атрибуты выбранного элемента
        }, 2000);
        var svgElement5 = svgDocument.getElementById("L5");
        svgElement5.setAttribute("opacity", "1");
        setTimeout(function () {
            svgElement5.setAttribute("opacity", "0"); //меняем атрибуты выбранного элемента
        }, 2000);
    }
}
/* Buttons */
function buttonAction(elem) {
    $(elem).addClass('active').addClass('on-top');
    if (elem == 1) {
        playSlideVoice('sound/1', 1);
    }
    if (elem == 2) {
        playSlideVoice('sound/2', 1);
        litCandles(3);
    }
    if (elem == 3) {
        playSlideVoice('sound/3', 1);
        litCandles(4);
    }
    if (elem == 4) {
        playSlideVoice('sound/4', 1);
        litCandles(5);
    }
    if (elem == 5) {
        playSlideVoice('sound/5', 1);
        litCandles(6);
    }
    if (elem == 6) {
        playSlideVoice('sound/6', 1);
        litCandles(7);
    }
}