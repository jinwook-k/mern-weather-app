// Preloads saved weather data from local storage, if available
let getWeatherFromLocal = () => {
    let value = localStorage.getItem('CurrentWeatherData');
    return JSON.parse(value) || "";
}

const weather = (state = getWeatherFromLocal(), action) => {
    switch (action.type) {
        case "SAVE_WEATHER_DATA":
            return action.payload;
        default:
            return state;
    }
};

export default weather;
