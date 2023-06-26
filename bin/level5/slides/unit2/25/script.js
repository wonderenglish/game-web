var TIGER;
var config;
var quest;

$(document).ready(function () {
    let object = document.getElementById("svgelem");
    object.addEventListener('load', () => {

        let svgDocument = object.contentDocument;
        P1 = svgDocument.getElementById("P1");
        P11 = svgDocument.getElementById("P11");
        P12 = svgDocument.getElementById("P12");
        P13 = svgDocument.getElementById("P13");
        P2 = svgDocument.getElementById("P2");
        P21 = svgDocument.getElementById("P21");
        P22 = svgDocument.getElementById("P22");
        P23 = svgDocument.getElementById("P23");
        P3 = svgDocument.getElementById("P3");
        P31 = svgDocument.getElementById("P31");
        P32 = svgDocument.getElementById("P32");
        P33 = svgDocument.getElementById("P33");
        P4 = svgDocument.getElementById("P4");
        P41 = svgDocument.getElementById("P41");
        P42 = svgDocument.getElementById("P42");
        P43 = svgDocument.getElementById("P43");
        P5 = svgDocument.getElementById("P5");
        P51 = svgDocument.getElementById("P51");
        P52 = svgDocument.getElementById("P52");
        P53 = svgDocument.getElementById("P53");


        config = [
            {
                elem: P1,
                sound: 'nag'
            },
            {
                elem: P2,
                sound: 'net'
            },
            {
                elem: P3,
                sound: 'nip'
            },
            {
                elem: P4,
                sound: 'nod'
            },
            {
                elem: P5,
                sound: 'nut'
            },

            {
                elem: P11,
                sound: 'n'
            },
            {
                elem: P12,
                sound: 'a'
            },
            {
                elem: P13,
                sound: 'g'
            },

            {
                elem: P21,
                sound: 'n'
            },
            {
                elem: P22,
                sound: 'e'
            },
            {
                elem: P23,
                sound: 't'
            },

            {
                elem: P31,
                sound: 'n'
            },
            {
                elem: P32,
                sound: 'i'
            },
            {
                elem: P33,
                sound: 'p',
                matrix: 'matrix(1 0 0 1 300.6767 221.7401)'
            },

            {
                elem: P41,
                sound: 'n'
            },
            {
                elem: P42,
                sound: 'o'
            },
            {
                elem: P43,
                sound: 'd'
            },

            {
                elem: P51,
                sound: 'n'
            },
            {
                elem: P52,
                sound: 'u'
            },
            {
                elem: P53,
                sound: 't'
            },
        ];

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

/* Buttons */
function buttonAction(elem) {
    switch (elem) {
        case 20:
            replaySlide();
            break;
    }
}

