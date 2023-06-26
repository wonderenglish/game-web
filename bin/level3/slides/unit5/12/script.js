var magicbox = null;
var magicAudio = null;
var svgElement4 = null;
var svgElement5 = null;
$(document).ready(function () {
    hideOverlay(500);
    // playSong('sound/jingle.mp3');
    // var arr = [1, 2, 3, 4, 5];
    // storySetRandom(arr);

    $('.next-slide').click(function () {
        nextSlide();
    });

    var object = document.getElementById("svgelem");

    object.addEventListener('load', function () {
        console.log('ok');
        var svgDocument = object.contentDocument;
        var svgElement1 = svgDocument.getElementById("L1");
        var svgElement2 = svgDocument.getElementById("L2");
        var svgElement3 = svgDocument.getElementById("L3");
        svgElement4 = svgDocument.getElementById("L4");
        svgElement5 = svgDocument.getElementById("L5");
        $(svgElement4).attr('fill-opacity',0);
        $(svgElement5).attr('fill-opacity',0);
        $(svgElement4).attr('stroke-opacity',0);
        $(svgElement5).attr('stroke-opacity',0);
        $(svgElement1).click(function () {
            if($('#question').val()){
                checkMagicbox($('#question').val());
            } else {
                playSlideVoice('sound/1', 1);
                $(svgElement2).attr('fill-opacity', 0);
                $('#question').val(1);
                magicSound('sound/magic.mp3', 'play');
                playslider(svgElement3);
            }
        });
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

function magicSound(url, type) {
    if (type == 'play') {
        magicAudio = new Audio(url);
        magicAudio.play();
    }

    if (type == 'stop') {
        $(magicAudio).animate({volume: 0}, 1000);
        setTimeout(function () {
            magicAudio.pause();
            magicAudio.currentTime = 0;
        }, 1000);
    }
}
function playslider(elem){
    $(svgElement4).attr('fill-opacity',0);
    $(svgElement5).attr('fill-opacity',0);
    $(svgElement4).attr('stroke-opacity',0);
    $(svgElement5).attr('stroke-opacity',0);
    $(elem).attr("fill-opacity", '1');
    $(elem).attr("transform", 'translate(0, 400)');
    setTimeout(function(){
        $(elem).attr("fill-opacity", '0');
        $(elem).attr("transform", 'translate(0, 0)');
    }, 500);
    magicbox = setTimeout(function(){playslider(elem)}, 800);
}
function checkMagicbox(elem){
    if(elem == 2) {
        magicSound('sound/magic.mp3', 'stop');
        clearTimeout(magicbox);
        $(svgElement4).attr('fill-opacity',1);
        $(svgElement4).attr('stroke-opacity',1);
        playSlideVoice('sound/2', 1);
        $('#question').val('');
    }

    if(elem == 3) {
        magicSound('sound/magic.mp3', 'stop');
        clearTimeout(magicbox);
        $(svgElement5).attr('fill-opacity',1);
        $(svgElement5).attr('stroke-opacity',1);
        playSlideVoice('sound/3', 1);
        $('#question').val('');
    }

    if(elem == 4) {
        magicSound('sound/magic.mp3', 'stop');
        clearTimeout(magicbox);
        $(svgElement6).attr('fill-opacity',1);
        playSlideVoice('sound/1', 1);
        $('#question').val('');
    }
}
/* Buttons */
function buttonAction(elem) {
    $(elem).addClass('active').addClass('on-top');
    if (elem == 1) {
        playSlideVoice('sound/1', 1);
    }
    if (elem == 2) {
        if($('#question').val()){
            $('#question').val(2);
        }
    }
    if (elem == 3) {
        if($('#question').val()){
            $('#question').val(3);
        }
    }
    if (elem == 4) {
        playSlideVoice('sound/1', 1);
    }
    if (elem == 5) {
        playSlideVoice('sound/5', 1);
    }
    if (elem == 6) {
        playSlideVoice('sound/6', 1);
    }
}