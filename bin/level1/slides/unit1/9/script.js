var audio = null;

$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        svgDocument.addEventListener('click', function () {
            if($('#block').val() != 1){
                console.log($('#block').val());
                console.log('start');
                startTimer();
            } else {
                console.log($('#block').val());
                console.log('stop');
                stopTimer();
            }

        });
        var svgElement1 = svgDocument.getElementById("L1"); //получаем любой элемент внутри svg
        svgElement1.setAttribute("fill-opacity", "1"); //меняем атрибуты выбранного элемента
        var svgElement2 = svgDocument.getElementById("L2"); //получаем любой элемент внутри svg
        svgElement2.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement3 = svgDocument.getElementById("L3"); //получаем любой элемент внутри svg
        svgElement3.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement4 = svgDocument.getElementById("L4"); //получаем любой элемент внутри svg
        svgElement4.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement5 = svgDocument.getElementById("L5"); //получаем любой элемент внутри svg
        svgElement5.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement6 = svgDocument.getElementById("L6"); //получаем любой элемент внутри svg
        svgElement6.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement7 = svgDocument.getElementById("L7"); //получаем любой элемент внутри svg
        svgElement7.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement8 = svgDocument.getElementById("L8"); //получаем любой элемент внутри svg
        svgElement8.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement9 = svgDocument.getElementById("L9"); //получаем любой элемент внутри svg
        svgElement9.setAttribute("fill-opacity", "1"); //меняем атрибуты выбранного элемента
        var svgElement10 = svgDocument.getElementById("L10"); //получаем любой элемент внутри svg
        svgElement10.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement11= svgDocument.getElementById("TEMP"); //получаем любой элемент внутри svg
        svgElement11.setAttribute("fill-opacity", "1"); //меняем атрибуты выбранного элемента
    });

    hideOverlay(500);
    // playSong('sound/jingle.mp3');
    // var arr = [1, 2, 3, 4, 5];
    // storySetRandom(arr);

    $('.next-slide').click(function () {
        nextSlide();
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
    })
});


