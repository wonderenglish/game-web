var PLANE;
var eng, thai, fin, mex, scot, viet;

var elems;
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
        PLANE = svgDocument.getElementById("PLANE");
        eng = svgDocument.getElementById("P6");
        thai = svgDocument.getElementById("P4");
        mex = svgDocument.getElementById("P1");
        fin = svgDocument.getElementById("P3");
        scot = svgDocument.getElementById("P5");
        viet = svgDocument.getElementById("P2");

        elems = {
            'row1': {
                'elem': eng,
                'sound': 1,
                'transform': 'translate(-230px,330px)'
            },
            'row2': {
                'elem': scot,
                'sound': 2,
                'transform': 'translate(220px,150px)'
            },
            'row3': {
                'elem': thai,
                'sound': 3,
                'transform': 'translate(-240px,150px)'
            },
            'row4': {
                'elem': fin,
                'sound': 4,
                'transform': 'translate(180px,330px)'
            },
            'row5': {
                'elem': viet,
                'sound': 5,
                'transform': 'translate(-30px,330px)'
            },
            'row6': {
                'elem': mex,
                'sound': 6,
                'transform': 'translate(-20px,150px)'
            }
        };

        $.each(elems, function (key, row) {
            console.log(key);
            console.log(row)
            $(row.elem).click(function () {
                PLANE.setAttribute('style', 'transform: ' + row.transform);
                setTimeout(function () {
                    PLANE.setAttribute('style', 'transform: translate(0,0)');
                }, 2000);
                playSlideVoice('sound/' + row.sound, 1, 1);
            })
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

/* Buttons */
function buttonAction(elem) {

    $(elem).addClass('active').addClass('on-top');
    if (elem == 1) {
        playSlideVoice('sound/10', 1, 1);
    }
}

