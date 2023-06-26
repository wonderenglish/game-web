var audio;
$(document).ready(function () {
    var timeout;
    hideOverlay(1000);
    audio = playSong('assets/sound/main-theme.mp3');
    showMenu(1);
    showMenu(2);
    showMenu(3);

    $('.action').click(function () {
        route = $(this).attr('data-route');

        showOverlay(500, audio);
        setTimeout(function () {
            window.location.href = './bin/' + route + '/index.html';
        }, 1000);
    });

    $('.showmenu').click(function () {
        hideMenu(1);
        hideMenu(2);
        hideMenu(3);
        showLevels();
    });
    $('.level').click(function () {
        if (!$(this).hasClass('disabled')) {
            var level = $(this).attr('data-l');
            console.log(level);
            $.getJSON( "data.json", function( data ) {
                $('.unit__holder').html('');
                $.each( data["level_" + level], function( i, item ) {
                    var elem = "<div data-u='" + i + "' data-b='" + item.half + "' class='unit " + item.available + "'>U" + i + "</div>";
                    $('.unit__holder').append(elem);
                });
            });

            $('#route').val(level);
            hideLevels();
            showUnits();
        }
    });
    $('.unit').click(function () {

    });

    $('.back__units').click(function () {
        hideUnits();
        showLevels();
    });
    $('.back__levels').click(function () {
        hideLevels();
        showMenu(1);
        showMenu(2);
        showMenu(3);
    })
});

function showLevels() {
    $('.levels').show();
    setTimeout(function () {
        $('.levels').addClass('active');
    }, 1000);
}

function showUnits() {
    $('.units').show();
    setTimeout(function () {
        $('.units').addClass('active');
    }, 1000);
}

function hideLevels() {
    $('.levels').removeClass('active');
    setTimeout(function () {
        $('.levels').hide();
    }, 1000);
}

function hideUnits() {
    $('.units').removeClass('active');
    setTimeout(function () {
        $('.units').hide();
    }, 1000);
}

function hideOverlay(delay) {
    setTimeout('$(".overlay").addClass("hide")', delay);
    setTimeout('$(".overlay").hide();', delay + 1000);
    setTimeout('$(".main-menu__title").addClass("reveal");', delay);

}

function showMenu(n) {
    if (n > 1) {
        b = n * 100;
    } else {
        b = n;
    }
    setTimeout('$(".main-menu__levels_item:nth-child(' + n + ')").removeClass("disabled").addClass("active")', 1000 + b);
}

function hideMenu(n) {
    if (n > 1) {
        b = n * 100;
    } else {
        b = n;
    }
    setTimeout('$(".main-menu__levels_item:nth-child(' + n + ')").addClass("disabled").removeClass("active")', 300 + b);
}

function showOverlay(delay, audio) {
    $(audio).animate({volume: 0}, 1000);
    setTimeout('$(".overlay").show();', delay);
    setTimeout('$(".overlay").removeClass("hide")', delay);
}

function playSong(url) {
    var audio = new Audio(url);
    audio.play();
    return audio;
}

$(document).on('click', '.unit', function () {
    var level = $('#route').val();
    var unit = $(this).attr('data-u');
    var slide = $(this).attr('data-b');
    if ($(this).hasClass('toBreak')){
        clearTimeout(timeout);
        showOverlay(500, audio);
        setTimeout(function () {
            window.location.href = './bin/level' + level + '/slides/unit' + unit + '/' + slide + '/index.html';
        }, 1000);
    } else {
        $(this).addClass('toBreak');
        timeout = setTimeout(function (args) {
            showOverlay(500, audio);
            setTimeout(function () {
                window.location.href = './bin/level' + level + '/slides/unit' + unit + '/0/index.html';
            }, 1000);
        }, 1000);
    }
});
