var L1, L2, Q1, Q2;
$(document).ready(function () {
    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
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
        $('#quest').addClass('active');
        playSlideVoice('sound/1', 1);
    }

    if (elem == 2) {
        $('#cat_heart').addClass('active');
        $('#cat').addClass('active')
        setTimeout(function () {
            $(document).find('.active').each(function () {
                $(this).removeClass('active');
            })
        }, 1500)
        playSlideVoice('sound/2', 1, 1);
    }

    if (elem == 4) {
        $('#dog_heart').addClass('active');
        $('#dog').addClass('active')
        setTimeout(function () {
            $(document).find('.active').each(function () {
                $(this).removeClass('active');
            })
        }, 1500)
        playSlideVoice('sound/3', 1, 1);
    }



}