$(document).ready(function () {
    hideOverlay(500);
    playSong('sound/1', 500);
    // var arr = [1, 2, 3, 4, 5];
    // storySetRandom(arr);
    //nextSlideAutoDelay(7000);
    showOverlay(7000);
    setTimeout(function () {
        window.location.href = "../u01/index.html";
    }, 7000+1000);

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
        playSlideVoice('sound/1',1);
        // $('#block').val(1);
    }

    if (elem == 2) {
        $('.second').addClass('active').addClass('on-top');
        playSlideVoice('sound/2',1);
        //$('#block').val(1);
    }

    if (elem == 3) {
        $('.third').addClass('active').addClass('on-top');
        playSlideVoice('sound/3',1);
        //$('#block').val(1);
    }

    if (elem == 4) {
        $('.fourth').addClass('active').addClass('on-top');
        playSlideVoice('sound/4',1);
        //$('#block').val(1);
    }
    if (elem == 5) {
        $('.third').addClass('active').addClass('on-top');
        playSlideVoice('sound/5',1);
        //$('#block').val(1);
    }

    if (elem == 6) {
        $('.fourth').addClass('active').addClass('on-top');
        playSlideVoice('sound/6',1);
        //$('#block').val(1);
    }
    if (elem == 7) {
        $('.third').addClass('active').addClass('on-top');
        playSlideVoice('sound/7',1);
        //$('#block').val(1);
    }

    if (elem == 8) {
        $('.fourth').addClass('active').addClass('on-top');
        playSlideVoice('sound/8',1);
        //$('#block').val(1);
    }
    if (elem == 9) {
        $('.third').addClass('active').addClass('on-top');
        playSlideVoice('sound/9',1);
        //$('#block').val(1);
    }

}