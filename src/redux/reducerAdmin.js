import { usersAPI } from '../api/axiosAPI.js';

export const renderLocationsAC = (data) => {
    return { type: 'RENDER-LOCATIONS', locations: data }
}
export const addLocationAC = (data) => {
    return { type: 'ADD-LOCATION', location: data }
}
// export const addUserAC = (data) => {
//     return { type: 'ADD-USER', data: data }
// }

const _renderLocations = (data) => {
    console.log("Function _renderLocations --->")
    console.log(data)
}
const _addLocation = (data, state) => {
    return state;
}
let initialState = {
    Locations: [
        {id:1, town: "Холмск"},
        {id:2, town: "Южно-Сахалинск"},
        {id:3, town: "Корсаков"},
        {id:4, town: "Невельск"},
        {id:5, town: "Долинск"},
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
        // case 'ADD-USER':
        //     return stateCopy;
        default:
            return state;
    }

    return state;
}

export default reducerAdmin;