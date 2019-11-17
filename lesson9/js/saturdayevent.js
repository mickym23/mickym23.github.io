// Set the Date variable
var date  = new Date();

// Get the day's number
var day = date.getDay();

// IF statement to display banner
if (day == 5) {
   document.getElementsByClassName("saturdaybanner")[0].style.display = "block";
} else {
   null;
}