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
        Q = svgDocument.getElementById("Q");
        TH = svgDocument.getElementById("FIRE");
        ST = svgDocument.getElementById("POLICE");

        Q.setAttribute('fill-opacity', '0');
        Q.setAttribute('stroke-opacity', '0');
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
    if (elem == 1) {
        Q.setAttribute('fill-opacity', '1');
        Q.setAttribute('stroke-opacity', '1');
        playSlideVoice('sound/1', 1);
        setTimeout(function (args) {
            Q.setAttribute('fill-opacity', '0');
            Q.setAttribute('stroke-opacity', '0');
        }, 1000)
    }

    if (elem == 3) {
        ST.setAttribute('transform', 'translate(0, -30)');
        playSlideVoice('sound/3', 1);
        setTimeout(function (args) {
            ST.setAttribute('transform', 'translate(0, 0)');
        }, 2000)
    }

    if (elem == 2) {
        TH.setAttribute('transform', 'translate(0, -30)');
        playSlideVoice('sound/2', 1);
        setTimeout(function (args) {
            TH.setAttribute('transform', 'translate(0, 0)');
        }, 2000)
    }


}