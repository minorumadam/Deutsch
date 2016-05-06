/**
 * Created by madam on 5/6/16.
 */
$(document).ready(function(){

    $(".change_image").click(function(){


        var imagename=$(this).html();
        $("#image1").attr("src","images/"+imagename+".png");
    });
});


