$(document).ready(function () {
    hideOverlay(500);
    // playSong('sound/jingle.mp3');
    // var arr = [1, 2, 3, 4, 5];
    // storySetRandom(arr);

    $('.next-slide').click(function () {
        nextSlide();
    });

    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load',function () {
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        var svgElement1 = svgDocument.getElementById("M1"); //получаем любой элемент внутри svg
        var svgElement2 = svgDocument.getElementById("M2"); //получаем любой элемент внутри svg
        var svgElement3 = svgDocument.getElementById("M3"); //получаем любой элемент внутри svg
        var svgElement4 = svgDocument.getElementById("M4"); //получаем любой элемент внутри svg
        var svgElement5 = svgDocument.getElementById("M5"); //получаем любой элемент внутри svg
        var Body1 = svgDocument.getElementById("L1"); //получаем любой элемент внутри svg
        var Body2 = svgDocument.getElementById("L2"); //получаем любой элемент внутри svg
        var Body3 = svgDocument.getElementById("L3"); //получаем любой элемент внутри svg
        var Body4 = svgDocument.getElementById("L4"); //получаем любой элемент внутри svg
        var Body5 = svgDocument.getElementById("L5"); //получаем любой элемент внутри svg

        $(Body1).click(function () {
           if($("#question").val() == 1){
               playSlideVoice('sound/6', 1);
               svgElement1.setAttribute('transform','translate (0, 250)');
               setTimeout(function (args) { svgElement1.setAttribute('transform','translate (0, 0)'); }, 2600);
           } else {
               playSlideVoice('sound/bad.mp3', 1);
           }
        });
        $(Body2).click(function () {
            if($("#question").val() == 2){
                playSlideVoice('sound/7', 1);
                svgElement2.setAttribute('transform','translate (0, 100)');
                setTimeout(function (args) { svgElement2.setAttribute('transform','translate (0, 0)'); }, 2600);
            } else {
                playSlideVoice('sound/bad.mp3', 1);
            }
        });
        $(Body3).click(function () {
            if($("#question").val() == 3){
                playSlideVoice('sound/8', 1);
                svgElement3.setAttribute('transform','translate (0, 250)');
                setTimeout(function (args) { svgElement3.setAttribute('transform','translate (0, 0)'); }, 2600);
            } else {
                playSlideVoice('sound/bad.mp3', 1);
            }
        });
        $(Body4).click(function () {
            if($("#question").val() == 4){
                playSlideVoice('sound/9', 1);
                svgElement4.setAttribute('transform','translate (0, 100)');
                setTimeout(function (args) { svgElement4.setAttribute('transform','translate (0, 0)'); }, 2600);
            } else {
                playSlideVoice('sound/bad.mp3', 1);
            }
        });
        $(Body5).click(function () {
            if($("#question").val() == 5){
                playSlideVoice('sound/10', 1);
                svgElement5.setAttribute('transform','translate (0, 250)');
                setTimeout(function (args) { svgElement5.setAttribute('transform','translate (0, 0)'); }, 2600);
            } else {
                playSlideVoice('sound/bad.mp3', 1);
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
        $('#question').val(1);
        playSlideVoice('sound/1', 1);

    }

    if (elem == 2) {
        $('#question').val(2);
        playSlideVoice('sound/2', 1);

    }

    if (elem == 3) {
        $('#question').val(3);
        playSlideVoice('sound/3', 1);

    }

    if (elem == 4) {
        $('#question').val(4);
        playSlideVoice('sound/4', 1);

    }

    if (elem == 5) {
        $('#question').val(5);
        playSlideVoice('sound/5', 1);

    }
    if (elem == 20) {
        // $('#question').val(5);
        playSlideVoice('sound/i', 1);

    }
}