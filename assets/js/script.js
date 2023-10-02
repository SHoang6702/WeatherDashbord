// API Request non functional during testing, commented out to not break code.
//link or key is potentially filled out wrong, lattitude and longitude are currently undefined so may be current issue with API, unsure how to make it search via lat and long.
//need to reread the api documentation to find solution

var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={7cced79f0ce1da9ff3598003fe1b9f85}'
function getApi(requestUrlArg) {
    fetch(requestUrlArg).then(function (response) {
        console.log(response)
        if (response.status === 200) {
        console.log(response.status);
        }
        return response.json();
    })
}
getApi(requestUrl)

//getting status 401 unauthorized, issue with API key, further testing required.

//API still not working can not proceed until fixed, commented out to not break storage code. (Working but unauthorized)

//!!Below code is from class notes to use as an example to debug API issues!!

// var requestUrl = 'https://api.github.com/orgs/nodejs/repos?per_page=5';

// var responseText = document.getElementById('response-text');

// function getApi(requestUrlArg) {
//   fetch(requestUrlArg).then(function (response) {
//     console.log(response);
//     if (response.status === 200) {
//       responseText.textContent = response.status;
//     }
//     return response.json();
//   });
// }

// getApi(requestUrl);

//!!Above code is from class notes to use as an example to debug API issues!!

//Local storage is returning Null object (fixed, error was a typo)
let cityInput = document.getElementById('city')
let searchButton = document.getElementById('searchButton')
searchButton.addEventListener('click', 
function (event) {
  const cityHistory = document.querySelector('#city');
  const searchHistory = document.querySelector('#searchHistory');
  //only saves one city, JSON.stringify might work, but can't figure it out. (More work is needed but API issue is more pressing, repair this part last)
  localStorage.setItem('searchHistory', cityHistory.value);
  console.log(localStorage.getItem('searchHistory'));
  //code below non functional innerHTML error (fixed, thanks to typo)
  searchHistory.innerHTML = localStorage.getItem('searchHistory');
});

//nonfunction below, experimental (Intend to use once API is working.)
let historyButton = document.getElementById('searchHistory');
historyButton.addEventListener('click',
function (event) {
const cityHistory = document.querySelector('#city')
//not working as intended, but can be modified to load up if API begins to work, API is still unavailable. Unsure of why.
cityHistory.innerHTML = localStorage.getItem('searchHistory');
});
// note to self: history is not saving on refresh, needs repair. (fixed, but button is still not functional, still only saving 1 city.)
function reload() {
searchHistory.innerHTML = localStorage.getItem('searchHistory');
}
//fixes issue of website not saving on refresh.
reload();

//## Acceptance Criteria

// GIVEN a weather dashboard with form inputs

// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history (WIP)

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed (WIP)

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity (WIP)

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city (WIP) (Semi complete, adds city to search history, but not as a button)