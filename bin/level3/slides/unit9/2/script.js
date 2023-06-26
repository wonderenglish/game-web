var OP;
var ELEMS = [];
$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;
        A1 = svgDocument.getElementById("A1");
        A2 = svgDocument.getElementById("A2");
        A3 = svgDocument.getElementById("A3");
        A4 = svgDocument.getElementById("A4");
        A5 = svgDocument.getElementById("A5");
        A6 = svgDocument.getElementById("A6");
        A7 = svgDocument.getElementById("A7");
        A8 = svgDocument.getElementById("A8");
        A9 = svgDocument.getElementById("A9");
        A10 = svgDocument.getElementById("A10");
        A11 = svgDocument.getElementById("A11");
        A12 = svgDocument.getElementById("A12");
        A13 = svgDocument.getElementById("A13");
        A14 = svgDocument.getElementById("A14");
        A15 = svgDocument.getElementById("A15");
        A16 = svgDocument.getElementById("A16");
        A17 = svgDocument.getElementById("A17");
        A18 = svgDocument.getElementById("A18");

        ELEMS = [
            A1, A2, A3, A4, A5,
            A6, A7, A8, A9, A10,
            A11, A12, A13, A14,
            A15, A16, A17, A18
        ]

        ELEMS.forEach(function (item, i) {
            $(item).click(function () {
                item.setAttribute("transform", "matrix(1.2, 0, 0, 1.2, 0, 0) ")
                setTimeout(function () {
                    item.setAttribute("transform", "matrix(1, 0, 0, 1, 0, 0) ")
                }, 1500);
                playSlideVoice('sound/' + item.getAttribute('id'), 1);
            })
        });

    });

    hideOverlay(500);
    $('.next-slide').click(function () {
        nextSlide();
    });

    $('.button, .replay').click(function () {
        $('.table__elem.active').removeClass('active').removeClass('on-top');
        var elem = $(this).attr('data-action');
        buttonAction(elem);
    });


});


/* Buttons */
function buttonAction(elem) {
    $(elem).addClass('active').addClass('on-top');
    if (elem == 10) {
        replaySlide();
    }
    setQuest(elem);

}

