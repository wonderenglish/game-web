var magicbox = null;
var magicAudio = null;
var L1, L2;
var play = 0;
var question = null;
var playqueue = [24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23,];

$(document).ready(function () {
    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });

    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        TIGER = svgDocument.getElementById("TIGER");
        L1 = svgDocument.getElementById("A1");
        L2 = svgDocument.getElementById("A2");

        question = 1;

        $(TIGER).click(function () {
            if (play === 0) {
                playSlideVoice('sound/1', 1, 1);
                magicSound('sound/magic.mp3', 'play');
                times = playqueue.pop();
                play = 1;
                playslider(1, times);
            }
        })

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

function playslider(elem, times) {
    if (times === 0) {
        clearTimeout(magicbox);
        play = 0;
        magicSound('sound/magic.mp3', 'stop');
        return;
    }

    var counter = elem;
    if (counter === 1) {
        $(L1).addClass('flash');
        $(L2).removeClass('flash');
        counter = 2;
    } else if (counter === 2) {
        $(L2).addClass('flash');
        $(L1).removeClass('flash');
        counter = 1;
    }

    magicbox = setTimeout(function () {
        playslider(counter, --times)
    }, 300);
}

/* Buttons */
function buttonAction(elem) {

    $(elem).addClass('active').addClass('on-top');
    if (elem == 1) {
        playSlideVoice('sound/1', 1);
    }

    if (elem == 2) {
        playSlideVoice('sound/2', 1);
    }

    if (elem == 3) {
        playSlideVoice('sound/3', 1);
    }
}

function magicSound(url, type) {
    if (type == 'play') {
        magicAudio = new Audio(url);
        magicAudio.play();
    }

    if (type == 'stop') {
        $(magicAudio).animate({volume: 0}, 1000);
        setTimeout(function () {
            magicAudio.pause();
            magicAudio.currentTime = 0;
        }, 1000);
    }
}