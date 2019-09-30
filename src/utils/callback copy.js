request = require('request')


const geocode = (location, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ location + '.json?access_token=pk.eyJ1IjoicG9ueXN0cmlrZSIsImEiOiJjazE1anQ0bTYwdnJrM21udWJkcHBreG5jIn0.yM5um-4k76FuNyM3caRWOQ'
    request( {url,json:true}, (error, {body}) => {
            if (error){
                callback('Wrong connection', undefined)
            }
            else if (body.error){
                callback('Wrong keys', undefined)
            }
            else {
                callback(undefined, {
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                    location: body.features[0].place_name
                })
            }

    }
    )
}

module.exports = geocode