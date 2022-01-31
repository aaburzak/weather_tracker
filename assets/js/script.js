

// // Open Weather API Key 
const OpenWeather_APIKey = "73f3e432cf2f9db4a14509ff743323be";

const queryUrl = "api.openweathermap.org/data/2.5/weather";

var bostonTest = "Boston"

function getCoordinate(cityName){
  var apiUrl = `${queryUrl}?q=${cityName}&appid=${OpenWeather_APIKey}`
  fetch(apiUrl)
    .then(function(response){
      return response.json
    })
    .then(function(data){
      if (!data[0]){
        alert ("invalid location")
      } else {
        console.log(data)
      }
    }).catch(function(err){
      console.error(err)
    })
}



$("#searchBtn").click(function (event){
  event.preventDefault;
  getCoordinate(bostonTest)

})



// //declared variables
// const city;


//displays current date and time through moment.js
const today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

const localTime = moment();
$("#localTime").text(today.format("LT"));
