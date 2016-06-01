/**
 * Created by madam on 5/6/16.
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

$("#q5").val(localStorage['q5']);
$("#q6").val(localStorage['q6']);
$("#q7").val(localStorage['q7']);
$("#q8").val(localStorage['q8']);
$("#q9").val(localStorage['q9']);

function startTimer(duration, display) {
    var diff, minutes, seconds;
    var start=Number(localStorage["starttime"]);

    function timer() {
        // get the number of seconds that have elapsed since
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
    // we don't want to wait a full second before the timer starts
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

    $("#result").click(function () {

        $(".buttonh2").css("background-color", "#83c8a0");
        localStorage["buttonh2"] = 2;

        var answer5, answer6, answer7, answer8, answer9;
        // q5
        if ($("#q5").val() == 0) {
            answer5 = 5;
        }
        else {
            answer5 = 0;
        }

        // q6
        if ($("#q6").val() == 2) {
            answer6 = 5;
        }
        else {
            answer6 = 0;
        }

        // q7
        if ($("#q7").val() == 0) {
            answer7 = 5;
        }
        else {
            answer7 = 0;
        }

        // q8
        if ($("#q8").val() == 2) {
            answer8 = 5;
        }
        else {
            answer8 = 0;
        }
        // q9
        if ($("#q9").val() == 2) {
            answer9 = 5;
        }
        else {
            answer9 = 0;
        }
        var h2 = answer5 + answer6 + answer7 + answer8 + answer9;

        window.localStorage["h2"] = h2;
        navigator.notification.alert(window.localStorage["h2"],null,'Zensur!', 'OK');
       
        window.localStorage["q5"] = $("#q5").val();
        window.localStorage["q6"] = $("#q6").val();
        window.localStorage["q7"] = $("#q7").val();
        window.localStorage["q8"] = $("#q8").val();
        window.localStorage["q9"] = $("#q9").val();
    });

});