/* Buttons */
function buttonAction(elem) {
    $(elem).addClass('active').addClass('on-top');
    if (elem == 1) {
        $('.first').addClass('active').addClass('on-top');
        playSlideVoice('sound/1', 1);

    }

    if (elem == 2) {
        $('.second').addClass('active').addClass('on-top');
        playSlideVoice('sound/2', 1);

    }

    if (elem == 3) {
        replaySlide();
    }

    if (elem == 4) {
        $('.fourth').addClass('active').addClass('on-top');
        playSlideVoice('sound/4');
    }

}
function stopTimer() {
    window.location.reload(false);

    $(audio).each(function(){
        this.pause(); // Stop playing
        this.currentTime = 0; // Reset time
    });
    var object = document.getElementById("svgelem"); //получаем элмент object
    var svgDocument = object.contentDocument; //получаем svg элемент внутри object
    var svgElement1 = svgDocument.getElementById("L1"); //получаем любой элемент внутри svg
    svgElement1.setAttribute("fill-opacity", "1"); //меняем атрибуты выбранного элемента
    var svgElement2 = svgDocument.getElementById("L2"); //получаем любой элемент внутри svg
    svgElement2.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
    var svgElement3 = svgDocument.getElementById("L3"); //получаем любой элемент внутри svg
    svgElement3.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
    var svgElement4 = svgDocument.getElementById("L4"); //получаем любой элемент внутри svg
    svgElement4.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
    var svgElement5 = svgDocument.getElementById("L5"); //получаем любой элемент внутри svg
    svgElement5.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
    var svgElement6 = svgDocument.getElementById("L6"); //получаем любой элемент внутри svg
    svgElement6.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
    var svgElement7 = svgDocument.getElementById("L7"); //получаем любой элемент внутри svg
    svgElement7.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
    var svgElement8 = svgDocument.getElementById("L8"); //получаем любой элемент внутри svg
    svgElement8.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
    var svgElement9 = svgDocument.getElementById("L9"); //получаем любой элемент внутри svg
    svgElement9.setAttribute("fill-opacity", "1"); //меняем атрибуты выбранного элемента
    var svgElement10 = svgDocument.getElementById("L10"); //получаем любой элемент внутри svg
    svgElement10.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
    var svgElement11= svgDocument.getElementById("TEMP"); //получаем любой элемент внутри svg
    svgElement11.setAttribute("fill-opacity", "1"); //меняем атрибуты выбранного элемента
    $('#block').val(0);
}
function startTimer() {
    $('#block').val(1);
    playSlideVoice('sound/tick.mp3', 1);
    var object = document.getElementById("svgelem"); //получаем элмент object
    var svgDocument = object.contentDocument; //получаем svg элемент внутри object
    var t1 = setTimeout(function () {
        var svgElement1 = svgDocument.getElementById("L1"); //получаем любой элемент внутри svg
        svgElement1.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement2 = svgDocument.getElementById("L2"); //получаем любой элемент внутри svg
        svgElement2.setAttribute("fill-opacity", "1"); //меняем атрибуты выбранного элемента
    }, 7500);
    var t2 = setTimeout(function () {
        var svgElement1 = svgDocument.getElementById("L2"); //получаем любой элемент внутри svg
        svgElement1.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement2 = svgDocument.getElementById("L3"); //получаем любой элемент внутри svg
        svgElement2.setAttribute("fill-opacity", "1"); //меняем атрибуты выбранного элемента
    }, 15000);
    var t3 = setTimeout(function () {
        var svgElement1 = svgDocument.getElementById("L3"); //получаем любой элемент внутри svg
        svgElement1.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement2 = svgDocument.getElementById("L4"); //получаем любой элемент внутри svg
        svgElement2.setAttribute("fill-opacity", "1"); //меняем атрибуты выбранного элемента
    }, 22500);
    var t4 = setTimeout(function () {
        var svgElement1 = svgDocument.getElementById("L4"); //получаем любой элемент внутри svg
        svgElement1.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement2 = svgDocument.getElementById("L5"); //получаем любой элемент внутри svg
        svgElement2.setAttribute("fill-opacity", "1"); //меняем атрибуты выбранного элемента
    }, 30000);
    var t5 = setTimeout(function () {
        var svgElement1 = svgDocument.getElementById("L5"); //получаем любой элемент внутри svg
        svgElement1.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement2 = svgDocument.getElementById("L6"); //получаем любой элемент внутри svg
        svgElement2.setAttribute("fill-opacity", "1"); //меняем атрибуты выбранного элемента
    }, 37500);
    var t6 = setTimeout(function () {
        var svgElement1 = svgDocument.getElementById("L6"); //получаем любой элемент внутри svg
        svgElement1.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement2 = svgDocument.getElementById("L7"); //получаем любой элемент внутри svg
        svgElement2.setAttribute("fill-opacity", "1"); //меняем атрибуты выбранного элемента
    }, 45000);
    var t7 = setTimeout(function () {
        var svgElement1 = svgDocument.getElementById("L7"); //получаем любой элемент внутри svg
        svgElement1.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement2 = svgDocument.getElementById("L8"); //получаем любой элемент внутри svg
        svgElement2.setAttribute("fill-opacity", "1"); //меняем атрибуты выбранного элемента
    }, 52500);
    var t8 = setTimeout(function () {
        var svgElement1 = svgDocument.getElementById("L8"); //получаем любой элемент внутри svg
        svgElement1.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement4 = svgDocument.getElementById("TEMP"); //получаем любой элемент внутри svg
        svgElement4.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement = svgDocument.getElementById("L9"); //получаем любой элемент внутри svg
        svgElement.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement2 = svgDocument.getElementById("L10"); //получаем любой элемент внутри svg
        svgElement2.setAttribute("fill-opacity", "1"); //меняем атрибуты выбранного элемента
        playSlideVoice('sound/ring.mp3', 100);
        $(object).addClass('shake');
    }, 60000);
    var t9 = setTimeout(function () {
        var svgElement1 = svgDocument.getElementById("L10"); //получаем любой элемент внутри svg
        svgElement1.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        var svgElement4 = svgDocument.getElementById("L1"); //получаем любой элемент внутри svg
        svgElement4.setAttribute("fill-opacity", "1"); //меняем атрибуты выбранного элемента
        var svgElement = svgDocument.getElementById("L9"); //получаем любой элемент внутри svg
        svgElement.setAttribute("fill-opacity", "1"); //меняем атрибуты выбранного элемента
        var svgElement2 = svgDocument.getElementById("TEMP"); //получаем любой элемент внутри svg
        svgElement2.setAttribute("fill-opacity", "1"); //меняем атрибуты выбранного элемента
    }, 64000);

}