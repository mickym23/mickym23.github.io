// Adding Google Font Families
WebFont.load({google:{families: ["Poiret+One", "Eagle+Lake", "Pacifico", "Dancing+Script", "Rock+Salt", 
"Parisienne"]}});

// Navigation Toggle Menu Hamburger
function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

var dateOptions = {
   weekday: "long",
   day: "numeric",
   month: "long",
   year: "numeric",
}
document.getElementById('fullDate').innerHTML = new Date().toLocaleString("en-ZA", dateOptions);