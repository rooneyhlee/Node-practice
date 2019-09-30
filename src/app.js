const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/callback copy')
const forecast = require('./utils/callback')

// define path for express config
const app = express()
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, "../template/views")
const partialsPath = path.join(__dirname, '../template/partials')

// set up handlebars engine and views location
app.set('view engine','hbs')
hbs.registerPartials(partialsPath)
// makes it so that instead of views it's template
app.set('views', viewsPath)
// set static directory
app.use(express.static(publicDirectory))


app.get('', (req,res) =>{ 
    res.render('index', {
        title: "Weather",
        name: "andrew"
    })
}

)

app.get('/about',(req,res) =>{
    res.render('about', {
        title: "WOWOWOW",
        name : 'rooney'
    })
})

app.get('/help', (req,res) =>
{
    res.render('help',{
        title: 'help',
        body: 'How do i help if i dont know anything',
        name : 'roone'
    })
})

app.get('/weather', (req,res) =>{
    if (!req.query.address) {
        return res.send({
            error:'you must provide a search term'
        })
    }
    geocode(req.query.address, (error, {latitude, longitude}) => {
        if (!error){
            console.log(latitude,longitude)
            forecast(latitude, longitude, (error,{summary,temperature})=>{
                res.send({
                    latitude: latitude,
                    longitude: longitude,
                    address: req.query.address,
                    summary: summary,
                    temperature: temperature
            })
        
            })}
        
        }

    )
})

app.get('/products', (req,res) => {
    if (!req.query.search) {
        return res.send({
            error:'you must provide a search term'
        })
    }
 
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req,res) => {
    res.render('notfound', {
        title:'help page not found',
        body : "page not found",
        name: 'rooney'
    })
})

app.get('*', (req, res) =>{
    res.render('notfound', {
        title:'page not found',
        body : "page not found",
        name: 'rooney'
    })
})


app.listen(3000,()=>{
    console.log('running')
}
)