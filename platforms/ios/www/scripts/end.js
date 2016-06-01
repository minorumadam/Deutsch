/**
 * Created by madam on 5/23/16.
 */


$(document).ready(function () {

    var h1, h2, h3, h4, l1, l2, l3, l4, l5, schreiben, table1, table2, table3 ;

    if(!Number(window.localStorage["h1"])){ h1=0;
    }else{ h1 = Number(window.localStorage["h1"]);}
    if(!Number(window.localStorage["h2"])){ h2=0;
    }else{ h2 = Number(window.localStorage["h2"]);}
    if(!Number(window.localStorage["h3"])){ h3=0;
    }else{ h3 = Number(window.localStorage["h3"]);}
    if(!Number(window.localStorage["h4"])){ h4=0;
    }else{ h4 = Number(window.localStorage["h4"]);}
    if(!Number(window.localStorage["l1"])){ l1=0;
    }else{ l1 = Number(window.localStorage["l1"]);}
    if(!Number(window.localStorage["l2"])){ l2=0;
    }else{ l2 = Number(window.localStorage["l2"]);}
    if(!Number(window.localStorage["l3"])){ l3=0;
    }else{ l3 = Number(window.localStorage["l3"]);}
    if(!Number(window.localStorage["l4"])){ l4=0;
    }else{ l4 = Number(window.localStorage["l4"]);}
    if(!Number(window.localStorage["l5"])){ l5=0;
    }else{ l5 = Number(window.localStorage["l5"]);}  
       
    var hoeren, lesen;
    hoeren = h1 + h2 + h3 + h4;
    lesen = l1 + l2 + l3 + l4 + l5;
    schreiben = 0;

     table1 = '<td class="end_tabler">Hörverstehen</td><td class="end_tablel">' + hoeren +' '+'Punkte</td>';
     table2 = '<td class="end_tabler">Leseverstehen</td><td class="end_tablel">'+ lesen+' ' + 'Punkte</td>';
     table3 = '<td class="end_tabler">Textproduktion</td><td class="end_tablel">'+ schreiben +' '+'Punkte</td>';


    $('#end_hoeren').html(table1);
    $('#end_lesen').html(table2);
    $('#end_schreiben').html(table3);
});