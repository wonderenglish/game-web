var ELEMS;
var PERS;
var G1, G2, G3, G4, G5;
var P1, P2, P3, P4, P5;

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
        var C0;
        G1 = svgDocument.getElementById("G1");
        G2 = svgDocument.getElementById("G2");
        G3 = svgDocument.getElementById("G3");
        G4 = svgDocument.getElementById("G4");
        G5 = svgDocument.getElementById("G5");

        P1 = svgDocument.getElementById("P1");
        P2 = svgDocument.getElementById("P2");
        P3 = svgDocument.getElementById("P3");
        P4 = svgDocument.getElementById("P4");
        P5 = svgDocument.getElementById("P5");

        PERS = [C0, G1, G2, G3, G4, G5]
        ELEMS = [C0, P1, P4, P3, P2, P5]
        COORDS = [C0,
            'transform: translate(320px, 200px)',
            'transform: translate(-170px, 240px)',
            'transform: translate(150px, 227px)',
            'transform: translate(-340px, 230px)',
            'transform: translate(0px, -200px)',
        ]

        $.each(PERS, function (key, value) {
            $(value).click(function () {
                if($('#question').val() == key){
                    playSlideVoice('sound/A' + key, 1,1);
                    ELEMS[key].setAttribute('style', COORDS[key]);
                    setQuest(999);
                } else {
                    playSlideVoice('sound/bad.mp3',1,1);
                }
            })
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

    if (elem == 20) {
        replaySlide();
    } else {
        ELEMS[elem].setAttribute('style', 'transform: scale(1.1)');
        setTimeout(function () {
            ELEMS[elem].setAttribute('style', 'transform: scale(1)');
        }, 500);
        playSlideVoice('sound/' + elem, 1, 1);
        setQuest(elem)
    }
}