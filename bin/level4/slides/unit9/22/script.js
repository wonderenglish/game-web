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

        var B = svgDocument.getElementById('N');
        var M = svgDocument.getElementById('K');

        let objects = [
            {
                sound: 'r',
                elem: M
            },
            {
                sound: 'l',
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

    if (elem == 'la') {
        playSlideVoice('sound/la', 1);
        questions.push('a','l');
    }

    if (elem == 'li') {
        playSlideVoice('sound/li', 1);
        questions.push('i','l');
    }

    if (elem == 'lo') {
        playSlideVoice('sound/lo', 1);
        questions.push('o','l');
    }

    if (elem == 'lu') {
        playSlideVoice('sound/lu', 1);
        questions.push('u','l');
    }

    if (elem == 'le') {
        playSlideVoice('sound/le', 1);
        questions.push('e','l');
    }

    if (elem == 'ra') {
        playSlideVoice('sound/ra', 1);
        questions.push('a', 'r');
    }

    if (elem == 'ri') {
        playSlideVoice('sound/ri', 1);
        questions.push('i', 'r');
    }

    if (elem == 'ro') {
        playSlideVoice('sound/ro', 1);
        questions.push('o', 'r');
    }

    if (elem == 'ru') {
        playSlideVoice('sound/ru', 1);
        questions.push('u', 'r');
    }

    if (elem == 're') {
        playSlideVoice('sound/re', 1);
        questions.push('e', 'r');
    }
}



