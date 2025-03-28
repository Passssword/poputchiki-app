export const setUserDataAC = (data) => {
    return { type: 'SET-USER-DATA', data }
}

let initialState = {
    UserData: {
        UserID: null,
        Login: null,
        isAuth: false
    }
}

const reducerAuth = (state = initialState, action) => {
    
    let stateCopy = {...state}

    switch (action.type) {
        case 'SET-USER-DATA':
            stateCopy.UserData.UserID = action.data.UserID;
            stateCopy.UserData.Login = action.data.Login;
            stateCopy.UserData.isAuth = true;
            return stateCopy;
        default:
            return state;
    }
}

export default reducerAuth;