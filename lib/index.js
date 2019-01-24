// This file is in the entry point in your webpack config.
//POST "https://sweater-weather-isaac-f.herokuapp.com/api/v1/users?email=email_address@example.com&password=password&password_confirmation=password"
//POST 'https://sweater-weather-isaac-f.herokuapp.com/api/v1/sessions?email=email_address@example.com&password=password'

// var forecastRequest = new XMLHttpRequest();
// var forecastLocation = "denver,co"
// forecastRequest = new XDomainRequest();
// forecastRequest.open('GET', 'https://sweater-weather-isaac-f.herokuapp.com/api/v1/forecast?location=${forecastLocation}')
// forecastRequest.onload = function() {
//   JSON.parse(this.responseText)
//
// };
//
// forecastRequest.withCredentials = true;
// forecastRequest.send();

// var data
// let req = new XMLHttpRequest()
// req.open('GET', 'https://sweater-weather-isaac-f.herokuapp.com/api/v1/forecast?location=denver,co')
// req.onload = function() {
//   let stat = this.status
//   let valid = ( stat >= 200 && stat < 300 )
//   if( valid ) {
//     data = JSON.parse(this.responseText)
//     assessDisplay(data, obj['display'])
//   }
//   else {
//     let msg = "Sorry, that location does not exist. Check spelling or try another location."
//     appendText(feedback, msg)
//   }
// }
// req.send()

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
    'key': 'email=${attrHash['email']&password=${attrHash['pass']}'
  }
  makeRequest(loginInfo);
}
