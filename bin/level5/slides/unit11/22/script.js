const map = [];
const cards = [];
const BALL1 = document.getElementById('ball1');
const BALL2 = document.getElementById('ball2');
const findout = {
    clicked: false,
    find: false
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
            V21 = svgDocument.getElementById("A21"),
            V22 = svgDocument.getElementById("A22"),
            V23 = svgDocument.getElementById("A23"),
            V31 = svgDocument.getElementById("A31"),
            V32 = svgDocument.getElementById("A32"),
            V33 = svgDocument.getElementById("A33"),
            V41 = svgDocument.getElementById("A41"),
            V42 = svgDocument.getElementById("A42");
            V43 = svgDocument.getElementById("A43");

        cards.push(
            V11, V12, V13,
            V21, V22, V23,
            V31, V32, V33,
            V41, V42, V43
        );

        map.push(
            {
                elemFirst: V11,
                elemSecond: V22,
                sound: 'lap'
            },
            {
                elemFirst: V12,
                elemSecond: V32,
                sound: 'quiz'
            },
            {
                elemFirst: V13,
                elemSecond: V31,
                sound: 'dug'
            },
            {
                elemFirst: V23,
                elemSecond: V33,
                sound: 'pup'
            },
            {
                elemFirst: V41,
                elemSecond: V43,
                sound: 'ron'
            },
            {
                elemFirst: V21,
                elemSecond: V42,
                sound: 'wig'
            },
        );

        B1.addEventListener('click', () => {
            if (BALL2.dataset.state == 0) {
                BALL2.dataset.state = 1;
                BALL1.dataset.state = 0;
                return;
            }

            playSong('sound/bad.mp3', 1);
        });
        B2.addEventListener('click', () => {
            if (BALL1.dataset.state == 0) {
                BALL1.dataset.state = 1;
                BALL2.dataset.state = 0;
                return;
            }

            playSong('sound/bad.mp3', 1);
        });

        map.forEach((el) => {
            el.elemFirst.addEventListener('click', () => {
                if (el.elemSecond.classList.contains('block')) {
                    playNewSlideVoice(`${el.sound}.mp3`, 1);
                    return;
                }

                if (checkBalls() && !el.elemFirst.classList.contains('block')) {
                    el.elemFirst.classList.add('act');

                    if (findout.clicked === false) {
                        findout.clicked = el.elemFirst;
                        findout.find = el.elemSecond;
                        return;
                    }

                    if (el.elemFirst === findout.find) {
                        el.elemFirst.classList.add('block');
                        el.elemSecond.classList.add('block');
                        findout.clicked = false;
                        findout.find = false;
                        addScore();
                        playNewSlideVoice(`${el.sound}.mp3`, 1);
                        return;
                    }

                    setTimeout(function (args) {
                        findout.clicked.classList.remove('act');
                        el.elemFirst.classList.remove('act')
                        findout.clicked = false;
                        findout.find = false;
                    }, 1000);

                    playSong('sound/bad.mp3', 1);
                }
            });

            el.elemSecond.addEventListener('click', () => {
                if (el.elemSecond.classList.contains('block')) {
                    playNewSlideVoice(`${el.sound}.mp3`, 1);
                    return;
                }

                if (checkBalls() && !el.elemSecond.classList.contains('block')) {
                    el.elemSecond.classList.add('act');

                    if (findout.clicked === false) {
                        findout.clicked = el.elemSecond;
                        findout.find = el.elemFirst;
                        return;
                    }

                    if (el.elemSecond === findout.find) {
                        el.elemSecond.classList.add('block');
                        el.elemFirst.classList.add('block');
                        findout.clicked = false;
                        findout.find = false;
                        addScore();
                        playNewSlideVoice(`${el.sound}.mp3`, 1);
                        return;
                    }

                    setTimeout(function (args) {
                        findout.clicked.classList.remove('act');
                        el.elemSecond.classList.remove('act')
                        findout.clicked = false;
                        findout.find = false;
                    }, 1000);

                    playSong('sound/bad.mp3', 1);
                }
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
        setTimeout(function (args) {
            if (!el.classList.contains('block')) {
                el.classList.remove('act');
            }
        }, 5000);
    });
}

function addScore() {
    if (BALL1.dataset.state == 1) {
        let ballscore = document.querySelector('.ballScore1');
        let score = ballscore.innerHTML;
        ballscore.innerHTML = parseInt(score) + 1;
    }

    if (BALL2.dataset.state == 1) {
        let ballscore = document.querySelector('.ballScore2');
        let score = ballscore.innerHTML;
        ballscore.innerHTML = parseInt(score) + 1;
    }
}

function checkBalls() {
    if (BALL1.dataset.state == 1 || BALL2.dataset.state == 1) {
        return true;
    }

    playSong('sound/bad.mp3', 1);
    return false;
}
