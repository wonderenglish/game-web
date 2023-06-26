$(document).ready(function () {
    hideOverlay(500);
    playSong('sound/jingle.mp3');
    showOverlay(7000);
    setTimeout(function () {
        window.location.href = "../u02/index.html";
    }, 7000+1000);

    $('.next-slide').click(function () {
        showOverlay(500);
        setTimeout('window.location.href = "../u02/index.html";', 1000);
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
        $('.first').addClass('active').addClass('on-top');
        playSlideVoice('sound/1');
    }

    if (elem == 2) {
        $('.second').addClass('active').addClass('on-top');
        playSlideVoice('sound/2');
    }

    if (elem == 3) {
        $('.third').addClass('active').addClass('on-top');
        playSlideVoice('sound/3');
    }

    if (elem == 4) {
        $('.fourth').addClass('active').addClass('on-top');
        playSlideVoice('sound/4');
    }

}



