export const saveZipCode = (zipCode) => {
    return {
        type: "SAVE_ZIP",
        payload: zipCode
    }
}

export const saveWeatherData = (data) => {
    return {
        type: "SAVE_WEATHER_DATA",
        payload: data
    }
}

export const saveTemperature = (data) => {
    return {
        type: "SAVE_TEMPERATURE",
        payload: data
    }
}

export const updateHistory = (data) => {
    return {
        type: "UPDATE_HISTORY",
        payload: data
    }
}
