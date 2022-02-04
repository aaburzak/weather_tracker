

// // Open Weather API Key 
const OpenWeather_APIKey = "73f3e432cf2f9db4a14509ff743323be";

// var searchedCity =$("#searchCity").val();

let cityName;
let coordinates = [];



$("#searchBtn").click(function (event){
  event.preventDefault();
  var current = $("#searchCity").val()
  citySearch(current)
  // console.log("Hooray!")
});



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

    console.log(lat);
    console.log(lon);

    var oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${OpenWeather_APIKey}`
    fetch(oneCallUrl)
    .then(function(response){
      return response.json()
    })
    .then(function(weatherReport){
      console.log (weatherReport)
    })
  })
}

// function oneCall(){
//   var oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${OpenWeather_APIKey}`
//   fetch(oneCallUrl)
//   .then(function(response){
//     return response.json()
//   })
//   .then(function(weatherReport){
//     console.log (weatherReport)
//   })
// }

// fetch(queryURL)
// console.log(queryURL)



// function getCoordinate(cityName){
//   var apiUrl = `${queryUrl}?q=${cityName}&appid=${OpenWeather_APIKey}`
//   fetch(apiUrl)
//     .then(function(response){
//       return response.json
//     })
//     .then(function(data){
//       if (!data[0]){
//         alert ("invalid location")
//       } else {
//         console.log(data)
//       }
//     }).catch(function(err){
//       console.error(err)
//     })
// }



  


// function citySearch(){

// cityName = searchedCity

// fetch(queryURL)
// console.log(queryURL)
// };




//displays current date and time through moment.js
const today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

const localTime = moment();
$("#localTime").text(today.format("LT"));
