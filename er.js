// ==UserScript==
// @name         Nova Hotels X Emergency Response
// @namespace    name?
// @version      1.0.1
// @description  Script for Nova Emergency Response!
// @author       Nova Hotels LTD
// @match        http*://*.roblox.com/games/*
// @grant        none
// ==/UserScript==

function GetURLParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++){
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam){
            return sParameterName[1];
        }
    }
}
function main(){
    var PlaceID = 4499855755
    var gameid = GetURLParameter("gameid");
    console.log("gameid: "+gameid+" placeid: "+PlaceID);
    if (PlaceID && gameid){
        Roblox.GameLauncher.joinGameInstance(PlaceID, gameid);
    }
}
document.body.onload = main();
