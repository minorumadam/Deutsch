/**
 * Created by madam on 5/6/16.
 */
$(document).ready(function(){

    $("#audio").on("click",function(){
        $( "#audio" ).toggleClass( "fa-pause" );

        var myaudio= document.getElementById("myaudio");
        if (myaudio.paused){
            myaudio.play();
        }
        else
        {
            myaudio.pause();
        }
    })

});