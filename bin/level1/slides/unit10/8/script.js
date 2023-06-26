var color = null;
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
        $(svgDocument).find('path').click(function () {
           if(color !== null) {
               if($(this).hasClass('st1') || $(this).hasClass('tmp') ){
                   $(this).removeClass('st1');
                   $(this).addClass('tmp');
                   $(this).attr('fill', color );
               }
           }
        });
    });

    $('.colors2.elem').click(function () {
       color = $(this).css('background-color');
       if($(this).hasClass('c-gold')){
           color = '#dbb000';
       }

       console.log(color);
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

});

/* Buttons */
function buttonAction(elem) {

    $(elem).addClass('active').addClass('on-top');

    if (elem == 7) {
        playSlideVoice('sound/i', 1);
    }
    if (elem == 6) {
        replaySlide();
    }
}