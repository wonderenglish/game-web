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

        buttonAction(id);

        $('#block').val(1);
        $(this).addClass('active').addClass('on-top');
        removeActive(this);
    });
});

/* Buttons */
function buttonAction(elem) {
    switch (elem) {
        case '20':
            replaySlide();
            break;
        case '1':
            playNewSlideVoice('MynamesDavid.mp3', 1);
            break;
        case '2':
            playNewSlideVoice('ImfromDenmark.mp3', 1);
            break;
        case '3':
            playNewSlideVoice('Ihavebreakfastinthemorning.mp3', 1)
            break;
        case '4':
            playNewSlideVoice('Ihavelunchatnoon.mp3', 1)
            break;
        case '5':
            playNewSlideVoice('Myfavoritefruitisamango.mp3', 1)
            break;
    }
}