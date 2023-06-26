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
        var svgElement1 = svgDocument.getElementById("M1"); //получаем любой элемент внутри svg
        var svgElement2 = svgDocument.getElementById("M2"); //получаем любой элемент внутри svg
        var svgElement3 = svgDocument.getElementById("M3"); //получаем любой элемент внутри svg
        var svgElement4 = svgDocument.getElementById("M4"); //получаем любой элемент внутри svg
        var svgElement5 = svgDocument.getElementById("M5"); //получаем любой элемент внутри svg
        var svgElement6 = svgDocument.getElementById("M6"); //получаем любой элемент внутри svg
        var svgElement7 = svgDocument.getElementById("L1"); //получаем любой элемент внутри svg
        var svgElement8 = svgDocument.getElementById("L2"); //получаем любой элемент внутри svg
        var svgElement9 = svgDocument.getElementById("L3"); //получаем любой элемент внутри svg
        var svgElement10 = svgDocument.getElementById("L4"); //получаем любой элемент внутри svg
        var svgElement11 = svgDocument.getElementById("L5"); //получаем любой элемент внутри svg
        var svgElement12 = svgDocument.getElementById("L6"); //получаем любой элемент внутри svg
        svgElement1.setAttribute('fill-opacity', '0');
        svgElement2.setAttribute('fill-opacity', '0');
        svgElement3.setAttribute('fill-opacity', '0');
        svgElement4.setAttribute('fill-opacity', '0');
        svgElement5.setAttribute('fill-opacity', '0');
        svgElement6.setAttribute('fill-opacity', '0');

        $(svgElement7).click(function () {
            if($('#question').val() == 1){
                playSlideVoice('sound/1',1);
                $('#question').val('');
                $(svgElement1).attr('fill-opacity',1);
            } else {
                playSlideVoice('sound/bad.mp3',1);
            }
        });
        $(svgElement8).click(function () {
            if($('#question').val() == 2){
                playSlideVoice('sound/2',1);
                $('#question').val('');
                $(svgElement2).attr('fill-opacity',1);
            } else {
                playSlideVoice('sound/bad.mp3',1);
            }
        });
        $(svgElement9).click(function () {
            if($('#question').val() == 3){
                playSlideVoice('sound/3',1);
                $('#question').val('');
                $(svgElement3).attr('fill-opacity',1);
            } else {
                playSlideVoice('sound/bad.mp3',1);
            }
        });
        $(svgElement10).click(function () {
            if($('#question').val() == 4){
                playSlideVoice('sound/4',1);
                $('#question').val('');
                $(svgElement4).attr('fill-opacity',1);
            } else {
                playSlideVoice('sound/bad.mp3',1);
            }
        });
        $(svgElement11).click(function () {
            if($('#question').val() == 5){
                playSlideVoice('sound/5',1);
                $('#question').val('');
                $(svgElement5).attr('fill-opacity',1);
            } else {
                playSlideVoice('sound/bad.mp3',1);
            }
        });
        $(svgElement12).click(function () {
            if($('#question').val() == 6){
                playSlideVoice('sound/6',1);
                $('#question').val('');
                $(svgElement6).attr('fill-opacity',1);
            } else {
                playSlideVoice('sound/bad.mp3',1);
            }
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
        $('#question').val('1');
        playSlideVoice('sound/1', 1);

    }

    if (elem == 2) {
        $('#question').val('2');
        playSlideVoice('sound/2', 1);

    }

    if (elem == 3) {
        $('#question').val('3');
        playSlideVoice('sound/3', 1);

    }

    if (elem == 4) {
        $('#question').val('4');
        playSlideVoice('sound/4', 1);

    }
    if (elem == 5) {
        $('#question').val('5');
        playSlideVoice('sound/5', 1);

    }
    if (elem == 6) {
        $('#question').val('6');
        playSlideVoice('sound/6', 1);

    }
    if (elem == 7) {
        playSlideVoice('sound/i', 1);

    }
}