$(document).ready(function () {

    $('.phonics div div').click(function () {
        var id = $(this).attr('data-id');
        phonicsCheckAnswer(id);
    });

    hideOverlay(500);
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
        playSlideVoice('sound/i', 1);
    }

    if (elem == 2) {
        $('.letter__first').addClass('active').addClass('on-top');
        playSlideVoice('sound/1', 1);
        removeActive('.letter__first');
    }

    if (elem == 3) {
        $('.picture__first').addClass('active').addClass('on-top');
        playSlideVoice('sound/2', 1);
        removeActive('.picture__first');
    }
    if (elem == 4) {
        $('.picture__second').addClass('active').addClass('on-top');
        playSlideVoice('sound/3', 1);
        removeActive('.picture__second');
    }

    if (elem == 5) {
        phonicsSetQuestion(1);
        playSlideVoice('sound/4', 1);
    }
    if (elem == 6) {
        phonicsSetQuestion(2);
        playSlideVoice('sound/5', 1);
    }
    if (elem == 7) {
        phonicsSetQuestion(3);
        playSlideVoice('sound/6', 1);
    }

}

