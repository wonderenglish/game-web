$(document).ready(function () {
    hideOverlay(500);
    // playSong('sound/jingle.mp3');
    // var arr = [1, 2, 3, 4, 5];
    // storySetRandom(arr);

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
        phonicsCheckAnswer(id);
    });

    $('.phonics-game .letter div').click(function () {
        var id = $(this).attr('data-id');
        phonicsFindLetter(this, id);
    });

    $('.phonics-game .picture div').click(function () {
        var id = $(this).attr('data-id');
        phonicsCheckAnswer(id);
    })

});


/* Buttons */
function buttonAction(elem) {
    $(elem).addClass('active').addClass('on-top');
    if (elem == 1) {
        phonicsSetQuestion(1);
        playSlideVoice('sound/2', 1);
    }

    if (elem == 2) {
        playSlideVoice('sound/1', 1);
    }

    if (elem == 3) {
        replaySlide();
    }
}


