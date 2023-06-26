var audio = null;
var persons = ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8'];
var playqueue = [4, 5, 3, 0, 1, 2, 6, 7];
var queuepos = 0;
$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;
        var FULL = svgDocument.getElementById('FULL');
        var NECK = svgDocument.getElementById("NECK");
        var CHEST = svgDocument.getElementById("CHEST");
        var STOMACH = svgDocument.getElementById("STOMACH");
        var FINGER = svgDocument.getElementById("FINGER");
        var ELBOW = svgDocument.getElementById("ELBOW");
        var CHIN = svgDocument.getElementById("CHIN");
        var TEETH = svgDocument.getElementById("TEETH");

        $(NECK).click(function () {
            if (checkFrog('NECK', '1')) {
                $(NECK).attr('style', 'transform: translate(370px,0px);');
            }
        });

        $(CHEST).click(function () {
            if (checkFrog('CHEST', '2')) {
                $(CHEST).attr('style', 'transform: translate(437px,-57px);');
            }
        });

        $(STOMACH).click(function () {
            if (checkFrog('STOMACH', '3')) {
                $(STOMACH).attr('style', 'transform: translate(318px,-105px);');
            }
        });

        $(FINGER).click(function () {
            if (checkFrog('FINGER', '4')) {
                $(FINGER).attr('style', 'transform: translate(555px,-39px);');
            }
        });

        $(ELBOW).click(function () {
            if (checkFrog('ELBOW', '5')) {
                $(ELBOW).attr('style', 'transform: translate(376px,-152px);');
            }
        });

        $(CHIN).click(function () {
            if (checkFrog('CHIN', '6')) {
                $(CHIN).attr('style', 'transform: translate(300px,-141px);');
            }
        });

        $(TEETH).click(function () {
            if (checkFrog('TEETH', '7')) {
                $(TEETH).attr('style', 'transform: translate(289px,-27px);');
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
        setQuest('NECK');
    }
    if (elem == 2) {
        playSlideVoice('sound/2', 1);
        setQuest('CHEST');
    }
    if (elem == 3) {
        playSlideVoice('sound/3', 1);
        setQuest('STOMACH');
    }
    if (elem == 4) {
        playSlideVoice('sound/4', 1);
        setQuest('FINGER');
    }
    if (elem == 5) {
        playSlideVoice('sound/5', 1);
        setQuest('ELBOW');
    }
    if (elem == 6) {
        playSlideVoice('sound/6', 1);
        setQuest('CHIN');
    }
    if (elem == 7) {
        playSlideVoice('sound/7', 1);
        setQuest('TEETH');
    }

}
