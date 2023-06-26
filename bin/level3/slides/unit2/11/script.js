var QM, QD, DAD, MOM;
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
        QM = svgDocument.getElementById("QM");
        QD = svgDocument.getElementById("QD");
        DAD = svgDocument.getElementById("DAD");
        MOM = svgDocument.getElementById("MOM");


        L1 = svgDocument.getElementById("L1");
        L2 = svgDocument.getElementById("L2");
        L3 = svgDocument.getElementById("L3");
        L4 = svgDocument.getElementById("L4");
        L5 = svgDocument.getElementById("L5");
        L6 = svgDocument.getElementById("L6");

        var elems = [L1, L2, L3, L4, L5, L6];

        $(elems).each(function (i, elem) {
            $(elem).click(function () {
                $(elem).addClass('hide');
                // setTimeout(function () {
                //     $(elem).removeClass('hide');
                // }, 2000)
            })
        })


        QM.setAttribute('fill-opacity', '0');
        QM.setAttribute('stroke-opacity', '0');

        QD.setAttribute('fill-opacity', '0');
        QD.setAttribute('stroke-opacity', '0');


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
        QM.setAttribute('fill-opacity', '1');
        QM.setAttribute('stroke-opacity', '1');
        playSlideVoice('sound/1', 1);
        setTimeout(function (args) {
            QM.setAttribute('fill-opacity', '0');
            QM.setAttribute('stroke-opacity', '0');
        }, 1000)
    }

    if (elem == 2) {
        playSlideVoice('sound/2', 1);
    }

    if (elem == 3) {
        QD.setAttribute('fill-opacity', '1');
        QD.setAttribute('stroke-opacity', '1');
        playSlideVoice('sound/3', 1);
        setTimeout(function (args) {
            QD.setAttribute('fill-opacity', '0');
            QD.setAttribute('stroke-opacity', '0');
        }, 1000)
    }

    if (elem == 4) {
        playSlideVoice('sound/4', 1);
    }

    if(elem == 5) {
        replaySlide();
    }


}