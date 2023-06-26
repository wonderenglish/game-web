var audio = null;
var persons = ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8'];
var playqueue = [4, 5, 3, 0, 1, 2, 6, 7];
var queuepos = 0;
$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;
        var FACE = svgDocument.getElementById("FACE");
        var HAIR = svgDocument.getElementById("HAIR");
        var EYES = svgDocument.getElementById("EYES");
        var EYEBROWS = svgDocument.getElementById("EYEBROWS");
        var NOSE = svgDocument.getElementById("NOSE");
        var MOUTH = svgDocument.getElementById("MOUTH");
        var EARS = svgDocument.getElementById("EARS");
        var CHEEKS = svgDocument.getElementById("CHEEKS");

        $(FACE).click(function () {
            if (checkFrog('', '1')) {
                $(FACE).find('.st4').attr('style', 'fill: #FFE8D0');
                setTimeout(function (args) { $(FACE).find('.st4').attr('style', 'fill: #c1c1c1'); }, 2000);
            }
        });

        $(HAIR).click(function () {
            if (checkFrog('', '2')) {
                $(HAIR).find('.st14').attr('style', 'fill: #514234');
                setTimeout(function (args) { $(HAIR).find('.st14').attr('style', 'fill: #717171'); }, 2000);
            }
        });

        $(EYES).click(function () {
            if (checkFrog('', '3')) {
                $(EYES).find('.st31').attr('style', 'fill: #514234');
                setTimeout(function (args) {   $(EYES).find('.st31').attr('style', 'fill: #717171'); }, 2000);
            }
        });

        $(EYEBROWS).click(function () {
            if (checkFrog('', '4')) {
                $(EYEBROWS).find('.st26').attr('style', 'fill: #514234');
                setTimeout(function (args) {   $(EYEBROWS).find('.st26').attr('style', 'fill: #717171'); }, 2000);
            }
        });

        $(NOSE).click(function () {
            if (checkFrog('', '5')) {
                $(NOSE).find('.st22').attr('style', 'fill: #FFE8D0');
                setTimeout(function (args) {    $(NOSE).find('.st22').attr('style', 'fill: #c1c1c1'); }, 2000);
            }
        });

        $(MOUTH).click(function () {
            if (checkFrog('', '6')) {
                $(MOUTH).find('.st34').attr('style', 'fill: #FFE8D0');
                setTimeout(function (args) { $(MOUTH).find('.st34').attr('style', 'fill: #c1c1c1'); }, 2000);
            }
        });

        $(EARS).click(function () {
            if (checkFrog('', '7')) {
                $(EARS).find('.st20').attr('style', 'fill: #FFE8D0');
                setTimeout(function (args) {  $(EARS).find('.st20').attr('style', 'fill: #c1c1c1'); }, 2000);
            }
        });

        $(CHEEKS).click(function () {
            if (checkFrog('', '8')) {
                $(CHEEKS).find('.st17').attr('style', 'fill: #F8D3BA');
                setTimeout(function (args) {  $(CHEEKS).find('.st17').attr('style', 'fill: #b5b5b5'); }, 2000);
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
