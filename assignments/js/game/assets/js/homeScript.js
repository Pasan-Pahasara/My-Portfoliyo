/**
 * @author : Pasan Pahasara
 * @since : 0.1.0
 **/

let homeTrack = new Audio();
homeTrack.src = "assets/melodyloops-happy-sun.mp3";
homeTrack.play();

(function () {

    if (!homeTrack.paused) {
        $("div#controller-icons>button#sound-icon").addClass("pressed");
    } else {
        $("div#controller-icons>button#sound-icon").removeClass("pressed");
    }

})();

$("#sound-icon").on('click', function (e) {
    if (!homeTrack.paused) {
        homeTrack.pause();
        $("div#controller-icons>button#sound-icon").removeClass("pressed");
    } else {
        homeTrack.play();
        $("div#controller-icons>button#sound-icon").addClass("pressed");
    }
});

$("#btnPlay").on('click', function (e) {
    window.location.href = "index1.html";
});

$(function () {
    $("#controller-icons").draggable({
        containment: "window"
    });
});

$("#controller-icons").hover(function () {
        // over
        $("#controller-icons").css("cursor", "grab");


    }, function () {
        // out
        $("#controller-icons").css("cursor", "pointer");
    }
);
