var audio = null;
var V11, V12, V13, V14, V15, V16, V17;
var V21, V22, V23, V24, V25, V26, V27;
var V31, V32, V33, V34, V35, V36, V37;
var V41, V42, V43, V44, V45, V46, V47;
var V51, V52, V53, V54, V55, V56, V57;
var V61, V62, V63, V64, V65
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
        V15 = svgDocument.getElementById("15");
        V16 = svgDocument.getElementById("16");
        V17 = svgDocument.getElementById("17");

        V21 = svgDocument.getElementById("21");
        V22 = svgDocument.getElementById("22");
        V23 = svgDocument.getElementById("23");
        V24 = svgDocument.getElementById("24");
        V25 = svgDocument.getElementById("25");
        V26 = svgDocument.getElementById("26");
        V27 = svgDocument.getElementById("27");

        V31 = svgDocument.getElementById("31");
        V32 = svgDocument.getElementById("32");
        V33 = svgDocument.getElementById("33");
        V34 = svgDocument.getElementById("34");
        V35 = svgDocument.getElementById("35");
        V36 = svgDocument.getElementById("36");
        V37 = svgDocument.getElementById("37");

        V41 = svgDocument.getElementById("41");
        V42 = svgDocument.getElementById("42");
        V43 = svgDocument.getElementById("43");
        V44 = svgDocument.getElementById("44");
        V45 = svgDocument.getElementById("45");
        V46 = svgDocument.getElementById("46");
        V47 = svgDocument.getElementById("47");

        V51 = svgDocument.getElementById("51");
        V52 = svgDocument.getElementById("52");
        V53 = svgDocument.getElementById("53");
        V54 = svgDocument.getElementById("54");
        V55 = svgDocument.getElementById("55");
        V56 = svgDocument.getElementById("56");
        V57 = svgDocument.getElementById("57");

        V61 = svgDocument.getElementById("61");
        V62 = svgDocument.getElementById("62");
        V63 = svgDocument.getElementById("63");
        V64 = svgDocument.getElementById("64");
        V65 = svgDocument.getElementById("65");


        cards = [
            V11, V12, V13, V14, V15, V16, V17,
            V21, V22, V23, V24, V25, V26, V27,
            V31, V32, V33, V34, V35, V36, V37,
            V41, V42, V43, V44, V45, V46, V47,
            V51, V52, V53, V54, V55, V56, V57,
            V61, V62, V63, V64, V65
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

        setListener('V11', 'V33', '1');  //house х2
        setListener('V56', 'V61', '2');  //living room х2
        setListener('V16', 'V34', '3');  //kitchen х2
        setListener('V47', 'V54', '4');  //bedroom х2
        setListener('V51', 'V64', '5');      //bathroom х2
        setListener('V42', 'V37', '6');      //yard х2
        setListener('V13', 'V45', '7');      //Diningroom х2
        setListener('V22', 'V36', '8');      //hall х2
        setListener('V24', 'V52', '9');      //desk х2
        setListener('V46', 'V63', '10');     //closet х2
        setListener('V15', 'V53', '11');     //bed х2
        setListener('V17', 'V25', '12');     //window х2
        setListener('V14', 'V43', '13');     //toilet х2
        setListener('V27', 'V31', '14');     //sink х2
        setListener('V35', 'V44', '15');     //sofa х2//
        setListener('V12', 'V55', '16');     //table х2
        setListener('V32', 'V65', '17');     //chair х2
        setListener('V57', 'V62', '18');     //lamp х2
        setListener('V23', 'V26', '19');     //bookshelf х2
        setListener('V21', 'V41', '20');     //door х2


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
