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
        storyCheckAnswer(id, this);
    });
});

/* Buttons */
function buttonAction(elem) {
    $(elem).addClass('active').addClass('on-top');
    if (elem == 1) {
        phonicsSetQuestion(1);
        playSong('sound/1');
    }
    if (elem == 2) {
        phonicsSetQuestion(2);
        playSong('sound/2');
    }
    if (elem == 3) {
        phonicsSetQuestion(3);
        playSong('sound/3');
    }
    if (elem == 4) {
        phonicsSetQuestion(4);
        playSong('sound/4');
    }
    if (elem == 5) {
        phonicsSetQuestion(5);
        playSong('sound/5');
    }
    if (elem == 6) {
        phonicsSetQuestion(6);
        playSong('sound/6');
    }
    if (elem == 7) {
        playSlideVoice('sound/6',1);
    }
}