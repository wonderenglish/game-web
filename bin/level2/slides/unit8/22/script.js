var audio = null;
var persons = ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8'];
var playqueue = [4, 5, 3, 0, 1, 2, 6, 7];
var queuepos = 0;
$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;
        var svgElement1 = svgDocument.getElementById("F1");
        var svgElement2 = svgDocument.getElementById("F2");
        var svgElement3 = svgDocument.getElementById("F3");
        var svgElement4 = svgDocument.getElementById("F4");
        var svgElement5 = svgDocument.getElementById("F5");
        var svgElement6 = svgDocument.getElementById("F6");
        var svgElement7 = svgDocument.getElementById("P1_1");
        var svgElement8 = svgDocument.getElementById("P2_2");
        var svgElement9 = svgDocument.getElementById("P1_3");
        var svgElement10 = svgDocument.getElementById("P1_4");
        var svgElement11 = svgDocument.getElementById("P1_5");
        var svgElement12 = svgDocument.getElementById("P1_6");
        var svgElement13 = svgDocument.getElementById("P2_1");
        var svgElement14 = svgDocument.getElementById("P1_2");
        var svgElement15 = svgDocument.getElementById("P2_3");
        var svgElement16 = svgDocument.getElementById("P2_4");
        var svgElement17 = svgDocument.getElementById("P2_5");
        var svgElement18 = svgDocument.getElementById("P2_6");
        var svgElement19 = svgDocument.getElementById("M1");
        var svgElement20 = svgDocument.getElementById("M2");
        var svgElement21 = svgDocument.getElementById("M3");
        var svgElement22 = svgDocument.getElementById("M4");
        var svgElement23 = svgDocument.getElementById("M5");
        var svgElement24 = svgDocument.getElementById("M6");

        $(svgElement1).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/1', 1);
                setFrog('P1_2');
            }

        });
        $(svgElement2).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/2', 1);
                setFrog('P1_1');
            }

        });
        $(svgElement3).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/3', 1);
                setFrog('P1_5');
            }

        });
        $(svgElement4).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/4', 1);
                setFrog('P1_6');
            }

        });
        $(svgElement5).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/5', 1);
                setFrog('P1_3');
            }

        });
        $(svgElement6).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/6', 1);
                setFrog('P1_4');
            }
        });

        /* 2 row */
        $(svgElement7).click(function () {
            if (checkFrog('P1_1', 'bread')) {
                $(svgElement2).attr('style','transform: translate(-330px,300px)');
                setFrog('P2_1');
            }
        });
        $(svgElement8).click(function () {
            if (checkFrog('P1_2', 'ant')) {
                $(svgElement1).attr('style','transform: translate(320px,300px)');
                setFrog('P2_3');
            }
        });
        $(svgElement9).click(function () {
            if (checkFrog('P1_3', 'egg')) {
                $(svgElement5).attr('style','transform: translate(-640px,300px)');
                setFrog('P2_5');
            }
        });
        $(svgElement10).click(function () {
            if (checkFrog('P1_4', 'fries')) {
                $(svgElement6).attr('style','transform: translate(-590px,300px)');
                setFrog('P2_2');
            }
        });
        $(svgElement11).click(function () {
            if (checkFrog('P1_5', 'cat')) {
                $(svgElement3).attr('style','transform: translate(700px,300px)');
                setFrog('P2_6');
            }
        });
        $(svgElement12).click(function () {
            if (checkFrog('P1_6', 'donut')) {
                $(svgElement4).attr('style','transform: translate(700px,300px)');
                setFrog('P2_4');
            }
        });

