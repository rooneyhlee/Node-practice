const forecast = require('./callback')

forecast(42.3605, -71.0596, (error, {summary,temperature}) => {
    console.log(sumary)
})