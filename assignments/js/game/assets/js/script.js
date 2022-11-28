/**
 * @author : Pasan Pahasara
 * @since : 0.1.0
 **/

$(document).ready(function () {
    idleAnimationStart();
    createBarrier();
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
let girlMarginTop = 205;

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
    jumpAnimationNumber = setInterval(jumpAnimation, 150);
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

/***
 * Start Dead Animation
 * */

let deadImageNumber = 1;
let deadAnimationNumber = 0;

function girlDeadAnimation() {
    deadImageNumber++;
    if (deadImageNumber === 10) {
        deadImageNumber = 9;
    }
    setInterval(idleAnimationNumber);
    idleAnimationNumber = 0;
    $("#girl").attr("src", "assets/images/png/Dead__00" + deadImageNumber + ".png")
}

/***
 * End Dead Animation
 * */

/***
 * Start Barrier Animation
 * */

let barrierMarginLeft = 500;

function createBarrier() {
    for (let i = 0; i <= 10; i++) {
        $("#barrier").append("<div class='barrier' style='margin-left: " + barrierMarginLeft + "px' id='barrier" + i + "'></div>");

        if (i < 5) {
            barrierMarginLeft = barrierMarginLeft + 2000;
        }
        if (i >= 5) {
            barrierMarginLeft = barrierMarginLeft + 1000;
        }
    }
}

let barrierAnimationId = 0;

function barrierAnimation() {
    for (let i = 0; i < 10; i++) {
        let css = parseInt($("#barrier" + i).css("margin-left"));

        let newMarginLeft = css - 25;
        $("#barrier" + i).css("margin-left", newMarginLeft - 25 + "px")

        if (newMarginLeft >= -110 & newMarginLeft <= 100) {
            if (girlMarginTop > 200) {
                if (i === 0) {
                    $("#heart3").css('visibility', 'hidden');
                }
                if (i === 1) {
                    $("#heart2").css('visibility', 'hidden');
                }
                if (i === 2) {
                    $("#heart1").css('visibility', 'hidden');

                    clearInterval(barrierAnimationId);

                    clearInterval(runAnimationNumber);
                    runAnimationNumber = -1;

                    clearInterval(jumpAnimationNumber);
                    jumpAnimationNumber = -1;

                    clearInterval(moveBackgroundAnimationId);
                    moveBackgroundAnimationId = -1;
                    deadAnimationNumber = setInterval(girlDeadAnimation, 100);
                }
            }
        }
    }
}

/***
 * End Barrier Animation
 * */

$(document).on('keypress', function (e) {
    // alert(e.which);
    if (e.keyCode === 13) {
        clearInterval(idleAnimationNumber);
        idleAnimationNumber = 0;

        clearInterval(runAnimationNumber);
        runAnimationNumber = 0;

        if (flyAnimationNumber === 0) {
            runAnimationStart();
        }

        if (moveBackgroundAnimationId === 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100)
        }
        if (barrierAnimationId === 0) {
            barrierAnimationId = setInterval(barrierAnimation, 150);
        }
    } else if (e.keyCode === 122) {
        clearInterval(idleAnimationNumber);
        idleAnimationNumber = 0;

        if (flyAnimationNumber !== 0) {
            clearInterval(idleAnimationNumber);
            idleAnimationNumber = 0;
        } else {
            idleAnimationStart();
        }

        clearInterval(runAnimationNumber);
        runAnimationNumber = 0;

        clearInterval(barrierAnimationId);
        barrierAnimationId = 0;

        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = 0;

        clearInterval(moveBackgroundAnimationId);
        moveBackgroundAnimationId = 0;

    } else if (e.keyCode === 32) {
        clearInterval(idleAnimationNumber);
        idleAnimationNumber = 0;

        clearInterval(flyAnimationNumber);
        flyAnimationNumber = 0;

        if (jumpAnimationNumber === 0) {
            jumpAnimationStart();
        }
        if (moveBackgroundAnimationId === 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100)
        }
        if (barrierAnimationId === 0) {
            barrierAnimationId = setInterval(barrierAnimation, 150);
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



