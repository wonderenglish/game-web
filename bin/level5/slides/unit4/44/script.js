var TIGER;
var config;
var quest;

$(document).ready(function () {
    let object = document.getElementById("svgelem");
    object.addEventListener('load', () => {

        let svgDocument = object.contentDocument;
        TIGER = svgDocument.getElementById("TIGER");
        P1 = svgDocument.getElementById("P1");
        P2 = svgDocument.getElementById("P2");
        Q = svgDocument.getElementById("QUEST");

        Q.classList.add('hide');

        config = [
            {
                elem: P1,
                sound: 'Yesthereare'
            },
            {
                elem: P2,
                sound: 'Notherearent'
            },
        ];

        $.each(config, (k, v) => {
            $(v.elem).click(() => {
                playNewSlideVoice(`${v.sound}.mp3`, 1);
            })
        })
    });

    hideOverlay(500);

    $('.next-slide').click(() => {
        nextSlide();
    });


    $('.button, .replay').click(function() {
        $('.table__elem.active')
            .removeClass('active')
            .removeClass('on-top');

        buttonAction($(this).attr('data-action'));
    });
});

/* Buttons */
function buttonAction(elem) {
    switch (elem) {
        case '1':
            playNewSlideVoice('Arethere4trucksunderthechair.mp3', 1);
            Q.classList.remove('hide');
            setTimeout(() => {
                Q.classList.add('hide')
            }, 1000)
            break;
        case '2':
            playNewSlideVoice('Isthereanappleinthebox.mp3', 1);
            break;
        case '3':
            playNewSlideVoice('Isthereanappleunderthebox.mp3', 1);
            break;
        case '4':
            playNewSlideVoice('Yesthereis.mp3', 1);
            break;
        case '5':
            playNewSlideVoice('Nothereisnt.mp3', 1);
            break;
        case '20':
            replaySlide();
            break;
    }
}

