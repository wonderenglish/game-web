var question;

$(document).ready(function () {
    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;


        var P1 = svgDocument.getElementById('P1');
        var P2 = svgDocument.getElementById('P2');
        var P3 = svgDocument.getElementById('P3');
        var P4 = svgDocument.getElementById('P4');
        var P5 = svgDocument.getElementById('P5');
        var P6 = svgDocument.getElementById('P6');
        var P7 = svgDocument.getElementById('P7');
        var P8 = svgDocument.getElementById('P8');
        var P9 = svgDocument.getElementById('P9');
        var P10 = svgDocument.getElementById('P10');
        var P11 = svgDocument.getElementById('P11');
        var P12 = svgDocument.getElementById('P12');
        var P13 = svgDocument.getElementById('P13');
        var P14 = svgDocument.getElementById('P14');
        var P15 = svgDocument.getElementById('P15');


        let objects = [
            {
                index: 1,
                sound: 'qua',
                elem: P1
            }, {
                index: 2,
                sound: 'que',
                elem: P2
            }, {
                index: 3,
                sound: 'qui',
                elem: P3
            }, {
                index: 4,
                sound: 'ca',
                elem: P4
            }, {
                index: 5,
                sound: 'co',
                elem: P5
            },
            {
                index: 6,
                sound: 'cu',
                elem: P6
            },
            {
                index: 7,
                sound: 'ga',
                elem: P7
            }, {
                index: 9,
                sound: 'gu',
                elem: P8
            }, {
                index: 8,
                sound: 'go',
                elem: P9
            }, {
                index: 10,
                sound: 'ya',
                elem: P10
            }, {
                index: 11,
                sound: 'ye',
                elem: P11
            },
            {
                index: 12,
                sound: 'yu',
                elem: P12
            },
            {
                index: 12,
                sound: 'yu',
                elem: P13
            },
            {
                index: 12,
                sound: 'yu',
                elem: P14
            },

            {
                index: 12,
                sound: 'yu',
                elem: P15
            },

        ];

        objects.forEach((el) => {
            el.elem.addEventListener('click', () => {
                playSlideVoice(`sound/${el.elem.querySelector('text').innerHTML}`, 1, 1)
            })
        });

    });

    $('.button').click(function () {
        $('.table__elem.active').removeClass('active').removeClass('on-top');
        var elem = $(this).attr('data-action');
        buttonAction(elem);
    });

});

/* Buttons */
function buttonAction(elem) {

    if (elem == 1) {
        playSlideVoice('sound/qua', 1);
    }

    if (elem == 2) {

        playSlideVoice('sound/que', 1);
    }

    if (elem == 3) {
        playSlideVoice('sound/qui', 1);
    }

    if (elem == 4) {
        playSlideVoice('sound/ca', 1);
    }

    if (elem == 5) {
        playSlideVoice('sound/co', 1);
    }

    if (elem == 6) {
        playSlideVoice('sound/cu', 1);
    }

    if (elem == 7) {
        playSlideVoice('sound/ga', 1);
    }

    if (elem == 8) {
        playSlideVoice('sound/go', 1);
    }

    if (elem == 9) {
        playSlideVoice('sound/gu', 1);
    }

    if (elem == 10) {
        playSlideVoice('sound/ya', 1);
    }

    if (elem == 11) {
        playSlideVoice('sound/ye', 1);
    }

    if (elem == 12) {
        playSlideVoice('sound/yu', 1);
    }

    question = elem;
}



