const drawers = [];

function removeActive(elem) {
    elem = elem || '.table__elem';
    setTimeout(function () {
        $(elem + '.active').removeClass('active');
    }, 2000);
    setTimeout(function () {
        $(elem + '.on-top').removeClass('on-top');
        if ($('#block').val() == 1) {
            $('#block').val(0);
        }
    }, 3200);
}

function hideOverlay(delay) {
    setTimeout('$(".overlay").addClass("hide")', delay);
    setTimeout('$(".overlay").hide();', delay + 1000);
    setTimeout('$(".main-menu__title").addClass("reveal");', delay);
}

function hideTitle(delay, audio) {
    setTimeout(function () {
        $(audio).animate({volume: 0}, 1000);
        playSong('sound/vocabulary.wav');
    }, delay);
    setTimeout('$(".title").addClass("hide")', delay + 1000);
    setTimeout('$(".title").hide();', delay + 2200);
}

function showOverlay(delay) {
    setTimeout('$(".overlay").show();', delay);
    setTimeout('$(".overlay").removeClass("hide")', delay);
}

function playSong(url) {
    var audio = new Audio(url);
    audio.play();
    return audio;
}

function playSlideVoice(url, delay, rate) {
    delay = delay || 1000;
    rate = rate || 1;
    setTimeout(function () {
        var audio = new Audio(url);
        audio.playbackRate = rate;
        audio.play();
        audio.onended = function () {
            removeActive()
        };
    }, delay);
}

function playSlideWithoutRemove(url, delay, rate) {
    delay = delay || 1000;
    rate = rate || 1;
    setTimeout(function () {
        var audio = new Audio(url);
        audio.playbackRate = rate;
        audio.play();
    }, delay);
}

function playDuration(url, delay) {
    delay = delay || 5000;
    var audio = new Audio(url);
    audio.play();
    setTimeout(function () {
        audio.pause();
        audio.currentTime = 0;
    }, delay);
}


function phonicsSetQuestion(id) {
    $('#question').attr('data-id', id);
}

function storyCheckAnswer(id, elem) {
    elem = elem || null;
    var answer = id;
    var question = $('#question').attr('data-id');
    if (question) {
        if (answer == question) {
            playSlideVoice('sound/' + id, 1);
            $(elem).addClass('active').addClass('on-top');
            removeActive(elem);
        } else {
            playSong('sound/bad.mp3');
        }
    }
}

function phonicsCheckAnswer(id, elem, sound) {
    elem = elem || null;
    sound = sound || null;
    var answer = id;
    var question = $('#question').attr('data-id');
    if (question) {
        if (answer == question) {
            if (sound) {
                playSlideVoice('sound/' + sound, 1);
            } else {
                playSlideVoice('sound/' + id, 1);
            }
            phonicsMakeGlow(elem, 'green');
        } else {
            playSlideVoice('sound/bad.mp3', 1);
            $(elem).removeClass('glow-green');
            phonicsMakeGlow(elem, 'red');
        }
    }
}

function replaySlide() {
    showOverlay(500);
    setTimeout('location.reload();', 1000);
}

function phonicsMakeGlow(elem, color) {
    $(elem).addClass('glow-' + color);
}

function phonicsFindLetter(elem, id) {
    var answer = id;
    var question = $('#question').attr('data-id');
    if (question) {
        if (answer == question) {
            playSlideVoice('sound/' + id, 1);
            phonicsMakeGlow(elem, 'green');
        } else {
            playSlideVoice('sound/bad.mp3', 1);
            phonicsMakeGlow(elem, 'red');
        }
    }
}

function storySetRandom(array) {

    var arr = shuffle(array);

    var n = 0;
    $(".slides-navigation__item.random").each(function () {
        $(this).attr('data-action', arr[n]);
        n++;
    });

    $(".number.random").each(function () {
        $(this).attr('data-id', arr[n]);
        $(this).find('img').attr('src', 'img/' + arr[n] + '.png');
        n++;
    });


}


function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

function getNextDirName() {
    slug = window.location.pathname;
    res = slug.split('/');
    if (res[res.length - 1] == 'index.html' || res[res.length - 1] == '') {
        res.pop();
    }
    slug = res[res.length - 1] * 1 + 1;
    return slug;
}

function getUnitName() {
    slug = window.location.pathname;
    res = slug.split('/');
    if (res[res.length - 1] == 'index.html' || res[res.length - 1] == '') {
        res.pop();
    }
    res.pop();
    slug = res[res.length - 1];
    return slug;
}

function getPrevDirName() {
    slug = window.location.pathname;
    res = slug.split('/');
    if (res[res.length - 1] == 'index.html' || res[res.length - 1] == '') {
        res.pop();
    }
    slug = res[res.length - 1] * 1 - 1;
    if (slug == 0) {
        slug = 1;
    }
    return slug;
}

function nextSlideAuto() {
    showOverlay(5000);
    setTimeout(function () {
        var dir = getNextDirName();
        window.location.href = "../" + dir + "/index.html";
    }, 6000);
}

function nextSlideAutoDelay(delay) {
    showOverlay(delay);
    setTimeout(function () {
        var dir = getNextDirName();
        window.location.href = "../" + dir + "/index.html";
    }, delay + 1000);
}


