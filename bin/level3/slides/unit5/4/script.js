var  A00, A11, A12, A13, A14, A15,
A21, A22, A23, A24, A25,
A31, A32, A33, A34, A35,
A41, A42, A43, A44, A45;




$(document).ready(function () {
    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });
    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object

        A11 = svgDocument.getElementById("A11");
        A12 = svgDocument.getElementById("A12");
        A13 = svgDocument.getElementById("A13");
        A14 = svgDocument.getElementById("A14");
        A15 = svgDocument.getElementById("A15");

        A21 = svgDocument.getElementById("A21");
        A22 = svgDocument.getElementById("A22");
        A23 = svgDocument.getElementById("A23");
        A24 = svgDocument.getElementById("A24");
        A25 = svgDocument.getElementById("A25");

        A31 = svgDocument.getElementById("A31");
        A32 = svgDocument.getElementById("A32");
        A33 = svgDocument.getElementById("A33");
        A34 = svgDocument.getElementById("A34");
        A35 = svgDocument.getElementById("A35");

        A41 = svgDocument.getElementById("A41");
        A42 = svgDocument.getElementById("A42");
        A43 = svgDocument.getElementById("A43");
        A44 = svgDocument.getElementById("A44");
        A45 = svgDocument.getElementById("A45");

        cards = [
            A00, A11, A12, A13, A14, A15,
            A21, A22, A23, A24, A25,
            A31, A32, A33, A34, A35,
            A41, A42, A43, A44, A45
        ];


    });

    $('.button, .replay').click(function () {
        $('.table__elem.active').removeClass('active').removeClass('on-top');
        var elem = $(this).attr('data-action');
        buttonAction(elem);
    });

    $('.table__elem').click(function () {
        var id = $(this).attr('data-id');
        rate = $('#rate').val();
        playSlideVoice('sound/' + id, 1, rate);
    });
    $('.speeddown').click(function () {
        $('#rate').val(0.8);
        playSlideVoice('sound/slow', 1, 1);
    });

    $('.speedup').click(function () {
        $('#rate').val(1.5);
        playSlideVoice('sound/fast', 1, 1);
    });
});

/* Buttons */
function buttonAction(elem) {
    $(elem).addClass('active').addClass('on-top');
    playSlideVoice('sound/' + elem, 1);
    $(cards[elem]).addClass('scale');
    setTimeout(function () {
        $(cards[elem]).removeClass('scale');
    }, 1500);
}