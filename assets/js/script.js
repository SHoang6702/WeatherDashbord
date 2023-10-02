// var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={bc3ebe5a0464504aa9d5eeb2d0ad5af1}'
// function getApi(requestUrl) {
//     fetch(requestUrl).then(function (response) {
//         console.log(response)
//         return response.json();
//     })
// }
// getApi(requestUrl)

let cityInput = document.getElementById('city')
let searchInput = document.getElementById('searchButton')
searchInput.addEventListener('click',
    function(event) {
    const cityInput = document.getElementById('cityInput')
    localStorage.setItem('cityInput', JSON.stringify(cityInput))
    console.log(localStorage.getItem(cityInput))
})

// GIVEN a weather dashboard with form inputs

// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city