$(document).ready(function () {
    hideOverlay(500);
    $('.next-slide').click(function () {
        nextSlide();
    });

    var audio = playSong('sound/jingle.mp3');
    var arr = [1, 2, 3, 4, 5];
    storySetRandom(arr);

    $('.button, .replay').click(function () {
        $('.table__elem.active').removeClass('active').removeClass('on-top');
        var elem = $(this).attr('data-action');
        buttonAction(elem);
    });

    $('.table__elem').click(function () {
        var id = $(this).attr('data-id');
        rate = $('#rate').val();
        playSlideVoice('sound/' + id, 1, rate);
        $('#block').val(1);
        $(this).addClass('active').addClass('on-top');
        removeActive(this);
    });

    $('.speeddown').click(function () {
        $('#rate').val(0.7);
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
        playSlideVoice('sound/i', 1);
    }
    if (elem == 2) {
        playSlideVoice('sound/2', 1);
    }
    if (elem == 3) {
        playSlideVoice('sound/3', 1);
    }
    if (elem == 4) {
        playSlideVoice('sound/4',1);
    }
    if (elem == 5) {
        playSlideVoice('sound/5',1);
    }
    if (elem == 6) {
        playSlideVoice('sound/6',1);
    }
    if (elem == 7) {
        replaySlide();
    }
    if (elem == 8) {
        playSlideVoice('sound/i',1);
    }
}