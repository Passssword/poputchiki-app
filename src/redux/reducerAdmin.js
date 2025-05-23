
import { usersAPI } from '../api/axiosAPI.js'


export const renderLocationsAC = (data) => {
    return { type: 'RENDER-LOCATIONS', locations: data }
}
export const addLocationAC = (data) => {
    return { type: 'ADD-LOCATION', location: data }
}
export const updateLocationAC = (location) => {
    return { type: 'UPDATE-LOCATION', location }
}
export const renderUsersAC = (data) => {
    return { type: 'RENDER-USERS', users: data }
}
export const reRendererUsersAC = (data) => {
    return { type: 'RERENDERER-USERS', }
}
export const addUserAC = (data) => {
    return { type: 'ADD-USER', data: data }
}
export const openModaleWindowLocationAC = (data) => {
    return { type: 'OPEN-MODALE-LOCATION', data: data }
}
export const closeModaleWindowLocationAC = (data) => {
    return { type: 'CLOSE-MODALE-LOCATION' }
}
export const renderSessionsAC = (data) => {
    return { type: 'RENDER-SESSIONS', SessionsData: data }
}
export const openModaleWindowSessionAC = (data) => {
    return { type: 'OPEN-MODALE-SESSION', data: data }
}
export const closeModaleWindowSessionAC = (data) => {
    return { type: 'CLOSE-MODALE-SESSION' }
}


const _addUserToTable = (state, newUser) => {
    state.Users.push(newUser)
    return state
}

let initialState = {
    Locations: [
        {id:1, town: "Холмск"},
        {id:2, town: "Южно-Сахалинск"},
        {id:3, town: "Корсаков"},
        {id:4, town: "Невельск"},
        {id:5, town: "Долинск"},
    ],
    LocationModaleWindow: {
        id:1,
        locationName: "Холмск",
        isActive: false,
    },
    SessionModaleWindow: {
        id:1,
        sessionKey: "123456789",
        userID: null,
        isActive: false,
    },
    Users: [
        {id:1, login: "Zara", password: "qwerty"},
        {id:2, login: "Yandoo", password: "123456"},
        {id:3, login: "Ultra", password: "Fin38cb22"},
        {id:4, login: "Ivan", password: "looidfuy"},
        {id:5, login: "hiroku", password: "zxd6"},
        {id:6, login: "Demon666", password: "1234567890"},
    ],
    SessionsData: []
}

const reducerAdmin = (state = initialState, action) => {
    
    let stateCopy = {...state}

    switch (action.type) {
        case 'RENDER-LOCATIONS':
            stateCopy.Locations = action.locations;
            return stateCopy;
        case 'ADD-LOCATION':
            stateCopy.Locations.push(action.location)
            // _addLocation(action.location, stateCopy)
            return stateCopy;
        case 'UPDATE-LOCATION':
            let indexLocation = stateCopy.Locations.findIndex(location => location.id === action.location.id);
            stateCopy.Locations[indexLocation].town = action.location.locationName;
            stateCopy.LocationModaleWindow.isActive = false;
            return stateCopy;
        case 'ADD-USER':
            stateCopy.Users = [...state.Users]
            return _addUserToTable(stateCopy, action.data);
        case 'RENDER-USERS':
            stateCopy.Users = action.users
            return stateCopy;
        case 'RERENDERER-USERS':
            return stateCopy;
        case 'OPEN-MODALE-LOCATION':
            stateCopy.LocationModaleWindow.id = action.data.id;
            stateCopy.LocationModaleWindow.locationName = action.data.town;
            stateCopy.LocationModaleWindow.isActive = true;
            return stateCopy;
        case 'CLOSE-MODALE-LOCATION':
            stateCopy.LocationModaleWindow.isActive = false;
            return stateCopy;
        case 'RENDER-SESSIONS':
            stateCopy.SessionsData = action.SessionsData;
            return stateCopy;
        case 'OPEN-MODALE-SESSION':
            console.log(action.data)
            stateCopy.SessionModaleWindow.id = action.data.id;
            stateCopy.SessionModaleWindow.sessionKey = action.data.session_key;
            stateCopy.SessionModaleWindow.userID = action.data.user_id;
            stateCopy.SessionModaleWindow.isActive = true;
            return stateCopy;
        case 'CLOSE-MODALE-SESSION':
            stateCopy.SessionModaleWindow.isActive = false;
            return stateCopy;
        default:
            return state;
    }
}

export const addUserThunkCreator = (userDataObject) => {
    return(dispatch) => {
        usersAPI.postUser(userDataObject)
            .then( data => {
                if( data.status === 200 ) {
                    let newUserObject = {
                        id: data.userId,
                        login: userDataObject.login,
                        password: userDataObject.password
                    }
                    dispatch( addUserAC(newUserObject) );
                }
            } )
    }
};

export const AuthorizationThuncCreator = () => {
    return (dispatch) => {}
}

export default reducerAdmin;