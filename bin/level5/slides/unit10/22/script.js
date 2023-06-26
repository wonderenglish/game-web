var TIGER;
var config;
var quest;

var pos = 0;
var playQueue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var shuffleQueue = [];

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
        P12 = svgDocument.getElementById("P12");

        config = [
            {
                elem: P1,
                sound: 'quit'
            },
            {
                elem: P2,
                sound: 'quiz'
            },
            {
                elem: P3,
                sound: 'quip'
            },
            {
                elem: P4,
                sound: 'cat'
            },
            {
                elem: P5,
                sound: 'cod'
            },
            {
                elem: P6,
                sound: 'cup'
            },
            {
                elem: P7,
                sound: 'gap'
            },
            {
                elem: P8,
                sound: 'got'
            },
            {
                elem: P9,
                sound: 'gut'
            },
            {
                elem: P10,
                sound: 'yap'
            },
            {
                elem: P11,
                sound: 'yes'
            },
            {
                elem: P12,
                sound: 'yak'
            },
        ];

        hideAll(config);

        $(TIGER).click(() => {
            hideAll(config);

            if (shuffleQueue.length === 0) {
                shuffleQueue = [...playQueue]
            }

            let inx = newShuffle(shuffleQueue).shift();

            config[inx].elem.classList.remove('hide');
        });


        $.each(config, (k, v) => {
            if (v.elem.querySelector('text')) {
                v.elem.querySelector('text').textContent = v.sound;

                if (v.matrix) {
                    v.elem.querySelector('text').setAttribute('transform', v.matrix);
                }
            }

            $(v.elem).click(() => {
                playNewSlideVoice(`${v.sound}.mp3`, 1);
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
        let action = $(this).attr('data-action');
        $(this).html(action);

        buttonAction(action);
    });
});

function hideAll(config) {
    $.each(config, (k, v) => {
        v.elem.classList.add('hide');
    });
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}


/* Buttons */
function buttonAction(elem) {
    switch (elem) {
        case 20:
            replaySlide();
            break;
    }
}

