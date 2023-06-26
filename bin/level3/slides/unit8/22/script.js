var OP;
var L1, L2, L3, L4, L5, L6;
var M1, M2, M3, M4, M5, M6;
var S1, S2,
    T1, T2,
    U1, U2,
    V1, V2,
    W1, W2,
    X1, X2;

var interactive, end, routes, Lobject, LO;
var current = 0;

$(document).ready(function () {

    var object = document.getElementById("svgelem"); //получаем элмент object
    object.addEventListener('load', function () {

        var svgDocument = object.contentDocument;
        L1 = svgDocument.getElementById("L1");
        L2 = svgDocument.getElementById("L2");
        L3 = svgDocument.getElementById("L3");
        L4 = svgDocument.getElementById("L4");
        L5 = svgDocument.getElementById("L5");
        L6 = svgDocument.getElementById("L6");

        M1 = svgDocument.getElementById("M1");
        M2 = svgDocument.getElementById("M2");
        M3 = svgDocument.getElementById("M3");
        M4 = svgDocument.getElementById("M4");
        M5 = svgDocument.getElementById("M5");
        M6 = svgDocument.getElementById("M6");

        S1 = svgDocument.getElementById("S1");
        S2 = svgDocument.getElementById("S2");
        T1 = svgDocument.getElementById("T1");
        T2 = svgDocument.getElementById("T2");
        U1 = svgDocument.getElementById("U1");
        U2 = svgDocument.getElementById("U2");
        V1 = svgDocument.getElementById("V1");
        V2 = svgDocument.getElementById("V2");
        W1 = svgDocument.getElementById("W1");
        W2 = svgDocument.getElementById("W2");
        X1 = svgDocument.getElementById("X1");
        X2 = svgDocument.getElementById("X2");

        // A32.setAttribute("transform", "matrix(1, 0, 0, 1, -160, 125) ");

        $(L1).click(function () {
            routes = [S1, S2, M1];
            Lobject = this;
            playSlideVoice('sound/' + this.getAttribute('id'), 0);
        });

        $(L2).click(function () {
            routes = [T1, T2, M2];
            Lobject = this;
            playSlideVoice('sound/' + this.getAttribute('id'), 0);
        });

        $(L3).click(function () {
            routes = [U1, U2, M3];
            Lobject = this;
            playSlideVoice('sound/' + this.getAttribute('id'), 0);
        });

        $(L4).click(function () {
            routes = [V1, V2, M4];
            Lobject = this;
            playSlideVoice('sound/' + this.getAttribute('id'), 0);
        });

        $(L5).click(function () {
            routes = [W1, W2, M5];
            Lobject = this;
            playSlideVoice('sound/' + this.getAttribute('id'), 0);
        });

        $(L6).click(function () {
            routes = [X1, X2, M6];
            Lobject = this;
            playSlideVoice('sound/' + this.getAttribute('id'));
        });

        interactive = [
            S1, S2,
            T1, T2,
            U1, U2,
            V1, V2,
            W1, W2,
            X1, X2
        ];

        end = [
           0, M1, M2, M3, M4, M5, M6
        ];

        end.forEach(function (item, i) {
            $(item).click(function () {
                if (routes[current] === item) {
                    var L = LO;
                    var elem = routes[current].getBoundingClientRect();
                    var x = (elem.x / 2 - L.x / 2);
                    var y = (elem.y / 2 - L.y / 2);
                    Lobject.setAttribute("transform", "matrix(1, 0, 0, 1, " + x + ", " + y + ") ");
                    Lobject = LO = routes = null;
                    current = 0;
                    item.setAttribute('opacity', 0);
                    playSlideVoice('sound/L' + i, 0);
                } else {
                    playSlideVoice('sound/bad.mp3',1,1);
                }
            })
        });

        interactive.forEach(function (item, i) {
            $(item).click(function () {
                if (routes[current] === item) {
                    if (LO == null) {
                        LO = Lobject.getBoundingClientRect();
                    }
                    var L = LO;
                    var elem = routes[current].getBoundingClientRect();
                    var x = (elem.x / 2 - L.x / 2);
                    var y = (elem.y / 2 - L.y / 2);
                    Lobject.setAttribute("transform", "matrix(1, 0, 0, 1, " + x + ", " + y + ") ");
                    current++;
                    playSlideVoice('sound/' + item.getAttribute('id'), 0);
                } else {
                    playSlideVoice('sound/bad.mp3',1,1);
                }
            });
        });

    });

    hideOverlay(500);
    $('.next-slide').click(function () {
        nextSlide();
    });
    $('.button, .replay').click(function () {
        $('.table__elem.active').removeClass('active').removeClass('on-top');
        var elem = $(this).attr('data-action');
        buttonAction(elem);
    });
});


/* Buttons */
function buttonAction(elem) {
    $(elem).addClass('active').addClass('on-top');
    if (elem == 10) {
        replaySlide();
    }
    setQuest(elem);

}

