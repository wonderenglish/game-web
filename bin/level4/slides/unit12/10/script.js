var PLANE, ENG;
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
        PLANE = svgDocument.getElementById("PLANE");
        ENG = svgDocument.getElementById("ENG");
        PLANE.setAttribute('style', 'transform: translate(340px,0)');
        ENG.setAttribute('style', 'transform: translate(-340px,0)');
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
        playSlideVoice('sound/1', 1, 1);
    }
    if (elem == 2) {
        PLANE.setAttribute('style', 'transform: translate(0, 0)');
        setTimeout(function () {
            PLANE.setAttribute('style', 'transform: translate(340px,0)');
        }, 2000);
        playSlideVoice('sound/2', 1, 1);
    }
}