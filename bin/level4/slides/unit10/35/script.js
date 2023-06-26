var question;

$(document).ready(function () {
    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;


        var A11 = svgDocument.getElementById('A1');
        var A12 = svgDocument.getElementById('A2');
        var A13 = svgDocument.getElementById('A3');
        var A14 = svgDocument.getElementById('A4');
        var A15 = svgDocument.getElementById('A5');
        var A16 = svgDocument.getElementById('A6');

        var A21 = svgDocument.getElementById('B1');
        var A22 = svgDocument.getElementById('B2');
        var A23 = svgDocument.getElementById('B3');
        var A24 = svgDocument.getElementById('B4');
        var A25 = svgDocument.getElementById('B5');
        var A26 = svgDocument.getElementById('B6');

        let objects = [
            {
                index: 1,
                sound: 'qua',
                elem: A11
            }, {
                index: 2,
                sound: 'que',
                elem: A12
            }, {
                index: 3,
                sound: 'qui',
                elem: A13
            }, {
                index: 4,
                sound: 'ca',
                elem: A14
            }, {
                index: 5,
                sound: 'co',
                elem: A15
            },
            {
                index: 6,
                sound: 'cu',
                elem: A16
            },
            {
                index: 7,
                sound: 'ga',
                elem: A21
            }, {
                index: 9,
                sound: 'gu',
                elem: A22
            }, {
                index: 8,
                sound: 'go',
                elem: A26
            }, {
                index: 10,
                sound: 'ya',
                elem: A23
            }, {
                index: 11,
                sound: 'ye',
                elem: A24
            },
            {
                index: 12,
                sound: 'yu',
                elem: A25
            },

        ];

        objects.forEach((el) => {
            el.elem.addEventListener('click', () => {
                playSlideVoice(`sound/${el.sound}`, 1, 1)
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



