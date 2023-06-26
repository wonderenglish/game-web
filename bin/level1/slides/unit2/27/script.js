$(document).ready(function () {
    hideOverlay(1000);
    var audio = playSong('sound/jingle.mp3');

    $('.next-slide').click(function () {
        showOverlay(1000);
        var link = $(this).attr('data-link');
        setTimeout(' window.location.href = "../28/index.html";', 1000 + 500);
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
        playSlideVoice('sound/1', 1);
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