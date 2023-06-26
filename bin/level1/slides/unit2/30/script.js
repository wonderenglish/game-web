$(document).ready(function () {
    hideOverlay(500);
    $('.next-slide').click(function () {
        nextSlide();
    });


    $('.button, .replay').click(function () {
        $('.table__elem.active').removeClass('active').removeClass('on-top');
        var elem = $(this).attr('data-action');
        buttonAction(elem);
    });

    $('.table__elem').click(function () {
        var id = $(this).attr('data-id');
        rate = $('#rate').val();
        playSlideVoice('sound/'+id,1,rate);
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
        phonicsSetQuestion(1);
        var rate = $('#rate').val();
        playSlideVoice('sound/1', 1, rate);
    }
    if (elem == 2) {
        phonicsSetQuestion(2);
        var rate = $('#rate').val();
        playSlideVoice('sound/2', 1, rate);
    }
    if (elem == 3) {
        phonicsSetQuestion(3);
        var rate = $('#rate').val();
        playSlideVoice('sound/3', 1, rate);
    }
    if (elem == 4) {
        phonicsSetQuestion(4);
        var rate = $('#rate').val();
        playSlideVoice('sound/4',1, rate);
    }
    if (elem == 5) {
        phonicsSetQuestion(5);
        var rate = $('#rate').val();
        playSlideVoice('sound/5',1, rate);
    }
    if (elem == 6) {
        replaySlide();
    }
    if (elem == 7) {
        playSlideVoice('sound/6',1);
    }
}