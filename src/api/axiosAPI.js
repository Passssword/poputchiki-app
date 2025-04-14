import axios from "axios"
import {setCookie} from '../service/cookieManager.js'

const instance = axios.create({
	withCredentials: true,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      },
	baseURL: 'http://localhost:34587/'
})

export const usersAPI = {
	getAdverts () {
		return( instance.get( 'adverts' ,{ withCredentials: false, headers: {'session': document.cookie} } )
            .then(response => {
            	setCookie(response.headers['cookie'], response.headers['expires'])
            	return (response.data)
            })
		);
	},
	getAdvertData (advertID) { return( instance.get( 'adverts/'+advertID , { withCredentials: false, } )
		.then( async (response) => { return (response.data) }) );
	},
	getLocations () {
		return( instance.get( 'admin' ,{ withCredentials: true, headers: {'session': document.cookie} } )
            .then(response => { 
				setCookie(response.headers['cookie'], response.headers['expires'])
				return (response.data)
			 })
		);
	},
	getUsers () {
		return( instance.get( 'admin/getUsers' ,{ withCredentials: false, headers: {'session': document.cookie} } )
            .then(response => {
				setCookie(response.headers['cookie'], response.headers['expires'])
				return (response.data)
			 })
		);
	},
    postLocation (location) {
		return(instance.post('admin', location, { withCredentials: false, headers: {'session': document.cookie} } )
            .then( response => {
				setCookie(response.headers['cookie'], response.headers['expires'])
				return(response.data)
			} )
			);
	},
	updateLocation (locationData) {
		return(instance.put('/locations/'+locationData.id, locationData, { withCredentials: true, headers: {'session': document.cookie} } )
            .then( response => {
				setCookie(response.headers['cookie'], response.headers['expires'])
				return(response.data)
			} )
			);
	},
	postAdvert (data) {
		return(instance.post('adverts', data, { withCredentials: false, headers: {'session': document.cookie} } )
            .then( response => {
				setCookie(response.headers['cookie'], response.headers['expires'])
				return(response.data)
			} )
			);
	},
	deleteLocation (locationId) {
		return( instance.delete('towns/'+locationId, { withCredentials: false, headers: {'session': document.cookie} })
            // .then( response => { return(response.data); } )
			);
	},
	postUser (data) {
		return( instance.post('admin/addUser',
			data,
			{
				withCredentials: false,
				headers: {
					'user-object': btoa(JSON.stringify(data)),
					'session': document.cookie
				}
			}).then( response => {
				setCookie(response.headers['cookie'], response.headers['expires'])
				return(response.data); } )
			)},
	deleteUser (userId) {
		return ( instance.delete('users/'+userId, { withCredentials: false, headers: {'session': document.cookie} })
	)},
	authFunc (authData) {
		return( instance.get('/api/1.0/auth',
			{
				withCredentials: true,
				headers: {
					'user-object': btoa(JSON.stringify(authData)),
					'session': document.cookie
				}
			}).then( response => {
				setCookie(response.headers['cookie'], response.headers['expires'])
				return(response.data); } )
			)},
	getMeData () {
		return( instance.get( '/api/1.0/auth/getUserData' ,{ withCredentials: true, headers: {'session': document.cookie} } )
			.then(response => { 
				// setCookie(response.headers['cookie'], response.headers['expires'])
				return (response.data)
				})
		);
	},
	getAllSessions () {
		return( instance.get( '/api/1.0/auth/getAllSessionsData' ,{ withCredentials: true, headers: {'session': document.cookie} } )
			.then(response => { 
				setCookie(response.headers['cookie'], response.headers['expires'])
				return (response.data)
				})
		);
	},
}