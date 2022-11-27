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

/***
 * Start Jump Animation
 * */

let jumpImageNumber = 1;
let jumpAnimationNumber = 0;
let girlMarginTop = 152;

function jumpAnimation() {
    jumpImageNumber++;
    if (jumpImageNumber <= 5) {
        girlMarginTop = girlMarginTop - 60;
        $("#girl").css("top", "" + girlMarginTop + "px");
    }
    if (jumpImageNumber >= 7) {
        girlMarginTop = girlMarginTop + 60;
        $("#girl").css("top", "" + girlMarginTop + "px");
    }

    if (jumpImageNumber === 10) {
        jumpImageNumber = 1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = 0;
        runImageNumber = 0;
        runAnimationStart();
    }
    $("#girl").attr("src", "assets/images/png/Jump__00" + jumpImageNumber + ".png");
}

function jumpAnimationStart() {
    jumpAnimationNumber = setInterval(jumpAnimation, 100);
    runImageNumber = 0;
    clearInterval(idleAnimationNumber);
    clearInterval(runAnimationNumber);
}

/***
 * End Jump Animation
 * */

/***
 * Start Fly Animation
 * */

let flyImageNumber = 1;
let flyAnimationNumber = 0;

function flyAnimation() {
    flyImageNumber++;
    if (flyImageNumber === 10) {
        flyImageNumber = 1;
    }
    $("#girl").attr("src", "assets/images/png/Glide_00" + flyImageNumber + ".png")
}

function flyAnimationStart() {
    flyAnimationNumber = setInterval(flyAnimation, 100);
}

/***
 * End Fly Animation
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
    } else if (e.keyCode === 32) {
        clearInterval(idleAnimationNumber);
        idleAnimationNumber = 0;

        if (jumpAnimationNumber === 0) {
            jumpAnimationStart();
        }
        if (moveBackgroundAnimationId === 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100)
        }
    } else if (e.keyCode === 113) {
        if (flyAnimationNumber === 0) {
            flyAnimationStart();
        }
        clearInterval(idleAnimationNumber);
        idleAnimationNumber = 0;

        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = 0;

        clearInterval(runAnimationNumber);
        runAnimationNumber = 0;
    }
});

