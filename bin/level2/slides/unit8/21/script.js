var R11, R12, R21, R22, R31, R32;
var A11, A12, A21, A22, A31, A32;
$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;
        console.log(svgDocument)
        R11 = svgDocument.getElementById("R11");
        R12 = svgDocument.getElementById("R12");
        R21 = svgDocument.getElementById("R21");
        R22 = svgDocument.getElementById("R22");
        R31 = svgDocument.getElementById("R31");
        R32 = svgDocument.getElementById("R32");
        A11 = svgDocument.getElementById("A12");
        A12 = svgDocument.getElementById("A11");
        A21 = svgDocument.getElementById("A21");
        A22 = svgDocument.getElementById("A22");
        A31 = svgDocument.getElementById("A31");
        A32 = svgDocument.getElementById("A32");

        $(A12).click(function () {
            if ($('#question').val() == 2) {
                playSlideVoice('sound/1', 1);
                $(R11).find('image').addClass('act');
            } else {
                playSlideVoice('sound/bad.mp3',1);
            }
        })

        $(A11).click(function () {
            if ($('#question').val() == 4) {
                playSlideVoice('sound/2', 1);
                $(R12).find('image').addClass('act');
            } else {
                playSlideVoice('sound/bad.mp3',1);
            }
        })

        $(A22).click(function () {
            if ($('#question').val() == 6) {
                playSlideVoice('sound/3', 1);
                $(R22).find('image').addClass('act');
            } else {
                playSlideVoice('sound/bad.mp3',1);
            }
        })


        $(A21).click(function () {
            if ($('#question').val() == 1) {
                playSlideVoice('sound/4', 1);
                $(R21).find('image').addClass('act');
            } else {
                playSlideVoice('sound/bad.mp3',1);
            }
        })

        $(A31).click(function () {
            if ($('#question').val() == 3) {
                playSlideVoice('sound/5', 1);
                $(R31).find('image').addClass('act');
            } else {
                playSlideVoice('sound/bad.mp3',1);
            }
        })

        $(A32).click(function () {
            if ($('#question').val() == 5) {
                playSlideVoice('sound/6', 1);
                $(R32).find('image').addClass('act');
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
        setQuest(2);
    }
    if (elem == 2) {
        playSlideVoice('sound/2', 1);
        setQuest(4);
    }
    if (elem == 3) {
        playSlideVoice('sound/3', 1);
        setQuest(6);
    }
    if (elem == 4) {
        playSlideVoice('sound/4', 1);
        setQuest(1);
    }
    if (elem == 5) {
        playSlideVoice('sound/5', 1);
        setQuest(3);
    }
    if (elem == 6) {
        playSlideVoice('sound/6', 1);
        setQuest(5);
    }
    if (elem == 10) {
        replaySlide();
    }
}

