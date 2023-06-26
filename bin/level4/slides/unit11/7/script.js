var question;

$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument; //получаем svg элемент внутри object

        let P1 = svgDocument.getElementById('P1');
        let P2 = svgDocument.getElementById('P2');
        let P3 = svgDocument.getElementById('P3');
        let P4 = svgDocument.getElementById('P4');
        let P5 = svgDocument.getElementById('P5');
        let P6 = svgDocument.getElementById('P6');

        P1.addEventListener('click', function () {
            checkSound(1);
        });

        P2.addEventListener('click', function () {
            checkSound(2);
        });


        P3.addEventListener('click', function () {
            checkSound(3);
        });


        P4.addEventListener('click', function () {
            checkSound(4);
        });


        P5.addEventListener('click', function () {
            checkSound(5);
        });


        P6.addEventListener('click', function () {
            checkSound(6);
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

function checkSound(sound) {
    if (question == sound) {
        playSlideVoice('sound/' + sound, 1)
    } else {
        playSlideVoice('sound/bad.mp3', 1);
    }
}

/* Buttons */
function buttonAction(elem) {
    question = elem;

    playSlideVoice('sound/' + elem, 1);
}
