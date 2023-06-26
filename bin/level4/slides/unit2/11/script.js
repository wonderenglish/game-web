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
        STARS = svgDocument.getElementById("STARS");
        TH = svgDocument.getElementById("FIRE");
        ST = svgDocument.getElementById("POLICE");

        TH.addEventListener('click', ()=> {
            playSlideVoice('sound/2',1);
        });

        ST.addEventListener('click', ()=> {
            playSlideVoice('sound/3',1);
        });

        STARS.querySelectorAll('#STARS polygon').forEach((el) => {
            el.addEventListener('click', () => {
                el.setAttribute('transform', 'translate(-500,-500)')
            });
        })

        // Q.setAttribute('transform', 'translate(-230, -50)');
    });


    $('.button, .replay').click(function () {
        if ($('#block').val() != 1) {
            $('.table__elem.active').removeClass('active').removeClass('on-top');
            var elem = $(this).attr('data-action');
            buttonAction(elem);
        }
    });
});

/* Buttons */
function buttonAction(elem) {
    if (elem == 1) {
        playSlideVoice('sound/1', 1);
    }
}