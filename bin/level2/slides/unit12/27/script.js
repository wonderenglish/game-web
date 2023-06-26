var audio = null;
var persons = ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8'];
var playqueue = [4, 5, 3, 0, 1, 2, 6, 7];
var queuepos = 0;

$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;
        var F1 = svgDocument.getElementById("F1");
        var F2 = svgDocument.getElementById("F2");
        var F3 = svgDocument.getElementById("F3");
        var F4 = svgDocument.getElementById("F4");
        var F5 = svgDocument.getElementById("F5");
        var F6 = svgDocument.getElementById("F6");
        var F7 = svgDocument.getElementById("F7");
        var F8 = svgDocument.getElementById("F8");
        var F9 = svgDocument.getElementById("F9");

        var S1 = svgDocument.getElementById("P1_1");
        var S2 = svgDocument.getElementById("P2_2");
        var S3 = svgDocument.getElementById("P1_3");
        var S4 = svgDocument.getElementById("P1_4");
        var S5 = svgDocument.getElementById("P1_5");
        var S6 = svgDocument.getElementById("P1_6");
        var S7 = svgDocument.getElementById("P1_7");
        var S8 = svgDocument.getElementById("P1_8");
        var S9 = svgDocument.getElementById("P1_9");

        var SS1 = svgDocument.getElementById("P2_1");
        var SS2 = svgDocument.getElementById("P1_2");
        var SS3 = svgDocument.getElementById("P2_3");
        var SS4 = svgDocument.getElementById("P2_4");
        var SS5 = svgDocument.getElementById("P2_5");
        var SS6 = svgDocument.getElementById("P2_6");
        var SS7 = svgDocument.getElementById("P2_7");
        var SS8 = svgDocument.getElementById("P2_8");
        var SS9 = svgDocument.getElementById("P2_9");

        var M1 = svgDocument.getElementById("M1");
        var M2 = svgDocument.getElementById("M2");
        var M3 = svgDocument.getElementById("M3");
        var M4 = svgDocument.getElementById("M4");
        var M5 = svgDocument.getElementById("M5");
        var M6 = svgDocument.getElementById("M6");
        var M7 = svgDocument.getElementById("M7");
        var M8 = svgDocument.getElementById("M8");
        var M9 = svgDocument.getElementById("M9");

        $(F1).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/1', 1);
                setFrog('P1_2');
            }
        });
        $(F2).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/2', 1);
                setFrog('P1_1');
            }
        });
        $(F3).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/3', 1);
                setFrog('P1_5');
            }

        });
        $(F4).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/4', 1);
                setFrog('P1_6');
            }

        });
        $(F5).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/5', 1);
                setFrog('P1_3');
            }
        });
        $(F6).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/6', 1);
                setFrog('P1_4');
            }
        });

        $(F7).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/P', 1);
                setFrog('P1_7');
            }
        });

        $(F8).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/Q', 1);
                setFrog('P1_9');
            }
        });

        $(F9).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/R', 1);
                setFrog('P1_8');
            }
        });

        /* 2 row */
        $(S1).click(function () {
            if (checkFrog('P1_1', 'bread')) {
                $(F2).attr('style', 'transform: translate(-250px,350px)');
                setFrog('P2_1');
            }
        });
        $(S2).click(function () {
            if (checkFrog('P1_2', 'ant')) {
                $(F1).attr('style', 'transform: translate(200px,360px)');
                setFrog('P2_3');
            }
        });
        $(S3).click(function () {
            if (checkFrog('P1_3', 'egg')) {
                $(F5).attr('style', 'transform:  translate(-420px,360px)');
                setFrog('P2_5');
            }
        });
        $(S4).click(function () {
            if (checkFrog('P1_4', 'fries')) {
                $(F6).attr('style', 'transform: translate(-430px,350px)');
                setFrog('P2_2');
            }
        });
        $(S5).click(function () {
            if (checkFrog('P1_5', 'cat')) {
                $(F3).attr('style', 'transform: translate(420px,340px)');
                setFrog('P2_6');
            }
        });
        $(S6).click(function () {
            if (checkFrog('P1_6', 'donut')) {
                $(F4).attr('style', 'transform: translate(420px,341px)');
                setFrog('P2_4');
            }
        });

        $(S7).click(function () {
            if (checkFrog('P1_7', 'parrot')) {
                $(F7).attr('style', 'transform: translate(20px,350px)');
                setFrog('P2_9');
            }
        });

        $(S8).click(function () {
            if (checkFrog('P1_8', 'rice')) {
                $(F9).attr('style', 'transform: translate(-200px,350px)');
                setFrog('P2_7');
            }
        });

        $(S9).click(function () {
            if (checkFrog('P1_9', 'quokka')) {
                $(F8).attr('style', 'transform: translate(210px,351px)');
                setFrog('P2_8');
            }
        });


        /* 3 row */
        $(SS1).click(function () {
            if (checkFrog('P2_1', 'bear')) {
                $(F2).attr('style', 'transform: translate(-260px,540px)');
                setFrog('M2');
            }
        });
        $(SS2).click(function () {
            if (checkFrog('P2_2', 'fish')) {
                $(F6).attr('style', 'transform: translate(-850px,540px)');
                setFrog('M4');
            }
        });
        $(SS3).click(function () {
            if (checkFrog('P2_3', 'apple')) {
                $(F1).attr('style', 'transform: translate(425px,540px)');
                setFrog('M6');
            }
        });
        $(SS4).click(function () {
            if (checkFrog('P2_4', 'dog')) {
                $(F4).attr('style', 'transform: translate(-10px,540px)');
                setFrog('M3');
            }
        });
        $(SS5).click(function () {
            if (checkFrog('P2_5', 'elephant')) {
                $(F5).attr('style', 'transform: translate(10px,550px)');
                setFrog('M1');
            }
        });
        $(SS6).click(function () {
            if (checkFrog('P2_6', 'carrot')) {
                $(F3).attr('style', 'transform: translate(650px,540px)');
                setFrog('M5');
            }
        });

        $(SS7).click(function () {
            if (checkFrog('P2_7', 'rabbit')) {
                $(F9).attr('style', 'transform: translate(-410px,550px)');
                setFrog('M9');
            }
        });

        $(SS8).click(function () {
            if (checkFrog('P2_8', 'queen')) {
                $(F8).attr('style', 'transform: translate(30px,550px)');
                setFrog('M8');
            }
        });

        $(SS9).click(function () {
            if (checkFrog('P2_9', 'pineapple')) {
                $(F7).attr('style', 'transform: translate(421px,551px)');
                setFrog('M7');
            }
        });


        /* Myxu */
        $(M1).click(function () {
            if (checkFrog('M1', 5)) {
                $(F5).attr('style', 'transform: translate(-850px,900px)');
                clearFrog();
            }
        });
        $(M2).click(function () {
            if (checkFrog('M2', 2)) {
                $(F2).attr('style', 'transform: translate(0px,890px)');
                clearFrog();
            }
        });
        $(M3).click(function () {
            if (checkFrog('M3', 4)) {
                $(F4).attr('style', 'transform: translate(-260px,890px)');
                clearFrog();
            }
        });
        $(M4).click(function () {
            if (checkFrog('M4', 6)) {
                $(F6).attr('style', 'transform: translate(-250px,890px)');
                clearFrog();
            }
        });
        $(M5).click(function () {
            if (checkFrog('M5', 3)) {
                $(F3).attr('style', 'transform: translate(560px,890px)');
                clearFrog();
            }
        });
        $(M6).click(function () {
            if (checkFrog('M6', 1)) {
                $(F1).attr('style', 'transform: translate(1340px,890px)');
                clearFrog();
            }
        });

        $(M7).click(function () {
            if (checkFrog('M7', 'P')) {
                $(F7).attr('style', 'transform: translate(260px,890px)');
                clearFrog();
            }
        });

        $(M8).click(function () {
            if (checkFrog('M8', 'Q')) {
                $(F8).attr('style', 'transform:  translate(-870px,890px)');
                clearFrog();
            }
        });

        $(M9).click(function () {
            if (checkFrog('M9', 'R')) {
                $(F9).attr('style', 'transform: translate(-510px,890px)');
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
