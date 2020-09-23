const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
    zip: Number,
    coord: {
        lon: Number,
        lat: Number
    },
    weather: [
        {
            id: Number,
            main: String,
            description: String,
            icon: String
        }
    ],
    base: String,
    main: {
        temp: Number,
        feels_like: Number,
        temp_min: Number,
        temp_max: Number,
        pressure: Number,
        humidity: Number
    },
    visibility: Number,
    wind: {
        speed: Number,
        deg: Number
    },
    clouds: {
        all: Number
    },
    dt: Number,
    sys: {
        type: {type: Number},
        id: Number,
        message: Number,
        country: String,
        sunrise: Date,
        sunset: Date
    },
    timezone: Number,
    id: Number,
    name: String,
    cod: Number,
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Weather', WeatherSchema);