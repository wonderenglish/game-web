var TIGER;
var config;
var quest;

var q = [2, 1, 3];

var winnerQueue = [2, 1, 3];
var playQueue = [1, 2, 3];


$(document).ready(function () {
    let object = document.getElementById("svgelem");
    object.addEventListener('load', () => {

        let svgDocument = object.contentDocument;
        TIGER = svgDocument.getElementById("Y");
        P1 = svgDocument.getElementById("P1");
        P2 = svgDocument.getElementById("P2");
        P3 = svgDocument.getElementById("P3");

        $(TIGER).click(() => {
            roundNewSound('play');
            carousel()
        });

        config = [
            {elem: P1},
            {elem: P2},
            {elem: P3},
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
            playNewSlideVoice('Doessheplaywithdolls.mp3', 1);
            break;
        case '2':
            playNewSlideVoice('Doessheplaywithyo-yos.mp3', 1);
            break;
        case '3':
            playNewSlideVoice('Doessheplaywithblocks.mp3', 1);
            break;
        case '4':
            playNewSlideVoice('Yesshedoes.mp3', 1);
            break;
        case '5':
            playNewSlideVoice('Noshedoesnt.mp3', 1);
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