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
        YES = svgDocument.getElementById("Y");
        NO = svgDocument.getElementById("N");

        config = [
            {
                elem: P1,
                sound: 'Doesheplaytheflute'
            },
            {
                elem: P2,
                sound: 'Doesheplaytheguitar'
            },
            {
                elem: P3,
                sound: 'Doesheplaytheviolin'
            },
            {
                elem: P4,
                sound: 'Doesheplaythepiano'
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
            playNewSlideVoice('Yeshedoes.mp3', 1);
            YES.setAttribute('style', 'transform: scale(1.2); transform-origin:center;')
            setTimeout(() => {
                YES.setAttribute('style', 'transform: scale(1);  transform-origin:center;')
            }, 2000)
            break;
        case '2':
            playNewSlideVoice('Nohedoesnt.mp3', 1);
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

