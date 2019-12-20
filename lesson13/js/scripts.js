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
          let name = document.createElement('p');
          let telephone= document.createElement('p');
          let image = document.createElement('img');
          let dedication = document.createElement('h2');
          let address = document.createElement('p');
          let ordinance = document.createElement('p');
          let service = document.createElement('p');
                 
          name.textContent = temples[0].name;
          telephone.textContent = temples[0].telephone;
          dedication.textContent = temples[0].dedication;
          address.textContent = temples[0].address;
          image.setAttribute('src', temples[0].imageurl);
          image.setAttribute('alt', "Beautiful Image of " + temples[0].name);

         for (let j = 0; j < temples[i].ordinances.length; j++) {
            ordinance.textContent = temples[i].ordinances[j];
            card.appendChild(ordinance);
            console.log(ordinance)
          }

          for (let x = 0; x<temples[i].services.length; x++){
            service.textContent=temples[i].services[x];
            card.appendChild(service);
            console.log(service); 
        }
          // Adding information under section tag 
          card.appendChild(name); 
          card.appendChild(telephone); 
          card.appendChild(dedication);
          card.appendChild(ordinance); 
          card.appendChild(service);
          card.appendChild(address);
          card.appendChild(image);
           

        // Adding to information to card class
        document.querySelector('div.cards').appendChild(card);
    }});