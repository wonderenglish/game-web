$(document).ready(function () {
    hideOverlay(500);
    // playSong('sound/jingle.mp3');
    // var arr = [1, 2, 3, 4, 5];
    // storySetRandom(arr);

    $('.next-slide').click(function () {
        showOverlay(500);
        setTimeout('window.location.href = "../u05/index.html";', 1000);
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
        playSlideVoice('sound/1');
        $('#block').val(1);
    }

    if (elem == 2) {
        $('.second').addClass('active').addClass('on-top');
        playSlideVoice('sound/2');
        $('#block').val(1);
    }

    if (elem == 3) {
        $('.third').addClass('active').addClass('on-top');
        playSlideVoice('sound/3');
        $('#block').val(1);
    }

    if (elem == 4) {
        $('.fourth').addClass('active').addClass('on-top');
        playSlideVoice('sound/4');
        $('#block').val(1);
    }

}