//$(svgElement2).attr('style','transform: translate(300px,300px)');
        /* 3 row */
        $(svgElement13).click(function () {
            if (checkFrog('P2_1', 'bear')) {
                $(svgElement2).attr('style','transform: translate(-330px,580px)');
                setFrog('M2');
            }
        });
        $(svgElement14).click(function () {
            if (checkFrog('P2_2', 'fish')) {
                $(svgElement6).attr('style','transform: translate(-1230px,580px)');
                setFrog('M1');
            }
        });
        $(svgElement15).click(function () {
            if (checkFrog('P2_3', 'apple')) {
                $(svgElement1).attr('style','transform: translate(645px,580px)');
                setFrog('M6');
            }
        });
        $(svgElement16).click(function () {
            if (checkFrog('P2_4', 'dog')) {
                $(svgElement4).attr('style','transform: translate(20px,580px)');
                setFrog('M4');
            }
        });
        $(svgElement17).click(function () {
            if (checkFrog('P2_5', 'elephant')) {
                $(svgElement5).attr('style','transform: translate(80px,580px)');
                setFrog('M3');
            }
        });
        $(svgElement18).click(function () {
            if (checkFrog('P2_6', 'carrot')) {
                $(svgElement3).attr('style','transform: translate(1000px,580px)');
                setFrog('M5');
            }
        });


        /* Myxu */
        $(svgElement19).click(function () {
            if (checkFrog('M1', 6)) {
                $(svgElement6).attr('style','transform: translate(-1570px,890px)');
                clearFrog();
            }
        });
        $(svgElement20).click(function () {
            if (checkFrog('M2', 2)) {
                $(svgElement2).attr('style','transform: translate(0px,890px)');
                clearFrog();
            }
        });
        $(svgElement21).click(function () {
            if (checkFrog('M3', 5)) {
                $(svgElement5).attr('style','transform: translate(-670px,890px)');
                clearFrog();
            }
        });
        $(svgElement22).click(function () {
            if (checkFrog('M4', 4)) {
                $(svgElement4).attr('style','transform: translate(-10px,890px)');
                clearFrog();
            }
        });
        $(svgElement23).click(function () {
            if (checkFrog('M5', 3)) {
                $(svgElement3).attr('style','transform: translate(600px,890px)');
                clearFrog();
            }
        });
        $(svgElement24).click(function () {
            if (checkFrog('M6', 1)) {
                $(svgElement1).attr('style','transform: translate(1490px,890px)');
                clearFrog();
            }
        });

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
    })
});
function hasBlock(elem) {
    if ($(elem).attr('data-block') == 1) {
        return true;
    } else {
        return false;
    }
}
function makeRound(i, persons, maxpos) {
    var object = document.getElementById("svgelem"); //получаем элмент object
    var svgDocument = object.contentDocument; //получаем svg элемент внутри object
    var pos = 0;
    var svgelem = null;
    var timeout = 200;
    for (var n = 0; n <= i; n++) {
        timeout = timeout + 200;
        setTimeout(
            function () {
                svgelem = svgDocument.getElementById(persons[pos]);
                $(svgelem).addClass('glow-green');
                if (pos != 0) {
                    prevelem = svgDocument.getElementById(persons[pos - 1]);
                } else {
                    prevelem = svgDocument.getElementById(persons[7]);
                }
                $(prevelem).removeClass('glow-green');
                pos++;
                if (pos == maxpos) {
                    pos = 0;
                }
            }, timeout);
        setTimeout(function () {
            $('#block').val('');
        }, 200 * i + 400);
    }
}

function roundRobin() {
    var i = Math.floor(24 + playqueue[queuepos]);
    var maxpos = persons.length;
    makeRound(i, persons, maxpos);

    queuepos++;
    if (queuepos === 8) {
        queuepos = 0;
    }
}
/* Buttons */
function buttonAction(elem) {
    if (elem == 1) {
        playSlideVoice('sound/i', 1);
    }
    if (elem == 2) {
        replaySlide();
    }
    if (elem == 3) {
        playSlideVoice('sound/2', 1);
    }
    if (elem == 4) {
        playSlideVoice('sound/3', 1);
    }
    if (elem == 5) {
        playSlideVoice('sound/4', 1);
    }
    if (elem == 6) {
        playSlideVoice('sound/5', 1);
    }
    if (elem == 7) {
        playSlideVoice('sound/6', 1);
    }
    if (elem == 8) {
        playSlideVoice('sound/7', 1);
    }
    if (elem == 9) {
        playSlideVoice('sound/8', 1);
    }
    if (elem == 10) {
        playSlideVoice('sound/9', 1);
    }
}
