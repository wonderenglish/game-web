var question = null;
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
    L2S = 0.6,
    L3S = 0.6,
    L4S = 0.6,
    L5S = 0.6,
    L6S = 0.7;

var check = function (id, object) {

    if(question == id) {
        playSlideVoice('sound/' + id, 1);
        object.classList.add('draggable');
    } else {
        playSlideVoice('sound/bad.mp3', 1)
    }
};

$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument; //получаем svg элемент внутри object

        let P1 = svgDocument.getElementById('A1');
        let P2 = svgDocument.getElementById('A2');
        let P3 = svgDocument.getElementById('A3');
        let P4 = svgDocument.getElementById('A4');
        let P5 = svgDocument.getElementById('A5');
        let P6 = svgDocument.getElementById('A6');
        let P7 = svgDocument.getElementById('A7');

        P1.setAttribute("transform", "matrix(1, 0, 0, 1, -80, 195), scale("+L0S+")");
        P2.setAttribute("transform", "matrix(1, 0, 0, 1, -400, 350), scale("+L1S+")");
        P3.setAttribute("transform", "matrix(1, 0, 0, 1, 60, 355),  scale("+L2S+")");
        P4.setAttribute("transform", "matrix(1, 0, 0, 1, 70,  420), scale("+L3S+")");
        P5.setAttribute("transform", "matrix(1, 0, 0, 1, 70,  120), scale("+L4S+")");
        P6.setAttribute("transform", "matrix(1, 0, 0, 1, 340,   60), scale("+L5S+")");
        P7.setAttribute("transform", "matrix(1, 0, 0, 1, 300, 70), scale("+L6S+")");

        P1.addEventListener('click', function () {
            if (!P1.classList.contains('draggable')) {
                check(1, P1);
            }
        });

        P2.addEventListener('click', function () {
            if (!P2.classList.contains('draggable')) {
                check(2, P2);
            }
        });


        P3.addEventListener('click', function () {
            if (!P3.classList.contains('draggable')) {
                check(3, P3);
            }
        });


        P4.addEventListener('click', function () {
            if (!P4.classList.contains('draggable')) {
                check(4, P4);
            }
        });


        P5.addEventListener('click', function () {
            if (!P5.classList.contains('draggable')) {
                check(5, P5);
            }
        });


        P6.addEventListener('click', function () {
            if (!P6.classList.contains('draggable')) {
                check(6, P6);
            }
        });


        P7.addEventListener('click', function () {
            if (!P7.classList.contains('draggable')) {
                check(7, P7);
            }
        });

        var draggable = [P1, P2, P3, P4, P5, P6, P7];

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

    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });

    $('.button, .replay').click(function () {
        if ($('#block').val() != 1) {
            $('.table__elem.active').removeClass('active').removeClass('on-top');
            var elem = $(this).attr('data-action');
            buttonAction(elem);
        }
    });


});

/* Buttons */
function buttonAction(elem) {
    playSlideVoice('sound/' + elem, 1);
    question = elem;
}


function startDrag(index, element, event) {
    if ($(element).hasClass('draggable')) {
        $(element).addClass('drag');
        initVars(index, element, event);
    }
}

function drag(index, element, event) {
    if ($(element).hasClass('drag')) {

        eval('X' + index + ' += (' + event.clientX + " - " + "startPosX" + index + ') * 0.5');
        eval('Y' + index + ' += (' + event.clientY + " - " + "startPosY" + index + ') * 0.5');
        $(element).attr('transform', "matrix(1, 0, 0, 1," + eval("X" + index) + ", " + eval("Y" + index) + "), scale(1)");
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
    $(element).css('transition', 'unset');
    eval("X" + index + " = " + trans.getItem(0).matrix.e);
    eval("Y" + index + " = " + trans.getItem(0).matrix.f);
    eval("startPosX" + index + " = " + event.clientX);
    eval("startPosY" + index + " = " + event.clientY);
}