var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
const path = require('path');
var app = express();

app.use(express.static('public'));
app.set('views', path.join(__dirname, "./views"))
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/weather', function(req, res) {
    const city = 'Jeppestown'
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=271d1234d3f497eed5b1d80a07b3fcd1`;

    request(url, function(error, response, body) {

        weather_json = JSON.parse(body);
        console.log(weather_json);

        var weather = {
            city: city,
            temperature: Math.floor(weather_json.main.temp),
            description: weather_json.weather[0].description,
            icon: weather_json.weather[0].icon
        };

        res.render('index', weather);
    })
})

app.post('/response', function(req, res) {
    let city2 = req.body.city
    console.log(city2)
    let url2 = `http://api.openweathermap.org/data/2.5/weather?q=${city2}&units=metric&appid=271d1234d3f497eed5b1d80a07b3fcd1`

    request(url2, function(error, response, body) {

        weather_json = JSON.parse(body);
        console.log(weather_json);

        var weather = {
            city: city2,
            temperature: Math.floor(weather_json.main.temp),
            description: weather_json.weather[0].description,
            icon: weather_json.weather[0].icon
        };

        res.render('response', weather);
    })
})



app.listen(9000, function() {
    console.log('app listening on port 9000!')
})