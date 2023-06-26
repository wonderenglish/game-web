var audio = null;
var persons = ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8'];
var playqueue = [4, 5, 3, 0, 1, 2, 6, 7];
var queuepos = 0;
$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;
        var FULL = svgDocument.getElementById('NICK');
        var FACE = svgDocument.getElementById("L1");
        var HAIR = svgDocument.getElementById("L2");
        var EYES = svgDocument.getElementById("L3");
        var EYEBROWS = svgDocument.getElementById("L4");
        var NOSE = svgDocument.getElementById("L5");
        var MOUTH = svgDocument.getElementById("L6");
        var EARS = svgDocument.getElementById("L7");
        var CHEEKS = svgDocument.getElementById("L8");


        $(FACE).click(function () {
            if (checkFrog('', '2')) {
                $(FACE).attr('style', 'transform: translate(439px, 50px);');
                setTimeout(function (args) {  $(FACE).attr('style', 'transform: translate(0, 0);'); }, 2000);
            }
        });

        $(HAIR).click(function () {
            if (checkFrog('', '2')) {
                $(HAIR).attr('style', 'transform: translate(306px, 49px);');
                setTimeout(function (args) {  $(HAIR).attr('style', 'transform: translate(0, 0);'); }, 2000);
            }
        });

        $(EYES).click(function () {
            if (checkFrog('', '2')) {
                $(EYES).attr('style', 'transform: translate(434px, -67px);');
                setTimeout(function (args) {  $(EYES).attr('style', 'transform: translate(0, 0);'); }, 2000);
            }
        });

        $(EYEBROWS).click(function () {
            if (checkFrog('', '2')) {
                $(EYEBROWS).attr('style', 'transform: translate(307px, -60px);');
                setTimeout(function (args) {  $(EYEBROWS).attr('style', 'transform: translate(0, 0);'); }, 2000);
            }
        });

        $(NOSE).click(function () {
            if (checkFrog('', '3')) {
                $(NOSE).attr('style', 'transform: translate(428px, -174px);');
                setTimeout(function (args) {  $(NOSE).attr('style', 'transform: translate(0, 0);'); }, 2000);
            }
        });

        $(MOUTH).click(function () {
            if (checkFrog('', '3')) {
                $(MOUTH).attr('style', 'transform: translate(435px, -295px);');
                setTimeout(function (args) {  $(MOUTH).attr('style', 'transform: translate(0, 0);'); }, 2000);
            }
        });

        $(EARS).click(function () {
            if (checkFrog('', '3')) {
                $(EARS).attr('style', 'transform: translate(305px, -318px);');
                setTimeout(function (args) {  $(EARS).attr('style', 'transform: translate(0, 0);'); }, 2000);
            }
        });

        $(CHEEKS).click(function () {
            if (checkFrog('', '3')) {
                $(CHEEKS).attr('style', 'transform: translate(310px, -182px);');
                setTimeout(function (args) {  $(CHEEKS).attr('style', 'transform: translate(0, 0);'); }, 2000);
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

});

function hasBlock(elem) {
    if ($(elem).attr('data-block') == 1) {
        return true;
    } else {
        return false;
    }
}

/* Buttons */
function buttonAction(elem) {
    if (elem == 20) {
        playSlideVoice('sound/10', 1);
    }
    if (elem == 9) {
        replaySlide();
    }
    if (elem == 1) {
        playSlideVoice('sound/1', 1);
        setFrog('FACE');
    }
    if (elem == 2) {
        playSlideVoice('sound/2', 1);
        setFrog('HAIR');
    }
    if (elem == 3) {
        playSlideVoice('sound/3', 1);
        setFrog('EYES');
    }
    if (elem == 4) {
        playSlideVoice('sound/4', 1);
        setFrog('EYEBROWS');
    }
    if (elem == 5) {
        playSlideVoice('sound/5', 1);
        setFrog('NOSE');
    }
    if (elem == 6) {
        playSlideVoice('sound/6', 1);
        setFrog('MOUTH');
    }
    if (elem == 7) {
        playSlideVoice('sound/7', 1);
        setFrog('EARS');
    }

    if (elem == 8) {
        playSlideVoice('sound/8', 1);
        setFrog('CHEEKS');
    }
}
