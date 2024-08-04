const request = require('request');

const geocode = (address, callback) => {
  const geocodeURL = 'http://api.weatherapi.com/v1/current.json?key=41ea1725ea9c4964b8d33533241406&q='+ address +'&aqi=no'

  request({ url: geocodeURL, json: true }, (error, response) => {
      if (error) {
          callback('Unable to connect to location services!', undefined)
      } else if (response.body.error) {
          callback('Unable to find location. Try another search.', undefined)
      } else {
          const latitude = response.body.location.lat
          const longitude = response.body.location.lon
          const location1 = response.body.location.name
          const location2 = response.body.location.region
          const location3 = response.body.location.country

          const location = location1 + ', ' + location2 + ', ' + location3

          callback(undefined, {
              latitude,
              longitude,
              location
          })
      }
  })
}
module.exports = geocode