/**
 * @author : Pasan Pahasara
 * @since : 0.1.0
 **/

/***
 * Start Barrier Animation
 * */

let barrierMarginLeft = 500;

function createBarrier() {
    for (let i = 0; i <= 10; i++) {
        $("#barrier3").append("<div class='barrier3' style='margin-left: " + barrierMarginLeft + "px' id='barrier3" + i + "'></div>");

        if (i < 5) {
            barrierMarginLeft = barrierMarginLeft + 2000;
        }
        if (i >= 5) {
            barrierMarginLeft = barrierMarginLeft + 1000;
        }
    }
}

let barrierAnimationId = 0;

var tempI = -2;

function barrierAnimation() {
    for (let i = 0; i < 6; i++) {
        let css = parseInt($("#barrier3" + i).css("margin-left"));

        let newMarginLeft = css - 25;
        $("#barrier3" + i).css("margin-left", newMarginLeft - 25 + "px")
        if (newMarginLeft >= -110 & newMarginLeft <= 100) {
            if (girlMarginTop > 175) {
                if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4 || i === 5 || i === 6) {
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

$("#btnNext3").on('click', function (e) {
    window.location.href = "index4.html";
});

$("#btnRestart").on('click', function (e) {
    window.location.href = "index4.html";
});