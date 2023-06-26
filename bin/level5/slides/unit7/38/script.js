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
        P5 = svgDocument.getElementById("P5");
        P6 = svgDocument.getElementById("P6");
        P7 = svgDocument.getElementById("P7");
        P8 = svgDocument.getElementById("P8");
        P9 = svgDocument.getElementById("P9");
        P10 = svgDocument.getElementById("P10");


        config = [
            {elem: P1, sound: 'ban', change: true},
            {elem: P2, sound: 'bet', change: true},
            {elem: P3, sound: 'big', change: true},
            {elem: P4, sound: 'bob', change: true},
            {elem: P5, sound: 'bun', change: true},
            {elem: P6, sound: 'pat', change: true},
            {elem: P7, sound: 'pen', change: true},
            {elem: P8, sound: 'pig', change: true},
            {elem: P9, sound: 'pon', change: true},
            {elem: P10, sound:'pup', change: true},
        ];

        $.each(config, (k, v) => {
            if (v.change === true) {
                v.elem.querySelector('text').textContent = v.sound
            }

            $(v.elem).click(() => {
                playNewSlideVoice(`${v.sound}.mp3`, 1);
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
}

