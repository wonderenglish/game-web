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

        ELEMS = [
            A1, A2, A3, A4, A5,
            A6
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

