$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument; //получаем svg элемент внутри object

        let P12 = svgDocument.getElementById('P12');
        let P13 = svgDocument.getElementById('P13');
        let P14 = svgDocument.getElementById('P14');
        let P15 = svgDocument.getElementById('P15');
        let P16 = svgDocument.getElementById('P16');
        let P17 = svgDocument.getElementById('P17');
        let P18 = svgDocument.getElementById('P18');
        let P19 = svgDocument.getElementById('P19');
        let P20 = svgDocument.getElementById('P20');
        let P21 = svgDocument.getElementById('P21');

        let ELEMS = [];

        ELEMS.push(
            {elem: P12, sound: 'P12'},
            {elem: P13, sound: 'P13'},
            {elem: P14, sound: 'P14'},
            {elem: P15, sound: 'P15'},
            {elem: P16, sound: 'P16'},
            {elem: P17, sound: 'P17'},
            {elem: P18, sound: 'P18'},
            {elem: P19, sound: 'P19'},
            {elem: P20, sound: 'P20'},
            {elem: P21, sound: 'P21'},
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
