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

$("input[name=q26][value=" + localStorage['q26'] + "]").attr('checked', 'checked');
$("input[name=q27][value=" + localStorage['q27'] + "]").attr('checked', 'checked');
$("input[name=q28][value=" + localStorage['q28'] + "]").attr('checked', 'checked');
$("input[name=q29][value=" + localStorage['q29'] + "]").attr('checked', 'checked');
$("input[name=q30][value=" + localStorage['q30'] + "]").attr('checked', 'checked');

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

    $(".bt_border").click(function () {

        var imagename = $(this).html();
        $("#image1").attr("src", "images/" + imagename + ".png");
    });
    //Timer Counter
    window.onload = function () {
        var set_minutes = 60 * 100,
            display = document.querySelector('#timer');
        startTimer(set_minutes, display);
    };
    //

    var answer26 = 0, answer27 = 0, answer28 = 0, answer29 = 0, answer30 = 0;

    $('input:radio[name="q26"]').change(
        function () {
            if ($(this).val() == 5) {
                answer26 = 5;
            }
            else {
                answer26 = 0;
            }
        });
    $('input:radio[name="q27"]').change(
        function () {
            if ($(this).val() == 0) {
                answer27 = 5;
            }
            else {
                answer27 = 0;
            }
        });

    $('input:radio[name="q28"]').change(
        function () {
            if ($(this).val() == 1) {
                answer28 = 5;
            }
            else {
                answer28 = 0;
            }
        });


    $('input:radio[name="q29"]').change(
        function () {
            if ($(this).val() == 4) {
                answer29 = 5;
            }
            else {
                answer29 = 0;
            }
        });

    $('input:radio[name="q30"]').change(
        function () {
            if ($(this).val() == 8) {
                answer30 = 5;
            }
            else {
                answer30 = 0;
            }
        });

    $("#result").click(function () {


        $(".buttonl2").css("background-color", "#83c8a0");
        localStorage["buttonl2"] = 6;

        var l2 = answer26 + answer27 + answer28 + answer29 + answer30;

        window.localStorage["l2"] = l2;
        navigator.notification.alert(window.localStorage["l2"],null,'Zensur!', 'OK');

        window.localStorage["q26"] = $('input:radio[name="q26"]:checked').val();
        window.localStorage["q27"] = $('input:radio[name="q27"]:checked').val();
        window.localStorage["q28"] = $('input:radio[name="q28"]:checked').val();
        window.localStorage["q29"] = $('input:radio[name="q29"]:checked').val();
        window.localStorage["q30"] = $('input:radio[name="q30"]:checked').val();
    });
});


