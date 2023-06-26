$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument; //получаем svg элемент внутри object

        let TIGER = svgDocument.getElementById('TIGER');
        let P1 = svgDocument.getElementById('A1');
        let P2 = svgDocument.getElementById('A2');
        let P3 = svgDocument.getElementById('A3');
        let P4 = svgDocument.getElementById('A4');
        let P5 = svgDocument.getElementById('A5');
        let P6 = svgDocument.getElementById('A6');
        let P7 = svgDocument.getElementById('A7');

        TIGER.addEventListener('click', function () {
            playSlideVoice('sound/i', 1);
        });

        P1.addEventListener('click', function () {
            playSlideVoice('sound/1', 1);
        });

        P2.addEventListener('click', function () {
            playSlideVoice('sound/2', 1);
        });


        P3.addEventListener('click', function () {
            playSlideVoice('sound/3', 1);
        });


        P4.addEventListener('click', function () {
            playSlideVoice('sound/4', 1);
        });


        P5.addEventListener('click', function () {
            playSlideVoice('sound/5', 1);
        });


        P6.addEventListener('click', function () {
            playSlideVoice('sound/6', 1);
        });


        P7.addEventListener('click', function () {
            playSlideVoice('sound/7', 1);
        });


    });

    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });

    $('.button, .replay').click(function () {
        if ($('#block').val() != 1) {
            $('.table__elem.active').removeClass('active').removeClass('on-top');
            var elem = $(this).attr('data-action');
            buttonAction(elem);
        }
    });


});

/* Buttons */
function buttonAction(elem) {
    if (elem == 1) {
        playSlideVoice('sound/i', 1);
    }
    if (elem == 2) {
        playSlideVoice('sound/2', 1);
    }
}
