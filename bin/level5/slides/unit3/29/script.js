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
});

/* Buttons */
function buttonAction(elem) {
    $(elem).addClass('active').addClass('on-top');
    if (elem == 1) {
        playNewSlideVoice('Thereisapeartreeonthemountain.mp3', 1)
    }

    if (elem == 2) {
        $('.second').addClass('active').addClass('on-top');
        playSlideVoice('sound/2', 1);

    }

    if (elem == 3) {
        $('.third').addClass('active').addClass('on-top');
        playSlideVoice('sound/3', 1);
    }

    if (elem == 4) {
        $('.fourth').addClass('active').addClass('on-top');
        playSlideVoice('sound/4');
    }

}