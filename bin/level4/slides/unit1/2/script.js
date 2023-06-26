const country = [];

$(document).ready(function () {
    hideOverlay(500);

    $('.next-slide').click(function () {
        nextSlide();
    });

    var object = document.getElementById("svgelem"); //получаем элмент object

    object.addEventListener('load', function () {
        var svgDocument = object.contentDocument; //получаем svg элемент внутри object
        let C1 = svgDocument.getElementById("gb"),
            C2 = svgDocument.getElementById("th"),
            C3 = svgDocument.getElementById("fi"),
            C4 = svgDocument.getElementById("vn"),
            C5 = svgDocument.getElementById("gb"),
            C6 = svgDocument.getElementById("mx"),
            C7 = svgDocument.getElementById("jp"),
            C8 = svgDocument.getElementById("EGYPT"),
            C9 = svgDocument.getElementById("PERU");

        country.push(
            {
                element: C1,
                transform: 'translate (0, 0) scale (1.5)',
                reverseTransform: 'translate (0, 0) scale (1)',
                class: 'scotland'
            },
            {
                element: C2,
                transform: 'translate (0, 0) scale (1.5)',
                reverseTransform: 'translate (0, 0) scale (1)',
                class: 'red'
            },
            {
                element: C3,
                transform: 'translate (0, 0) scale (1.5)',
                reverseTransform: 'translate (0, 0) scale (1)',
                class: 'purple'
            },
            {
                element: C4,
                transform: 'translate (0, 0) scale (1.5)',
                reverseTransform: 'translate (0, 0) scale (1)',
                class: 'green'
            },
            {
                element: C5,
                transform: 'translate (0, 0) scale (1.5)',
                reverseTransform: 'translate (0, 0) scale (1)',
                class: 'england'
            },
            {
                element: C6,
                transform: 'translate (0, 0) scale (1.5)',
                reverseTransform: 'translate (0, 0) scale (1)',
                class: 'blue'
            },
            {
                element: C7,
                transform: 'translate (0, 0) scale (1.5)',
                reverseTransform: 'translate (0, 0) scale (1)',
                class: 'red'
            },
            {
                element: C8,
                transform: 'translate (0, 0) scale (1.5)',
                reverseTransform: 'translate (0, 0) scale (1)',
                class: 'green'
            },
            {
                element: C9,
                transform: 'translate (0, 0) scale (1.5)',
                reverseTransform: 'translate (0, 0) scale (1)',
                class: 'purple'
            }
        )

    });


    $('.button, .replay').click(function () {
        if ($('#block').val() != 1) {
            $('.table__elem.active').removeClass('active').removeClass('on-top');
            var elem = $(this).attr('data-action');
            buttonAction(elem);
        }
    });
});

function showCountry(country) {
    $(country.element).attr('transform', country.transform);
    $(country.element).find('path').addClass(country.class);

    setTimeout(() => {
        $(country.element).find('path').removeClass(country.class);
        $(country.element).attr('transform', country.reverseTransform);
    }, 2000);
}

/* Buttons */
function buttonAction(elem) {

    if (elem == 1) {
        playSlideVoice('sound/1', 1);
        showCountry(country[elem - 1]);
    }

    if (elem == 2) {
        playSlideVoice('sound/2', 1);
        showCountry(country[elem - 1]);
    }

    if (elem == 3) {
        playSlideVoice('sound/3', 1);
        showCountry(country[elem - 1]);
    }

    if (elem == 4) {
        playSlideVoice('sound/4', 1);
        showCountry(country[elem - 1]);
    }

    if (elem == 5) {
        playSlideVoice('sound/5', 1);
        showCountry(country[elem - 1]);
    }


    if (elem == 6) {
        playSlideVoice('sound/6', 1);
        showCountry(country[elem - 1]);
    }

    if (elem == 7) {
        playSlideVoice('sound/7', 1);
        showCountry(country[elem - 1]);
    }

    if (elem == 8) {
        playSlideVoice('sound/8', 1);
        showCountry(country[elem - 1]);
    }

    if (elem == 9) {
        playSlideVoice('sound/9', 1);
        showCountry(country[elem - 1]);
    }


    if (elem == 20) {
        playSlideVoice('sound/i', 1);
    }
}