const request = require('request')

request({url : 'https://api.darksky.net/forecast/5e5640b7b3f403f5cfe614e506e974d4/20,20', json:true}, (error, response) => {
    console.log(response.body.daily.data[0])
})