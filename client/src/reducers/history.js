// Get initial state from the previously saved data in local storage
let getHistoryFromLocal = () => {
    let value = localStorage.getItem('WeatherHistory')
    return JSON.parse(value) || [];
}

// Maintain a history list of queried weather data of 10
let getUpdatedHistory = (history, value) => {
    let updateList = [...history];
    if (updateList.length >= 10) {
        updateList.shift();
    }
    updateList.push(value);
    return updateList;
}

const history = (state = getHistoryFromLocal(), action) => {
    switch (action.type) {
        case "UPDATE_HISTORY":
            return getUpdatedHistory(state, action.payload);
        default:
            return state;
    }
};

export default history;
