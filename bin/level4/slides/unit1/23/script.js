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
        playSlideVoice('sound/1', 1);
    }

    if (elem == 2) {
        playSlideVoice('sound/2', 1);
    }

    if (elem == 4) {
        playSlideVoice('sound/4', 1);
    }

    if (elem == 8) {
        playSlideVoice('sound/8', 1);
    }

    if (elem == 10) {
        playSlideVoice('sound/10', 1);
    }

    if (elem == 99) {
        replaySlide();
    }
}



