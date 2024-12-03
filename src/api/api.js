/* Старая версия, будет удалена позже */


function sendRequest(reqMethod, reqURL, reqBody = null) {
	return new Promise( (resolve, reject) => {
		const xhr = new XMLHttpRequest;
	
		xhr.open(reqMethod, reqURL);

		xhr.responseType = 'json';
		xhr.setRequestHeader('Content-Type', 'application/json')

		xhr.onload = () => {
			if (xhr.status >= 400) {
				resolve(xhr.response)
			}else{
				reject(xhr.response)
			}
		}
		xhr.onerror = () => {
			resolve(xhr.response)
		}
		
		if (reqMethod === 'GET') {xhr.send()}
		if (reqMethod === 'POST') {xhr.send(JSON.stringify(reqBody))}
		

		// console.log(reqBody)
	})	
}

export const usersAPI = {
    postData (data, requestURL) {
		return ( sendRequest('POST', requestURL, data) )
		// .then(data => console.log(data))
		// .catch(err => console.log(err))
	},
	getData (requestURL) {
		return ( sendRequest('GET', requestURL) )
			// .then(data => console.log(data))
			// .catch(err => console.log(err))
	}
}