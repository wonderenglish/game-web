$(document).ready(function () {
    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });
    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        console.log(svgDocument);
        var svgElement = svgDocument.getElementById("QUEST"); //получаем любой элемент внутри svg
        svgElement.setAttribute("opacity", "0"); //меняем атрибуты выбранного элемента

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
        var object = document.getElementById("svgelem"); //получаем элмент object
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        var svgElement2 = svgDocument.getElementById("QUEST"); //получаем любой элемент внутри svg
        svgElement2.setAttribute("opacity", "1"); //меняем атрибуты выбранного элемента
        setTimeout(function(){ svgElement2.setAttribute("opacity", "0");  }, 2000)
    }
    if (elem == 2) {
        var object = document.getElementById("svgelem"); //получаем элмент object
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        var svgElement3 = svgDocument.getElementById("L1"); //получаем любой элемент внутри svg
        svgElement3.setAttribute("transform", "translate(-500,-200), scale(1.2)");
        setTimeout(function(){  svgElement3.setAttribute("transform", "translate(0,0), scale(1)"); }, 2000);
        playSlideVoice('sound/2', 1);
        // litCandles(3);
    }
    if (elem == 3) {
        playSlideVoice('sound/3', 1);
        // litCandles(4);
        var object = document.getElementById("svgelem"); //получаем элмент object
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        var svgElement2 = svgDocument.getElementById("QUEST"); //получаем любой элемент внутри svg
        svgElement2.setAttribute("opacity", "1");
        setTimeout(function(){ svgElement2.setAttribute("opacity", "0");  }, 2000)
    }
    if (elem == 4) {
        var object = document.getElementById("svgelem"); //получаем элмент object
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        var svgElement3 = svgDocument.getElementById("L2"); //получаем любой элемент внутри svg
        svgElement3.setAttribute("transform", "translate(-500,150), scale(1.2)");
        setTimeout(function(){  svgElement3.setAttribute("transform", "translate(0,0), scale(1)"); }, 2000);
        playSlideVoice('sound/4', 1);
        // litCandles(5);
    }

}