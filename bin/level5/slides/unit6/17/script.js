var TIGER;
var config;
var quest;
var type = null;

$(document).ready(function () {
    let object = document.getElementById("svgelem");
    object.addEventListener('load', () => {

        let svgDocument = object.contentDocument;
        TIGER = svgDocument.getElementById("TIGER");
        S1 = svgDocument.getElementById("P1");
        S2 = svgDocument.getElementById("P2");
        S3 = svgDocument.getElementById("P3");
        M1 = svgDocument.getElementById("M1");
        M2 = svgDocument.getElementById("M2");
        M3 = svgDocument.getElementById("M3");
        M4 = svgDocument.getElementById("M4");



        config = [
            {
                elem: S1,
                sound: 'anegg', type: 1
            },
            {
                elem: S2,
                sound: 'alamp', type: 1
            },
            {
                elem: S3,
                sound: 'apolarbear', type: 1
            },
            {
                elem: M1,
                sound: '2scooters', type: 2
            },
            {
                elem: M2,
                sound: '3leopards', type: 2
            },
            {
                elem: M3,
                sound: '4maps', type: 2
            },
            {
                elem: M4,
                sound: '5giraffes', type: 2
            },
        ];

        $.each(config, (k, v) => {
            $(v.elem).click(() => {
                if(type === v.type) {
                    playNewSlideVoice(`${v.sound}.mp3`, 1);
                } else {
                    playNewSlideVoice('bad.mp3', 1);
                }
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
            playNewSlideVoice('Isthere.mp3', 1);
            type = 1
            break;
        case '2':
            playNewSlideVoice('Arethere.mp3', 1);
            type = 2
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

