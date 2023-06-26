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

        var B = svgDocument.getElementById('W');
        var M = svgDocument.getElementById('H');

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

    if (elem == 'wa') {
        playSlideVoice('sound/wa', 1);
        questions.push('a','b');
    }

    if (elem == 'wi') {
        playSlideVoice('sound/wi', 1);
        questions.push('i','b');
    }

    if (elem == 'wo') {
        playSlideVoice('sound/wo', 1);
        questions.push('o','b');
    }

    if (elem == 'wu') {
        playSlideVoice('sound/wu', 1);
        questions.push('u','b');
    }

    if (elem == 'we') {
        playSlideVoice('sound/we', 1);
        questions.push('e','b');
    }

    if (elem == 'ha') {
        playSlideVoice('sound/ha', 1);
        questions.push('a', 'm');
    }

    if (elem == 'hi') {
        playSlideVoice('sound/hi', 1);
        questions.push('i', 'm');
    }

    if (elem == 'ho') {
        playSlideVoice('sound/ho', 1);
        questions.push('o', 'm');
    }

    if (elem == 'hu') {
        playSlideVoice('sound/hu', 1);
        questions.push('u', 'm');
    }

    if (elem == 'he') {
        playSlideVoice('sound/he', 1);
        questions.push('e', 'm');
    }
}



