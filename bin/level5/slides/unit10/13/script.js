var TIGER;
var config;
var quest;

$(document).ready(function () {
    let object = document.getElementById("svgelem");
    object.addEventListener('load', () => {

        let svgDocument = object.contentDocument;
        TIGER = svgDocument.getElementById("TIGER");
        P1 = svgDocument.getElementById("P1");
        P2 = svgDocument.getElementById("P2");
        P3 = svgDocument.getElementById("P3");
        P4 = svgDocument.getElementById("P4");


        P1Y = svgDocument.getElementById("Y1");
        P2Y = svgDocument.getElementById("Y2");
        P3Y = svgDocument.getElementById("Y3");
        P4Y = svgDocument.getElementById("Y4");
        P1N = svgDocument.getElementById("N1");
        P2N = svgDocument.getElementById("N2");
        P3N = svgDocument.getElementById("N3");
        P4N = svgDocument.getElementById("N4");

        let elems = [
            P1Y,
            P2Y,
            P3Y,
            P4Y,
            P1N,
            P2N,
            P3N,
            P4N,
        ];

        $.each(elems, (k, v) => {
            $(v).click(() => {
                let val = v.querySelector('text').innerHTML;

                v.querySelector('text').innerHTML = parseInt(val) + 1;
            })
        })

        YES = svgDocument.getElementById("YES");
        NO = svgDocument.getElementById("NO");

        config = [
            {
                elem: P3,
                sound: 'Dotheyplaybasketball'
            },
            {
                elem: P2,
                sound: 'Dotheyplaysoccer'
            },
            {
                elem: P4,
                sound: 'Dotheyplaytennis'
            },
            {
                elem: P1,
                sound: 'Dotheyplayping-pong'
            },
        ];

        $.each(config, (k, v) => {
            $(v.elem).click(() => {
                playNewSlideVoice(`${v.sound}.mp3`, 1);
                v.elem.setAttribute('style', 'transform: scale(1.2); transform-origin:center;')
                setTimeout(() => {
                    v.elem.setAttribute('style', 'transform: scale(1);  transform-origin:center;')
                }, 2000)
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

        buttonAction($(this).attr('data-action'));
    });
});

/* Buttons */
function buttonAction(elem) {
    switch (elem) {
        case '1':
            playNewSlideVoice('Yestheydo.mp3', 1);
            YES.setAttribute('style', 'transform: scale(1.2); transform-origin:center;')
            setTimeout(() => {
                YES.setAttribute('style', 'transform: scale(1);  transform-origin:center;')
            }, 2000)
            break;
        case '2':
            playNewSlideVoice('Notheydont.mp3', 1);
            NO.setAttribute('style', 'transform: scale(1.2); transform-origin:center;')
            setTimeout(() => {
                NO.setAttribute('style', 'transform: scale(1);  transform-origin:center;')
            }, 2000)
            break;
        case '4':
            playNewSlideVoice('Yesthereis.mp3', 1);
            break;
        case '5':
            playNewSlideVoice('Nothereisnt.mp3', 1);
            break;
        case '20':
            replaySlide();
            break;
    }
}

