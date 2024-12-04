export const renderAdvertsAC = (data) => {
    return { type: 'RENDER-ADVERTS', adverts: data }
}

let initialState = {
    Adverts: [
        {id:1, startPoint: "Холмск", endPoint: "Южно-Сахалинск", auto: "Mazda", dateCreate: "16,11,2024"},
        {id:2, startPoint: "Dolinsk", endPoint: "Южно-Сахалинск", auto: "Mazda", dateCreate: "16,11,2024"},
        {id:3, startPoint: "Aniva", endPoint: "Южно-Сахалинск", auto: "Mazda", dateCreate: "16,11,2024"},
        {id:4, startPoint: "Pravda", endPoint: "Южно-Сахалинск", auto: "Mazda", dateCreate: "16,11,2024"},
        {id:5, startPoint: "Nevelsk", endPoint: "Южно-Сахалинск", auto: "Mazda", dateCreate: "16,11,2024"},
    ]
}

const reducerSearchResults = (state = initialState, action) => {
    
    let stateCopy = {...state}

    switch (action.type) {
        case 'RENDER-ADVERTS':
            stateCopy.Adverts = action.adverts;
            return stateCopy;
        default:
            return state;
    }

    return state;
}

export default reducerSearchResults;