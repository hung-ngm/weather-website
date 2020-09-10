const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaHVuZ21pbmhuZ3V5ZW4iLCJhIjoiY2tlcjg3ajl2MHF1MzMwcXg4OHhicmZ0diJ9.5yCFi5h13D9FmeD8gPkonw&limit=1';

    request({url, json: true} ,(error, { body } ) => {
        if (error) {
            callback('Unable to connect to the location services', undefined);
        } else if (body.features.length === 0) {
            callback('Location not found. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }

    })

}



module.exports = geocode