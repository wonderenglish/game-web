var L1, L2, L3, L4, L5, L6, L7, L8, L9,  svgDocument;
var startPosX0 = 0,
    startPosX1 = 0,
    startPosX2 = 0,
    startPosX3 = 0,
    startPosX4 = 0,
    startPosX5 = 0,
    startPosX6 = 0,
    startPosX7 = 0,
    startPosY0 = 0,
    startPosY1 = 0,
    startPosY2 = 0,
    startPosY3 = 0,
    startPosY4 = 0,
    startPosY5 = 0,
    startPosY6 = 0,
    startPosY7 = 0;
var X0, X1, X2, X3, X4, X5, X6, X7;
var Y0, Y1, Y2, Y3, Y4, Y5, Y6, Y7;

var L0S = 0.5,
    L1S = 0.5,
    L2S = 0.5,
    L3S = 0.5,
    L4S = 0.5,
    L5S = 0.5,
    L6S = 0.5,
    L7S = 0.5;
$(document).ready(function () {
    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });
    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {
        svgDocument = object.contentDocument; //получаем svg элемент внутри object

        L1 =  svgDocument.getElementById("HOUSE");
        L2 = svgDocument.getElementById("LIVING");
        L3 = svgDocument.getElementById("KITCHEN");
        L4 = svgDocument.getElementById("BEDROOM");
        L5 = svgDocument.getElementById("BATHS");
        L6 = svgDocument.getElementById("YARD");
        L7 = svgDocument.getElementById("DINNER");
        L8 = svgDocument.getElementById("HALL");

        L1.setAttribute("transform", "matrix(1, 0, 0, 1, 370, 115), scale("+L0S+")");

        L2.setAttribute("transform", "matrix(1, 0, 0, 1, 325, 115), scale("+L0S+")");
        L3.setAttribute("transform", "matrix(1, 0, 0, 1, -150, 268), scale("+L1S+")");
        L4.setAttribute("transform", "matrix(1, 0, 0, 1, 75, 268), scale("+L2S+")");
        L5.setAttribute("transform", "matrix(1, 0, 0, 1, -70, 270), scale("+L3S+")");
        L6.setAttribute("transform", "matrix(1, 0, 0, 1, -255, 115), scale("+L4S+")");
        L7.setAttribute("transform", "matrix(1, 0, 0, 1, -75, 117), scale("+L5S+")");
        L8.setAttribute("transform", "matrix(1, 0, 0, 1, -160, 116), scale("+L6S+")");

        $(L1).click(function () {
            if(!$(L1).hasClass('draggable')){
                if ($('#question').val() == '1') {
                    playSlideVoice('sound/1', 1);
                    $(L1).addClass('draggable')
                } else {
                    playSlideVoice('sound/bad.mp3', 1);
                }
            }

        });

        $(L2).click(function () {
            if(!$(L2).hasClass('draggable')){
                if ($('#question').val() == '2') {
                    playSlideVoice('sound/2', 1);
                    $(L2).addClass('draggable');
                    L0S = 1;
                } else {
                    playSlideVoice('sound/bad.mp3', 1);
                }
            }

        });

        $(L3).click(function () {
            if(!$(L3).hasClass('draggable')){
                if ($('#question').val() == '3') {
                    playSlideVoice('sound/3', 1);
                    $(L3).addClass('draggable');
                    L1S = 1;
                } else {
                    playSlideVoice('sound/bad.mp3', 1);
                }
            }

        });

        $(L4).click(function () {
            if(!$(L4).hasClass('draggable')){
                if ($('#question').val() == '4') {
                    playSlideVoice('sound/4', 1);
                    $(L4).addClass('draggable');
                    L2S = 1;
                } else {
                    playSlideVoice('sound/bad.mp3', 1);
                }
            }

        });

        $(L5).click(function () {
            if(!$(L5).hasClass('draggable')){
                if ($('#question').val() == '5') {
                    playSlideVoice('sound/5', 1);
                    $(L5).addClass('draggable');
                    L3S = 1;
                } else {
                    playSlideVoice('sound/bad.mp3', 1);
                }
            }

        });

        $(L6).click(function () {
            if(!$(L6).hasClass('draggable')){
                if ($('#question').val() == '6') {
                    playSlideVoice('sound/6', 1);
                    $(L6).addClass('draggable');
                    L4S = 1;
                } else {
                    playSlideVoice('sound/bad.mp3', 1);
                }
            }

        });

        $(L7).click(function () {
            if(!$(L7).hasClass('draggable')){
                if ($('#question').val() == '7') {
                    playSlideVoice('sound/7', 1);
                    $(L7).addClass('draggable');
                    L5S = 1;
                } else {
                    playSlideVoice('sound/bad.mp3', 1);
                }
            }

        });

        $(L8).click(function () {
            if(!$(L8).hasClass('draggable')){
                if ($('#question').val() == '8') {
                    playSlideVoice('sound/8', 1);
                    $(L8).addClass('draggable');
                    L6S = 1;
                } else {
                    playSlideVoice('sound/bad.mp3', 1);
                }
            }

        });

        var draggable = [L2, L3, L4, L5, L6, L7, L8];

        $(draggable).each(function (index, element) {

            $(element).on('pointerdown', function (event) {
                startDrag(index, element, event);
            });

            $(element).on('pointerup', function () {
                endDrag(element);
            });

            $(element).on('pointerleave', function () {
                endDrag(element);
            });

            $(element).on('pointermove', function (event) {
                drag(index, element, event);
            });


        })


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

function startDrag(index, element, event) {
    if ($(element).hasClass('draggable')) {
        $(element).addClass('drag');
        if(!$(element).hasClass('origin')){
            $(element).addClass('origin');
        }
        initVars(index, element, event);
    }
}

function drag(index, element, event) {
    if ($(element).hasClass('drag')) {

        eval('X' + index + ' += (' + event.clientX + " - " + "startPosX" + index + ') * 0.5');
        eval('Y' + index + ' += (' + event.clientY + " - " + "startPosY" + index + ') * 0.5');
        $(element).attr('transform', "matrix(1, 0, 0, 1," + eval("X" + index) + ", " + eval("Y" + index) + "), scale(" + eval("L" + index + "S") + ")");
        eval('startPosX' + index + '=' + event.clientX);
        eval('startPosY' + index + '=' + event.clientY);
    }
}

function endDrag(element) {
    if ($(element).hasClass('draggable')) {
        $(element).removeClass('drag');
    }
}

function initVars(index, element, event) {
    var trans = $(element).prop('transform').baseVal;
    eval("X" + index + " = " + trans.getItem(0).matrix.e);
    eval("Y" + index + " = " + trans.getItem(0).matrix.f);
    eval("startPosX" + index + " = " + event.clientX);
    eval("startPosY" + index + " = " + event.clientY);
}