var OP;
var ELEMS = [];
$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;
        A1 = svgDocument.getElementById("B1");
        A2 = svgDocument.getElementById("B2");
        A3 = svgDocument.getElementById("B3");
        A4 = svgDocument.getElementById("M1");
        A5 = svgDocument.getElementById("M2");
        A6 = svgDocument.getElementById("M3");

        ELEMS = [
            A1, A2, A3, A4, A5, A6
        ]

        ELEMS.forEach(function (item, i) {
            $(item).click(function () {
                item.setAttribute("transform", "matrix(1.2, 0, 0, 1.2, 0, 0) ")
                setTimeout(function () {
                    item.setAttribute("transform", "matrix(1, 0, 0, 1, 0, 0) ")
                }, 1500);
                var id = item.getAttribute('id');
                if(id ==  'M1' || id ==  'M2' || id ==  'M3' ){
                    playSlideVoice('sound/' + 3, 1);
                } else {
                    playSlideVoice('sound/' + 2, 1);
                }

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
    if (elem == 1) {
        playSlideVoice('sound/1',1);
    }
    setQuest(elem);

}

