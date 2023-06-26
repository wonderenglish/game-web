var magicbox = null;
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
        TIGER = svgDocument.getElementById("TIGER");
        A1 = svgDocument.getElementById("A1");
        A2 = svgDocument.getElementById("A2");
        L1 = svgDocument.getElementById("P1");
        L2 = svgDocument.getElementById("P2");

        A1.setAttribute('fill-opacity', '0');
        A2.setAttribute('fill-opacity', '0');
        $('#question').val(1)

        $(TIGER).click(function () {
            if($('#play').val() == 0) {
                A1.setAttribute('fill-opacity', '0');
                A2.setAttribute('fill-opacity', '0');
                playSlideVoice('sound/1', 1, 1);
                playslider(1);
                $('#play').val(1);
            } else if($('#play').val() == 1) {
                clearTimeout(magicbox);
                $(L1).removeClass('flash');
                $(L2).removeClass('flash');
                if($('#question').val() == 1){
                    A1.setAttribute('fill-opacity', '1');
                    $('#question').val(2);
                } else if($('#question').val() == 2) {
                    A2.setAttribute('fill-opacity', '1');
                    $('#question').val(1);
                }
                $('#play').val(0);
            }
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

function playslider(elem){
    var counter = elem;
    if(counter == 1) {
        $(L1).addClass('flash');
        $(L2).removeClass('flash');
        counter = 2;
    } else if(counter == 2) {
        $(L2).addClass('flash');
        $(L1).removeClass('flash');
        counter = 1;
    }
     magicbox = setTimeout(function(){playslider(counter)}, 700);
}

/* Buttons */
function buttonAction(elem) {

    $(elem).addClass('active').addClass('on-top');
    if (elem == 1) {
        playSlideVoice('sound/1', 1);
    }

    if (elem == 2) {
        playSlideVoice('sound/2', 1);
    }

    if (elem == 3) {
        playSlideVoice('sound/3', 1);
    }

}