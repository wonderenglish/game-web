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
        let P7 = svgDocument.getElementById('P7');
        let P8 = svgDocument.getElementById('P8');
        let P9 = svgDocument.getElementById('P9');
        let P10 = svgDocument.getElementById('P10');
        let P11 = svgDocument.getElementById('P11');

        let ELEMS = [];

        ELEMS.push(
            {elem: P1, sound: 'P1'},
            {elem: P2, sound: 'P2'},
            {elem: P3, sound: 'P3'},
            {elem: P4, sound: 'P4'},
            {elem: P5, sound: 'P5'},
            {elem: P6, sound: 'P6'},
            {elem: P7, sound: 'P7'},
            {elem: P8, sound: 'P8'},
            {elem: P9, sound: 'P9'},
            {elem: P10, sound: 'P10'},
            {elem: P11, sound: 'P11'},
        );

        ELEMS.forEach((el) => {
            el.elem.addEventListener('click', function () {
                playSlideVoice('sound/' + el.sound, 1)
            })
        })


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
        replaySlide();
    }
}
