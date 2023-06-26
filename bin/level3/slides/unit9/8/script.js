var audio = null;
var V11, V12, V13, V14;
var V21, V22, V23, V24;
var V31, V32, V33, V34;
var B1, B2;
var cards = [];

$(document).ready(function () {
    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {
        var svgDocument = object.contentDocument;
        B2 = svgDocument.getElementById("B1");
        B1 = svgDocument.getElementById("B2");
        V11 = svgDocument.getElementById("11");
        V12 = svgDocument.getElementById("12");
        V13 = svgDocument.getElementById("13");
        V14 = svgDocument.getElementById("14");

        V21 = svgDocument.getElementById("21");
        V22 = svgDocument.getElementById("22");
        V23 = svgDocument.getElementById("23");
        V24 = svgDocument.getElementById("24");

        V31 = svgDocument.getElementById("31");
        V32 = svgDocument.getElementById("32");
        V33 = svgDocument.getElementById("33");
        V34 = svgDocument.getElementById("34");



        cards = [
            V11, V12, V13, V14,
            V21, V22, V23, V24,
            V31, V32, V33, V34
        ];
        $(B1).click(function () {
            if ($('#ball2').attr('data-state') == 0) {
                $('#ball2').attr('data-state', 1);
                $('#ball1').attr('data-state', 0);
            } else {
                playSong('sound/bad.mp3', 1);
            }
        });

        $(B2).click(function () {
            if ($('#ball1').attr('data-state') == 0) {
                $('#ball1').attr('data-state', 1);
                $('#ball2').attr('data-state', 0);
            } else {
                playSong('sound/bad.mp3', 1);
            }
        });

        setListener('V11', 'V23', '5');  //Amuse
        setListener('V12', 'V31', '6');  //Zoo
        setListener('V13', 'V14', '4');  //Muse
        setListener('V21', 'V34', '3');  //Mout
        setListener('V22', 'V33', '2');  //Beach
        setListener('V24', 'V32', '1');  //aqu
        showAllCards();


    });
    setTimeout(function () {
        buttonAction(1);
    }, 100);
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

    setTimeout(function (args) {
        var sw = $('#svgelem').width();
        var dw = $('body').width();
        $('.ballScore1').attr('style', 'left: ' + (((dw - sw) / 2) + 40) + 'px;');
        $('.ballScore2').attr('style', 'left: ' + (((dw - sw) / 2) + sw - 150) + 'px;');
    }, 100);

});

/* Buttons */
function buttonAction(elem) {
    if (elem == 1) {
        // playSlideVoice('sound/i', 1);
        showAllCards();
    }
    if (elem == 2) {
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

    $(eval($find)).click(function () {
        if (checkBalls()) {
            if (!$(eval($find)).hasClass('block')) {
                var clicked = $('#clicked');
                var findout = $('#findout');
                $(eval($find)).addClass('act');
                if (clicked.val() == 0) {
                    clicked.val($find);
                    findout.val($this);
                } else {
                    if (findout.val() == $find) {
                        $(eval($find)).addClass('block');
                        $(eval($this)).addClass('block');
                        clicked.val(0);
                        findout.val(0);
                        addScore();
                        playSong('sound/' + sound, 1);
                    } else {
                        setTimeout(function (args) {
                            $(eval(clicked.val())).removeClass('act');
                            $(eval($find)).removeClass('act');
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
