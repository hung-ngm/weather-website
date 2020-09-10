const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=41432b0241736804ee35c4bfb47c7fff&query=' + latitude + ',' + longitude ;

    request({url, json: true} ,(error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services' , undefined)
        } else if (body.error) {
            callback('Cannot find weather' , undefined)
        } else {
            callback(undefined, 
                body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress out.' + 'The humidity is ' + body.current.humidity
            )
        }
    })
}

module.exports = forecast;