

// // Open Weather API Key 
const OpenWeather_APIKey = "73f3e432cf2f9db4a14509ff743323be";

// var searchedCity =$("#searchCity").val();

let cityName;




$("#searchBtn").click(function (event){
  event.preventDefault();
  var current = $("#searchCity").val()
  citySearch(current)
  // console.log("Hooray!")
});



function citySearch(cityName){
  var queryURL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${OpenWeather_APIKey}`
  fetch(queryURL)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    console.log(data)

  })
}

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
