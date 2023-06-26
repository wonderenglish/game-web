var R11, R12, R21, R22, R31, R32;
var M, N, O;
$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;
        R11 = svgDocument.getElementById("R11");
        R12 = svgDocument.getElementById("R12");
        R21 = svgDocument.getElementById("R21");
        R22 = svgDocument.getElementById("R22");
        R31 = svgDocument.getElementById("R31");
        R32 = svgDocument.getElementById("R32");
        M = svgDocument.getElementById("N");
        N = svgDocument.getElementById("O");
        O = svgDocument.getElementById("M");


    });

    hideOverlay(500);
    $('.next-slide').click(function () {
        nextSlide();
    });

    $('.button, .replay').click(function () {
        $('.table__elem.active').removeClass('active').removeClass('on-top');
        var elem = $(this).attr('data-action');
        buttonAction(elem);
    });


});


/* Buttons */
function buttonAction(elem) {
    $(elem).addClass('active').addClass('on-top');
    if (elem == 1) {
        $(M).addClass('act');
        setTimeout(function () { $(M).removeClass('act'); }, 1000);
        playSlideVoice('sound/7', 1);
    }
    if (elem == 2) {
        $(R11).addClass('act');
        setTimeout(function () { $(R11).removeClass('act'); }, 1000);
        playSlideVoice('sound/1', 1);
    }
    if (elem == 3) {
        $(R12).addClass('act');
        setTimeout(function () { $(R12).removeClass('act'); }, 1000);
        playSlideVoice('sound/2', 1);
    }
    if (elem == 4) {
        $(N).addClass('act');
        setTimeout(function () { $(N).removeClass('act'); }, 1000);
        playSlideVoice('sound/8', 1);
    }
    if (elem == 6) {
        $(R22).addClass('act');
        setTimeout(function () { $(R22).removeClass('act'); }, 1000);
        playSlideVoice('sound/3', 1);
    }
    if (elem == 5) {
        $(R21).addClass('act');
        setTimeout(function () { $(R21).removeClass('act'); }, 1000);
        playSlideVoice('sound/4', 1);
    }
    if (elem == 7) {
        $(O).addClass('act');
        setTimeout(function () { $(O).removeClass('act'); }, 1000);
        playSlideVoice('sound/9', 1);
    }
    if (elem == 8) {
        $(R31).addClass('act');
        setTimeout(function () { $(R31).removeClass('act'); }, 1000);
        playSlideVoice('sound/5', 1);
    }
    if (elem == 9) {
        $(R32).addClass('act');
        setTimeout(function () { $(R32).removeClass('act'); }, 1000);
        playSlideVoice('sound/6', 1);
    }
    if (elem == 10) {
        replaySlide();
    }
}

