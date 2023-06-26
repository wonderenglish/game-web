var audio = null;
var queuepos = 0;
var A,B,C,D,E,F,G,H,I;
$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;
        A = svgDocument.getElementById("A");
        B = svgDocument.getElementById("B");
        C = svgDocument.getElementById("C");
        D = svgDocument.getElementById("D");
        E = svgDocument.getElementById("E");
        F = svgDocument.getElementById("F");
        G = svgDocument.getElementById("G");
        H = svgDocument.getElementById("H");
        I = svgDocument.getElementById("I");

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
    if (elem == 1) {
        playSlideVoice('sound/1', 1);
        $(A).attr('style', 'opacity: 1');
        setTimeout(function (args) { $(A).attr('style', 'opacity: 0.3');  }, 2500);
    }
    if (elem == 2) {
        playSlideVoice('sound/2', 1);
        $(B).attr('style', 'opacity: 1');
        setTimeout(function (args) { $(B).attr('style', 'opacity: 0.3');  }, 2500);
    }
    if (elem == 3) {
        playSlideVoice('sound/3', 1);
        $(C).attr('style', 'opacity: 1');
        setTimeout(function (args) { $(C).attr('style', 'opacity: 0.3');  }, 2500);
    }
    if (elem == 4) {
        playSlideVoice('sound/4', 1);
        $(D).attr('style', 'opacity: 1');
        setTimeout(function (args) { $(D).attr('style', 'opacity: 0.3');  }, 2500);
    }
    if (elem == 5) {
        playSlideVoice('sound/5', 1);
        $(E).attr('style', 'opacity: 1');
        setTimeout(function (args) { $(E).attr('style', 'opacity: 0.3');  }, 2500);
    }
    if (elem == 6) {
        playSlideVoice('sound/6', 1);
        $(F).attr('style', 'opacity: 1');
        setTimeout(function (args) { $(F).attr('style', 'opacity: 0.3');  }, 2500);
    }
    if (elem == 7) {
        playSlideVoice('sound/7', 1);
        $(G).attr('style', 'opacity: 1');
        setTimeout(function (args) { $(G).attr('style', 'opacity: 0.3');  }, 2500);
    }
    if (elem == 8) {
        playSlideVoice('sound/8', 1);
        $(H).attr('style', 'opacity: 1');
        setTimeout(function (args) { $(H).attr('style', 'opacity: 0.3');  }, 2500);
    }
    if (elem == 9) {
        playSlideVoice('sound/9', 1);
        $(I).attr('style', 'opacity: 1');
        setTimeout(function (args) { $(I).attr('style', 'opacity: 0.3');  }, 2500);
    }
    if (elem == 10) {
        replaySlide();
    }
}
