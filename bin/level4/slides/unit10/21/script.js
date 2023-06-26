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

        var Q = svgDocument.getElementById('Q');
        var C = svgDocument.getElementById('C');
        var G = svgDocument.getElementById('G');
        var Y = svgDocument.getElementById('Y');

        let objects = [
            {
                sound: 'qu',
                elem: Q
            },
            {
                sound: 'c',
                elem: C
            },
            {
                sound: 'g',
                elem: G
            },
            {
                sound: 'y',
                elem: Y
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
        playSlideVoice('sound/qua', 1);
        questions.push('a','qu');
    }

    if (elem == 2) {
        playSlideVoice('sound/que', 1);
        questions.push('e','qu');
    }

    if (elem == 3) {
        playSlideVoice('sound/qui', 1);
        questions.push('i','qu');
    }

    if (elem == 4) {
        playSlideVoice('sound/ca', 1);
        questions.push('a','c');
    }

    if (elem == 5) {
        playSlideVoice('sound/co', 1);
        questions.push('o','c');
    }

    if (elem == 6) {
        playSlideVoice('sound/cu', 1);
        questions.push('u', 'c');
    }

    if (elem == 7) {
        playSlideVoice('sound/ga', 1);
        questions.push('a', 'g');
    }

    if (elem == 8) {
        playSlideVoice('sound/go', 1);
        questions.push('o', 'g');
    }

    if (elem == 9) {
        playSlideVoice('sound/gu', 1);
        questions.push('u', 'g');
    }

    if (elem == 10) {
        playSlideVoice('sound/ya', 1);
        questions.push('a', 'y');
    }

    if (elem == 11) {
        playSlideVoice('sound/ye', 1);
        questions.push('e', 'y');
    }

    if (elem == 12) {
        playSlideVoice('sound/yu', 1);
        questions.push('u', 'y');
    }
}



