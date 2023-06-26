$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument; //получаем svg элемент внутри object

        let P1 = svgDocument.getElementById('P1');
        let P2 = svgDocument.getElementById('P2');
        let P3 = svgDocument.getElementById('P3');
        let P4 = svgDocument.getElementById('P4');
        let P5 = svgDocument.getElementById('P5');

        P1.addEventListener('click', function () {
            playSlideVoice('sound/P1', 1);
        });

        P2.addEventListener('click', function () {
            playSlideVoice('sound/P2', 1);
        });


        P3.addEventListener('click', function () {
            playSlideVoice('sound/P3', 1);
        });


        P4.addEventListener('click', function () {
            playSlideVoice('sound/P4', 1);
        });


        P5.addEventListener('click', function () {
            playSlideVoice('sound/P5', 1);
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
