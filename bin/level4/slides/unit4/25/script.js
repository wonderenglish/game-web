var svgElement1,    svgElement2,    svgElement3;
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
         svgElement1 = svgDocument.getElementById("Q"); //получаем любой элемент внутри svg
         svgElement2 = svgDocument.getElementById("TIGER"); //получаем любой элемент внутри svg
         svgElement3 = svgDocument.getElementById("TIGER"); //получаем любой элемент внутри svg

        svgElement1.setAttribute('fill-opacity', '0');
        svgElement1.setAttribute('stroke-opacity', '0');
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
        svgElement1.setAttribute('fill-opacity', '1');
        svgElement1.setAttribute('stroke-opacity', '1');
        playSlideVoice('sound/1', 1);
        setTimeout(function (args) {
            svgElement1.setAttribute('fill-opacity', '0');
            svgElement1.setAttribute('stroke-opacity', '0');
        }, 1000)
    }

    if (elem == 2) {
        svgElement2.setAttribute('transform', 'translate(-200, 0)');
        playSlideVoice('sound/2', 1);
        setTimeout(function (args) {
            svgElement2.setAttribute('transform', 'translate(0, 0)');
        }, 1000)
    }

    if (elem == 3) {
        svgElement3.setAttribute('transform', 'translate(250, 0)');
        playSlideVoice('sound/3', 1);
        setTimeout(function (args) {
            svgElement3.setAttribute('transform', 'translate(0, 0)');
        }, 1000)
    }


}