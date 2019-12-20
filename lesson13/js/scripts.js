// Adding Google Font Families
/*WebFont.load({google:{families: ["Poiret+One", "Eagle+Lake", "Pacifico", "Dancing+Script", "Rock+Salt", 
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
*/




// BYU-I JSON
const requestURL = "https://mickym23.github.io/lesson13/json/temples.json";

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function(jsonObject){

        const temples = jsonObject['temples'];
        
        for (let i = 0; i < temples.length; i++) {
          let card = document.createElement('section');
          let name = document.createElement('h2');
          let telephone= document.createElement('p');
          let image = document.createElement('img');
          let dedication = document.createElement('p');
          let address = document.createElement('p');
          let ordinance = document.createElement('p');
          let services = document.createElement('div');
          let facilities = document.createElement('h3');
          let contact = document.createElement('h3');
          
          
          name.textContent = temples[i].name;
          telephone.textContent = "Telephone Number: " + temples[i].telephone;
          dedication.textContent = "Dedication Date: " + temples[i].dedication;
          address.textContent = "Temple Address: " + temples[i].address;
          image.setAttribute('src', temples[i].imageurl);
          image.setAttribute('alt', "Beautiful Image of " + temples[i].name);
          facilities.textContent = "Facilities";
          contact.textContent = "Contact Information";
          
          for (let j = 0; j < temples[i].services.length; j++){
            let service = document.createElement('p');
            service.textContent = temples[i].services[j];
            services.appendChild(service); 
         }
          // Adding information under section tag 
          card.appendChild(name); 
          card.appendChild(contact);
          card.appendChild(telephone); 
          card.appendChild(dedication);
          card.appendChild(ordinance); 
          card.appendChild(facilities);
          card.appendChild(services);
          card.appendChild(address);
          card.appendChild(image);
           

        // Adding to information to card class
        document.querySelector('div.cards').appendChild(card);
    }});