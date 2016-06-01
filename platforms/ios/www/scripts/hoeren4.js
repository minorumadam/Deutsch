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
if (Number(localStorage["buttons"])) {
    $(".buttons").css("background-color", "#83c8a0");
}

$("input[name=qh4][value=" + localStorage['qh4'] + "]").attr('checked', 'checked');
$("input[name=q18][value=" + localStorage['q18'] + "]").attr('checked', 'checked');
$("input[name=q19][value=" + localStorage['q19'] + "]").attr('checked', 'checked');
$("input[name=q20][value=" + localStorage['q20'] + "]").attr('checked', 'checked');


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

    // Answer

    var answerh4 = 0, answer18 = 0, answer19 = 0, answer20 = 0;

    $('input:radio[name="qh4"]').change(
        function () {
            if ($(this).val() == 4) {
                answerh4 = 5;
            }
            else {
                answerh4 = 0;
            }
        });


    $('input:radio[name="q18"]').change(
        function () {
            if ($(this).val() == 4) {
                answer18 = 5;
            }
            else {
                answer18 = 0;
            }
        });


    $('input:radio[name="q19"]').change(
        function () {
            if ($(this).val() == 0) {
                answer19 = 5;
            }
            else {
                answer19 = 0;
            }
        });

    $('input:radio[name="q20"]').change(
        function () {
            if ($(this).val() == 3) {
                answer20 = 5;
            }
            else {
                answer20 = 0;
            }
        });

    $("#result").click(function () {

        $(".buttonh4").css("background-color", "#83c8a0");
        localStorage["buttonh4"] = 4;

        var h4 = answerh4 + answer18 + answer19 + answer20;

        window.localStorage["h4"] = h4;
        navigator.notification.alert(window.localStorage["h4"],null,'Zensur!', 'OK');
        

        window.localStorage["qh4"] = $('input:radio[name="qh4"]:checked').val();
        window.localStorage["q18"] = $('input:radio[name="q18"]:checked').val();
        window.localStorage["q19"] = $('input:radio[name="q19"]:checked').val();
        window.localStorage["q20"] = $('input:radio[name="q20"]:checked').val();

    });
});
