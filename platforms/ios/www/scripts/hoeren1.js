/**
 * Created by madam on 5/5/16.
 */

if (Number(localStorage["buttonh1"])) {
    $(".buttonh1").css("background-color", "#83c8a0");
}
if (Number(localStorage["buttonh2"])) {
    $(".buttonh2").css("background-color", "#83c8a0");
}
if (Number(localStorage["buttonh3"])) {
    $(".buttonh3").css("background-color", "#83c8a0");
}
if (Number(localStorage["buttonh4"])) {
    $(".buttonh4").css("background-color", "#83c8a0");
}
if (Number(localStorage["buttonl1"])) {
    $(".buttonl1").css("background-color", "#83c8a0");
}
if (Number(localStorage["buttonl2"])) {
    $(".buttonl2").css("background-color", "#83c8a0");
}
if (Number(localStorage["buttonl3"])) {
    $(".buttonl3").css("background-color", "#83c8a0");
}
if (Number(localStorage["buttonl4"])) {
    $(".buttonl4").css("background-color", "#83c8a0");
}
if (Number(localStorage["buttonl5"])) {
    $(".buttonl5").css("background-color", "#83c8a0");
}
if (Number(localStorage["buttons"])) {
    $(".buttons").css("background-color", "#83c8a0");
}


$("#qh1").val(localStorage['qh1']);
$("#q1").val(localStorage['q1']);
$("#q2").val(localStorage['q2']);
$("#q3").val(localStorage['q3']);
$("#q4").val(localStorage['q4']);



function startTimer(duration, display) {
    var diff, minutes, seconds;
    var start=Number(localStorage["starttime"]);

    function timer() {
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 024:59
            start = Date.now() + 1000;
        }
    };
    timer();
    setInterval(timer, 1000);
}


$(document).ready(function () {

    //Timer Counter
    window.onload = function () {
        var set_minutes = 60 * 100,
            display = document.querySelector('#timer');
        startTimer(set_minutes, display);
    };
    //Audio Player
    $("#audio").on("click", function () {
        $("#audio").toggleClass("fa-pause");

        var myaudio = document.getElementById("myaudio");
        if (myaudio.paused) {
            myaudio.play();
        }
        else {
            myaudio.pause();
        }
    });
    // Local stroage.

    $("#result").click(function () {

        $(".buttonh1").css("background-color", "#83c8a0");
        localStorage["buttonh1"] = 1;

        var answer1_0, answer1, answer2, answer3, answer4;
        // qh1
        if ($("#qh1").val() == 0) {
            answer1_0 = 5;
        }
        else {
            answer1_0 = 0;
        }

        // q1
        if ($("#q1").val() == 2) {
            answer1 = 5;
        }
        else {
            answer1 = 0;
        }

        // q2
        if ($("#q2").val() == 1) {
            answer2 = 5;
        }
        else {
            answer2 = 0;
        }

        // q3
        if ($("#q3").val() == 1) {
            answer3 = 5;
        }
        else {
            answer3 = 0;
        }
        // q4
        if ($("#q4").val() == 2) {
            answer4 = 5;
        }
        else {
            answer4 = 0;
        }

        var h1 = answer1_0 + answer1 + answer2 + answer3 + answer4;
        window.localStorage["h1"] = h1;

         // var result =parseInt(h1);
        navigator.notification.alert(window.localStorage["h1"],null,'Zensur!', 'OK');
        //alert(localStorage["h1"]);

        window.localStorage["qh1"] = $("#qh1").val();
        window.localStorage["q1"] = $("#q1").val();
        window.localStorage["q2"] = $("#q2").val();
        window.localStorage["q3"] = $("#q3").val();
        window.localStorage["q4"] = $("#q4").val();

    });

});

