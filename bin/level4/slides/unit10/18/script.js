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

        var FIRST = svgDocument.getElementById('LETTER_FIRST');

        let objects = [
            {
                sound: 'ca',
                elem: B1
            }, {
                sound: 'co',
                elem: B2
            }, {
                sound: 'cu',
                elem: B3
            }, {
                sound: 'c',
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


