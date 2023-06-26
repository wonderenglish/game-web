$(document).ready(function () {
    hideOverlay(500);
    // playSong('sound/jingle.mp3');
    // var arr = [1, 2, 3, 4, 5];
    // storySetRandom(arr);

    $('.next-slide').click(function () {
        //nextSlide();
		window.location.href = "../6/index.html";
    });
    setTimeout(function (args) {
        var object = document.getElementById("svgelem"); //получаем элмент object
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        var svgElement1 = svgDocument.getElementById("L1"); //получаем любой элемент внутри svg
        var svgElement2 = svgDocument.getElementById("L3"); //получаем любой элемент внутри svg
        svgElement1.setAttribute('fill-opacity','0');
        svgElement2.setAttribute('fill-opacity','0');
    }, 100);

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
        var object = document.getElementById("svgelem"); //получаем элмент object
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        var svgElement1 = svgDocument.getElementById("L3"); //получаем любой элемент внутри svg
        var last = svgDocument.getElementById('L4');
        $(last).after(svgElement1);
        setTimeout(function (args) {
            svgElement1.setAttribute("fill-opacity", "1"); //меняем атрибуты выбранного элемента
        }, 100);
        setTimeout(function (args) {
            svgElement1.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        }, 1500);
        $('.first').addClass('active').addClass('on-top');
        playSlideVoice('sound/1', 500);

    }

    if (elem == 2) {
        var object = document.getElementById("svgelem"); //получаем элмент object
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        var svgElement1 = svgDocument.getElementById("L2"); //получаем любой элемент внутри svg
        var last = svgDocument.getElementById('L1');
        $(last).after(svgElement1);
        setTimeout(function (args) {
            svgElement1.setAttribute("transform", "translate(0,80)"); //меняем атрибуты выбранного элемента
        }, 100);
        setTimeout(function (args) {
            svgElement1.setAttribute("transform", "translate(0,0)"); //меняем атрибуты выбранного элемента
        }, 1500);
        $('.second').addClass('active').addClass('on-top');
        playSlideVoice('sound/2', 500);

    }

    if (elem == 3) {
        var object = document.getElementById("svgelem"); //получаем элмент object
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        var svgElement1 = svgDocument.getElementById("L1"); //получаем любой элемент внутри svg
        var last = svgDocument.getElementById('L2');
        $(last).after(svgElement1);
        setTimeout(function (args) {
            svgElement1.setAttribute("fill-opacity", "1"); //меняем атрибуты выбранного элемента
        }, 100);
        setTimeout(function (args) {
            svgElement1.setAttribute("fill-opacity", "0"); //меняем атрибуты выбранного элемента
        }, 1500);
        $('.third').addClass('active').addClass('on-top');
        playSlideVoice('sound/3', 500);

    }

    if (elem == 4) {
        $('.grace1').css('opacity', 0);
        $('.grace2').css('opacity', 1);
        var object = document.getElementById("svgelem"); //получаем элмент object
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        var svgElement1 = svgDocument.getElementById("L4"); //получаем любой элемент внутри svg
        var last = svgDocument.getElementById('L3');
        $(last).after(svgElement1);
        setTimeout(function (args) {
            svgElement1.setAttribute("transform", "translate(0,80)"); //меняем атрибуты выбранного элемента
        }, 100);
        setTimeout(function (args) {
            svgElement1.setAttribute("transform", "translate(0,0)"); //меняем атрибуты выбранного элемента
            $('.grace1').css('opacity', 1);
            $('.grace2').css('opacity', 0);
        }, 1500);
        $('.fourth').addClass('active').addClass('on-top');
        playSlideVoice('sound/4', 500);

    }

}