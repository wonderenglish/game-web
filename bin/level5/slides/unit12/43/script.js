var TIGER;
var config;
var quest;

var queue = [];

$(document).ready(function () {
    let object = document.getElementById("svgelem");
    object.addEventListener('load', () => {

        let svgDocument = object.contentDocument;
        A1 = svgDocument.getElementById("A1");
        A2 = svgDocument.getElementById("A2");
        A3 = svgDocument.getElementById("A3");
        A4 = svgDocument.getElementById("A4");
        A5 = svgDocument.getElementById("A5");
        A6 = svgDocument.getElementById("A6");
        B1 = svgDocument.getElementById("B1");
        B2 = svgDocument.getElementById("B2");
        B3 = svgDocument.getElementById("B3");
        B4 = svgDocument.getElementById("B4");
        B5 = svgDocument.getElementById("B5");
        D1 = svgDocument.getElementById("D1");
        D2 = svgDocument.getElementById("D2");
        D3 = svgDocument.getElementById("D3");
        D4 = svgDocument.getElementById("D4");
        D5 = svgDocument.getElementById("D5");
        D6 = svgDocument.getElementById("D6");
        D7 = svgDocument.getElementById("D7");

        D1.setAttribute('style', 'transform: translateX(-25px) scale(0.9); transform-origin:center;');
        D2.setAttribute('style', 'transform: translateX(-40px) scale(0.9); transform-origin:center;');
        D3.setAttribute('style', 'transform: translateX(-55px) scale(0.9); transform-origin:center;');
        D4.setAttribute('style', 'transform: translateX(-70px) scale(0.9); transform-origin:center;');
        D5.setAttribute('style', 'transform: translateX(-95px) scale(0.9); transform-origin:center;');
        D6.setAttribute('style', 'transform: translateX(5px) scale(0.9); transform-origin:center;');
        D7.setAttribute('style', 'transform: translateX(100px) scale(0.9); transform-origin:center;');

        A1.setAttribute('style', 'transform: translateX(-100px); transform-origin:center;');
        A2.setAttribute('style', 'transform: translateX(-250px); transform-origin:center;');
        A3.setAttribute('style', 'transform: translateX(-150px); transform-origin:center;');
        A4.setAttribute('style', 'transform: translateX(-50px); transform-origin:center;');
        A5.setAttribute('style', 'transform: translateX(50px); transform-origin:center;');
        A6.setAttribute('style', 'transform: translateX(150px); transform-origin:center;');

        config = [
            {
                elem: A1,
                sound: 'r'
            },
            {
                elem: A2,
                sound: 'n'
            },
            {
                elem: A3,
                sound: 'f'
            },
            {
                elem: A4,
                sound: 'j'
            },
            {
                elem: A5,
                sound: 'w'
            },
            {
                elem: A6,
                sound: 'b'
            },
            {
                elem: B1,
                sound: 'a'
            },
            {
                elem: B2,
                sound: 'e'
            },
            {
                elem: B3,
                sound: 'i'
            },
            {
                elem: B4,
                sound: 'o'
            },
            {
                elem: B5,
                sound: 'u'
            },

            {
                elem: D1,
                sound: 'p'
            },
            {
                elem: D2,
                sound: 't'
            },
            {
                elem: D3,
                sound: 'd'
            },
            {
                elem: D4,
                sound: 'g'
            },
            {
                elem: D5,
                sound: 'm'
            },
            {
                elem: D6,
                sound: 'd'
            },
            {
                elem: D7,
                sound: 'b'
            },
        ];

        $.each(config, (k, v) => {
            if (v.elem.querySelector('text')) {
                v.elem.querySelector('text').textContent = v.sound;

                if (v.matrix) {
                    v.elem.querySelector('text').setAttribute('transform', v.matrix);
                }
            }

            $(v.elem).click(() => {
                if (v.sound == queue[0]) {
                    playNewSlideVoice(`${v.sound}.mp3`, 1);
                    queue.shift();
                } else {
                    playNewSlideVoice('bad.mp3', 1);
                }
            })
        })
    });

    hideOverlay(500);

    $('.next-slide').click(() => {
        nextSlide();
    });


    $('.button, .replay').click(function () {
        $('.table__elem.active')
            .removeClass('active')
            .removeClass('on-top');
        let action = $(this).attr('data-action');
        $(this).html(action);

        buttonAction(action);
    });
});

/* Buttons */
function buttonAction(elem) {
    switch (elem) {
        case 20:
            replaySlide();
            break;

    }
    queue = elem.split("");
    playNewSlideVoice(`${elem}.mp3`, 1);
    console.log(queue);
}

