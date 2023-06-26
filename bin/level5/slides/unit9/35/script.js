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
        YES = svgDocument.getElementById("YES");
        NO = svgDocument.getElementById("NO");

        config = [
            {
                elem: P1,
                sound: 'Doyouswim'
            },
            {
                elem: P2,
                sound: 'Doyoudance'
            },
            {
                elem: P3,
                sound: 'Doyouski'
            },
            {
                elem: P4,
                sound: 'Doyouskate'
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


    $('.button, .replay').click(function() {
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
            playNewSlideVoice('YesIdo.mp3', 1);
            YES.setAttribute('style', 'transform: scale(1.2); transform-origin:center;')
            setTimeout(() => {
                YES.setAttribute('style', 'transform: scale(1);  transform-origin:center;')
            }, 2000)
            break;
        case '2':
            playNewSlideVoice('NoIdont.mp3', 1);
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

