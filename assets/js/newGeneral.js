var audio = null;

function playNewSlideVoice(name, delay, rate) {
    let url = `../../../sound/${name}`;

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

function roundNewSound(type, delay) {

    if (type == 'play') {
        audio = new Audio('../../../sound/round.mp3');
        audio.play();
    }

    if (type == 'stop') {
        $(audio).animate({volume: 0}, 1000);
        setTimeout(function () {
            audio.pause();
            audio.currentTime = 0;
        }, 1000);
    }
}

function newShuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}