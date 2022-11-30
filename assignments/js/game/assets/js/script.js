/**
 * @author : Pasan Pahasara
 * @since : 0.1.0
 **/

$(document).ready(function () {
    idleAnimationStart();
    createBarrier();
    hideComponents();
    removeBlur();
});

let backgroundMusic = new Audio();
backgroundMusic.src = "assets/audio/happy-sun.mp3";
backgroundMusic.play().then(r => {
    backgroundMusic.loop = true;
});


let jumpTrack = new Audio();
jumpTrack.src = "assets/audio/cartoon-jump-6462.mp3";

let deadTrack = new Audio();
deadTrack.src = "assets/audio/welcome-to-hell-103646.mp3";

let flyTrack = new Audio();
flyTrack.src = "assets/audio/swing-whoosh-110410.mp3";

let winnerTrack = new Audio();
winnerTrack.src = "assets/audio/winner.mp3";

let gameOverTrack = new Audio();
gameOverTrack.src = "assets/audio/GameOver.wav";

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
    flyTrack.pause();
    // backgroundMusic.play();
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
    flyTrack.pause();
    backgroundMusic.play();
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
    flyTrack.loop;
    if (score >= 320) {
        winResults();
    }
}

/***
 * End Move Background
 * */

/***
 * Start Jump Animation
 * */

let jumpImageNumber = 1;
let jumpAnimationNumber = 0;
let girlMarginTop = 180;

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
    flyTrack.pause();
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
    flyTrack.play().then(r => {
        flyTrack.loop = true;
    });
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
        removeBlur();
    }
        // else if (e.keyCode === 122) {
        //     clearInterval(idleAnimationNumber);
        //     idleAnimationNumber = 0;
        //
        //     if (flyAnimationNumber !== 0) {
        //         clearInterval(idleAnimationNumber);
        //         idleAnimationNumber = 0;
        //     } else {
        //         idleAnimationStart();
        //     }
        //
        //     clearInterval(runAnimationNumber);
        //     runAnimationNumber = 0;
        //
        //     clearInterval(barrierAnimationId2);
        //     barrierAnimationId2 = 0;
        //
        //     clearInterval(jumpAnimationNumber);
        //     jumpAnimationNumber = 0;
        //
        //     clearInterval(moveBackgroundAnimationId);
        //     moveBackgroundAnimationId = 0;
        //
        //     blurComponents();
        //
        //     $(document).off("32");
        //     $(document).off("13");
        //
    // }
    else if (e.keyCode === 32) {
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
        removeBlur();
        jumpTrack.play();

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

        removeBlur();
    }
});

$("#btnSound").on('click', function (e) {
    if (!backgroundMusic.paused) {
        backgroundMusic.pause();
        $("#btnSound").removeClass("sound-on");
    } else {
        backgroundMusic.play().then(r => {
            backgroundMusic.loop = true;
        });
        $("#btnSound").addClass("sound-on");
    }
});

function blurComponents() {
    $(".background1").addClass("bgBlur");
    $(".background2").addClass("bgBlur");
    $(".background3").addClass("bgBlur");
    $(".background4").addClass("bgBlur");
}

function removeBlur() {
    $(".background1").removeClass("bgBlur");
    $(".background2").removeClass("bgBlur");
    $(".background3").removeClass("bgBlur");
    $(".background4").removeClass("bgBlur");
}

function pauseAll() {
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
}

$("#btnPause").on('click', function (e) {
    $("body").css("pointer-events", "none");
    $("#btnPause").css("pointer-events", "none");
    $("#btnResume").css("pointer-events", "auto");
    $("#btnRestart").css("pointer-events", "auto");
    $(document).off("32");
    $(document).off("13");
    pauseAll();

    $("#btnPause").addClass("pause");
    $("#btnResume").removeClass("pause");

    blurComponents();

    $("#pause-bg").css("display", "block");
    $("#titleImg").css("display", "block");

    backgroundMusic.pause();
});

$("#btnResume").on('click', function (e) {
    $("#btnPause").css("pointer-events", "auto");
    $("#btnResume").addClass("pause");
    $("#btnPause").removeClass("pause");
    $(document).on("32");
    $(document).on("13");
    removeBlur();
    hideComponents();
    backgroundMusic.play();
});

function hideComponents() {
    $("#pause-bg").css("display", "none");
    $("#titleImg").css("display", "none");
    $("#gameOver_title-img").css("display", "none");
    $("#gameWin_title-img").css("display", "none");
    $("#btnNext1").css("display", "none");
}

$("#controlsWrapper").hover(function () {
    $("#controlsWrapper").css("cursor", "grab");

}, function () {
    $("#controlsWrapper").css("cursor", "pointer");
});

function game_over() {
    blurComponents();

    $("#gameOverWrapper").css("display", "block");
    $("#gameOver_title-img").css("display", "block");

    backgroundMusic.pause();
    gameOverTrack.play();
    $("#btnSound").removeClass("sound-on");
}

function winResults() {
    blurComponents();
    $("#gameWin_title-img").css("display", "block");
    $(".btnNext").css("display", "block");
    $("#btnPause").css("pointer-events", "none");
    $("#btnResume").css("pointer-events", "none");
    pauseAll();

    backgroundMusic.pause();
    winnerTrack.play();
    $("#btnSound").removeClass("sound-on");
}


