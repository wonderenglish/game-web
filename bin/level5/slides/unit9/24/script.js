var TIGER;
var config;
var quest;

$(document).ready(function () {
    let object = document.getElementById("svgelem");
    object.addEventListener('load', () => {

        let svgDocument = object.contentDocument;

        $.each(config, (k, v) => {

        })
    });

    hideOverlay(500);

    $('.next-slide').click(() => {
        nextSlide();
    });


    $('.button, .replay').click(function () {
        $('.table__elem.active')
            .removeClass('active')
            .removeClass('on-top');
        let action = $(this).attr('data-action');

        buttonAction(action);
    });
});

/* Buttons */
function buttonAction(elem) {
    switch (elem) {
        case '20':
            replaySlide();
            break;
        case '1':
            playNewSlideVoice('lap.mp3', 1);
            break;
        case '2':
            playNewSlideVoice('rex.mp3', 1);
            break;
        case '3':
            playNewSlideVoice('rib.mp3', 1);
            break;
        case '4':
            playNewSlideVoice('lot.mp3', 1);
            break;
        case '5':
            playNewSlideVoice('lug.mp3', 1);
            break;
    }
}

