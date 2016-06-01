/**
 * Created by madam on 5/6/16.
 */
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

$("#ql0").val(localStorage['ql0']);
$("#q21").val(localStorage['q21']);
$("#q22").val(localStorage['q22']);
$("#q23").val(localStorage['q23']);
$("#q24").val(localStorage['q24']);
$("#q25").val(localStorage['q25']);

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

    $("#result").click(function () {


        $(".buttonl1").css("background-color", "#83c8a0");
        localStorage["buttonl1"] = 5;

        var answerl0, answer21, answer22, answer23, answer24, answer25;
        // ql1
        if ($("#ql0").val() == 0) {
            answerl0 = 5;
        }
        else {
            answerl0 = 0;
        }

        // q21
        if ($("#q21").val() == 0) {
            answer21 = 5;
        }
        else {
            answer21 = 0;
        }

        // q22
        if ($("#q22").val() == 1) {
            answer22 = 5;
        }
        else {
            answer22 = 0;
        }

        // q23
        if ($("#q23").val() == 0) {
            answer23 = 5;
        }
        else {
            answer23 = 0;
        }
        // q24
        if ($("#q24").val() == 0) {
            answer24 = 5;
        }
        else {
            answer24 = 0;
        }
// q25
        if ($("#q25").val() == 2) {
            answer25 = 5;
        }
        else {
            answer25 = 0;
        }

        var l1 = answerl0 + answer21 + answer22 + answer23 + answer24 + answer25;

        window.localStorage["l1"] = l1;
        navigator.notification.alert(window.localStorage["l1"],null,'Zensur!', 'OK');     


        window.localStorage["ql0"] = $("#ql0").val();
        window.localStorage["q21"] = $("#q21").val();
        window.localStorage["q22"] = $("#q22").val();
        window.localStorage["q23"] = $("#q23").val();
        window.localStorage["q24"] = $("#q24").val();
        window.localStorage["q25"] = $("#q25").val();
    });
});



