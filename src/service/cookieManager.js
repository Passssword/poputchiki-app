function cookieParser (cookieStr) {
	let cook = cookieStr.split('=')
	const cookieObj = {"_session_key":cook[1]}
	// console.log(cook)
	return cookieObj;
}

export function setCookie (cookieStr) {
	let cookie = cookieParser(cookieStr)
	const date = new Date();
    date.setTime(date.getTime() + (30*24*60*60*1000));

    const chunks = [
        `_session_key=${cookie._session_key}`,
        `expires=${date.toUTCString()}`,
        'path=/'
    ].join('; ');

    document.cookie = chunks;
}