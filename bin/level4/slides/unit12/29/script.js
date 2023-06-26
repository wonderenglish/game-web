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

        let BB1 = svgDocument.getElementById("B2");
        let BB2 = svgDocument.getElementById("B1");

        let B1 = svgDocument.getElementById("C1"),
            B2 = svgDocument.getElementById("C2"),
            B3 = svgDocument.getElementById("C3"),
            B4 = svgDocument.getElementById("C4"),
            B5 = svgDocument.getElementById("C5"),
            B6 = svgDocument.getElementById("C6"),
            B7 = svgDocument.getElementById("C7"),
            B8 = svgDocument.getElementById("C8"),
            B9 = svgDocument.getElementById("C9"),
            B10 = svgDocument.getElementById("C10"),
            B11 = svgDocument.getElementById("C11"),
            B12 = svgDocument.getElementById("C12"),
            B13 = svgDocument.getElementById("C13"),
            B14 = svgDocument.getElementById("C14");
        B15 = svgDocument.getElementById("C15");
        B16 = svgDocument.getElementById("C16");
        B17 = svgDocument.getElementById("C17");
        B18 = svgDocument.getElementById("C18");
        B19 = svgDocument.getElementById("C19");
        B20 = svgDocument.getElementById("C20");
        B21 = svgDocument.getElementById("C21");
        B22 = svgDocument.getElementById("C22");
        B23 = svgDocument.getElementById("C23");
        B24 = svgDocument.getElementById("C24");

        cards.push(
            B1, B2, B3, B4, B5, B6, B7, B8,
            B9, B10, B11, B12, B13, B14, B15, B16, B17,
            B18, B19, B20, B21, B22, B23, B24,
        );

        map.push(
            {
                elemFirst: B1,
                elemSecond: B3,
                sound: 8
            },
            {
                elemFirst: B2,
                elemSecond: B14,
                sound: 1
            },
            {
                elemFirst: B4,
                elemSecond: B9,
                sound: 5
            },
            {
                elemFirst: B5,
                elemSecond: B19,
                sound: 11
            },
            {
                elemFirst: B6,
                elemSecond: B18,
                sound: 6
            },
            {
                elemFirst: B7,
                elemSecond: B21,
                sound: 10
            },
            {
                elemFirst: B8,
                elemSecond: B13,
                sound: 4
            },
            {
                elemFirst: B10,
                elemSecond: B17,
                sound: 3
            },
            {
                elemFirst: B11,
                elemSecond: B24,
                sound: 2
            },
            {
                elemFirst: B12,
                elemSecond: B23,
                sound: 9
            },
            {
                elemFirst: B15,
                elemSecond: B22,
                sound: 12
            },
            {
                elemFirst: B16,
                elemSecond: B20,
                sound: 7
            },
        );



        map.forEach((el) => {
            el.elemFirst.addEventListener('click', () => {
                if (el.elemSecond.classList.contains('block')) {
                    playSong('sound/' + el.sound, 1);
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
                        playSong('sound/' + el.sound, 1);
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
                    playSong('sound/' + el.sound, 1);
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
                        playSong('sound/' + el.sound, 1);
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

        BB1.addEventListener('click', () => {
            if (BALL2.dataset.state == 0) {
                BALL2.dataset.state = 1;
                BALL1.dataset.state = 0;
                return;
            }

            playSong('sound/bad.mp3', 1);
        });

        BB2.addEventListener('click', () => {
            if (BALL1.dataset.state == 0) {
                BALL1.dataset.state = 1;
                BALL2.dataset.state = 0;
                return;
            }

            playSong('sound/bad.mp3', 1);
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
        $('.ballScore2').attr('style', 'left: ' + (((dw - sw) / 2) + sw - 120) + 'px;');
    }, 100);

});

/* Buttons */
function buttonAction(elem) {
    if (elem == 1) {
        playSlideVoice('sound/i', 1);
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
