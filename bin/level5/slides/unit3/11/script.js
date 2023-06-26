var TIGER;
var P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11;
var quest;
var config;

$(document).ready(function () {
    let object = document.getElementById("svgelem");
    object.addEventListener('load', () => {

        let svgDocument = object.contentDocument;
        TIGER = svgDocument.getElementById("TIGER");
        P1 = svgDocument.getElementById("P1");
        P2 = svgDocument.getElementById("P2");
        P3 = svgDocument.getElementById("P3");
        P4 = svgDocument.getElementById("P4");
        P5 = svgDocument.getElementById("P5");
        P6 = svgDocument.getElementById("P6");
        P7 = svgDocument.getElementById("P7");
        P8 = svgDocument.getElementById("P8");
        P9 = svgDocument.getElementById("P9");
        P10 = svgDocument.getElementById("P10");
        P11 = svgDocument.getElementById("P11");

        config = [
            {
                elem: P1,
                sound: 'pineapple'
            },
            {
                elem: P2,
                sound: 'peach'
            },
            {
                elem: P3,
                sound: 'coconut'
            },
            {
                elem: P4,
                sound: 'cherry'
            },
            {
                elem: P5,
                sound: 'carrot'
            },
            {
                elem: P6,
                sound: 'cucumber'
            },
            {
                elem: P7,
                sound: 'tomato'
            },
            {
                elem: P8,
                sound: 'potato'
            },
            {
                elem: P9,
                sound: 'mushroom'
            },
            {
                elem: P10,
                sound: 'broccoli'
            },
            {
                elem: P11,
                sound: 'eggplant'
            }
        ];

        $.each(config, (k, v) => {
            $(v.elem).click(() => {
                if (quest == k) {
                    playNewSlideVoice(`${v.sound}.mp3`, 1);
                    quest = null;
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

    $('.button, .replay').click(function () {
        $('.table__elem.active')
            .removeClass('active')
            .removeClass('on-top');

        buttonAction($(this).attr('data-action'));
    });


});


/* Buttons */
function buttonAction(elem) {
    switch (elem) {
        case 20:
            replaySlide();
            break;
    }

    quest = elem - 1;

    playNewSlideVoice(`${config[parseInt(quest)].sound}.mp3`, 1);
}

