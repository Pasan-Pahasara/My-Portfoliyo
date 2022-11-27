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

/***
 * Start Move Background
 * */
let backgroundImagePositionX = 0;
let moveBackgroundAnimationId = 0;
let score = 0;

function moveBackground() {
    backgroundImagePositionX = backgroundImagePositionX - 20;
    $("#moveBackground").css("background-position-x", +backgroundImagePositionX + "px");
    score++;
    $("#score").text(score);
}

/***
 * End Move Background
 * */

$(document).on('keypress', function (e) {
    // alert(e.which);
    if (e.keyCode === 13) {
        clearInterval(idleAnimationNumber);
        idleAnimationNumber = 0;

        runAnimationStart();

        if (moveBackgroundAnimationId === 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100)
        }
    }
});