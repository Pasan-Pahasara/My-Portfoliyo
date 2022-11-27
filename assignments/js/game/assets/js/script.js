/**
 * @author : Pasan Pahasara
 * @since : 0.1.0
 **/

$(document).ready(function () {
    idleAnimationStart();
});

/***
 * Start Idle Animation
 * */
let idleImageNumber = 1;
let idleAnimationNumber = 0;

function idleAnimation() {
    idleImageNumber++;
    if (idleImageNumber === 10) {
        idleImageNumber = 1;
    }
    $("#girl").attr("src", "assets/images/png/Idle__00" + idleImageNumber + ".png");
}

function idleAnimationStart() {
    idleAnimationNumber = setInterval(idleAnimation, 200);
}

/***
 * End  Idle Animation
 * */

/***
 * Start Run Animation
 * */

let runImageNumber = 1;
let runAnimationNumber = 0;

function runAnimation() {
    runImageNumber++;
    if (runImageNumber === 10) {
        runImageNumber = 1;
    }
    $("#girl").attr("src", "assets/images/png/Run__00" + runImageNumber + ".png");
}

function runAnimationStart() {
    runAnimationNumber = setInterval(runAnimation, 100);
    clearInterval(idleAnimationNumber);
}

/***
 * End Run Animation
 * */

$(document).on('keypress', function (e) {
    // alert(e.which);
    if (e.keyCode === 13) {
        clearInterval(idleAnimationNumber);
        idleAnimationNumber = 0;

        runAnimationStart();
    }
});