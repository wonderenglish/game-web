const objects = [];
const rounds = 3;
const playQueue = [2, 1, 3, 6, 5, 4];
const object = document.getElementById("svgelem");
const BreakException = {};

let audio;
let queue = [];
let objectsToPlay = [];
let block = false;
let currentPosition = 0;

$(document).ready(function () {
    object.addEventListener('load', function () {
        let svgDocument = object.contentDocument,
            TIGER = svgDocument.getElementById("TIGER"),
            L1 = svgDocument.getElementById("P1"),
            L2 = svgDocument.getElementById("P2"),
            L3 = svgDocument.getElementById("P3"),
            L4 = svgDocument.getElementById("P4"),
            L5 = svgDocument.getElementById("P5"),
            L6 = svgDocument.getElementById("P6");

        objects.push(
            {
                elem: L1,
                sound: 3,
            },
            {
                elem: L2,
                sound: 2,
            },
            {
                elem: L3,
                sound: 3,
            },
            {
                elem: L4,
                sound: 2,
            },
            {
                elem: L5,
                sound: 3,
            },
            {
                elem: L6,
                sound: 2,
            },
        );

        objects.forEach((el, i) => {
            el.elem.addEventListener('click', () => {
                playSlideVoice(`sound/${el.sound}`, 1);
            });
        });

        $(TIGER).click(() => {
            if (block === true) {
                return;
            }

            if (object.contentDocument.querySelector('.active') !== null) {
                object.contentDocument.querySelectorAll('.active').forEach((el) => {
                    el.classList.remove('active');
                })
            }

            block = true;
            roundRobin();
        });
    });

    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });

    $('.button, .replay').click(function () {
        if ($('#block').val() != 1) {
            $('.table__elem.active').removeClass('active').removeClass('on-top');
            var elem = $(this).attr('data-action');
            buttonAction(elem);
        }
    });
});

function roundSound(type) {

    if (type === 'play') {
        audio = new Audio('sound/round.mp3');
        audio.play();
    }

    if (type === 'stop') {
        $(audio).animate({volume: 0}, 1000);

        setTimeout(function () {
            audio.pause();
            audio.currentTime = 0;
        }, 1000);
    }
}

function makeRound() {
    roundSound('play');

    objectsToPlay.forEach((el, index) => {
        setTimeout(() => {
            if (object.contentDocument.querySelector('.active') !== null) {
                object.contentDocument.querySelector('.active').classList.remove('active');
            }

            el.elem.classList.add('active');
        }, 200 * (index + 1));
    });

    setTimeout(() => {
        objectsToPlay = [];
        block = false;

        roundSound('stop');
    }, 201 * objectsToPlay.length);

}

function roundRobin() {
    if (queue.length === 0) {
        queue = playQueue;
    }

    currentPosition = queue.pop();

    for (let i = 1; rounds >= i; i++) {
        objects.forEach((el) => {
            objectsToPlay.push(el);
        })
    }

    try {
        objects.forEach((el, index) => {
            objectsToPlay.push(el);

            if (index === (currentPosition - 1)) throw BreakException
        });
    } catch (e) {
        if (e !== BreakException) throw e;
    }

    makeRound();
}

/* Buttons */
function buttonAction(elem) {
    if (elem == 1) {
        playSlideVoice('sound/i', 1);
    }
    if (elem == 2) {
        replaySlide();
    }
}
