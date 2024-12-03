export const renderLocationsAC = (data) => {
    return { type: 'RENDER-LOCATIONS', locations: data }
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

const reducerLocations = (state = initialState, action) => {
    
    let stateCopy = {...state}

    switch (action.type) {
        case 'RENDER-LOCATIONS':
            stateCopy.Locations = action.locations;
            return stateCopy;
        case 'ADD-LOCATION':
            stateCopy.Locations.push(action.location)
            // _addLocation(action.location, stateCopy)
            return stateCopy;
        default:
            return state;
    }

    return state;
}

export default reducerLocations;