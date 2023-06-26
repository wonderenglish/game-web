$(document).ready(function () {
    hideOverlay(500);


    $('.next-slide').click(function () {
        nextSlide();
    });
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    storySetRandom(arr);


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
    });

    $('.phonics-game .number').click(function () {
        var id = $(this).attr('data-id');
        phonicsCheckAnswer(id);
    })
});


/* Buttons */
function buttonAction(elem) {
    $(elem).addClass('active').addClass('on-top');
    if (elem == 1) {
        phonicsSetQuestion(1);
        playSlideVoice('sound/1', 1);
    }
    if (elem == 2) {
        phonicsSetQuestion(2);
        playSlideVoice('sound/2', 1);
    }
    if (elem == 3) {
        phonicsSetQuestion(3);
        playSlideVoice('sound/3', 1);
    }
    if (elem == 4) {
        phonicsSetQuestion(4);
        playSlideVoice('sound/4', 1);
    }
    if (elem == 5) {
        phonicsSetQuestion(5);
        playSlideVoice('sound/5', 1);
    }
    if (elem == 6) {
        phonicsSetQuestion(6);
        playSlideVoice('sound/6', 1);
    }
    if (elem == 7) {
        phonicsSetQuestion(7);
        playSlideVoice('sound/7', 1);
    }
    if (elem == 8) {
        phonicsSetQuestion(8);
        playSlideVoice('sound/8', 1);
    }
    if (elem == 9) {
        phonicsSetQuestion(9);
        playSlideVoice('sound/9', 1);
    }
    if (elem == 10) {
        phonicsSetQuestion(10);
        playSlideVoice('sound/10', 1);
    }
    if (elem == 11) {
        playSlideVoice('sound/i1', 1);
    }
}


