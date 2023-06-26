const questions = [];

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
                sound: 'fa',
                elem: A11
            }, {
                sound: 'fe',
                elem: A12
            }, {
                sound: 'fi',
                elem: A13
            }, {
                sound: 'fo',
                elem: A14
            }, {
                sound: 'fu',
                elem: A15
            },
            {
                sound: 'va',
                elem: A21
            }, {
                sound: 've',
                elem: A22
            }, {
                sound: 'vi',
                elem: A23
            }, {
                sound: 'vo',
                elem: A24
            }, {
                sound: 'vu',
                elem: A25
            },
        ];

        objects.forEach((el) => {
            el.elem.addEventListener('click', () => {
                playSlideVoice(`sound/${el.sound}`, 1, 1);
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
    questions.splice(0, questions.length);

    if (elem == 1) {
        playSlideVoice('sound/1', 1);
        questions.push('a', 'b');
    }

    if (elem == 2) {
        playSlideVoice('sound/2', 1);
        questions.push('i', 'b');
    }

    if (elem == 3) {
        playSlideVoice('sound/3', 1);
        questions.push('o', 'b');
    }

    if (elem == 4) {
        playSlideVoice('sound/4', 1);
        questions.push('u', 'b');
    }

    if (elem == 5) {
        playSlideVoice('sound/5', 1);
        questions.push('e', 'b');
    }

    if (elem == 6) {
        playSlideVoice('sound/6', 1);
        questions.push('a', 'm');
    }

    if (elem == 7) {
        playSlideVoice('sound/7', 1);
        questions.push('i', 'm');
    }

    if (elem == 8) {
        playSlideVoice('sound/8', 1);
        questions.push('o', 'm');
    }

    if (elem == 9) {
        playSlideVoice('sound/9', 1);
        questions.push('u', 'm');
    }

    if (elem == 10) {
        playSlideVoice('sound/10', 1);
        questions.push('e', 'm');
    }
}



