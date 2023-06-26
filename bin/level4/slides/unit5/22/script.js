const questions = [];

$(document).ready(function () {
    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;


        var A = svgDocument.getElementById('R1');
        var O = svgDocument.getElementById('R4');
        var U = svgDocument.getElementById('R5');
        var I = svgDocument.getElementById('R3');
        var E = svgDocument.getElementById('R2');

        var B = svgDocument.getElementById('L1');
        var M = svgDocument.getElementById('L2');

        let objects = [
            {
                sound: 'v',
                elem: M
            },
            {
                sound: 'f',
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
        playSlideVoice('sound/fa', 1);
        questions.push('a','f');
    }

    if (elem == 2) {
        playSlideVoice('sound/fe', 1);
        questions.push('e','f');
    }

    if (elem == 3) {
        playSlideVoice('sound/fi', 1);
        questions.push('i','f');
    }

    if (elem == 4) {
        playSlideVoice('sound/fo', 1);
        questions.push('o','f');
    }

    if (elem == 5) {
        playSlideVoice('sound/fu', 1);
        questions.push('u','f');
    }

    if (elem == 6) {
        playSlideVoice('sound/va', 1);
        questions.push('a', 'v');
    }

    if (elem == 7) {
        playSlideVoice('sound/ve', 1);
        questions.push('e', 'v');
    }

    if (elem == 8) {
        playSlideVoice('sound/vi', 1);
        questions.push('i', 'v');
    }

    if (elem == 9) {
        playSlideVoice('sound/vo', 1);
        questions.push('o', 'v');
    }

    if (elem == 10) {
        playSlideVoice('sound/vu', 1);
        questions.push('u', 'v');
    }
}



