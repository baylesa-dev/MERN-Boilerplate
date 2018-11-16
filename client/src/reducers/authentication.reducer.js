const defaultState = {
    isLoggedIn: false,
    username: null,
    password: null
};

const authenticationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return Object.assign({}, state, {
                isLoggedIn: true,
                username: action.username,
                password: action.password
            });
        case 'LOGOUT':
            return Object.assign({}, state, {
                isLoggedIn: false,
                username: null,
                password: null
            });
        default:
            return state;
    }
}

export default authenticationReducer