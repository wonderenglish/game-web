var L1, L2, Q;
$(document).ready(function () {
    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });
    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
         Q = svgDocument.getElementById("Q"); //получаем любой элемент внутри svg
         L1 = svgDocument.getElementById("L1");
         L2 = svgDocument.getElementById("L2");
        Q.setAttribute("opacity", "0");

    });

    $('.button, .replay').click(function () {
        $('.table__elem.active').removeClass('active').removeClass('on-top');
        var elem = $(this).attr('data-action');
        buttonAction(elem);
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
        Q.setAttribute("opacity", "1");
        setTimeout(function(){ Q.setAttribute("opacity", "0");  }, 2000)
    }
    if (elem == 4) {
        L2.setAttribute("transform", "translate(-130, -110), scale(1.2)");
        setTimeout(function(){  L2.setAttribute("transform", "translate(0,0), scale(1)"); }, 2000);
        playSlideVoice('sound/2', 1);
        // litCandles(3);
    }
    if (elem == 3) {
        playSlideVoice('sound/1', 1);
        // litCandles(4);
        Q.setAttribute("opacity", "1");
        setTimeout(function(){ Q.setAttribute("opacity", "0");  }, 2000)
    }
    if (elem == 2) {
        L1.setAttribute("transform", "translate(20,-120), scale(1.2)");
        setTimeout(function(){  L1.setAttribute("transform", "translate(0,0), scale(1)"); }, 2000);
        playSlideVoice('sound/3', 1);
        // litCandles(5);
    }

}