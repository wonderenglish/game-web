var audio = null;
var persons = ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8'];
var playqueue = [4, 5, 3, 0, 1, 2, 6, 7];
var queuepos = 0;
$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;
        var frog1 = svgDocument.getElementById("FR1");
        var frog2 = svgDocument.getElementById("FR2");
        var frog3 = svgDocument.getElementById("F3");
        var frog4 = svgDocument.getElementById("F4");
        var frog5 = svgDocument.getElementById("F5");
        var frog6 = svgDocument.getElementById("F6");
        var frog7 = svgDocument.getElementById("F9");
        var frog8 = svgDocument.getElementById("F7");
        var frog9 = svgDocument.getElementById("F8");

        var A1 = svgDocument.getElementById("A1");
        var A2 = svgDocument.getElementById("A2");
        var B1 = svgDocument.getElementById("B1");
        var B2 = svgDocument.getElementById("B2");
        var C1 = svgDocument.getElementById("C1");
        var C2 = svgDocument.getElementById("C2");
        var D1 = svgDocument.getElementById("D1");
        var D2 = svgDocument.getElementById("D2");
        var E1 = svgDocument.getElementById("E1");
        var E2 = svgDocument.getElementById("E2");
        var F1 = svgDocument.getElementById("F1");
        var F2 = svgDocument.getElementById("F2");
        var G1 = svgDocument.getElementById("G1");
        var G2 = svgDocument.getElementById("G2");
        var H1 = svgDocument.getElementById("H1");
        var H2 = svgDocument.getElementById("H2");
        var I1 = svgDocument.getElementById("I1");
        var I2 = svgDocument.getElementById("I2");

        var FLY1 = svgDocument.getElementById("FLY1");
        var FLY2 = svgDocument.getElementById("FLY2");
        var FLY3 = svgDocument.getElementById("FLY3");
        var FLY4 = svgDocument.getElementById("FLY4");
        var FLY5 = svgDocument.getElementById("FLY5");
        var FLY6 = svgDocument.getElementById("FLY6");
        var FLY7 = svgDocument.getElementById("FLY7");
        var FLY8 = svgDocument.getElementById("FLY8");
        var FLY9 = svgDocument.getElementById("FLY9");

        $(frog1).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/1', 1);
                setFrog('A1');
            }
        });
        $(frog2).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/2', 1);
                setFrog('B1');
            }
        });
        $(frog3).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/3', 1);
                setFrog('C1');
            }

        });
        $(frog4).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/4', 1);
                setFrog('D1');
            }

        });
        $(frog5).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/5', 1);
                setFrog('E1');
            }

        });
        $(frog6).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/6', 1);
                setFrog('F1');
            }
        });
        $(frog7).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/9', 1);
                setFrog('G1');
            }
        });
        $(frog8).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/7', 1);
                setFrog('H1');
            }
        });
        $(frog9).click(function () {
            if ($('#question').val() == '') {
                playSlideVoice('sound/8', 1);
                setFrog('I1');
            }
        });

        /* 2 row */
        $(A1).click(function () {
            if (checkFrog('A1', 'ant')) {
                $(frog1).attr('style','transform: translate(189px,330px)');
                setFrog('A2');
            }
        });
        $(B1).click(function () {
            if (checkFrog('B1', 'bread')) {
                $(frog2).attr('style','transform: translate(-210px,330px)');
                setFrog('B2');
            }
        });
        $(C1).click(function () {
            if (checkFrog('C1', 'cat')) {
                $(frog3).attr('style','transform: translate(370px,333px)');
                setFrog('C2');
            }
        });
        $(D1).click(function () {
            if (checkFrog('D1', 'donut')) {
                $(frog4).attr('style','transform: translate(370px,333px)');
                setFrog('D2');
            }
        });
        $(E1).click(function () {
            if (checkFrog('E1', 'egg')) {
                $(frog5).attr('style','transform: translate(-455px,333px)');
                setFrog('E2');
            }
        });
        $(F1).click(function () {
            if (checkFrog('F1', 'fries')) {
                $(frog6).attr('style','transform: translate(625px,340px)');
                setFrog('F2');
            }
        });
        $(G1).click(function () {
            if (checkFrog('G1', 'grape')) {
                $(frog7).attr('style','transform: translate(-685px,340px)');
                setFrog('G2');
            }
        });
        $(H1).click(function () {
            if (checkFrog('H1', 'honey')) {
                $(frog8).attr('style','transform: translate(0px,340px)');
                setFrog('H2');
            }
        });
        $(I1).click(function () {
            if (checkFrog('I1', 'iguana')) {
                $(frog9).attr('style','transform: translate(-460px,340px)');
                setFrog('I2');
            }
        });

        $(A2).click(function () {
            if (checkFrog('A2', 'apple')) {
                $(frog1).attr('style','transform:  translate(380px,550px)');
                setFrog('FLY6');
            }
        });
        $(B2).click(function () {
            if (checkFrog('B2', 'bear')) {
                $(frog2).attr('style','transform: translate(-210px,550px)');
                setFrog('FLY2');
            }
        });
        $(C2).click(function () {
            if (checkFrog('C2', 'carrot')) {
                $(frog3).attr('style','transform: translate(1287px,543px)');
                setFrog('FLY5');
            }
        });
        $(D2).click(function () {
            if (checkFrog('D2', 'dog')) {
                $(frog4).attr('style','transform: translate(-30px,543px)');
                setFrog('FLY4');
            }
        });
        $(E2).click(function () {
            if (checkFrog('E2', 'elephant')) {
                $(frog5).attr('style','transform: translate(-15px,550px)');
                setFrog('FLY3');
            }
        });
        $(F2).click(function () {
            if (checkFrog('F2', 'fish')) {
                $(frog6).attr('style','transform: translate(-865px,555px)');
                setFrog('FLY1');
            }
        });
        $(G2).click(function () {
            if (checkFrog('G2', 'goat')) {
                $(frog7).attr('style','transform: translate(-195px,554px)');
                setFrog('FLY9');
            }
        });
        $(H2).click(function () {
            if (checkFrog('H2', 'hippo')) {
                $(frog8).attr('style','transform: translate(-175px,556px)');
                setFrog('FLY8');
            }
        });
        $(I2).click(function () {
            if (checkFrog('I2', 'igloo')) {
                $(frog9).attr('style','transform: translate(-160px,560px)');
                setFrog('FLY7');
            }
        });

        $(FLY1).click(function () {
            if (checkFrog('FLY1', '6')) {
                $(frog6).attr('style','transform: translate(-1054px,869px)');
            }
        });
        $(FLY2).click(function () {
            if (checkFrog('FLY2', '2')) {
                $(frog2).attr('style','transform: translate(-10px,860px)');
            }
        });
        $(FLY3).click(function () {
            if (checkFrog('FLY3', '5')) {
                $(frog5).attr('style','transform: translate(-430px,865px)');
            }
        });
        $(FLY4).click(function () {
            if (checkFrog('FLY4', '4')) {
                $(frog4).attr('style','transform: translate(0px,855px)');
            }
        });
        $(FLY5).click(function () {
            if (checkFrog('FLY5', '3')) {
                $(frog3).attr('style','transform: translate(427px,855px)');
            }
        });
        $(FLY6).click(function () {
            if (checkFrog('FLY6', '1')) {
                $(frog1).attr('style','transform: translate(1050px,855px)');
            }
        });
        $(FLY7).click(function () {
            if (checkFrog('FLY7', '8')) {
                $(frog9).attr('style','transform: translate(-410px,870px)');
            }
        });
        $(FLY8).click(function () {
            if (checkFrog('FLY8', '7')) {
                $(frog8).attr('style','transform: translate(-5px,868px)');
            }
        });
        $(FLY9).click(function () {
            if (checkFrog('FLY9', '9')) {
                $(frog7).attr('style','transform: translate(395px,865px)');
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
