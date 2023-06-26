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

        var A21 = svgDocument.getElementById('B1');
        var A22 = svgDocument.getElementById('B2');
        var A23 = svgDocument.getElementById('B3');
        var A24 = svgDocument.getElementById('B4');
        var A25 = svgDocument.getElementById('B5');
        let objects = [
            {
                index: 1,
                sound: 'fa',
                elem: A11
            }, {
                index: 2,
                sound: 'fe',
                elem: A12
            }, {
                index: 3,
                sound: 'fi',
                elem: A13
            }, {
                index: 4,
                sound: 'fo',
                elem: A14
            }, {
                index: 5,
                sound: 'fu',
                elem: A15
            },
            {
                index: 6,
                sound: 'va',
                elem: A21
            }, {
                index: 7,
                sound: 've',
                elem: A22
            }, {
                index: 8,
                sound: 'vi',
                elem: A23
            }, {
                index: 9,
                sound: 'vo',
                elem: A24
            }, {
                index: 10,
                sound: 'vu',
                elem: A25
            },
        ];

        objects.forEach((el) => {
            el.elem.addEventListener('click', () => {
                el.index == question
                    ? playSlideVoice(`sound/${el.sound}`, 1, 1)
                    : playSlideVoice('sound/bad.mp3', 1, 1);
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
        playSlideVoice('sound/fa', 1);
    }

    if (elem == 2) {
        playSlideVoice('sound/fe', 1);
    }

    if (elem == 3) {
        playSlideVoice('sound/fi', 1);
    }

    if (elem == 4) {
        playSlideVoice('sound/fo', 1);
    }

    if (elem == 5) {
        playSlideVoice('sound/fu', 1);
    }

    if (elem == 6) {
        playSlideVoice('sound/va', 1);
    }

    if (elem == 7) {
        playSlideVoice('sound/ve', 1);
    }

    if (elem == 8) {
        playSlideVoice('sound/vi', 1);
    }

    if (elem == 9) {
        playSlideVoice('sound/vo', 1);
    }

    if (elem == 10) {
        playSlideVoice('sound/vu', 1);
    }

    question = elem;
}



