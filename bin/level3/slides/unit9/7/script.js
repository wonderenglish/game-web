$(document).ready(function () {
    hideOverlay(500);
    $('.next-slide').click(function () {
        nextSlide();
    });

    var audio = playSong('sound/jingle.mp3');
    // var arr = [1, 2, 3, 4, 5];
    // storySetRandom(arr);

    $('.button, .replay').click(function () {
        var elem = $(this).attr('data-action');
        buttonAction(elem);
    });

    $('.table__elem').click(function () {
        var id = $(this).attr('data-id');
        if($('#question').val() == id){
            playSlideWithoutRemove('sound/' + id, 1);
            $('#block').val(1);
            $(this).addClass('active').addClass('on-top');
            removeActive();
            $('#question').val(0);
        } else {
            playSlideWithoutRemove('sound/bad.mp3',1);
        }

    });
});

/* Buttons */
function buttonAction(elem) {
    if (elem == 1) {
        playSlideWithoutRemove('sound/1', 1);
    }
    if (elem == 2) {
        playSlideWithoutRemove('sound/2', 1);
    }
    if (elem == 3) {
        playSlideWithoutRemove('sound/3', 1);
    }
    if (elem == 4) {
        playSlideWithoutRemove('sound/4',1);
    }
    if (elem == 5) {
        playSlideWithoutRemove('sound/5',1);
    }
    if (elem == 6) {
        playSlideWithoutRemove('sound/6',1);
    }
    if (elem == 7) {
        replaySlide();
    }
    if (elem == 8) {
        playSlideWithoutRemove('sound/i',1);
    }
    $('#question').val(elem);
}