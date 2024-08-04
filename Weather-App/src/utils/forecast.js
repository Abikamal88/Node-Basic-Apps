const request = require('request');

const forecast = (location, callback) => {
  const forecastURL = 'http://api.weatherapi.com/v1/current.json?key=41ea1725ea9c4964b8d33533241406&q='+ location +'&aqi=no'

  request({ url: forecastURL, json: true }, (error, response) => {
      if (error) {
          callback('Unable to connect to weather service!', undefined)
      } else if (response.body.error) {
          callback('Unable to find location', undefined)
      } else {
          callback(undefined, ( ' It is currently ' + response.body.current.temp_c + ' degress out. There is a ' + response.body.current.precip_in + '% chance of rain.'))
      }
  })
}


module.exports = forecast