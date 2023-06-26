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
        if(id == 4){
            buttonAction(4);
        } else {
            playSlideVoice('sound/' + id, 1);
        }
        $('#block').val(1);
        $(this).addClass('active').addClass('on-top');
        removeActive(this);
    });
});

/* Buttons */
function buttonAction(elem) {
    $(elem).addClass('active').addClass('on-top');
    if (elem == 1) {
        $('.first').addClass('active').addClass('on-top');
        playSlideVoice('sound/1', 1);
    }
    if (elem == 2) {
        playSlideVoice('sound/2', 1);
    }
    if (elem == 3) {
        playSlideVoice('sound/3', 1);
    }
    if (elem == 4) {
        playSlideVoice('sound/3', 1);
        //playSlideVoice('sound/4', 1500);
    }
    if (elem == 5) {
        $('.fifth').addClass('active').addClass('on-top');
        playSlideVoice('sound/5',1);
    }
    if (elem == 6) {
        playSlideVoice('sound/6',1);
    }
    if (elem == 7) {
        playSlideVoice('sound/7',1);
    }

}