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

    $('.phonics div div').click(function () {
        var id = $(this).attr('data-id');
        phonicsCheckAnswer(id, this);
    });

    $('.phonics-game .letter div').click(function () {
        var id = $(this).attr('data-id');
        phonicsFindLetter(this, id);
    });

    $('.phonics-game .picture div').click(function () {
        var id = $(this).attr('data-id');
        var sound;
        if(id == 12) {
            sound = 2;
        }

        if(id == 34) {
            sound = 4;
        }
        phonicsCheckAnswer(id, this, sound);
    })

});


/* Buttons */
function buttonAction(elem) {
    $(elem).addClass('active').addClass('on-top');
    if (elem == 1) {
        phonicsSetQuestion(12);
        playSlideVoice('sound/1', 1);
    }

    if (elem == 2) {
        playSlideVoice('sound/2', 1);
    }


    if (elem == 3) {
        phonicsSetQuestion(34);
        playSlideVoice('sound/3', 1);
    }


    if (elem == 4) {
        playSlideVoice('sound/4', 1);
    }

    if (elem == 5) {
        replaySlide();
    }
}


