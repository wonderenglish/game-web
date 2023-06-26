var audio = null;
var B1, B2, B3, B4, B5, B6;
var G1, G2, G3, G4, G5, G6;
var cards = [];

$(document).ready(function () {
    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {
        var svgDocument = object.contentDocument;
        B1 = svgDocument.getElementById("B1");
        B2 = svgDocument.getElementById("B2");
        B3 = svgDocument.getElementById("B3");
        B4 = svgDocument.getElementById("B4");
        B5 = svgDocument.getElementById("B5");
        B6 = svgDocument.getElementById("B6");

        G1 = svgDocument.getElementById("G1");
        G2 = svgDocument.getElementById("G2");
        G3 = svgDocument.getElementById("G3");
        G4 = svgDocument.getElementById("G4");
        G5 = svgDocument.getElementById("G5");
        G6 = svgDocument.getElementById("G6");

        $(B1).click(function () {
            $(this).find('.BOX').attr('fill-opacity', 0);
            $(this).find('.SHIT').removeClass('SHIT');
        });
        $(B2).click(function () {
            $(this).find('.BOX').attr('fill-opacity', 0);
            $(this).find('.SHIT').removeClass('SHIT');
        });
        $(B3).click(function () {
            $(this).find('.BOX').attr('fill-opacity', 0);
            $(this).find('.SHIT').removeClass('SHIT');
        });
        $(B4).click(function () {
            $(this).find('.BOX').attr('fill-opacity', 0);
            $(this).find('.SHIT').removeClass('SHIT');
        });
        $(B5).click(function () {
            $(this).find('.BOX').attr('fill-opacity', 0);
            $(this).find('.SHIT').removeClass('SHIT');
        });
        $(B6).click(function () {
            $(this).find('.BOX').attr('fill-opacity', 0);
            $(this).find('.SHIT').removeClass('SHIT');
        });

        $(G1).click(function () {
            $(this).find('.BOX').attr('fill-opacity', 0);
            $(this).find('.SHIT').removeClass('SHIT');
        });
        $(G2).click(function () {
            $(this).find('.BOX').attr('fill-opacity', 0);
            $(this).find('.SHIT').removeClass('SHIT');
        });
        $(G3).click(function () {
            $(this).find('.BOX').attr('fill-opacity', 0);
            $(this).find('.SHIT').removeClass('SHIT');
        });
        $(G4).click(function () {
            $(this).find('.BOX').attr('fill-opacity', 0);
            $(this).find('.SHIT').removeClass('SHIT');
        });
        $(G5).click(function () {
            $(this).find('.BOX').attr('fill-opacity', 0);
            $(this).find('.SHIT').removeClass('SHIT');
        });
        $(G6).click(function () {
            $(this).find('.BOX').attr('fill-opacity', 0);
            $(this).find('.SHIT').removeClass('SHIT');
        });

        // setListener('R1E1', 'R3E3', '3');
        // setListener('R3E3', 'R1E1', '3');
        // setListener('R1E2', 'R1E4', '2');
        // setListener('R1E4', 'R1E2', '2');
        // setListener('R1E3', 'R2E2', '6');
        // setListener('R2E2', 'R1E3', '6');
        // setListener('R2E1', 'R4E2', '4');
        // setListener('R4E2', 'R2E1', '4');
        // setListener('R2E3', 'R4E4', '5');
        // setListener('R4E4', 'R2E3', '5');
        // setListener('R3E1', 'R4E3', '7');
        // setListener('R4E3', 'R3E1', '7');
        // setListener('R3E2', 'R4E1', '1');
        // setListener('R4E1', 'R3E2', '1');
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
    if (elem == 1) {
        playSlideVoice('sound/1', 1);
    }
    if (elem == 2) {
        playSlideVoice('sound/2', 1);
    }
    if (elem == 3) {
        playSlideVoice('sound/3', 1);
    }
    if (elem == 10) {
        replaySlide();
    }
}

function showAllCards() {
    $(cards).each(function (i, elem) {
        $(eval(elem)).attr('style', 'opacity: 1');
        setTimeout(function (args) {
            $(eval(elem)).attr('style', 'opacity: 0');
        }, 5000);
    });
}

function addScore() {
    var ball1 = $('#ball1');
    var ball2 = $('#ball2');
    if (ball1.attr('data-state') == 1) {
        var score = $('.ballScore1').html();
        $('.ballScore1').html(parseInt(score) + 1);
    }
    if (ball2.attr('data-state') == 1) {
        var score = $('.ballScore2').html();
        $('.ballScore2').html(parseInt(score) + 1);
    }
}

function checkBalls() {
    var ball1 = $('#ball1');
    var ball2 = $('#ball2');
    if (ball1.attr('data-state') == 1 || ball2.attr('data-state') == 1) {
        return true;
    } else {
        playSong('sound/bad.mp3', 1);
        return false;
    }
}

function setListener($this, $find, sound) {
    $(eval($this)).click(function () {
        if (checkBalls()) {
            if (!$(eval($this)).hasClass('block')) {
                var clicked = $('#clicked');
                var findout = $('#findout');
                $(eval($this)).addClass('act');
                if (clicked.val() == 0) {
                    clicked.val($this);
                    findout.val($find);
                } else {
                    if (findout.val() == $this) {
                        $(eval($this)).addClass('block');
                        $(eval($find)).addClass('block');
                        clicked.val(0);
                        findout.val(0);
                        addScore();
                        playSong('sound/' + sound, 1);
                    } else {
                        setTimeout(function (args) {
                            $(eval(clicked.val())).removeClass('act');
                            $(eval($this)).removeClass('act');
                            clicked.val(0);
                            findout.val(0);
                        }, 1000);
                        playSong('sound/bad.mp3', 1);
                    }
                }
            }
        }
    });
}
