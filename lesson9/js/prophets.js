// BYU-I JSON
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

// Retrieving JSON
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    
    // Print table in console
    console.table(jsonObject);  

    // Setting prophets variable to access JSON
    const prophets = jsonObject['prophets'];

    // FOR loop that iterates through each array index to retrive and set information
    for (let i = 0; i < prophets.length; i++ ) {
         
         // Creating variable linked to their HTML tags
         let card = document.createElement('section');
         let h2 = document.createElement('h2');
         let h3 = document.createElement('h3');
         let p = document.createElement('p');
         let image = document.createElement('img');
         
         // Setting information to corresponding HTML tags
         h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
         h3.textContent = "Date of Birth: " + prophets[i].birthdate;
         p.textContent = "Place of Birth: " + prophets[i].birthplace;

         // Retrieving image and adding an alt name
         image.setAttribute('src', prophets[i].imageurl);
         image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' +  prophets[i].order);

         // Adding information under section tag 
         card.appendChild(h2); 
         card.appendChild(h3); 
         card.appendChild(p); 
         card.appendChild(image); 

        // Adding to information to card class
        document.querySelector('div.cards').appendChild(card);
    }
  });

 