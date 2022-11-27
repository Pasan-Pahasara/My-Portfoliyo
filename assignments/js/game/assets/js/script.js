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