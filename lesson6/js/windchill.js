// Getting Wind Speed and Temperature Variables
var wspeed = parseFloat(document.getElementById("wspeed").textContent);
var temp = parseFloat(document.getElementById("temp").textContent);

// IF-ELSE statement to determine the Wind Chill
if( wspeed > 3 && temp <= 50) {

   var windchill = Math.round(35.74 + (0.6215 * temp) - (35.75 * (Math.pow(wspeed, 0.16))) + (0.4275 * temp * (Math.pow(wspeed, 0.16))));

   document.getElementById("windchill").innerHTML = windchill + "&#8457;";
}  else {
   
   document.getElementById("windchill").innerHTML = "N/A"; 

}