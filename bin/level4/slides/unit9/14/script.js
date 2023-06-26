var P1, P2, P3, P4, P5, P6, P7;
var elems = [];
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
        P1 = svgDocument.getElementById('P1');
        P2 = svgDocument.getElementById('P2');
        P3 = svgDocument.getElementById('P3');
        P4 = svgDocument.getElementById('P4');
        P5 = svgDocument.getElementById('P5');
        P6 = svgDocument.getElementById('P6');
        P7 = svgDocument.getElementById('P7');

        let Tiger = svgDocument.getElementById('TIGER');
        Tiger.addEventListener('click', () => {
            playSlideVoice('sound/i', 1);
        })

        elems = [P1, P2, P3, P4, P5, P6, P7];

        // Q.setAttribute('transform', 'translate(-230, -50)');
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
        playSlideVoice('sound/' + elem, 1);
        ShowElem(elems[parseInt(elem) - 1]);
}

function ShowElem(elem) {
    elem.setAttribute('transform', 'translate(0, -30)');
    setTimeout(function (args) {
        elem.setAttribute('transform', 'translate(0, 0)');
    }, 2000)
}
