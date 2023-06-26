const questions = [];

$(document).ready(function () {
    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });

    var object = document.getElementById("svgelem"); //получаем элмент object


    $('.button').click(function () {
        $('.table__elem.active').removeClass('active').removeClass('on-top');
        var elem = $(this).attr('data-action');
        buttonAction(elem);
    });

});

/* Buttons */
function buttonAction(elem) {
    questions.splice(0, questions.length);

    if (elem == 1) {
        playSlideVoice('sound/cu', 1);
    }

    if (elem == 2) {
        playSlideVoice('sound/ye', 1);
    }

    if (elem == 3) {
        playSlideVoice('sound/qui', 1);
    }

    if (elem == 4) {
        playSlideVoice('sound/ca', 1);
    }

    if (elem == 5) {
        playSlideVoice('sound/que', 1);
    }

    if (elem == 99) {
        replaySlide();
    }
}



