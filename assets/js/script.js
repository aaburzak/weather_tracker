

// // Open Weather API Key 
const OpenWeather_APIKey = "73f3e432cf2f9db4a14509ff743323be";

let cityName;



// takes the inputted city name and passes it to the searchCity function
$("#searchBtn").click(function (event){
  event.preventDefault();
  var current = $("#searchCity").val()
  citySearch(current)
  // console.log("Hooray!")
});


//searches city name in geoURL to obtain coordinates then passes coordinates into oneCallUrl for a comprehensive weather report
function citySearch(cityName){
  var geoURL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${OpenWeather_APIKey}`
  fetch(geoURL)
  .then(function(response){
    return response.json()
  })

  .then(function(data){
    console.log(data)
    var lat = data[0].lat;
    var lon = data[0].lon;
    var name = data[0].name;
    //displays the searched City's name 
    $("#currentCity").text(name);

    var oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${OpenWeather_APIKey}`
    fetch(oneCallUrl)
    .then(function(response){
      return response.json()
    })
    .then(function(weatherReport){
      console.log (weatherReport);

      var temp = weatherReport.current.temp;
      var humid = weatherReport.current.humidity;
      var windSpeed = weatherReport.current.wind_speed;
      var uv = weatherReport.current.uvi;
      $("#currentTemp").text("Temp: " + temp +"°F" );
      $("#currentHumidity").text("Humidity: " + humid +"%");
      $("#currentWind").text("Wind Speed: " + windSpeed +"mph")
      $("#uvIndex").text("UV Index: " + uv)
    })
  })
}





//displays current date and time through moment.js
const today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

const localTime = moment();
$("#localTime").text(today.format("LT"));
