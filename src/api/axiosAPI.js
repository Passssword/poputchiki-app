import axios from "axios"

const instance = axios.create({
	withCredentials: true,
    // headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //     'Access-Control-Allow-Origin': '*'
    //   },
	baseURL: 'http://localhost:34587/'
})

export const usersAPI = {
	getAdverts () {
		return( instance.get( 'adverts' ,{ withCredentials: false } )
            .then(response => { return (response.data) })
		);
	},
	getLocations () {
		return( instance.get( 'admin' ,{ withCredentials: false } )
            .then(response => { return (response.data) })
		);
	},
    postLocation (location) {
		return(instance.post('admin', location, { withCredentials: false } )
            .then( response => { return(response.data); } )
			);
	},
	postAdvert (data) {
		return(instance.post('adverts', data, { withCredentials: false } )
            .then( response => { return(response.data); } )
			);
	},
	deleteLocation (locationId) {
		return( instance.delete('towns/'+locationId, { withCredentials: false })
            // .then( response => { return(response.data); } )
			);
	},
}