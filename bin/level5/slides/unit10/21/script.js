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
        P14 = svgDocument.getElementById("P14");
        P2 = svgDocument.getElementById("P2");
        P21 = svgDocument.getElementById("P21");
        P22 = svgDocument.getElementById("P22");
        P23 = svgDocument.getElementById("P23");
        P24 = svgDocument.getElementById("P24");
        P3 = svgDocument.getElementById("P3");
        P31 = svgDocument.getElementById("P31");
        P32 = svgDocument.getElementById("P32");
        P33 = svgDocument.getElementById("P33");
        P34 = svgDocument.getElementById("P34");
        P4 = svgDocument.getElementById("P4");
        P41 = svgDocument.getElementById("P41");
        P42 = svgDocument.getElementById("P42");
        P43 = svgDocument.getElementById("P43");
        P5 = svgDocument.getElementById("P5");
        P51 = svgDocument.getElementById("P51");
        P52 = svgDocument.getElementById("P52");
        P53 = svgDocument.getElementById("P53");
        P6 = svgDocument.getElementById("P6");
        P61 = svgDocument.getElementById("P61");
        P62 = svgDocument.getElementById("P62");
        P63 = svgDocument.getElementById("P63");
        config = [
            {
                elem: P1,
                sound: 'gap'
            },
            {
                elem: P2,
                sound: 'got'
            },
            {
                elem: P3,
                sound: 'gut'
            },
            {
                elem: P4,
                sound: 'yap'
            },
            {
                elem: P5,
                sound: 'yes'
            },
            {
                elem: P6,
                sound: 'yak'
            },
            {
                elem: P11,
                sound: 'g',
            },
            {
                elem: P12,
                sound: 'a'
            },
            {
                elem: P13,
                sound: 'p'
            },
            {
                elem: P14,
                sound: ''
            },
            {
                elem: P21,
                sound: 'g',
            },
            {
                elem: P22,
                sound: 'o'
            },
            {
                elem: P23,
                sound: 't'
            },
            {
                elem: P24,
                sound: ''
            },
            {
                elem: P31,
                sound: 'g',
            },
            {
                elem: P32,
                sound: 'u'
            },
            {
                elem: P33,
                sound: 't',
            },
            {
                elem: P34,
                sound: '',
            },
            {
                elem: P41,
                sound: 'y',
            },
            {
                elem: P42,
                sound: 'a'
            },
            {
                elem: P43,
                sound: 'p',
            },
            {
                elem: P51,
                sound: 'y',
            },
            {
                elem: P52,
                sound: 'e'
            },
            {
                elem: P53,
                sound: 's',
            },
            {
                elem: P61,
                sound: 'y',
            },
            {
                elem: P62,
                sound: 'a'
            },
            {
                elem: P63,
                sound: 'k',
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

