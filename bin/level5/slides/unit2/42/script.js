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
            {elem: P1, sound: 'nag', change: true},
            {elem: P2, sound: 'net', change: true},
            {elem: P3, sound: 'nip', change: true},
            {elem: P4, sound: 'nod', change: true},
            {elem: P5, sound: 'nut', change: true},
            {elem: P6, sound: 'cab', change: true},
            {elem: P7, sound: 'ken', change: true},
            {elem: P8, sound: 'kid', change: true},
            {elem: P9, sound: 'cot', change: true},
            {elem: P10, sound: 'cup', change: true},
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

