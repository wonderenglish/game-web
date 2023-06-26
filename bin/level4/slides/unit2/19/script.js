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

    if (elem == 'na') {
        playSlideVoice('sound/na', 1);
        questions.push('a','b');
    }

    if (elem == 'ni') {
        playSlideVoice('sound/ni', 1);
        questions.push('i','b');
    }

    if (elem == 'no') {
        playSlideVoice('sound/no', 1);
        questions.push('o','b');
    }

    if (elem == 'nu') {
        playSlideVoice('sound/nu', 1);
        questions.push('u','b');
    }

    if (elem == 'ne') {
        playSlideVoice('sound/ne', 1);
        questions.push('e','b');
    }

    if (elem == 'ka') {
        playSlideVoice('sound/ka', 1);
        questions.push('a', 'm');
    }

    if (elem == 'ki') {
        playSlideVoice('sound/ki', 1);
        questions.push('i', 'm');
    }

    if (elem == 'ko') {
        playSlideVoice('sound/ko', 1);
        questions.push('o', 'm');
    }

    if (elem == 'ku') {
        playSlideVoice('sound/ku', 1);
        questions.push('u', 'm');
    }

    if (elem == 'ke') {
        playSlideVoice('sound/ke', 1);
        questions.push('e', 'm');
    }
}



