var TIGER;
var P1, P2, P3, P4, P5, P6, P7, P8, P9, P10;
var quest;
var config;

var playQueue = [1, 2, 3, 6, 5, 4];
var winnerQueue = [2, 1, 3, 5, 6, 4];

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

        $(TIGER).click(() => {
            roundNewSound('play');
            carousel()
        });

        config = [
            {
                elem: P1,
                sound: 'basketball'
            },
            {
                elem: P2,
                sound: 'soccer'
            },
            {
                elem: P3,
                sound: 'baseball'
            },
            {
                elem: P4,
                sound: 'tennis'
            },
            {
                elem: P5,
                sound: 'ping-pong'
            },
            {
                elem: P6,
                sound: 'badminton'
            },
        ];


        $.each(config, (k, v) => {
            $(v.elem).click(() => {
                playNewSlideVoice(`${v.sound}.mp3`, 1);
            })
        });
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


function carousel() {
    clearFill();

    let currentWinner = newShuffle(winnerQueue).shift();

    let queue = [];
    queue = queue.concat(playQueue);
    queue = queue.concat(playQueue);
    queue = queue.concat(playQueue);

    let elem;
    let lastLap = false;

    let interval = setInterval(() => {
        if (elem) {
            elem.querySelector('.st8').classList.remove('fill-green')
        }

        let index = queue.shift() - 1;
        elem = config[index].elem;
        elem.querySelector('.st8').classList.add('fill-green');

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

function clearFill() {
    $.each(config, (k, v) => {
        if (v.elem.querySelector('.fill-green')) {
            v.elem.querySelector('.fill-green').classList.remove('fill-green');
        }
    });
}

/* Buttons */
function buttonAction(elem) {
    switch (elem) {
        case '20':
            replaySlide();
            break;
    }
}

