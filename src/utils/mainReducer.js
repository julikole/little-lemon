// mainReducer.js
const mainReducer = (state, action) => {
    switch (action.type) {
        case 'SET_AVAILABLE_TIMES':
            return {
                ...state,
                availableTimes: action.payload,
            };
        default:
            return state;
    }
};

export default mainReducer;
