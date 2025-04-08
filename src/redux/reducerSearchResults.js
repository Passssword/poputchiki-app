export const renderAdvertsAC = (data) => {
    return { type: 'RENDER-ADVERTS', adverts: data }
}
export const setAdvertDataAC = (data) => {
    return { type: 'SET-ADVERT-DATA', advertData: data }
}


let initialState = {
    AdvertPage: {
        id: null,
        startPoint: null,
        endPoint: null,
        dateCreate: null,
        auto: null,
        comment: null
    },
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
        case 'SET-ADVERT-DATA':
            stateCopy.AdvertPage = action.advertData;
            console.log("advertData install succes")
            return stateCopy;
        case 'RENDER-ADVERTS':
            stateCopy.Adverts = action.adverts;
            return stateCopy;
        default:
            return state;
    }

    return state;
}

export default reducerSearchResults;