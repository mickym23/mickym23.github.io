const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=200cf102e64ee34534ad4bd4429e42bc"

fetch(apiURL)

  .then((response) => response.json())
  .then((jsObject) => {

    let high = jsObject.main.temp_max;
    let humidity = jsObject.main.humidity;
    let windSpeed = jsObject.wind.speed;

   let hTemp = document.querySelector('#temp');

   if (hTemp) {
      hTemp.textContent = high;
   }

   let hum = document.querySelector('#humidity');

   if (hum) {
      hum.textContent = humidity + '%';
   }

   let speed = document.querySelector('#wspeed');

   if (speed) {
      speed.textContent = windSpeed;
   }


   function windchill (high, windSpeed)  {

      // IF-ELSE statement to determine the Wind Chill
      if( windSpeed > 3 && high <= 50) {
      
         var windchill = Math.round(35.74 + (0.6215 * high) - (35.75 * (Math.pow(windSpeed, 0.16))) + (0.4275 * high * (Math.pow(windSpeed, 0.16))));
      
         document.getElementById("windchill").innerHTML = windchill + "&#8457;";

      }  else {
         
         document.getElementById("windchill").innerHTML = "N/A"; 
      
      }
   }

   windchill(high, windSpeed);

  });