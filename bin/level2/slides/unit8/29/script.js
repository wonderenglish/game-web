var L1, L2, L3, L4, L5, L6, L7;
$(document).ready(function () {
    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });
    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        L1 = svgDocument.getElementById("L1");
        L2 = svgDocument.getElementById("L2");
        L3 = svgDocument.getElementById("L3");
        L4 = svgDocument.getElementById("L4");
        L5 = svgDocument.getElementById("L5");
        L6 = svgDocument.getElementById("L6");
        L7 = svgDocument.getElementById("L7");


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
    if (elem == 1) {
        L1.setAttribute("transform", "translate(-30, -120), scale(1.2)");
        setTimeout(function () {
            L1.setAttribute("transform", "translate(0,0), scale(1)");
        }, 2000);
        playSlideVoice('sound/1', 1);
    }
    if (elem == 2) {
        L2.setAttribute("transform", "translate(-60, -120), scale(1.2)");
        setTimeout(function () {
            L2.setAttribute("transform", "translate(0,0), scale(1)");
        }, 2000);
        playSlideVoice('sound/2', 1);
    }
    if (elem == 3) {
        L3.setAttribute("transform", "translate(-80, -130), scale(1.2)");
        setTimeout(function () {
            L3.setAttribute("transform", "translate(0,0), scale(1)");
        }, 2000);
        playSlideVoice('sound/3', 1);
    }
    if (elem == 4) {
        L4.setAttribute("transform", "translate(-100, -150), scale(1.2)");
        setTimeout(function () {
            L4.setAttribute("transform", "translate(0,0), scale(1)");
        }, 2000);
        playSlideVoice('sound/4', 1);
    }
    if (elem == 5) {
        L5.setAttribute("transform", "translate(-80, -150), scale(1.2)");
        setTimeout(function () {
            L5.setAttribute("transform", "translate(0,0), scale(1)");
        }, 2000);
        playSlideVoice('sound/5', 1);
    }
    if (elem == 6) {
        L6.setAttribute("transform", "translate(-100, -100), scale(1.2)");
        setTimeout(function () {
            L6.setAttribute("transform", "translate(0,0), scale(1)");
        }, 2000);
        playSlideVoice('sound/6', 1);
    }
    if (elem == 7) {
        L7.setAttribute("transform", "translate(-50, -120), scale(1.2)");
        setTimeout(function () {
            L7.setAttribute("transform", "translate(0,0), scale(1)");
        }, 2000);
        playSlideVoice('sound/7', 1);
    }

}