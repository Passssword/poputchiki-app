import React from 'react';
import { connect } from "react-redux";
import { usersAPI } from '../../api/axiosAPI.js'
import style from './AuthorizationPage.module.css'
import styleButtons from '../../style/buttons.module.css'

const AuthorizationPage = (props) => {

    let fieldLogin = React.createRef();
    let fieldPassword = React.createRef();

    async function setAuthData () {
        let userFieldsAgrigationObject = {
            login: fieldLogin.current.value,
            password: fieldPassword.current.value
        }
        console.log(`Login: ${userFieldsAgrigationObject.login}`)
        console.log(`Password: ${userFieldsAgrigationObject.password}`)

        usersAPI.authFunc(userFieldsAgrigationObject)
    }

    return (
        <div className={style.authPage}>
            <div className={style.authFormWrapper}>
                <p className={style.authCaption}>Authorization</p>
                <input ref={fieldLogin} type="text" placeholder="Inter Login"/>
                <input ref={fieldPassword} type="password" placeholder="Inter password"/>
                <button onClick={setAuthData} className={styleButtons.btnLogin}>Login</button>
            </div>
        </div>)
}

class AuthorizationPageAPI extends React.Component {
	componentDidMount () {
	}
	render () {
		return (
			<AuthorizationPage />);
	}
}
let mapStateToProps = (state) => { return( {} ) }
let mapDispatchToProps = (dispatch) => { return( {} ) }

const AuthorizationPageContener = connect(mapStateToProps, mapDispatchToProps)(AuthorizationPageAPI);
export default AuthorizationPageContener;