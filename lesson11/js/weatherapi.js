const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=200cf102e64ee34534ad4bd4429e42bc";

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
  document.getElementById('current-temp').textContent = jsObject.main.temp;

  // Concatenate the extension
  const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  

  // Access JSON array
  const desc = jsObject.weather[0].description;  
  
  document.getElementById('imagesrc').textContent = imagesrc; 

  // Set the SRC and ALT attributes
  document.getElementById('icon').setAttribute('src', imagesrc);  

  document.getElementById('icon').setAttribute('alt', desc);
});