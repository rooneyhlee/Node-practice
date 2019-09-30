request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/5e5640b7b3f403f5cfe614e506e974d4/' + latitude + ',' + longitude
    request( {url:url,json:true}, (error, {body}) => {
            if (error){
                callback('Wrong connection', undefined)
            }
            else if (body.error){
                callback('Wrong keys', undefined)
            }
            else {
                callback(undefined, {
                    summary: body.currently.summary,
                    temperature: body.currently.temperature
                })
                
            }

    }
    )
}

module.exports = forecast