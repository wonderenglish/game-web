var ELEMS;
var PERS;
var G1, G2, G3, G4, G5;
var P1, P2, P3, P4, P5;
var question = 0;

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
        G1 = svgDocument.getElementById("P1");
        G2 = svgDocument.getElementById("P2");
        G3 = svgDocument.getElementById("P3");
        G4 = svgDocument.getElementById("P4");
        G5 = svgDocument.getElementById("P5");

        P1 = svgDocument.getElementById("C1");
        P2 = svgDocument.getElementById("C2");
        P3 = svgDocument.getElementById("C3");
        P4 = svgDocument.getElementById("C4");
        P5 = svgDocument.getElementById("C5");

        let map = [
            {country: P1, pers: G1, sound: 'A1'},
            {country: P2, pers: G2, sound: 'A2'},
            {country: P3, pers: G3, sound: 'A3'},
            {country: P4, pers: G4, sound: 'A4'},
            {country: P5, pers: G5, sound: 'A5'}
        ];

        ELEMS = [P1, P2, P3, P4, P5];

        COORDS = [
            'transform: translate(151px, -219px)',
            'transform: translate(161px, -219px)',
            'transform: translate(-199px, -209px)',
            'transform: translate(31px, -239px)',
            'transform: translate(31px, -219px)',
        ]

        ELEMS.forEach((el, i) => {
            el.setAttribute('style', COORDS[i]);
        });

        map.forEach((el, i) => {
            el.pers.addEventListener('click', () => {
                if (question === (i + 1)) {
                    playSlideVoice('sound/' + el.sound, 1, 1);
                    el.country.setAttribute('style', '');
                    question = 0;
                } else {
                    playSlideVoice('sound/bad.mp3', 1, 1);
                }
            });
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
        playSlideVoice('sound/' + elem, 1, 1);
        let el = ELEMS[elem - 1];

        el.setAttribute('style', COORDS[elem - 1] + ' scale(1.1)');
        setTimeout(() => {
            el.setAttribute('style', COORDS[elem - 1]);
        }, 500);

        question = parseInt(elem);
    }
}