function cookieParser (sessionKey, expiresDate) {
	let key = sessionKey.split('=')
    let date = new Date( Number(expiresDate) );
    // console.log("expiresDate-->")
    // console.log(`Miliseconds: ${expiresDate}`)
    // console.log(`Date format: ${date}`)

	const cookieObj = {
        "_session_key": key[1],
        "expires": date.toUTCString(),
    }
	return cookieObj;
}

export function setCookie (sessionKey, expiresDate) {
	let cookie = cookieParser(sessionKey, expiresDate)
    const chunks = [
        `_session_key=${cookie._session_key}`,
        `expires=${cookie.expires}`,
        'path=/'
    ].join('; ');

    document.cookie = chunks;
}