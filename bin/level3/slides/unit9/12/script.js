var audio = null;
var persons = ['A3', 'A2', 'A4', "A5", 'A1'];
var playqueue = [0, 1, 2, 3, 4];
var queuepos = 0;
var B1, B2;
var cards = [];
var block = false;
$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        var svgElement1 = svgDocument.getElementById("TIGER");
        B2 = svgDocument.getElementById("B1");
        B1 = svgDocument.getElementById("B2");
        var svgElement2 = svgDocument.getElementById("A1");  //rest
        var svgElement3 = svgDocument.getElementById("A2");
        var svgElement4 = svgDocument.getElementById("A3");
        var svgElement5 = svgDocument.getElementById("A4");
        var svgElement6 = svgDocument.getElementById("A5");

        $(B1).click(function () {
            addScore(2);
        })

        $(B2).click(function () {
            addScore(1);
        })

        $(svgElement1).click(function () {
            if (block !== true) {
                playSlideVoice('sound/i', 1, 1);
                $(svgElement2).removeClass('glow-green');
                $(svgElement3).removeClass('glow-green');
                $(svgElement4).removeClass('glow-green');
                $(svgElement5).removeClass('glow-green');
                $(svgElement6).removeClass('glow-green');

                block = true;
                roundRobin();
            }
        });


        $(svgElement2).click(function () {
            playSlideVoice('sound/1', 1)
        });
        $(svgElement3).click(function () {
            playSlideVoice('sound/2', 1)
        });
        $(svgElement4).click(function () {
            playSlideVoice('sound/3', 1)
        });
        $(svgElement5).click(function () {
            playSlideVoice('sound/4', 1)
        });
        $(svgElement6).click(function () {
            playSlideVoice('sound/5', 1)
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

function addScore(ball) {
    if (ball == 1) {
        var score = $('.ballScore1').html();
        $('.ballScore1').html(parseInt(score) + 1);
    }
    if (ball == 2) {
        var score = $('.ballScore2').html();
        $('.ballScore2').html(parseInt(score) + 1);
    }
}


function roundSound(url, type) {

    if (type == 'play') {
        audio = new Audio(url);
        audio.play();
    }

    if (type == 'stop') {
        $(audio).animate({volume: 0}, 1000);
        setTimeout(function () {
            audio.pause();
            audio.currentTime = 0;
        }, 1000);
    }
}

function makeRound(i, persons, maxpos) {
    roundSound('sound/round.mp3', 'play');
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
                    prevelem = svgDocument.getElementById(persons[2]);
                }
                $(prevelem).removeClass('glow-green');
                pos++;
                if (pos == maxpos) {
                    pos = 0;
                }
            }, timeout);
        setTimeout(function () {
            roundSound('sound/round.mp3', 'stop');
            block = false;
        }, 200 * i + 400);
    }
}

function roundRobin() {
    var i = Math.floor(24 + playqueue[queuepos]);
    var maxpos = persons.length + 1;
    makeRound(i, persons, maxpos);

    queuepos++;
    if (queuepos === 7) {
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
