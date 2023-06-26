var TIGER;
var config;
var quest;

$(document).ready(function () {
    let object = document.getElementById("svgelem");
    object.addEventListener('load', () => {

        let svgDocument = object.contentDocument;
        TIGER = svgDocument.getElementById("TIGER");
        A1 = svgDocument.getElementById("A11");
        A2 = svgDocument.getElementById("A12");
        A3 = svgDocument.getElementById("A13");
        A4 = svgDocument.getElementById("A14");
        A5 = svgDocument.getElementById("A15");
        A6 = svgDocument.getElementById("A16");
        B1 = svgDocument.getElementById("B11");
        B2 = svgDocument.getElementById("B12");
        B3 = svgDocument.getElementById("B13");
        B4 = svgDocument.getElementById("B14");
        B5 = svgDocument.getElementById("B15");
        B6 = svgDocument.getElementById("B16");
        C1 = svgDocument.getElementById("C11");
        C2 = svgDocument.getElementById("C12");
        C3 = svgDocument.getElementById("C13");
        C4 = svgDocument.getElementById("C14");
        C5 = svgDocument.getElementById("C15");
        C6 = svgDocument.getElementById("C16");


        config =
            {
                "A": [A1, A2, A3, A4, A5, A6],
                "B": [B1, B2, B3, B4, B5, B6],
                "C": [C1, C2, C3, C4, C5, C6]
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
            playNewSlideVoice('Howmanyhamburgersarethere.mp3', 1);
            show("A", randomInteger(1, 6));
            break;
        case '2':
            hideAll();
            playNewSlideVoice('Howmanyturtlesarethere.mp3', 1);
            show("C", randomInteger(1, 6));
            break;
        case '3':
            hideAll();
            playNewSlideVoice('Howmanyumbrellasarethere.mp3', 1);
            show("B", randomInteger(1, 6));
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

