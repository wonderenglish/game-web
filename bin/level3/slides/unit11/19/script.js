var OP;
var A11, A12, A21, A22, A31, A32;
$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;
        console.log(svgDocument)
        OP = svgDocument.getElementById("OP");
        A11 = svgDocument.getElementById("A11");
        A12 = svgDocument.getElementById("A12");
        A21 = svgDocument.getElementById("A21");
        A22 = svgDocument.getElementById("A22");
        A31 = svgDocument.getElementById("A31");
        A32 = svgDocument.getElementById("A32");
        // $(OP).attr('style', 'opacity: 0.3');

        A11.setAttribute("transform", "matrix(0.7, 0, 0, 0.7, -330, 366)");
        A12.setAttribute("transform", "matrix(0.7, 0, 0, 0.7, -70, 366)");
        A21.setAttribute("transform", "matrix(0.7, 0, 0, 0.7, -210, 260) ");
        A22.setAttribute("transform", "matrix(0.7, 0, 0, 0.7, 40, 255)");
        A31.setAttribute("transform", "matrix(0.7, 0, 0, 0.7, -100, 128)");
        A32.setAttribute("transform", "matrix(0.7, 0, 0, 0.7, -160, 125) ");

        $(A12).click(function () {
            if ($('#question').val() == 2) {
                playSlideVoice('sound/2', 1);
                this.setAttribute("transform", "matrix(1, 0, 0, 1, 0, 0)");
            } else {
                playSlideVoice('sound/bad.mp3',1);
            }
        })

        $(A11).click(function () {
            if ($('#question').val() == 1) {
                playSlideVoice('sound/1', 1);
                this.setAttribute("transform", "matrix(1, 0, 0, 1, 0, 0)");
            } else {
                playSlideVoice('sound/bad.mp3',1);
            }
        })

        $(A22).click(function () {
            if ($('#question').val() == 4) {
                playSlideVoice('sound/4', 1);
                this.setAttribute("transform", "matrix(1, 0, 0, 1, 0, 0)");
            } else {
                playSlideVoice('sound/bad.mp3',1);
            }
        })


        $(A21).click(function () {
            if ($('#question').val() == 3) {
                playSlideVoice('sound/3', 1);
                this.setAttribute("transform", "matrix(1, 0, 0, 1, 0, 0)");
            } else {
                playSlideVoice('sound/bad.mp3',1);
            }
        })

        $(A31).click(function () {
            if ($('#question').val() == 5) {
                playSlideVoice('sound/5', 1);
                this.setAttribute("transform", "matrix(1, 0, 0, 1, 0, 0)");
            } else {
                playSlideVoice('sound/bad.mp3',1);
            }
        })

        $(A32).click(function () {
            if ($('#question').val() == 6) {
                playSlideVoice('sound/6', 1);
                this.setAttribute("transform", "matrix(1, 0, 0, 1, 0, 0)");
            } else {
                playSlideVoice('sound/bad.mp3',1);
            }
        })

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
        playSlideVoice('sound/1', 1);
    }
    if (elem == 2) {
        playSlideVoice('sound/2', 1);
    }
    if (elem == 3) {
        playSlideVoice('sound/3', 1);
    }
    if (elem == 4) {
        playSlideVoice('sound/4', 1);
    }
    if (elem == 5) {
        playSlideVoice('sound/5', 1);
    }
    if (elem == 6) {
        playSlideVoice('sound/6', 1);
    }
    if (elem == 10) {
        replaySlide();
    }
    setQuest(elem);

}

