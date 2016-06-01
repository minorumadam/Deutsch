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

$("#ql1").val(localStorage['ql1']);
$("#ql2").val(localStorage['ql2']);
$("#ql3").val(localStorage['ql3']);
$("#ql4").val(localStorage['ql4']);
$("#ql5").val(localStorage['ql5']);
$("#ql6").val(localStorage['ql6']);
$("#ql7").val(localStorage['ql7']);


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


        $(".buttonl5").css("background-color", "#83c8a0");
        localStorage["buttonl5"] = 9;

        var answer_l1, answer_l2, answer_l3, answer_l4, answer_l5, answer_l6, answer_l7;
        // qh1
        if ($("#ql1").val() == 0) {
            answer_l1 = 5;
        }
        else {
            answer_l1 = 0;
        }
        // q1
        if ($("#ql2").val() == 2) {
            answer_l2 = 5;
        }
        else {
            answer_l2 = 0;
        }
        // q2
        if ($("#ql3").val() == 0) {
            answer_l3 = 5;
        }
        else {
            answer_l3 = 0;
        }

        // q3
        if ($("#ql4").val() == 0) {
            answer_l4 = 5;
        }
        else {
            answer_l4 = 0;
        }
        // q4
        if ($("#ql5").val() == 1) {
            answer_l5 = 5;
        }
        else {
            answer_l5 = 0;
        }

// q4
        if ($("#ql6").val() == 1) {
            answer_l6 = 5;
        }
        else {
            answer_l6 = 0;
        }
// q4
        if ($("#ql7").val() == 1) {
            answer_l7 = 5;
        }
        else {
            answer_l7 = 0;
        }

        var l5 = answer_l1 + answer_l2 + answer_l3 + answer_l4 + answer_l5 + answer_l6 + answer_l7;

        window.localStorage["l5"] = l5;
        navigator.notification.alert(window.localStorage["l5"],null,'Zensur!', 'OK');
    
        window.localStorage["ql1"] = $("#ql1").val();
        window.localStorage["ql2"] = $("#ql2").val();
        window.localStorage["ql3"] = $("#ql3").val();
        window.localStorage["ql4"] = $("#ql4").val();
        window.localStorage["ql5"] = $("#ql5").val();
        window.localStorage["ql6"] = $("#ql6").val();
        window.localStorage["ql7"] = $("#ql7").val();

    });

});

