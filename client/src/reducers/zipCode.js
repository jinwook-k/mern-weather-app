// Default zipcode will be 10001
const zipCode = (state = 10001, action) => {
    switch (action.type) {
        case "SAVE_ZIP":
            return action.payload
        default:
            return state;
    }
};

export default zipCode;
