import linksStyle from '../../style/links.module.css';
import React from 'react';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { usersAPI } from '../../api/axiosAPI.js'

const Auth = () => {
    return (
    <div>
        <NavLink className={linksStyle.linkAuth} to="/auth">Войдите как пользователь</NavLink>
    </div>
    )}

class AuthAPI extends React.Component {
    componentDidMount () {
        usersAPI.getMeData().then( response => {} )
    }
    render () {
        return (
            <Auth />);
    }
}
let mapStateToProps = (state) => { return( {} ) }
let mapDispatchToProps = (dispatch) => { return( {} ) }
const AuthorizationPageContener = connect(mapStateToProps, mapDispatchToProps)(AuthAPI);

export default AuthorizationPageContener;