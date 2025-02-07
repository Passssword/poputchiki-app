
import { usersAPI } from '../api/axiosAPI.js'


export const renderLocationsAC = (data) => {
    return { type: 'RENDER-LOCATIONS', locations: data }
}
export const addLocationAC = (data) => {
    return { type: 'ADD-LOCATION', location: data }
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

const _renderLocations = (data) => {
    console.log("Function _renderLocations --->")
    console.log(data)
}

let initialState = {
    Locations: [
        {id:1, town: "Холмск"},
        {id:2, town: "Южно-Сахалинск"},
        {id:3, town: "Корсаков"},
        {id:4, town: "Невельск"},
        {id:5, town: "Долинск"},
    ],
    Users: [
        {id:1, login: "Zara", password: "qwerty"},
        {id:2, login: "Yandoo", password: "123456"},
        {id:3, login: "Ultra", password: "Fin38cb22"},
        {id:4, login: "Ivan", password: "looidfuy"},
        {id:5, login: "hiroku", password: "zxd6"},
        {id:6, login: "Demon666", password: "1234567890"},
    ]
}

const reducerAdmin = (state = initialState, action) => {
    
    let stateCopy = {...state}

    switch (action.type) {
        case 'RENDER-LOCATIONS':
            stateCopy.Locations = action.locations;
            _renderLocations (action.locations)
            return stateCopy;
        case 'ADD-LOCATION':
            stateCopy.Locations.push(action.location)
            // _addLocation(action.location, stateCopy)
            return stateCopy;
        case 'ADD-USER':
            stateCopy.Users.push(action.data.userDataObject);
            return stateCopy;
        case 'RENDER-USERS':
            stateCopy.Users = action.users
            return stateCopy;
        case 'RERENDERER-USERS':
            return stateCopy;
        default:
            return state;
    }
}

export const addUserThunkCreator = async (userDataObject) => {
    debugger
    return(dispatch) => {
        usersAPI.postUser(userDataObject)
            .then( data => {
                if( data.status === 200 ) {
                    dispatch( addUserAC(userDataObject) );
                }
            } )
    }
};
export default reducerAdmin;