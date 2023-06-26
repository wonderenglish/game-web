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

        let P1 = svgDocument.getElementById('P1');
        let P2 = svgDocument.getElementById('P2');
        let P3 = svgDocument.getElementById('P3');
        let P4 = svgDocument.getElementById('P4');
        let P5 = svgDocument.getElementById('P5');
        let P6 = svgDocument.getElementById('P6');
        let P7 = svgDocument.getElementById('P7');
        let P8 = svgDocument.getElementById('P8');
        let P9 = svgDocument.getElementById('P9');
        let P10 = svgDocument.getElementById('P10');
        let P11 = svgDocument.getElementById('P11');
        let P12 = svgDocument.getElementById('P12');
        let P13 = svgDocument.getElementById('P13');
        let P14 = svgDocument.getElementById('P14');
        let P15 = svgDocument.getElementById('P15');
        let P16 = svgDocument.getElementById('P16');
        let P17 = svgDocument.getElementById('P17');
        let P18 = svgDocument.getElementById('P18');
        let P19 = svgDocument.getElementById('P19');
        let P20 = svgDocument.getElementById('P20');
        let P21 = svgDocument.getElementById('P21');

        SLIDES.push(P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21,);


        ELEMS.push(
            {elem: P1, sound: 'P1'},
            {elem: P2, sound: 'P2'},
            {elem: P3, sound: 'P3'},
            {elem: P4, sound: 'P4'},
            {elem: P5, sound: 'P5'},
            {elem: P6, sound: 'P6'},
            {elem: P7, sound: 'P7'},
            {elem: P8, sound: 'P8'},
            {elem: P9, sound: 'P9'},
            {elem: P10, sound: 'P10'},
            {elem: P11, sound: 'P11'},
            {elem: P12, sound: 'P12'},
            {elem: P13, sound: 'P13'},
            {elem: P14, sound: 'P14'},
            {elem: P15, sound: 'P15'},
            {elem: P16, sound: 'P16'},
            {elem: P17, sound: 'P17'},
            {elem: P18, sound: 'P18'},
            {elem: P19, sound: 'P19'},
            {elem: P20, sound: 'P20'},
            {elem: P21, sound: 'P21'},
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
