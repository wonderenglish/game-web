$(document).ready(function () {
    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;

        var B1 = svgDocument.getElementById("B1");
        var B2 = svgDocument.getElementById("B2");
        var B3 = svgDocument.getElementById("B3");
        var B4 = svgDocument.getElementById("B4");
        var B5 = svgDocument.getElementById("B5");

        var A = svgDocument.getElementById('A');
        var O = svgDocument.getElementById('O');
        var U = svgDocument.getElementById('U');
        var I = svgDocument.getElementById('I');
        var E = svgDocument.getElementById('E');

        var FIRST = svgDocument.getElementById('LETTER_FIRST');

        let objects = [
            {
                sound: 'da',
                elem: B1
            }, {
                sound: 'de',
                elem: B2
            }, {
                sound: 'di',
                elem: B3
            }, {
                sound: 'do',
                elem: B4
            }, {
                sound: 'du',
                elem: B5
            }, {
                sound: 'd',
                elem: FIRST
            }, {
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
               playSlideVoice(`sound/${el.sound}`, 1,1)
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
    if (elem == 1) {
        playSlideVoice('sound/1');
    }

    if (elem == 2) {
        playSlideVoice('sound/2');
    }

    if (elem == 3) {
        playSlideVoice('sound/3');
    }

    if (elem == 4) {
        playSlideVoice('sound/4');
    }

    if (elem == 5) {
        playSlideVoice('sound/5');
    }
}



