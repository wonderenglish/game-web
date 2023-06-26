var OP;
var Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13;
var A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13;
var elems;
$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;
        OP = '';
        Q1 = svgDocument.getElementById("Q1");
        Q2 = svgDocument.getElementById("Q2");
        Q3 = svgDocument.getElementById("Q3");
        Q4 = svgDocument.getElementById("Q4");
        Q5 = svgDocument.getElementById("Q5");
        Q6 = svgDocument.getElementById("Q6");
        Q7 = svgDocument.getElementById("Q7");
        Q8 = svgDocument.getElementById("Q8");
        Q9 = svgDocument.getElementById("Q9");
        Q10 = svgDocument.getElementById("Q10");
        Q11 = svgDocument.getElementById("Q11");
        Q12 = svgDocument.getElementById("Q12");
        Q13 = svgDocument.getElementById("Q13");

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

        elems = [OP, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13];
        answ = [OP, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13];
        positions = [
            '',
            'matrix(1, 0, 0, 1, 71, 281)',
            'matrix(1, 0, 0, 1, -155, 279)',
            'matrix(1, 0, 0, 1, -370, 279)',
            'matrix(1, 0, 0, 1, -182, 281)',
            'matrix(1, 0, 0, 1, -117, -2)',
            'matrix(1, 0, 0, 1, -212, 99)',
            'matrix(1, 0, 0, 1, -303, -100)',
            'matrix(1, 0, 0, 1, -395, -205)',
            'matrix(1, 0, 0, 1, -393, -202)',
            'matrix(1, 0, 0, 1, 67, -289)',
            'matrix(1, 0, 0, 1, 38, -288)',
            'matrix(1, 0, 0, 1, 30, -292)',
            'matrix(1, 0, 0, 1, -85, 110);'
        ];

        $.each(elems, function (key, value) {
            $(value).click(function () {
                if ($('#question').val() == key) {
                    playSlideVoice('sound/' + key, 1);
                    answ[key].setAttribute('style', 'transform: translate(-0px, -1000px)')
                } else {
                    playSlideVoice('sound/bad.mp3', 1);
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
    if (elem == 20) {
        replaySlide();
    } else {
        playSlideVoice('sound/' + elem, 1,1)
        setQuest(elem);
    }
}

