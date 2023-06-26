var OP;
$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;
        OP = svgDocument.getElementById("OP");

        A1 = svgDocument.getElementById("A10");
        A2 = svgDocument.getElementById("A11");
        A3 = svgDocument.getElementById("A12");
        A4 = svgDocument.getElementById("A20");
        A5 = svgDocument.getElementById("A21");
        A6 = svgDocument.getElementById("A22");
        A7 = svgDocument.getElementById("A30");
        A8 = svgDocument.getElementById("A31");
        A9 = svgDocument.getElementById("A32");

        ELEMS = [
            A1, A2, A3, A4, A5,
            A6, A7, A8, A9
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

