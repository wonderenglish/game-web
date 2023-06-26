var C1, C2, C3, C4, C5, C6, C7, C8, C9, C10;
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
        C1 = svgDocument.getElementById("AUSTRALIA"); //получаем любой элемент внутри svg
        C2 = svgDocument.getElementById("USA"); //получаем любой элемент внутри svg
        C3 = svgDocument.getElementById("CANADA"); //получаем любой элемент внутри svg
        C4 = svgDocument.getElementById("RUSSIA"); //получаем любой элемент внутри svg
        C5 = svgDocument.getElementById("DENMARK"); //получаем любой элемент внутри svg
        C6 = svgDocument.getElementById("EMIRATES"); //получаем любой элемент внутри svg
        C7 = svgDocument.getElementById("FRANCE"); //получаем любой элемент внутри svg
        C8 = svgDocument.getElementById("AFRICA"); //получаем любой элемент внутри svg
        C9 = svgDocument.getElementById("GREECE"); //получаем любой элемент внутри svg
        C10 = svgDocument.getElementById("HUNGARY"); //получаем любой элемент внутри svg

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
        C1.setAttribute('transform','translate (-150, 0) scale (1.1)');
        $(C1).find('path').addClass('red');
        setTimeout(function (args) { $(C1).find('path').removeClass('red');
                    C1.setAttribute('transform','translate (0, 0) scale (1)');},2000);
        playSlideVoice('sound/1', 1);
    }

    if (elem == 2) {
        C2.setAttribute('transform','translate (-150, 0) scale (1.1)');
        $(C2).find('path').addClass('green');
        setTimeout(function (args) { $(C2).find('path').removeClass('green');
            C2.setAttribute('transform','translate (0, 0) scale (1)');},2000);
        playSlideVoice('sound/2', 1);

    }

    if (elem == 3) {
        C3.setAttribute('transform','translate (-150, 0) scale (1.1)');
        $(C3).find('path').addClass('blue');
        setTimeout(function (args) { $(C3).find('path').removeClass('blue');
            C3.setAttribute('transform','translate (0, 0) scale (1)');},2000);
        playSlideVoice('sound/3', 1);

    }

    if (elem == 4) {
        C4.setAttribute('transform','translate (-150, 0) scale (1.1)');
        $(C4).find('path').addClass('brown');
        setTimeout(function (args) { $(C4).find('path').removeClass('brown');
            C4.setAttribute('transform','translate (0, 0) scale (1)');},2000);
        playSlideVoice('sound/4', 1);

    }

    if (elem == 5) {
        C5.setAttribute('transform','translate (-150, 0) scale (1.1)');
        $(C5).find('path').addClass('red');
        setTimeout(function (args) { $(C5).find('path').removeClass('red');
            C5.setAttribute('transform','translate (0, 0) scale (1)');},2000);
        playSlideVoice('sound/5', 1);

    }

    if (elem == 6) {
        C6.setAttribute('transform','translate (-150, 20) scale (1.1)');
        $(C6).find('path').addClass('purple');
        setTimeout(function (args) { $(C6).find('path').removeClass('purple');
            C6.setAttribute('transform','translate (0, 0) scale (1)');},2000);
        playSlideVoice('sound/dubai.wav', 1);

    }

    if (elem == 7) {
        C7.setAttribute('transform','translate (-150, 0) scale (1.1)');
        $(C7).find('path').addClass('red');
        setTimeout(function (args) { $(C7).find('path').removeClass('red');
            C7.setAttribute('transform','translate (0, 0) scale (1)');},2000);
        playSlideVoice('sound/7', 1);

    }

    if (elem == 8) {
        C8.setAttribute('transform','translate (-150, 0) scale (1.1)');
        $(C8).addClass('green');
        setTimeout(function (args) { $(C8).removeClass('green');
            C8.setAttribute('transform','translate (0, 0) scale (1)');},2000);
        playSlideVoice('sound/8', 1);

    }

    if (elem == 9) {
        C9.setAttribute('transform','translate (-150, 0) scale (1.1)');
        $(C9).find('path').addClass('blue');
        setTimeout(function (args) { $(C9).find('path').removeClass('blue');
            C9.setAttribute('transform','translate (0, 0) scale (1)');},2000);
        playSlideVoice('sound/9', 1);

    }

    if (elem == 10) {
        C10.setAttribute('transform','translate (-150, 0) scale (1.1)');
        //$(C10).find('path').addClass('red');
        $(C10).addClass('red');
        setTimeout(function (args) { $(C10).removeClass('red');
            C10.setAttribute('transform','translate (0, 0) scale (1)');},2000);
        playSlideVoice('sound/10', 1);

    }
    if (elem == 20) {
        // $('#question').val(5);
        playSlideVoice('sound/i', 1);

    }
}