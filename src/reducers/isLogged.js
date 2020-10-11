const loggedReducer = (isLogged = false, action) => {
    if(action.type === 'SIGN_IN'){
        return !isLogged;
    } else {
        return isLogged;
    }
}

export default loggedReducer;