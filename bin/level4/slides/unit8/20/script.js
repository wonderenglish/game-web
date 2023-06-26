const questions = [];

$(document).ready(function () {
    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;


        var A = svgDocument.getElementById('A');
        var O = svgDocument.getElementById('O');
        var U = svgDocument.getElementById('U');
        var I = svgDocument.getElementById('I');
        var E = svgDocument.getElementById('E');

        var B = svgDocument.getElementById('H');
        var M = svgDocument.getElementById('W');

        let objects = [
            {
                sound: 's',
                elem: M
            },
            {
                sound: 'z',
                elem: B
            },
            {
                sound: 'a',
                elem: A
            }, {
                sound: 'o',
                elem: O
            }, {
                sound: 'u',
                elem: U
            }, {
                sound: 'i',
                elem: I
            }, {
                sound: 'e',
                elem: E
            }
        ];

        objects.forEach((el) => {
            el.elem.addEventListener('click', () => {
                if (questions.length && questions[questions.length - 1] === el.sound) {
                    questions.pop();
                    playSlideVoice(`sound/${el.sound}`, 1, 1);
                    return;
                }

                playSlideVoice('sound/bad.mp3', 1);
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

    if (elem == 'sa') {
        playSlideVoice('sound/sa', 1);
        questions.push('a','s');
    }

    if (elem == 'si') {
        playSlideVoice('sound/si', 1);
        questions.push('i','s');
    }

    if (elem == 'so') {
        playSlideVoice('sound/so', 1);
        questions.push('o','s');
    }

    if (elem == 'su') {
        playSlideVoice('sound/su', 1);
        questions.push('u','s');
    }

    if (elem == 'se') {
        playSlideVoice('sound/se', 1);
        questions.push('e','s');
    }

    if (elem == 'za') {
        playSlideVoice('sound/za', 1);
        questions.push('a', 'z');
    }

    if (elem == 'zi') {
        playSlideVoice('sound/zi', 1);
        questions.push('i', 'z');
    }

    if (elem == 'zo') {
        playSlideVoice('sound/zo', 1);
        questions.push('o', 'z');
    }

    if (elem == 'zu') {
        playSlideVoice('sound/zu', 1);
        questions.push('u', 'z');
    }

    if (elem == 'ze') {
        playSlideVoice('sound/ze', 1);
        questions.push('e', 'z');
    }
}



