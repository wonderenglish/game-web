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

        L1.setAttribute("transform", "translate(-40,120), scale(1)");
        L2.setAttribute("transform", "translate(-70,130), scale(1)");
        L3.setAttribute("transform", "translate(-130,320), scale(1)");
        L4.setAttribute("transform", "translate(-155,290), scale(1)");
        L5.setAttribute("transform", "translate(320,130), scale(1)");
        L6.setAttribute("transform", "translate(-270,200), scale(1)");
        L7.setAttribute("transform", "translate(-250,100), scale(1)");


        $(L1).click(function () {
            if($('#question').val() == '1'){
                playSlideVoice('sound/1', 1);
                L1.setAttribute("transform", "translate(0,0), scale(1)");
            } else {
                playSlideVoice('sound/bad.mp3', 1);
            }
        });

        $(L2).click(function () {
            if($('#question').val() == '2'){
                playSlideVoice('sound/2', 1);
                L2.setAttribute("transform", "translate(0,0), scale(1)");
            } else {
                playSlideVoice('sound/bad.mp3', 1);
            }
        });

        $(L3).click(function () {
            if($('#question').val() == '3'){
                playSlideVoice('sound/3', 1);
                L3.setAttribute("transform", "translate(0,0), scale(1)");
            } else {
                playSlideVoice('sound/bad.mp3', 1);
            }
        });

        $(L4).click(function () {
            if($('#question').val() == '4'){
                playSlideVoice('sound/4', 1);
                L4.setAttribute("transform", "translate(0,0), scale(1)");
            } else {
                playSlideVoice('sound/bad.mp3', 1);
            }
        });

        $(L5).click(function () {
            if($('#question').val() == '5'){
                playSlideVoice('sound/5', 1);
                L5.setAttribute("transform", "translate(0,0), scale(1)");
            } else {
                playSlideVoice('sound/bad.mp3', 1);
            }
        });

        $(L6).click(function () {
            if($('#question').val() == '6'){
                playSlideVoice('sound/6', 1);
                L6.setAttribute("transform", "translate(0,0), scale(1)");
            } else {
                playSlideVoice('sound/bad.mp3', 1);
            }
        });

        $(L7).click(function () {
            if($('#question').val() == '7'){
                playSlideVoice('sound/7', 1);
                L7.setAttribute("transform", "translate(0,0), scale(1)");
            } else {
                playSlideVoice('sound/bad.mp3', 1);
            }
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

}