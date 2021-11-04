/* This code is for the clock on the Home page*/

var clock = setInterval(function() {
    myTimer();
}, 1000);

function myTimer () {
    var d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}


