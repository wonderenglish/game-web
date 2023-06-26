var L1, L2, L3, L4, L5, L6, L7, L8;
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

        // L2.setAttribute("transform", "translate(370,285), scale(0.5)");
        // L3.setAttribute("transform", "translate(50,360), scale(0.5)");
        // L4.setAttribute("transform", "translate(125,360), scale(0.5)");
        // L5.setAttribute("transform", "translate(-20,360), scale(0.5)");
        // L6.setAttribute("transform", "translate(-35,282), scale(0.5)");
        // L7.setAttribute("transform", "translate(370,285), scale(0.5)");
        // L8.setAttribute("transform", "translate(-110,285), scale(0.5)");


        $(L1).click(function () {
            $(this).attr('transform', 'scale(1.2)');
            setTimeout(function () {
                $(L1).attr('transform', 'scale(1)');
            }, 1500);
            playSlideVoice('sound/1', 1);

        });

        $(L2).click(function () {
            $(this).attr('transform', 'scale(1.2)');
            setTimeout(function () {
                $(L2).attr('transform', 'scale(1)');
            }, 1500);
            playSlideVoice('sound/2', 1);
        });

        $(L3).click(function () {
            $(this).attr('transform', 'scale(1.2)');
            setTimeout(function () {
                $(L3).attr('transform', 'scale(1)');
            }, 1500);
            playSlideVoice('sound/3', 1);
        });

        $(L4).click(function () {
            $(this).attr('transform', 'scale(1.2)');
            setTimeout(function () {
                $(L4).attr('transform', 'scale(1)');
            }, 1500);
            playSlideVoice('sound/4', 1);
        });

        $(L5).click(function () {
            $(this).attr('transform', 'scale(1.2)');
            setTimeout(function () {
                $(L5).attr('transform', 'scale(1)');
            }, 1500);
            playSlideVoice('sound/5', 1);
        });

        $(L6).click(function () {
            $(this).attr('transform', 'scale(1.2)');
            setTimeout(function () {
                $(L6).attr('transform', 'scale(1)');
            }, 1500);
            playSlideVoice('sound/6', 1);
        });

        $(L7).click(function () {
            playSlideVoice('sound/7', 1);
        });

        $(L8).click(function () {
            playSlideVoice('sound/8', 1);
        });

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
        setQuest(elem);
        playSlideVoice('sound/1', 1);
    }
    if (elem == 2) {
        setQuest(elem);
        playSlideVoice('sound/2', 1);
    }
    if (elem == 3) {
        setQuest(elem);
        playSlideVoice('sound/3', 1);
    }
    if (elem == 4) {
        setQuest(elem);
        playSlideVoice('sound/4', 1);
    }
    if (elem == 5) {
        setQuest(elem);
        playSlideVoice('sound/5', 1);
    }
    if (elem == 6) {
        setQuest(elem);
        playSlideVoice('sound/6', 1);
    }
    if (elem == 7) {
        setQuest(elem);
        playSlideVoice('sound/7', 1);
    }
    if (elem == 8) {
        setQuest(elem);
        playSlideVoice('sound/8', 1);
    }

}