const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=200cf102e64ee34534ad4bd4429e42bc"

fetch(apiURL)

  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let obj = jsObject.main;

    let high = obj.temp_max;
    let humidity = obj.humidity;
    let windSpeed = jsObject.wind.speed;

    document.getElementById('highTemp').textContent = high;
    document.getElementById('humidity').textContent = humidity;
    document.getElementById('wspeed').textContent = windSpeed;

  });