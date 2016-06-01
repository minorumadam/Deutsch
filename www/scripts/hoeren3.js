/**
 * Created by madam on 5/6/16.*/
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

$("#qh32").val(localStorage['qh32']);
$("#q11").val(localStorage['q11']);
$("#q13").val(localStorage['q13']);
$("#q15").val(localStorage['q15']);
$("#q17").val(localStorage['q17']);

$("input[name=qh31][value=" + localStorage['qh31'] + "]").attr('checked', 'checked');
$("input[name=q10][value=" + localStorage['q10'] + "]").attr('checked', 'checked');
$("input[name=q12][value=" + localStorage['q12'] + "]").attr('checked', 'checked');
$("input[name=q14][value=" + localStorage['q14'] + "]").attr('checked', 'checked');
$("input[name=q16][value=" + localStorage['q16'] + "]").attr('checked', 'checked');

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

    //Answers

    var answer_h31 = 0, answer_h32, answer10 = 0, answer11, answer12 = 0, answer13, answer14 = 0,
        answer15, answer16 = 0, answer17;


    $('input:radio[name="qh31"]').change(
        function () {
            if ($(this).val() == 0) {
                answer_h31 = 5;
            }
            else {
                answer_h31 = 0;
            }
        });


    $('input:radio[name="q10"]').change(
        function () {
            if ($(this).val() == 1) {
                answer10 = 5;
            }
            else {
                answer10 = 0;
            }
        });


    $('input:radio[name="q12"]').change(
        function () {
            if ($(this).val() == 1) {
                answer12 = 5;
            }
            else {
                answer12 = 0;
            }
        });

    $('input:radio[name="q14"]').change(
        function () {
            if ($(this).val() == 0) {
                answer14 = 5;
            }
            else {
                answer14 = 0;
            }
        });

    $('input:radio[name="q16"]').change(
        function () {
            if ($(this).val() == 1) {
                answer16 = 5;
            }
            else {
                answer16 = 0;
            }
        });


    $("#result").click(function () {

        $(".buttonh3").css("background-color", "#83c8a0");
        localStorage["buttonh3"] = 3;

        // qh31
        if ($("#qh32").val() == 0) {
            answer_h32 = 5;
        }
        else {
            answer_h32 = 0;
        }

        // q11
        if ($("#q11").val() == 2) {
            answer11 = 5;
        }
        else {
            answer11 = 0;
        }

        // q13
        if ($("#q13").val() == 2) {
            answer13 = 5;
        }
        else {
            answer13 = 0;
        }

        // q15
        if ($("#q15").val() == 2) {
            answer15 = 5;
        }
        else {
            answer15 = 0;
        }

        // q17
        if ($("#q17").val() == 1) {
            answer17 = 5;
        }
        else {
            answer17 = 0;
        }

        var h3 = answer_h31 + answer_h32 + answer10 + answer11 + answer12 + answer13 + answer14 +
            answer15 + answer16 + answer17;

        window.localStorage["h3"] = h3;
        navigator.notification.alert(window.localStorage["h3"],null,'Zensur!', 'OK');
      

        window.localStorage["qh31"] = $('input:radio[name="qh31"]:checked').val();
        window.localStorage["qh32"] = $("#qh32").val();
        window.localStorage["q10"] = $('input:radio[name="q10"]:checked').val();
        window.localStorage["q11"] = $("#q11").val();
        window.localStorage["q12"] = $('input:radio[name="q12"]:checked').val();
        window.localStorage["q13"] = $("#q13").val();
        window.localStorage["q14"] = $('input:radio[name="q14"]:checked').val();
        window.localStorage["q15"] = $("#q15").val();
        window.localStorage["q16"] = $('input:radio[name="q16"]:checked').val();
        window.localStorage["q17"] = $("#q17").val();
    });
});