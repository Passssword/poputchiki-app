import {createStore, combineReducers, applyMiddleware} from 'redux';
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

export default store;