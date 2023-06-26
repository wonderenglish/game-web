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
        Q1 = svgDocument.getElementById("Q1");
        Q2 = svgDocument.getElementById("Q2");
        Q3 = svgDocument.getElementById("Q3");


        Q1.classList.add('hide');
        Q2.classList.add('hide');
        Q3.classList.add('hide');

        config = [
            {
                elem: P1,
                sound: 'Thereare3cookiesinthejar'
            },
            {
                elem: P3,
                sound: 'Thereare4dollsinthejar'
            },
            {
                elem: P2,
                sound: 'Thereare2yo-yosinthejar'
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
            playNewSlideVoice('Howmanycookiesarethereinthejar.mp3', 1);
            Q1.classList.remove('hide');
            setTimeout(() => {
                Q1.classList.add('hide')
            }, 1000)
            break;
        case '2':
            playNewSlideVoice('Howmanyyo-yosarethereinthejar.mp3', 1);
            Q2.classList.remove('hide');
            setTimeout(() => {
                Q2.classList.add('hide')
            }, 1000)
            break;
        case '3':
            playNewSlideVoice('Howmanydollsarethereinthejar.mp3', 1);
            Q3.classList.remove('hide');
            setTimeout(() => {
                Q3.classList.add('hide')
            }, 1000)
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

