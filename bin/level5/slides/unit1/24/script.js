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

        D1.setAttribute('style', 'transform: translateX(-15px)');
        D2.setAttribute('style', 'transform: translateX(-15px)');
        D3.setAttribute('style', 'transform: translateX(-15px)');
        D4.setAttribute('style', 'transform: translateX(-15px)');
        D5.setAttribute('style', 'transform: translateX(-15px)');
        D6.setAttribute('style', 'transform: translateX(95px)');

        config = [
            {
                elem: A1,
                sound: 'b'
            },
            {
                elem: A2,
                sound: 'm'
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
                sound: 't'
            },
            {
                elem: D2,
                sound: 'g'
            },
            {
                elem: D3,
                sound: 'd'
            },
            {
                elem: D4,
                sound: 'x'
            },
            {
                elem: D5,
                sound: 'p'
            },
            {
                elem: D6,
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

