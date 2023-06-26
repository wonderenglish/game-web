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
                sound: 't',
                elem: M
            },
            {
                sound: 'd',
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
        playSlideVoice('sound/da', 1);
        questions.push('a','d');
    }

    if (elem == 2) {
        playSlideVoice('sound/di', 1);
        questions.push('i','d');
    }

    if (elem == 3) {
        playSlideVoice('sound/do', 1);
        questions.push('o','d');
    }

    if (elem == 4) {
        playSlideVoice('sound/du', 1);
        questions.push('u','d');
    }

    if (elem == 5) {
        playSlideVoice('sound/de', 1);
        questions.push('e','d');
    }

    if (elem == 6) {
        playSlideVoice('sound/ta', 1);
        questions.push('a', 't');
    }

    if (elem == 7) {
        playSlideVoice('sound/ti', 1);
        questions.push('i', 't');
    }

    if (elem == 8) {
        playSlideVoice('sound/to', 1);
        questions.push('o', 't');
    }

    if (elem == 9) {
        playSlideVoice('sound/tu', 1);
        questions.push('u', 't');
    }

    if (elem == 10) {
        playSlideVoice('sound/te', 1);
        questions.push('e', 't');
    }
}



