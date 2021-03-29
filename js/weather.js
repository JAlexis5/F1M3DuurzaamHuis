// declare global variables
var lat = 0;
var lon = 0;

// start function
const init = () => {
    getLocation();
}

const getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
        // latitude & longitude stored
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        getWeatherByLocation(lon, lat);
    });
};



const getWeatherByLocation = (lon, lat) => {

    var xhr2 = new XMLHttpRequest

    xhr2.open('GET', `http://api.weatherapi.com/v1/forecast.json?key=d01fdf1d36c847a6874172931212803&q=${lat},${lon}&days=5&lang=nl`);
    xhr2.send();
    xhr2.onreadystatechange = processRequest;

    function processRequest(e) {
        // if everything registers properly saves location as name of your municipality
        if (xhr2.readyState == 4 && xhr2.status == 200) {
            var weatherData = JSON.parse(xhr2.responseText);
            console.log(weatherData);
            displayWeather(weatherData);
        }
    }
}

const displayWeather = (weatherData) => {
    var today = document.getElementById('weatherToday');
    var tomorrow = document.getElementById('weatherTomorrow');
    var overmorrow = document.getElementById('weatherOvermorrow');

    // Max Temperature in C
    today.innerHTML += "<p>Max: " + Math.round(weatherData.forecast.forecastday[0].day.maxtemp_c) + "&deg; C</p>";
    tomorrow.innerHTML += "<p>Max: " + Math.round(weatherData.forecast.forecastday[1].day.maxtemp_c) + "&deg; C</p>";
    overmorrow.innerHTML += "<p>Max: " + Math.round(weatherData.forecast.forecastday[2].day.maxtemp_c) + "&deg; C</p>";

    // Min Temperature in C
    today.innerHTML += "<p>Min: " + Math.round(weatherData.forecast.forecastday[0].day.mintemp_c) + "&deg; C</p>";
    tomorrow.innerHTML += "<p>Min: " + Math.round(weatherData.forecast.forecastday[1].day.mintemp_c) + "&deg; C</p>";
    overmorrow.innerHTML += "<p>Min: " + Math.round(weatherData.forecast.forecastday[2].day.mintemp_c) + "&deg; C</p>";

    // Kans op Neerslag
    today.innerHTML += "<p>" + weatherData.forecast.forecastday[0].day.daily_chance_of_rain + "%</p>";
    tomorrow.innerHTML += "<p>" + weatherData.forecast.forecastday[1].day.daily_chance_of_rain + "%</p>";
    overmorrow.innerHTML += "<p>" + weatherData.forecast.forecastday[2].day.daily_chance_of_rain + "%</p>";
};

// starts script on load
document.addEventListener('DOMContentLoaded', init());