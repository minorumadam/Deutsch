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

$("#q32").val(localStorage['q32']);
$("#q34").val(localStorage['q34']);
$("#q36").val(localStorage['q36']);


$("input[name=q31][value=" + localStorage['q31'] + "]").attr('checked', 'checked');
$("input[name=q33][value=" + localStorage['q33'] + "]").attr('checked', 'checked');
$("input[name=q35][value=" + localStorage['q35'] + "]").attr('checked', 'checked');


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

    var answer31 = 0, answer32, answer33 = 0, answer34, answer35 = 0,
        answer36;

    $('input:radio[name="q31"]').change(
        function () {
            if ($(this).val() == 1) {
                answer31 = 5;
            }
            else {
                answer31 = 0;
            }
        });

    $('input:radio[name="q33"]').change(
        function () {
            if ($(this).val() == 1) {
                answer33 = 5;
            }
            else {
                answer33 = 0;
            }
        });

    $('input:radio[name="q35"]').change(
        function () {
            if ($(this).val() == 0) {
                answer35 = 5;
            }
            else {
                answer35 = 0;
            }
        });

    $("#result").click(function () {


        $(".buttonl3").css("background-color", "#83c8a0");
        localStorage["buttonl3"] = 7;

        // qh31
        if ($("#q32").val() == 1) {
            answer32 = 5;
        }
        else {
            answer32 = 0;
        }
        // q11
        if ($("#q34").val() == 2) {
            answer34 = 5;
        }
        else {
            answer34 = 0;
        }
        // q13
        if ($("#q36").val() == 0) {
            answer36 = 5;
        }
        else {
            answer36 = 0;
        }


        var l3 = answer31 + answer32 + answer33 + answer34 + answer35 + answer36;

        window.localStorage["l3"] = l3;
        navigator.notification.alert(window.localStorage["l3"],null,'Zensur!', 'OK');


        window.localStorage["q31"] = $('input:radio[name="q31"]:checked').val();
        window.localStorage["q32"] = $("#q32").val();
        window.localStorage["q33"] = $('input:radio[name="q33"]:checked').val();
        window.localStorage["q34"] = $("#q34").val();
        window.localStorage["q35"] = $('input:radio[name="q35"]:checked').val();
        window.localStorage["q36"] = $("#q36").val();
    });
});

