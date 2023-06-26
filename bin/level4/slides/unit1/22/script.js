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

        var B = svgDocument.getElementById('B');
        var M = svgDocument.getElementById('M');

        let objects = [
            {
                sound: 'm',
                elem: M
            },
            {
                sound: 'b',
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

    if (elem == 1) {
        playSlideVoice('sound/1', 1);
        questions.push('a','b');
    }

    if (elem == 2) {
        playSlideVoice('sound/2', 1);
        questions.push('i','b');
    }

    if (elem == 3) {
        playSlideVoice('sound/3', 1);
        questions.push('o','b');
    }

    if (elem == 4) {
        playSlideVoice('sound/4', 1);
        questions.push('u','b');
    }

    if (elem == 5) {
        playSlideVoice('sound/5', 1);
        questions.push('e','b');
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



