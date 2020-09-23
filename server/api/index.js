// Use express's router to route all our API endpoints
const express = require('express');
const router = express.Router();

// Use the weather class we made in ./weather.js to call our method that will get the weather data from the api
const Weather = require("./weather");

// GET Request - statically get the weather data from the weather api
router.get("/weather",  async (req, res) => {
    let weather = new Weather();

    // Fixing the params of zipcode and tempMetric for an example GET request
    let weatherData = await weather.getWeatherData(98052, "us");

    // Content that will be sent will be a prettified json
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(weatherData, null, 4));
});

// POST Request - dynamically get the weather data based on request body
router.post("/weather",  async (req, res) => {
    const {zipCode, tempMetric} = req.body;
    let weather = new Weather();

    // The params for zipCode and tempMetric are dynamic
    let weatherData = await weather.getWeatherData(zipCode, tempMetric);

    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(weatherData, null, 4));
});

// POST Request - get the weather data from the api, save it to mongo, then return the data back
router.post("/weatherMongo", async(req, res) => {
    const {zipCode, tempMetric} = req.body;
    let weather = new Weather();
    let weatherData = await weather.getWeatherData(zipCode, tempMetric);

    await weather.saveWeatherDataToMongo(zipCode, weatherData);
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(weatherData, null, 4));
})

// GET Request - get the weather data saved from Mongo
router.get("/weatherMongo", async(req, res) => {
    const {zipCode} = req.query;
    let weather = new Weather();

    let weatherData = await weather.getWeatherDataFromMongo(zipCode);
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(weatherData, null, 4));
})

module.exports = router;