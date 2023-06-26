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

        D6.setAttribute('style', 'transform: translateX(999px)');
        D7.setAttribute('style', 'transform: translateX(999px)');
        A2.setAttribute('style', 'display:none');

        config = [
            {
                elem: A1,
                sound: 'p'
            },

            {
                elem: A3,
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
                sound: 'g'
            },
            {
                elem: D2,
                sound: 't'
            },
            {
                elem: D3,
                sound: 'n'
            },
            {
                elem: D4,
                sound: 'b'
            },
            {
                elem: D5,
                sound: 'p'
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

