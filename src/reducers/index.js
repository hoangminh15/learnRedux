const { combineReducers } = require("redux");
const { default: counterReducer } = require("./counter");
const { default: loggedReducer } = require("./isLogged");


const combinedReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default combinedReducer;