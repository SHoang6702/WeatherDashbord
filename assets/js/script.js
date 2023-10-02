// API Request non functional during testing, commented out to not break code.
// var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={bc3ebe5a0464504aa9d5eeb2d0ad5af1}'
// function getApi(requestUrl) {
//     fetch(requestUrl).then(function (response) {
//         console.log(response)
//         return response.json();
//     })
// }
// getApi(requestUrl)


//Local storage is returning Null object
let cityInput = document.getElementById('city')
let searchButton = document.getElementById('searchButton')
searchButton.addEventListener('click', 
function (event) {
  const cityHistory = document.querySelector('#city');
  const searchHistory = document.querySelector('#searchHistory');
  //only saves one city, JSON.stringify might work, but can't figure it out.
  localStorage.setItem('searchHistory', cityHistory.value);
  console.log(localStorage.getItem('searchHistory'));
  //code below non functional innerHTML error (fixed, thanks to typo)
  searchHistory.innerHTML = localStorage.getItem('searchHistory');
});
//nonfunction below, experimental
let historyButton = document.getElementById('searchHistory');
historyButton.addEventListener('click',
function (event) {
const cityHistory = document.querySelector('#city')
cityHistory.innerHTML = localStorage.getItem('searchHistory');
});
// note to self: history is not saving on refresh, needs repair. (fixed, but button is still not functional, still only saving 1 city.)
function reload() {
searchHistory.innerHTML = localStorage.getItem('searchHistory');
}
reload();
// GIVEN a weather dashboard with form inputs

// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history (WIP)

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed (WIP)

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity (WIP)

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city (WIP) (Semi complete, adds city to search history, but not as a button)