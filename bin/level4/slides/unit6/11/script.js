$(document).ready(function () {
    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });

    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        let TIGER = svgDocument.getElementById("TIGER");
        let A1 = svgDocument.getElementById("A1");
        let A2 = svgDocument.getElementById("A2");
        let A3 = svgDocument.getElementById("A3");
        let A4 = svgDocument.getElementById("A4");
        let A5 = svgDocument.getElementById("A5");
        let A6 = svgDocument.getElementById("A6");
        let A7 = svgDocument.getElementById("A7");
        let A8 = svgDocument.getElementById("A8");

        let B1 = svgDocument.getElementById("B1");
        let B2 = svgDocument.getElementById("B2");
        let B3 = svgDocument.getElementById("B3");
        let B4 = svgDocument.getElementById("B4");
        let B5 = svgDocument.getElementById("B5");
        let B6 = svgDocument.getElementById("B6");
        let B7 = svgDocument.getElementById("B7");
        let B8 = svgDocument.getElementById("B8");

        TIGER.addEventListener('click', () => {
            playSlideVoice('sound/1', 1, 1);
        });

        let As = [A1, A2, A3, A4, A5, A6, A7, A8];
        let Bs = [B1, B2, B3, B4, B5, B6, B7, B8];

        As.forEach((el) => {
            el.classList.add('hide');

            el.addEventListener('click', () => {
                if (!el.classList.contains('hide')) {
                    playSlideVoice('sound/3', 1, 1);
                }
                el.classList.remove('hide');
            })
        });

        Bs.forEach((el) => {
            el.classList.add('hide');

            el.addEventListener('click', () => {
                if (!el.classList.contains('hide')) {
                    playSlideVoice('sound/2', 1, 1);
                }

                el.classList.remove('hide');
            })
        });

    });

    $('.button, .replay').click(function () {
        if ($('#block').val() != 1) {
            $('.table__elem.active').removeClass('active').removeClass('on-top');
            var elem = $(this).attr('data-action');
            buttonAction(elem);
        }
    });

    $('.table__elem').click(function () {
        var id = $(this).attr('data-id');
        rate = $('#rate').val();
        playSlideVoice('sound/' + id, 1, rate);
    });

});

/* Buttons */
function buttonAction(elem) {

    $(elem).addClass('active').addClass('on-top');

    if (elem == 1) {
        playSlideVoice('sound/1', 1);
    }

    if (elem == 2) {
        playSlideVoice('sound/2', 1);
    }

    if (elem == 3) {
        playSlideVoice('sound/3', 1);
    }
}