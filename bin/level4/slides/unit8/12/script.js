var ELEMS = [];
var SLIDES = [];
var B1, B2;

$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        let TIGER = svgDocument.getElementById("TIGER");
        B2 = svgDocument.getElementById("BALL1");
        B1 = svgDocument.getElementById("BALL2");


        let P1 = svgDocument.getElementById('A1').classList.add('hide');
        let P2 = svgDocument.getElementById('A2').classList.add('hide');
        let P3 = svgDocument.getElementById('A3');
        let P4 = svgDocument.getElementById('A4');
        let P5 = svgDocument.getElementById('A5');
        let P6 = svgDocument.getElementById('A6').classList.add('hide');
        let P7 = svgDocument.getElementById('A7').classList.add('hide');
        let P8 = svgDocument.getElementById('A8');
        let P9 = svgDocument.getElementById('A9');
        let P10 = svgDocument.getElementById('A10').classList.add('hide');
        let P11 = svgDocument.getElementById('A11');
        let P12 = svgDocument.getElementById('A12');
        let P13 = svgDocument.getElementById('A13');
        let P14 = svgDocument.getElementById('A14').classList.add('hide');
        let P15 = svgDocument.getElementById('A15').classList.add('hide');
        let P16 = svgDocument.getElementById('A16').classList.add('hide');
        let P17 = svgDocument.getElementById('A17').classList.add('hide');
        let P18 = svgDocument.getElementById('A18').classList.add('hide');
        let P19 = svgDocument.getElementById('A19').classList.add('hide');
        let P20 = svgDocument.getElementById('A20').classList.add('hide');
        let P21 = svgDocument.getElementById('A21').classList.add('hide');

        SLIDES.push(P4,P5,P9,P11,P12,P13,P8,P3);


        ELEMS.push(
            {elem: P3, sound: 'P8'},
            {elem: P4, sound: 'P1'},
            {elem: P5, sound: 'P2'},
            {elem: P8, sound: 'P7'},
            {elem: P9, sound: 'P3'},
            {elem: P11, sound: 'P4'},
            {elem: P12, sound: 'P5'},
            {elem: P13, sound: 'P6'},
        );

        ELEMS.forEach((el) => {
            let sound = el.sound;
            el.elem.classList.add('hide');
            el.elem.addEventListener('click', () => {
                playSlideVoice('sound/' + sound, 1);
            });
        });

        TIGER.addEventListener('click', function () {
            roundSound('sound/round.mp3', 'play');
            let element = ELEMS.pop();
            let timeout = 0;

            SLIDES.forEach((el) => {
               el.classList.add('hide');

                setTimeout(() => {
                    el.classList.remove('hide');
                }, timeout);

                timeout = timeout + 300;
                setTimeout(() => {
                   el.classList.add('hide');
                }, timeout);
            });

            setTimeout(() => {
                element.elem.classList.remove('hide');
                roundSound('sound/round.mp3', 'stop');
            }, timeout);
        });

        $(B1).click(function () {
            addScore(1);
        });

        $(B2).click(function () {
            addScore(2);
        });

    });

    hideOverlay(500);

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


});


function addScore(ball) {
    if (ball == 1) {
        var score = $('.ballScore1').html();
        $('.ballScore1').html(parseInt(score) + 1);
    }
    if (ball == 2) {
        var score = $('.ballScore2').html();
        $('.ballScore2').html(parseInt(score) + 1);
    }
}


function roundSound(url, type) {

    if (type == 'play') {
        audio = new Audio(url);
        audio.play();
    }

    if (type == 'stop') {
        $(audio).animate({volume: 0}, 1000);
        setTimeout(function () {
            audio.pause();
            audio.currentTime = 0;
        }, 1000);
    }
}

/* Buttons */
function buttonAction(elem) {
    if (elem == 1) {
        playSlideVoice('sound/i', 1);
    }
    if (elem == 2) {
        replaySlide();
    }
}
