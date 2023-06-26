var TIGER;
var config;
var quest;

$(document).ready(function () {
    let object = document.getElementById("svgelem");
    object.addEventListener('load', () => {

        let svgDocument = object.contentDocument;
        TIGER = svgDocument.getElementById("TIGER");
        A1 = svgDocument.getElementById("P11");
        A2 = svgDocument.getElementById("P12");
        A3 = svgDocument.getElementById("P13");
        A4 = svgDocument.getElementById("P14");
        A5 = svgDocument.getElementById("P15");
        A6 = svgDocument.getElementById("P16");
        A7 = svgDocument.getElementById("P17");
        A8 = svgDocument.getElementById("P18");
        A9 = svgDocument.getElementById("P19");

        B1 = svgDocument.getElementById("P21");
        B2 = svgDocument.getElementById("P22");
        B3 = svgDocument.getElementById("P23");
        B4 = svgDocument.getElementById("P24");
        B5 = svgDocument.getElementById("P25");
        B6 = svgDocument.getElementById("P26");
        B7 = svgDocument.getElementById("P27");
        B8 = svgDocument.getElementById("P28");
        B9 = svgDocument.getElementById("P29");

        C1 = svgDocument.getElementById("P31");
        C2 = svgDocument.getElementById("P32");
        C3 = svgDocument.getElementById("P33");
        C4 = svgDocument.getElementById("P34");
        C5 = svgDocument.getElementById("P35");
        C6 = svgDocument.getElementById("P36");
        C7 = svgDocument.getElementById("P37");
        C8 = svgDocument.getElementById("P38");
        C9 = svgDocument.getElementById("P39");


        config =
            {
                "A": [A1, A2, A3, A4, A5, A6, A7, A8, A9],
                "B": [B1, B2, B3, B4, B5, B6, B7, B8, B9],
                "C": [C1, C2, C3, C4, C5, C6, C7, C8, C9]
            }
        ;

        hideAll()

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

function hideAll() {
    config.A.map((el) => {
        el.classList.add('hide')
    });

    config.B.map((el) => {
        el.classList.add('hide')
    });

    config.C.map((el) => {
        el.classList.add('hide')
    });
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}


function show(letter, i) {
    let elems = [];

    switch (letter) {
        case "A":
            elems = config.A;
            break;
        case "B":
            elems = config.B;
            break;
        case "C":
            elems = config.C;
            break;
    }

    elems.map((el, index) => {
        if (index < i) {
            el.classList.remove('hide')
        }
    });
}


/* Buttons */
function buttonAction(elem) {
    switch (elem) {
        case '1':
            hideAll();
            playNewSlideVoice('Howmanycookiesarethereinthejar.mp3', 1);
            show("A", randomInteger(1, 9));
            break;
        case '2':
            hideAll();
            playNewSlideVoice('Howmanyyo-yosarethereinthejar.mp3', 1);
            show("B", randomInteger(1, 9));
            break;
        case '3':
            hideAll();
            playNewSlideVoice('Howmanydollsarethereinthejar.mp3', 1);
            show("C", randomInteger(1, 9));
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

