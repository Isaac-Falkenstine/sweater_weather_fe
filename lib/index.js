// This file is in the entry point in your webpack config.
//POST "https://sweater-weather-isaac-f.herokuapp.com/api/v1/users?email=email_address@example.com&password=password&password_confirmation=password"
//POST 'https://sweater-weather-isaac-f.herokuapp.com/api/v1/sessions?email=email_address@example.com&password=password'

function makeRequest(attrHash) {
  let verb = attrHash['verb']
  let url  = attrHash['url']
  let key = attrHash['key']
  let endpoint = url + key

  let request = new XMLHttpRequest()
  req.open(verb, endpoint)

  req.onload = function() {
    let status = this.status
    let working = ( status >= 200 && status < 300 )
    if( working ) {
      data = JSON.parse(this.responseText)
    }
    else {
      let msg = "Something went wrong! Try again."
      appendText(feedback, msg)
    }
  }
  req.send()
}

function getForecast(location) {
  attrHash = {
    'verb': 'GET',
    'url': 'https://sweater-weather-isaac-f.herokuapp.com/api/v1/forecast?location=',
    'key': location
  }

  makeRequest(attrHash);
}

function createAccount(attrHash) {
  regInfo = {
    'verb': 'POST',
    'url': 'https://sweater-weather-isaac-f.herokuapp.com/api/v1/users?',
    'key': 'email=${attrHash['email']}&password=${attrHash['pass']}&password_confirmation=${attrHash['passConfir']}'
  }

  makeRequest(regInfo);
}

function login(attrHash) {
  loginInfo = {
    'verb': 'POST',
    'url': 'https://sweater-weather-isaac-f.herokuapp.com/api/v1/sessions?',
    'key': 'email=${attrHash['email']}&password=${attrHash['pass']}'
  }

  makeRequest(loginInfo);
}

function addingFavorites(attrHash) {
  favoriteInfo = {
    'verb': 'POST',
    'url': 'https://sweater-weather-isaac-f.herokuapp.com/api/v1/favorites?',
    'key': 'location=${attrHash['location']}&api_key=${attrHash['apiKey']}'
  }

  makeRequest(favoriteInfo);
}

function removingFavorites(attrHash) {
  favoriteInfo = {
    'verb': 'DELETE',
    'url': 'https://sweater-weather-isaac-f.herokuapp.com/api/v1/favorites?',
    'key': 'location=${attrHash['location']}&api_key=${attrHash['apiKey']}'
  }

  makeRequest(favoriteInfo);
}
