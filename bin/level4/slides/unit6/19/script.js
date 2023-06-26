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
        var M = svgDocument.getElementById('P');

        let objects = [
            {
                sound: 'p',
                elem: M
            },
            {
                sound: 'b',
                elem: B
            },
            {
                sound: 'a',
                elem: A
            },
            {
                sound: 'e',
                elem: E
            },
            {
                sound: 'i',
                elem: I
            },
            {
                sound: 'o',
                elem: O
            },
            {
                sound: 'u',
                elem: U
            },
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
        playSlideVoice('sound/ba', 1);
        questions.push('a','b');
    }

    if (elem == 2) {
        playSlideVoice('sound/be', 1);
        questions.push('e','b');
    }

    if (elem == 3) {
        playSlideVoice('sound/bi', 1);
        questions.push('i','b');
    }

    if (elem == 4) {
        playSlideVoice('sound/bo', 1);
        questions.push('o','b');
    }

    if (elem == 5) {
        playSlideVoice('sound/bu', 1);
        questions.push('u','b');
    }

    if (elem == 6) {
        playSlideVoice('sound/pa', 1);
        questions.push('a', 'p');
    }

    if (elem == 7) {
        playSlideVoice('sound/pe', 1);
        questions.push('e', 'p');
    }

    if (elem == 8) {
        playSlideVoice('sound/pi', 1);
        questions.push('i', 'p');
    }

    if (elem == 9) {
        playSlideVoice('sound/po', 1);
        questions.push('o', 'p');
    }

    if (elem == 10) {
        playSlideVoice('sound/pu', 1);
        questions.push('u', 'p');
    }
}



