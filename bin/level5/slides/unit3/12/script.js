var TIGER;
var quest;
var config;

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
        P7 = svgDocument.getElementById("P7");
        P8 = svgDocument.getElementById("P8");
        P9 = svgDocument.getElementById("P9");
        P10 = svgDocument.getElementById("P10");
        P11 = svgDocument.getElementById("P11");
        P12 = svgDocument.getElementById("P12");
        P13 = svgDocument.getElementById("P13");
        P14 = svgDocument.getElementById("P14");
        P15 = svgDocument.getElementById("P15");

        config = [
            {
                elem: P1,
                sound: 'apple',
                transform: 'transform: translate3d(100px, 160px, 0);'
            },
            {
                elem: P2,
                sound: 'banana',
                transform: 'transform: translate3d(0px, -260px, 0);'
            },
            {
                elem: P3,
                sound: 'kiwi',
                transform: 'transform: translate3d(160px, 160px, 0);'
            },
            {
                elem: P4,
                sound: 'watermelon',
                transform: 'transform: translate3d(0px, 150px, 0);'
            },
            {
                elem: P5,
                sound: 'mango',
                transform: 'transform: translate3d(310px, -210px, 0);'
            },
            {
                elem: P6,
                sound: 'orange',
                transform: 'transform: translate3d(0px, -210px, 0);'
            },
            {
                elem: P7,
                sound: 'strawberry',
                transform: 'transform: translate3d(-200px, 170px, 0);'
            },
            {
                elem: P8,
                sound: 'pear',
                transform: 'transform: translate3d(120px, -240px, 0);'
            },
            {
                elem: P9,
                sound: 'grapes',
                transform: 'transform: translate3d(230px, -100px, 0);'
            },
            {
                elem: P10,
                sound: 'carrot',
                transform: 'transform: translate3d(110px, 40px, 0);'
            },
            {
                elem: P11,
                sound: 'cucumber',
                transform: 'transform: translate3d(160px, 170px, 0);'
            },
            {
                elem: P12,
                sound: 'potato',
                transform: 'transform: translate3d(-26px, -210px, 0);'
            },
            {
                elem: P13,
                sound: 'mushroom',
                transform: 'transform: translate3d(214px, -220px, 0);'
            },
            {
                elem: P14,
                sound: 'broccoli',
                transform: 'transform: translate3d(54px, 170px, 0);'
            },
            {
                elem: P15,
                sound: 'eggplant',
                transform: 'transform: translate3d(-106px, 190px, 0);'
            }
        ];

        $.each(config, (k, v) => {
            $(v.elem).click(() => {
                if (quest == k) {
                    v.elem.setAttribute('style', v.transform);
                    playNewSlideVoice(`${v.sound}.mp3`, 1);
                    quest = null;
                } else {
                    playNewSlideVoice('bad.mp3', 1);
                }
            })
        })


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
        case "20":
            replaySlide();
            break;
    }

    quest = elem - 1;

    playNewSlideVoice(`${config[parseInt(quest)].sound}.mp3`, 1);
}

