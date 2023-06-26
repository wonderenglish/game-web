var elems;
var P1, P2, P3, P4, P5, P6, P7, P8;

$(document).ready(function () {
    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });

    var object = document.getElementById("svgelem");
    object.addEventListener('load', function () {
        var svgDocument = object.contentDocument;
        P1 = svgDocument.getElementById('P1');
        P2 = svgDocument.getElementById('P2');
        P3 = svgDocument.getElementById('P3');
        P4 = svgDocument.getElementById('P4');
        P5 = svgDocument.getElementById('P5');
        P6 = svgDocument.getElementById('P6');
        P7 = svgDocument.getElementById('P7');
        P8 = svgDocument.getElementById('P8');

        elems = ['', P1, P2, P3, P4, P5, P6, P7, P8]

        $.each(elems, function (key, val) {
            $(val).click(function () {
                if ($('#question').val() == key) {
                    playSlideVoice('sound/there',1,1);
                    val.setAttribute('style', 'transform: scale(1.1)');
                    setTimeout(function () {
                        val.setAttribute('style', 'transform: scale(1)')
                    }, 1500)
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
    playSlideVoice('sound/' + elem, 1, 1);
    setQuest(elem);
}