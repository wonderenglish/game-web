var quest = null;

$(document).ready(function () {
    hideOverlay(500);
    $('.next-slide').click(function () {
        nextSlide();
    });

    var arr = [1, 2, 3, 4, 5];
    storySetRandom(arr);

    $('.button, .replay').click(function () {
        $('.table__elem.active').removeClass('active').removeClass('on-top');
        var elem = $(this).attr('data-action');
        quest = elem;
        buttonAction(elem);
    });

    $('.table__elem').click(function () {
        let id = $(this).attr('data-id');

        if (quest != id) {
            playNewSlideVoice('bad.mp3', 1);
            return;
        }

        quest = null;

        buttonAction(id);

        $('#block').val(1);
        $(this).addClass('active').addClass('on-top');
        removeActive(this);
    });
});

/* Buttons */
function buttonAction(elem) {
    switch (elem) {
        case '1':
            playNewSlideVoice('TheyareLeoandLily.mp3', 1);
            break;
        case '2':
            playNewSlideVoice('TheyarefromNewZealand.mp3', 1);
            break;
        case '3':
            playNewSlideVoice('Leoplaystheviolin.mp3', 1)
            break;
        case '4':
            playNewSlideVoice('Lilyplaysthetrumpet.mp3', 1)
            break;
        case '5':
            playNewSlideVoice('Theylikemusic.mp3', 1)
            break;
    }
}