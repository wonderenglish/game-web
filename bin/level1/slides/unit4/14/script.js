$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        console.log(svgDocument);
        var svgElement2 = svgDocument.getElementById("L2"); //получаем любой элемент внутри svg
        svgElement2.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement3 = svgDocument.getElementById("L3"); //получаем любой элемент внутри svg
        svgElement3.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
    });

    hideOverlay(500);
    // playSong('sound/jingle.mp3');
    // var arr = [1, 2, 3, 4, 5];
    // storySetRandom(arr);

    $('.next-slide').click(function () {
        nextSlide();
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
    })
});

/* Buttons */
function buttonAction(elem) {
    $(elem).addClass('active').addClass('on-top');
    if (elem == 1) {
        $('.first').addClass('active').addClass('on-top');
        playSlideVoice('sound/1', 1);
        var object = document.getElementById("svgelem"); //получаем элмент object
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        var svgElement = svgDocument.getElementById("L2"); //получаем любой элемент внутри svg
        svgElement.setAttribute("fill-opacity", "1"); //меняем атрибуты выбранного элемента
        setTimeout(function(){
            svgElement.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        }, 2000);
    }

    if (elem == 2) {
        $('.second').addClass('active').addClass('on-top');
        playSlideVoice('sound/2', 1);

    }

    if (elem == 3) {
        $('.third').addClass('active').addClass('on-top');
        playSlideVoice('sound/3', 1);
        var object = document.getElementById("svgelem"); //получаем элмент object
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        var svgElement2 = svgDocument.getElementById("L3"); //получаем любой элемент внутри svg
        svgElement2.setAttribute("fill-opacity", "1"); //меняем атрибуты выбранного элемента
        setTimeout(function(){
            svgElement2.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        }, 2000);
    }

    if (elem == 4) {
        $('.fourth').addClass('active').addClass('on-top');
        playSlideVoice('sound/4', 1);
    }

}
