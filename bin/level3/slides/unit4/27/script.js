var A00,
    A01,
    A11,
    A12,
    A02,
    A21,
    A22,
    A03,
    A31,
    A32;


$(document).ready(function () {
    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });
    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object

        A01 = svgDocument.getElementById("A01");
        A11 = svgDocument.getElementById("A11");
        A12 = svgDocument.getElementById("A12");

        A02 = svgDocument.getElementById("A02");
        A21 = svgDocument.getElementById("A21");
        A22 = svgDocument.getElementById("A22");

        A03 = svgDocument.getElementById("A03");
        A31 = svgDocument.getElementById("A31");
        A32 = svgDocument.getElementById("A32");


        cards = [
            A00,
            A01,
            A11,
            A12,
            A02,
            A21,
            A22,
            A03,
            A31,
            A32,
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
    }, 2500);
}