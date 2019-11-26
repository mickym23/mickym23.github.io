// BYU-I JSON URL Link for Home Page Town Data
const requestURL ="https://byui-cit230.github.io/weather/data/towndata.json";

fetch (requestURL)
   .then (function (response) {
      return response.json();
   }) .then (function(jsonObject) {

      // Access 'towns' JSON array
      const arr = jsonObject['towns'];

      // Run a FOR loop through each array  to create all three cards
      for (let i = 0; i < arr.length; i++) {
          // IF statement to loop through only Fish Haven, Preston, and Soda Springs town names 
          if (arr[i].name === "Fish Haven" || arr[i].name === "Preston" || arr[i].name === "Soda Springs") {  
          
          // Creating different HTML tag variables
          let card = document.createElement('section');
          let h1 = document.createElement('h1');
          let h3 = document.createElement('h3');
          let p1 = document.createElement('p');
          let p2 = document.createElement('p');
          let p3 = document.createElement('p');
          let h2 = document.createElement('h2');
          let p4 = document.createElement('p');
          let p5 = document.createElement('p');
          let p6 = document.createElement('p');
          let linebreak = document.createElement('br'); 
          let linedash = document.createElement('hr');
          let img = document.createElement('img'); 
          let text = document.createElement('div');

          // Storing JSON data in HTML tag variables
          h1.textContent = arr[i].name;
          h3.textContent = arr[i].motto;
          p1.textContent = "Year Founded: " + arr[i].yearFounded;
          p2.textContent ="Current Population: " + arr[i].currentPopulation;
          p3.textContent ="Average Rainfall: " + arr[i].averageRainfall;
          h2.textContent = "Events in " + arr[i].name;
          p4.textContent = arr[i].events[0];
          p5.textContent = arr[i].events[1];
          p6.textContent = arr[i].events[2];  

          // Setting the SRC and ALT for images (locally stored)
          img.setAttribute('src', 'images/'+ arr[i].photo);
          img.setAttribute('alt', "Iconic Image of " + arr[i].name);

          
          // Creating entire content text
          text.appendChild(h1);
          text.appendChild(h3);
          text.appendChild(p1);
          text.appendChild(p2);
          text.appendChild(p3);
          text.appendChild(linebreak);
          text.appendChild(linedash);
          text.appendChild(h2);
          text.appendChild(p4);
          text.appendChild(p5);
          text.appendChild(p6);

          // Adding to section element
          card.appendChild(text);
          card.appendChild(img);

          // Apply to .cards class 
          document.querySelector('div.cards').appendChild(card);
          }}});