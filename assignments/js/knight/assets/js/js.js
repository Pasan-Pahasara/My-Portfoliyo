/**
 * @author : Pasan Pahasara
 * @since : 0.1.0
 **/

let id = 0;
const music = new Audio('assets/audio/Kitt  Scanner Sound HD.mp3');
var kitt = {
    count: 0,
    tempArray: [],
    leftColorArray: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', "#b9a7a7", '#a67d7d', '#966161', '#bc6060', '#b84747', '#dc4141'],
    rightColorArray: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#dc4141', '#b84747', '#bc6060', '#966161', '#a67d7d', "#b9a7a7"],

    animateLeft: function () {
        var lastColor = this.tempArray.pop();
        this.tempArray.unshift(lastColor);
    },
    animateRight: function () {
        var firstColor = this.tempArray.shift();
        this.tempArray.push(firstColor);
    },
    animate: function () {
        this.count++;
        if (this.count <= this.leftColorArray.length) {
            this.tempArray = this.leftColorArray;
            this.animateLeft();
        } else {
            if (this.count >= (this.rightColorArray.length * 2)) {
                this.count = 0;
            }
            this.tempArray = this.rightColorArray;
            this.animateRight();
        }
    }
}

renderKit();

function renderKit() {
    $('#container').empty();
    for (let i = 0; i < (kitt.tempArray.length) / 2; i++) {
        $('#container').append(`<div style="background-color: ${kitt.tempArray[i]}"></div>`);
    }
    kitt.animate();
}

$("#btnStart").click(function () {
    clearInterval(id);
    id = setInterval(renderKit, 130);
    music.play();
    music.loop = true;
});

$("#btnStop").click(function () {
    clearInterval(id);
    music.pause();
});