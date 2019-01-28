// This file is in the entry point in your webpack config.

function makeRequest(attrHash) {
  let verb = attrHash['verb']
  let url  = attrHash['url']
  let key = attrHash['key']
  let endpoint = url + key

  let request = new XMLHttpRequest();
  request.open(verb, endpoint, true)

  request.onload = function() {

    var weatherData = JSON.parse(request.responseText).data.attributes;
  }

  request.send();
  //this method won't work for the life of me...
}


function getForecast(location) {
  let attrHash = {
    'verb': 'GET',
    'url': 'https://sweater-weather-isaac-f.herokuapp.com/api/v1/forecast?location=',
    'key': location
  }

  makeRequest(attrHash);
}

function createAccount(attrHash) {
  let regInfo = {
    'verb': 'POST',
    'url': 'https://sweater-weather-isaac-f.herokuapp.com/api/v1/users?',
    'key': "email=${attrHash['email']}&password=${attrHash['pass']}&password_confirmation=${attrHash['passConfir']}"
  }

  makeRequest(regInfo);
}

function login(attrHash) {
  let loginInfo = {
    'verb': 'POST',
    'url': 'https://sweater-weather-isaac-f.herokuapp.com/api/v1/sessions?',
    'key': "email=${attrHash['email']}&password=${attrHash['pass']}"
  }

  makeRequest(loginInfo);
}

function addingFavorites(attrHash) {
  let favoriteInfo = {
    'verb': 'POST',
    'url': 'https://sweater-weather-isaac-f.herokuapp.com/api/v1/favorites?',
    'key': "location=${attrHash['location']}&api_key=${attrHash['apiKey']}"
  }

  makeRequest(favoriteInfo);
}

function removingFavorites(attrHash) {
  let favoriteInfo = {
    'verb': 'DELETE',
    'url': 'https://sweater-weather-isaac-f.herokuapp.com/api/v1/favorites?',
    'key': "location=${attrHash['location']}&api_key=${attrHash['apiKey']}"
  }

  makeRequest(favoriteInfo);
}

function favoritesIndex(api_key) {
  let favoriteInfo = {
    'verb': 'GET',
    'url': 'https://sweater-weather-isaac-f.herokuapp.com/api/v1/favorites?',
    'key': "api_key=${apiKey}"
  }

  makeRequest(favoriteInfo);
}

function renderForecast() {
  var location = document.getElementById('search').value;

  var data = getForecast(location);

  var forecast = data.data.attributes.forecast;

  $("#forecast").show();
  document.getElementById("forecast").innerHTML =
  `<h1>${forecast.location}</h1>
  <h2>Current Weather: ${currentDay.summary}</h2>
  <h2>Feel likes ${forecast.current_day.apparent_temp}&#176</h2>
  <h2>High Temp: ${forecast.current_day.high_temp}&#176</h2>
  <h2>Low Temp: ${forecast.current_day.low_temp}&#176</h2>`
};
