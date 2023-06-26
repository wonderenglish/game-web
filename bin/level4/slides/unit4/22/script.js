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

        var B = svgDocument.getElementById('J');
        var M = svgDocument.getElementById('R');

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

    if (elem == 'ja') {
        playSlideVoice('sound/ja', 1);
        questions.push('a','b');
    }

    if (elem == 'ji') {
        playSlideVoice('sound/ji', 1);
        questions.push('i','b');
    }

    if (elem == 'jo') {
        playSlideVoice('sound/jo', 1);
        questions.push('o','b');
    }

    if (elem == 'ju') {
        playSlideVoice('sound/ju', 1);
        questions.push('u','b');
    }

    if (elem == 'je') {
        playSlideVoice('sound/je', 1);
        questions.push('e','b');
    }

    if (elem == 'ra') {
        playSlideVoice('sound/ra', 1);
        questions.push('a', 'm');
    }

    if (elem == 'ri') {
        playSlideVoice('sound/ri', 1);
        questions.push('i', 'm');
    }

    if (elem == 'ro') {
        playSlideVoice('sound/ro', 1);
        questions.push('o', 'm');
    }

    if (elem == 'ru') {
        playSlideVoice('sound/ru', 1);
        questions.push('u', 'm');
    }

    if (elem == 're') {
        playSlideVoice('sound/re', 1);
        questions.push('e', 'm');
    }
}



