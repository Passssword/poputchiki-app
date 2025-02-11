import { createStore, combineReducers, applyMiddleware } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'
import reducerAdmin from './reducerAdmin.js';
import reducerGeneralSearch from './reducerGeneralSearch.js'
import reducerLocations from './reducerLocations.js'
import reducerSearchResults from './reducerSearchResults.js'

let reducers = combineReducers({
	adminState: reducerAdmin,
	generalSearchState: reducerGeneralSearch,
	locationsState: reducerLocations,
	searchResultsState: reducerSearchResults,
});

const store = createStore( reducers, applyMiddleware(thunk) );

// const middleware = getDefaultMiddleware({
// 	immutableCheck: false,
// 	serializableCheck: false,
// 	thunk: true,
//   });

// const store = configureStore({
// 	reducer: { reducers },
// 	middleware,
// 	devTools: process.env.NODE_ENV !== 'production',
// });

export default store;