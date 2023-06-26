var TOUCH, LEFT, RIGHT, KITCHEN, BEDROOM;
var roundRobin = 2;
$(document).ready(function () {
    hideOverlay(500);
    // playSong('sound/jingle.mp3');
    // var arr = [1, 2, 3, 4, 5];
    // storySetRandom(arr);

    $('.next-slide').click(function () {
        nextSlide();
    });

    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        TOUCH = svgDocument.getElementById("TOUCH"); //получаем любой элемент внутри svg
        LEFT = svgDocument.getElementById("DLEFT"); //получаем любой элемент внутри svg
        RIGHT = svgDocument.getElementById("DRIGHT"); //получаем любой элемент внутри svg
        BEDROOM = svgDocument.getElementById("BEDROOM"); //получаем любой элемент внутри svg
        KITCHEN = svgDocument.getElementById("KITCH"); //получаем любой элемент внутри svg

        $(TOUCH).click(function () {
            buttonAction(roundRobin);
        });
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
    });
});

/* Buttons */
function buttonAction(elem) {

    $(elem).addClass('active').addClass('on-top');
    if (elem == 1) {
        playSlideVoice('sound/1', 1);
    }

    if (elem == 2) {
        LEFT.setAttribute('transform', 'translate(-130, 0)');
        RIGHT.setAttribute('transform', 'translate(130, 0)');
        $(KITCHEN).hide();
        setTimeout(function (args) {

            LEFT.setAttribute('transform', 'translate(0, 0)');
            RIGHT.setAttribute('transform', 'translate(0, 0)');
        }, 2000)
        setTimeout(function () {
            $(KITCHEN).show();
        }, 2300)
        roundRobin = 4;
    }

    if (elem == 4) {
        LEFT.setAttribute('transform', 'translate(-130, 0)');
        RIGHT.setAttribute('transform', 'translate(130, 0)');
        $(BEDROOM).hide();
        setTimeout(function (args) {
            LEFT.setAttribute('transform', 'translate(0, 0)');
            RIGHT.setAttribute('transform', 'translate(0, 0)');
        }, 2000)
        setTimeout(function () {
            $(BEDROOM).show();
        }, 2300)
        roundRobin = 2;
    }

    if (elem == 5) {
        playSlideVoice('sound/2', 1);
    }

    if (elem == 6) {
        playSlideVoice('sound/3', 1);
    }


}