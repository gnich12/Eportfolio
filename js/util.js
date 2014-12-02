var time= new Date();
var mm=["January","February","March","April","May","June","July",
"August","September","October","November","December"];
var myVar=setInterval(function(){myTimer();},1000);

function myTimer() {
    var d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}
$("#dtime").append(mm[time.getMonth()]+", "+ time.getDate()+" "+time.getFullYear());