function nextSlide() {
    showOverlay(500);
    var link = $(this).attr('data-link');
    setTimeout(' var dir = getNextDirName(); window.location.href = "../" + dir + "/index.html";', 1000);
}

function prevSlide() {
    showOverlay(500);
    setTimeout(' var dir = getPrevDirName(); window.location.href = "../" + dir + "/index.html";', 1000);
}

function goToMenu() {
    showOverlay(500);
    setTimeout('window.location.href = "../../../../../index.html";', 1000);
}

function setFrog(id) {
    if ($('#question').val() == '') {
        $('#question').val(id);
    } else {
        playSong('sound/bad.mp3');
    }
}

function setQuest(id) {
    $('#question').val(id);
}

function checkFrog(id, audio, newid) {
    var frog_id = $('#question').val();
    if (id == frog_id) {
        $('#question').val(newid);
        playSong('sound/' + audio);
        return true;
    } else {
        playSong('sound/bad.mp3');
        return false;
    }
}

function clearFrog() {
    $('#question').val();
}

function roundSound(url, type) {

    if (type == 'play') {
        audio = new Audio(url);
        audio.playbackRate = rate;
        audio.play();
    }

    if (type == 'stop') {
        audio.animate({volume: 1}, 1000);
        setTimeout(function () {
            audio.stop();
        }, 1000);
    }
}

$(document).ready(function () {
    $('.app').prepend('<div class="controls">' +
        '<div class="button" onclick="prevSlide()">' +
        '<img src="../../../../../assets/img/reply.png">' +
        '</div>' +
        '<div class="button" onclick="goToMenu()"> ' +
        '<img src="../../../../../assets/img/home.png">' +
        ' </div>' +
        '</div>');

    $('.controls').click(function () {
        $(this).addClass('active');
    })
    $('.next-slide').html('>');

    document.querySelectorAll('canvas.drawer').forEach((el) => {
        el.setAttribute('width', el.parentNode.clientWidth);
        el.setAttribute('height', el.parentNode.clientHeight);
        drawers.push({
            id: el.getAttribute('id'),
            drawer : new Drawer(el),
        });
    });

    document.querySelectorAll('.color-pallete .color').forEach((el) => {
        el.addEventListener('click', () => {
            let color = el.getAttribute('data-color');

            drawers.forEach((el) => {
                el.drawer.color(color);
            })
        });
    });

    document.querySelectorAll('.clear-button').forEach((el) => {
        el.addEventListener('click', () => {
            let id = el.parentNode.querySelector('.drawer').getAttribute('id');

            drawers.forEach((el) => {
                if(el.id === id){
                    el.drawer.erase();
                }
            })
        });
    })
});

class Drawer {
    constructor(canvas, width, height) {
        this.canvas = canvas;
        this.flag = false;
        this.prevX = 0;
        this.currX = 0;
        this.prevY = 0;
        this.currY = 0;
        this.dot_flag = false;
        this.x = 'black';
        this.y = 3;

        this.ctx = this.canvas.getContext("2d");
        this.w = width;
        this.h = height;

        this.addListeners();
    }


    addListeners() {
        this.canvas.addEventListener("pointermove", (e) => {
            this.findxy('move', e)
        }, false);
        this.canvas.addEventListener("pointerdown", (e) => {
            this.findxy('down', e)
        }, false);
        this.canvas.addEventListener("pointerup", (e) => {
            this.findxy('up', e)
        }, false);
        this.canvas.addEventListener("pointerleave", (e) => {
            this.findxy('out', e)
        }, false);
        this.canvas.addEventListener("pointerout", (e) => {
            this.findxy('out', e)
        }, false);
    }

    color(obj) {
        switch (obj) {
            case "green":
                this.x = "green";
                break;
            case "blue":
                this.x = "blue";
                break;
            case "red":
                this.x = "red";
                break;
            case "yellow":
                this.x = "yellow";
                break;
            case "orange":
                this.x = "orange";
                break;
            case "black":
                this.x = "black";
                break;
            case "white":
                this.x = "white";
                break;
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.prevX, this.prevY);
        this.ctx.lineTo(this.currX, this.currY);
        this.ctx.strokeStyle = this.x;
        this.ctx.lineWidth = this.y;
        this.ctx.stroke();
        this.ctx.closePath();
    }

    erase() {
        console.log(this.canvas.getContext('2d'));
        this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    findxy(res, e) {
        if (res === 'down') {
            this.prevX = this.currX;
            this.prevY = this.currY;
            this.currX = e.clientX - this.canvas.offsetLeft;
            this.currY = e.clientY - this.canvas.offsetTop;

            this.flag = true;
            this.dot_flag = true;
            if (this.dot_flag) {
                this.ctx.beginPath();
                this.ctx.fillStyle = this.x;
                this.ctx.fillRect(this.currX, this.currY, 2, 2);
                this.ctx.closePath();
                this.dot_flag = false;
            }
        }
        if (res === 'up' || res === "out") {
            this.flag = false;
        }

        if (res === 'move') {
            if (this.flag) {
                this.prevX = this.currX;
                this.prevY = this.currY;
                this.currX = e.clientX - this.canvas.offsetLeft;
                this.currY = e.clientY - this.canvas.offsetTop;
                this.draw();
            }
        }
    }
}
