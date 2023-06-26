var TIGER;
var config;
var quest;

var q = [2, 1, 3, 4];
var winnerQueue = [2, 1, 3, 4];
var playQueue = [1, 2, 3, 4];


$(document).ready(function () {
    let object = document.getElementById("svgelem");
    object.addEventListener('load', () => {

        let svgDocument = object.contentDocument;
        TIGER = svgDocument.getElementById("Y");
        P1 = svgDocument.getElementById("P1");
        P2 = svgDocument.getElementById("P2");
        P3 = svgDocument.getElementById("P3");
        P4 = svgDocument.getElementById("P4");

        $(TIGER).click(() => {
            roundNewSound('play');
            carousel()
        });

        config = [
            {elem: P1},
            {elem: P2},
            {elem: P3},
            {elem: P4},
        ];

        clearFill();
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
            playNewSlideVoice('Doesheplaytheflute.mp3', 1);
            break;
        case '2':
            playNewSlideVoice('Doesheplaytheguitar.mp3', 1);
            break;
        case '3':
            playNewSlideVoice('Doesheplaytheviolin.mp3', 1);
            break;
        case '4':
            playNewSlideVoice('Doesheplaythepiano.mp3', 1);
            break;
        case '5':
            playNewSlideVoice('Yeshedoes.mp3', 1);
            break;
        case '6':
            playNewSlideVoice('Nohedoesnt.mp3', 1);
            break;
        case '20':
            replaySlide();
            break;
    }
}


function clearFill() {
    $.each(config, (k, v) => {
        v.elem.classList.add('hide');
    })
}

function carousel() {
    clearFill();

    if (winnerQueue.length === 0) {
        winnerQueue = [...q]
    }

    let currentWinner = newShuffle(winnerQueue).shift();

    let queue = [];
    queue = queue.concat(playQueue);
    queue = queue.concat(playQueue);
    queue = queue.concat(playQueue);

    let elem;
    let lastLap = false;

    let interval = setInterval(() => {
        if (elem) {
            elem.classList.add('hide')
        }

        let index = queue.shift() - 1;
        elem = config[index].elem;
        elem.classList.remove('hide');

        if (queue.length === 0 && lastLap === false) {
            lastLap = true;
            queue = playQueue.filter((i, v) => {
                return v < currentWinner;
            });
        }

        if (queue.length === 0 && lastLap) {
            roundNewSound('stop');
            clearInterval(interval);
        }
    }, 300)
}