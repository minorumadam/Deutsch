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

$("input[name=q37][value=" + localStorage['q37'] + "]").attr('checked', 'checked');
$("input[name=q38][value=" + localStorage['q38'] + "]").attr('checked', 'checked');
$("input[name=q39][value=" + localStorage['q39'] + "]").attr('checked', 'checked');
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

    var answer37 = 0, answer38 = 0, answer39 = 0;

    $('input:radio[name="q37"]').change(
        function () {
            if ($(this).val() == 1) {
                answer37 = 5;
            }
            else {
                answer37 = 0;
            }
        });

    $('input:radio[name="q38"]').change(
        function () {
            if ($(this).val() == 1) {
                answer38 = 5;
            }
            else {
                answer38 = 0;
            }
        });

    $('input:radio[name="q39"]').change(
        function () {
            if ($(this).val() == 0) {
                answer39 = 5;
            }
            else {
                answer39 = 0;
            }
        });

    $("#result").click(function () {


        $(".buttonl4").css("background-color", "#83c8a0");
        localStorage["buttonl4"] = 8;

        var l4 = answer37 + answer38 + answer39;

        window.localStorage["l4"] = l4;
        navigator.notification.alert(window.localStorage["l4"],null,'Zensur!', 'OK');


        window.localStorage["q37"] = $('input:radio[name="q37"]:checked').val();
        window.localStorage["q38"] = $('input:radio[name="q38"]:checked').val();
        window.localStorage["q39"] = $('input:radio[name="q39"]:checked').val();
    });
});

