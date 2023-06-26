const map = [];
const cards = [];
const BALL1 = document.getElementById('ball1');
const BALL2 = document.getElementById('ball2');
const clicked = {
    sound: null
};


let audio = null;

$(document).ready(function () {
    let object = document.getElementById("svgelem");

    object.addEventListener('load', function () {
        let svgDocument = object.contentDocument;

        let B1 = svgDocument.getElementById("B2");
        let B2 = svgDocument.getElementById("B1");

        let V11 = svgDocument.getElementById("A11"),
            V12 = svgDocument.getElementById("A12"),
            V13 = svgDocument.getElementById("A13"),
            V14 = svgDocument.getElementById("A14"),
            V15 = svgDocument.getElementById("A15"),

            V21 = svgDocument.getElementById("A21"),
            V22 = svgDocument.getElementById("A22"),
            V23 = svgDocument.getElementById("A23"),
            V24 = svgDocument.getElementById("A24"),
            V25 = svgDocument.getElementById("A25"),

            V31 = svgDocument.getElementById("A31"),
            V32 = svgDocument.getElementById("A32"),
            V33 = svgDocument.getElementById("A33"),
            V34 = svgDocument.getElementById("A34"),
            V35 = svgDocument.getElementById("A35"),

            V41 = svgDocument.getElementById("A41"),
            V42 = svgDocument.getElementById("A42"),
        V43 = svgDocument.getElementById("A43"),
        V44 = svgDocument.getElementById("A44"),
        V45 = svgDocument.getElementById("A45");

        let clock = svgDocument.getElementById('CLOCK');
        clock.querySelector('.elm').setAttribute('style', 'transform:rotate(135deg); transform-origin: 71% 35%;');

        clock.addEventListener('click', () => {
            playNewSlideVoice('tick.mp3', 1);

            let rotate = 135;
            let interval = setInterval(() => {
                rotate += 6;
                clock.querySelector('.elm').setAttribute('style', `transform: rotate(${rotate}deg); transform-origin: 71% 35%;`);
            }, 1000);

            setTimeout(() => {
                clearInterval(interval);
                playNewSlideVoice('ring.mp3', 1);
            }, 60000)

        });

        cards.push(
            V11, V12, V13, V14, V15,
            V21, V22, V23, V24, V25,
            V31, V32, V33, V34, V35,
            V41, V42, V43, V44, V45,
        );

        map.push(
            {
                elemFirst: V11,
                elemSecond: V35,
                sound: 'hamburger'
            },
            {
                elemFirst: V12,
                elemSecond: V45,
                sound: 'dinner'
            },
            {
                elemFirst: V13,
                elemSecond: V43,
                sound: 'lunch'
            },
            {
                elemFirst: V14,
                elemSecond: V42,
                sound: 'cereal'
            },
            {
                elemFirst: V15,
                elemSecond: V34,
                sound: 'breakfast'
            },
            {
                elemFirst: V21,
                elemSecond: V41,
                sound: 'butter'
            },
            {
                elemFirst: V22,
                elemSecond: V32,
                sound: 'soup'
            },
            {
                elemFirst: V23,
                elemSecond: V44,
                sound: 'snack'
            },
            {
                elemFirst: V24,
                elemSecond: V31,
                sound: 'donut'
            },
            {
                elemFirst: V25,
                elemSecond: V33,
                sound: 'yogurt'
            }
        );

        B1.addEventListener('click', () => {
            let ballscore = document.querySelector('.ballScore2');
            let score = ballscore.innerHTML;
            ballscore.innerHTML = parseInt(score) + 1;
        });
        B2.addEventListener('click', () => {
            let ballscore = document.querySelector('.ballScore1');
            let score = ballscore.innerHTML;
            ballscore.innerHTML = parseInt(score) + 1;
        });

        map.forEach((el) => {
            el.elemFirst.addEventListener('click', () => {
                playNewSlideVoice(`${el.sound}.mp3`, 1);

                if (clicked.sound === null) {
                    clicked.sound = el.sound;
                    return;
                } else if(clicked.sound === el.sound) {
                    el.elemSecond.classList.remove('act');
                    el.elemFirst.classList.remove('act');
                    clicked.sound = null;
                    return;
                }

                playSong('sound/bad.mp3', 1);
            });

            el.elemSecond.addEventListener('click', () => {
                playNewSlideVoice(`${el.sound}.mp3`, 1);

                if (clicked.sound === null) {
                    clicked.sound = el.sound;
                    return;
                } else if(clicked.sound === el.sound) {
                    el.elemSecond.classList.remove('act');
                    el.elemFirst.classList.remove('act');
                    clicked.sound = null;
                    return;
                }

                clicked.sound = null;
                playSong('sound/bad.mp3', 1);
            })
        });

        showAllCards();
    });

    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });

    $('.button').click(function () {
        if ($('#block').val() != 1) {
            $('.table__elem.active').removeClass('active').removeClass('on-top');
            var elem = $(this).attr('data-action');
            buttonAction(elem);
        }
    });

    setTimeout(function (args) {
        var sw = $('#svgelem').width();
        var dw = $('body').width();
        $('.ballScore1').attr('style', 'left: ' + (((dw - sw) / 2) + 40) + 'px;');
        $('.ballScore2').attr('style', 'left: ' + (((dw - sw) / 2) + sw - 180) + 'px;');
    }, 100);

});

/* Buttons */
function buttonAction(elem) {
    if (elem == 10) {
        showAllCards();
    }

    if (elem == 2) {
        replaySlide();
    }
}

function showAllCards() {
    cards.forEach((el) => {
        el.classList.add('act');
    });
}
