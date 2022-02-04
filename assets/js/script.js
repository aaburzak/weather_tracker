

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

      //variables and logic to render current day's weather
      var icon = weatherReport.current.weather[0].icon;
      var temp = weatherReport.current.temp;
      var humid = weatherReport.current.humidity;
      var windSpeed = weatherReport.current.wind_speed;
      var uv = weatherReport.current.uvi;

      $("#currentConditions").html(`<img src="http://openweathermap.org/img/wn/${icon}@2x.png">`);
      $("#currentTemp").text("Temp: " + temp +"°F" );
      $("#currentHumidity").text("Humidity: " + humid +"%");
      $("#currentWind").text("Wind Speed: " + windSpeed +"mph");
      $("#uvIndex").text("UV Index: " + uv);

      //variables and logic to render 5 day forecast
      $("#nextFive").text("Next Five Days")
      var iconDay1 = weatherReport.daily[1].weather[0].icon;
      var iconDay2 = weatherReport.daily[2].weather[0].icon;
      var iconDay3 = weatherReport.daily[3].weather[0].icon;
      var iconDay4 = weatherReport.daily[4].weather[0].icon;
      var iconDay5 = weatherReport.daily[5].weather[0].icon;
      $("#futureIcon1").html(`<img src="http://openweathermap.org/img/wn/${iconDay1}@2x.png">`);
      $("#futureIcon2").html(`<img src="http://openweathermap.org/img/wn/${iconDay2}@2x.png">`);
      $("#futureIcon3").html(`<img src="http://openweathermap.org/img/wn/${iconDay3}@2x.png">`);
      $("#futureIcon4").html(`<img src="http://openweathermap.org/img/wn/${iconDay4}@2x.png">`);
      $("#futureIcon5").html(`<img src="http://openweathermap.org/img/wn/${iconDay5}@2x.png">`);

      var tempDay1 = weatherReport.daily[1].temp.day;
      var tempDay2 = weatherReport.daily[2].temp.day;
      var tempDay3 = weatherReport.daily[3].temp.day;
      var tempDay4 = weatherReport.daily[4].temp.day;
      var tempDay5 = weatherReport.daily[5].temp.day;
      $("#futureTemp1").text(tempDay1+"°F");
      $("#futureTemp2").text(tempDay2+"°F");
      $("#futureTemp3").text(tempDay3+"°F");
      $("#futureTemp4").text(tempDay4+"°F");
      $("#futureTemp5").text(tempDay5+"°F");

      var humidityDay1 = weatherReport.daily[1].humidity;
      var humidityDay2 = weatherReport.daily[2].humidity;
      var humidityDay3 = weatherReport.daily[3].humidity;
      var humidityDay4 = weatherReport.daily[4].humidity;
      var humidityDay5 = weatherReport.daily[5].humidity;
      $("#futureHumid1").text("Humidity: " +humidityDay1+"%");
      $("#futureHumid2").text("Humidity: " +humidityDay2+"%");
      $("#futureHumid3").text("Humidity: " +humidityDay3+"%");
      $("#futureHumid4").text("Humidity: " +humidityDay4+"%");
      $("#futureHumid5").text("Humidity: " +humidityDay5+"%");

      var windDay1 = weatherReport.daily[1].wind_speed;
      var windDay2 = weatherReport.daily[2].wind_speed;
      var windDay3 = weatherReport.daily[3].wind_speed;
      var windDay4 = weatherReport.daily[4].wind_speed;
      var windDay5 = weatherReport.daily[5].wind_speed;
      $("#futureWind1").text("Wind Speed: " + windDay1+"mph");
      $("#futureWind2").text("Wind Speed: " + windDay2+"mph");
      $("#futureWind3").text("Wind Speed: " + windDay3+"mph");
      $("#futureWind4").text("Wind Speed: " + windDay4+"mph");
      $("#futureWind5").text("Wind Speed: " + windDay5+"mph");
    })
  })
}





//displays current date and time through moment.js
const today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

const localTime = moment();
$("#localTime").text(today.format("LT"));
