var audio = null;
var persons = ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8'];
var playqueue = [4, 5, 3, 0, 1, 2, 6, 7];
var queuepos = 0;
$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;
        var FULL = svgDocument.getElementById('FULL');
        var FACE = svgDocument.getElementById("FACE");
        var HAIR = svgDocument.getElementById("HAIR");
        var EYES = svgDocument.getElementById("EYES");
        var EYEBROWS = svgDocument.getElementById("EYEBROWS");
        var NOSE = svgDocument.getElementById("NOSE");
        var MOUTH = svgDocument.getElementById("MOUTH");
        var EARS = svgDocument.getElementById("EARS");
        var CHEEKS = svgDocument.getElementById("CHEEKS");

        $(FULL).attr('style','transform: translate(-90px, 2px);')

        $(FACE).click(function () {
            if (checkFrog('FACE', '1')) {
                $(FACE).attr('style', 'transform: translate(142px, -275px);');
            }
        });

        $(HAIR).click(function () {
            if (checkFrog('HAIR', '2')) {
                $(HAIR).attr('style', 'transform: translate(-181px, -238px);');
            }
        });

        $(EYES).click(function () {
            if (checkFrog('EYES', '3')) {
                $(EYES).attr('style', 'transform: translate(310px, -209px);');
            }
        });

        $(EYEBROWS).click(function () {
            if (checkFrog('EYEBROWS', '4')) {
                $(EYEBROWS).attr('style', 'transform: translate(150px, -197px);');
            }
        });

        $(NOSE).click(function () {
            if (checkFrog('NOSE', '5')) {
                $(NOSE).attr('style', 'transform: translate(-13px, -182px);');
            }
        });

        $(MOUTH).click(function () {
            if (checkFrog('MOUTH', '6')) {
                $(MOUTH).attr('style', 'transform: translate(-194px, -261px);');
            }
        });

        $(EARS).click(function () {
            if (checkFrog('EARS', '7')) {
                $(EARS).attr('style', 'transform: translate(-13px, -293px)');
            }
        });

        $(CHEEKS).click(function () {
            if (checkFrog('CHEEKS', '8')) {
                $(CHEEKS).attr('style', 'transform: translate(297px, -270px);');
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
        playSlideVoice('sound/i', 1);
    }
    if (elem == 9) {
        replaySlide();
    }
    if (elem == 1) {
        playSlideVoice('sound/1', 1);
        setQuest('FACE');
    }
    if (elem == 2) {
        playSlideVoice('sound/2', 1);
        setQuest('HAIR');
    }
    if (elem == 3) {
        playSlideVoice('sound/3', 1);
        setQuest('EYES');
    }
    if (elem == 4) {
        playSlideVoice('sound/4', 1);
        setQuest('EYEBROWS');
    }
    if (elem == 5) {
        playSlideVoice('sound/5', 1);
        setQuest('NOSE');
    }
    if (elem == 6) {
        playSlideVoice('sound/6', 1);
        setQuest('MOUTH');
    }
    if (elem == 7) {
        playSlideVoice('sound/7', 1);
        setQuest('EARS');
    }

    if (elem == 8) {
        playSlideVoice('sound/8', 1);
        setQuest('CHEEKS');
    }
}
