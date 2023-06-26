var question = null;
var color = null;
var colors = [
    'red', 'green', 'blue', 'yellow', 'purple', 'brown', 'orange'
]
var check = function (elem, object) {
    if (object.classList.contains('coloring')) {
        if (!color) {
            playSlideVoice('sound/bad.mp3', 1);
            return;
        }

        colors.forEach((el) => {
           object.classList.remove(el);
        });

        object.classList.add(color);

        return;
    }

    if(question == elem){
        object.classList.add('coloring');
        playSlideVoice('sound/' + elem, 1)
    } else {
        playSlideVoice('sound/bad.mp3', 1)
    }
};

$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument; //получаем svg элемент внутри object

        let P1 = svgDocument.getElementById('A1');
        let P2 = svgDocument.getElementById('A2');
        let P3 = svgDocument.getElementById('A3');
        let P4 = svgDocument.getElementById('A4');
        let P5 = svgDocument.getElementById('A5');
        let P6 = svgDocument.getElementById('A6');
        let P7 = svgDocument.getElementById('A7');

        P1.addEventListener('click', function () {
            check(1, P1);
        });

        P2.addEventListener('click', function () {
            check(2, P2);
        });


        P3.addEventListener('click', function () {
            check(3, P3);
        });


        P4.addEventListener('click', function () {
            check(4, P4);
        });


        P5.addEventListener('click', function () {
            check(5, P5);
        });


        P6.addEventListener('click', function () {
            check(6, P6);
        });


        P7.addEventListener('click', function () {
            check(7, P7);
        });


    });

    hideOverlay(500);

    document.querySelectorAll('.colorpicker .color').forEach((el) => {
        el.addEventListener('click', () => {
            color = el.dataset.color;
        })
    });

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
    playSlideVoice('sound/' + elem, 1);
    question = elem;
}
