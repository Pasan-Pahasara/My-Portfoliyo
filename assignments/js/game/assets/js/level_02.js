/**
 * @author : Pasan Pahasara
 * @since : 0.1.0
 **/

/***
 * Start Barrier Animation
 * */

let barrierMarginLeft = 1600;

function createBarrier() {
    for (let i = 0; i <= 20; i++) {
        $("#barrier2").append("<div class='barrier2' style='margin-left: " + barrierMarginLeft + "px' id='barrier2" + i + "'></div>");

        if (i < 5) {
            barrierMarginLeft = barrierMarginLeft + 1000;
        }
        if (i >= 5) {
            barrierMarginLeft = barrierMarginLeft + 600;
        }
    }
}

let barrierAnimationId = 0;

var tempI = -2;

function barrierAnimation() {
    for (let i = 0; i < 20; i++) {
        let css = parseInt($("#barrier2" + i).css("margin-left"));

        let newMarginLeft = css - 25;
        $("#barrier2" + i).css("margin-left", newMarginLeft - 25 + "px")
        if (newMarginLeft >= -110 & newMarginLeft <= 100) {
            if (girlMarginTop > 175) {
                if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4 || i === 5 || i === 6 || i === 7 || i === 8 || i === 9 || i === 10 || i === 11 || i === 12 || i === 13 || i === 14 || i === 15 || i === 16 || i === 17 || i === 18 || i === 19 || i === 20) {
                    if (tempI < i && $("#heart3").css('visibility') !== "hidden" && $("#heart2").css('visibility') !== "hidden" && $("#heart1").css('visibility') !== "hidden") {
                        $("#heart3").css('visibility', 'hidden');
                        tempI = i;
                    } else if (tempI < i && $("#heart3").css('visibility') === "hidden" && $("#heart2").css('visibility') !== "hidden" && $("#heart1").css('visibility') !== "hidden") {
                        $("#heart2").css('visibility', 'hidden');
                        tempI = i;
                    } else if (tempI < i && $("#heart3").css('visibility') === "hidden" && $("#heart2").css('visibility') === "hidden" && $("#heart1").css('visibility') !== "hidden") {
                        $("#heart1").css('visibility', 'hidden');
                        tempI = i;
                        clearInterval(barrierAnimationId);
                        clearInterval(runAnimationNumber);
                        runAnimationNumber = -1;

                        clearInterval(jumpAnimationNumber);
                        jumpAnimationNumber = -1;

                        clearInterval(moveBackgroundAnimationId);
                        moveBackgroundAnimationId = -1;
                        deadAnimationNumber = setInterval(girlDeadAnimation, 100);
                        deadTrack.play();
                        game_over();
                    }
                }
            }
        }
    }
}

/***
 * End Barrier Animation
 * */

$("#btnNext2").on('click', function (e) {
    window.location.href = "index3.html";
});

$("#btnRestart").on('click', function (e) {
    window.location.href = "index3.html";
});