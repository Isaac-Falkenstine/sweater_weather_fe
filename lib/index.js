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

var data
let req = new XMLHttpRequest()
req.open('GET', 'https://sweater-weather-isaac-f.herokuapp.com/api/v1/forecast?location=denver,co')
req.onload = function() {
  let stat = this.status
  let valid = ( stat >= 200 && stat < 300 )
  if( valid ) {
    data = JSON.parse(this.responseText)
    assessDisplay(data, obj['display'])
  }
  else {
    let msg = "Sorry, that location does not exist. Check spelling or try another location."
    appendText(feedback, msg)
  }
}
req.send()
