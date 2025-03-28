import linksStyle from '../../style/links.module.css';
import React from 'react';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { usersAPI } from '../../api/axiosAPI.js'
import { setUserDataAC } from "../../redux/reducerAuth.js";

const Auth = (props) => {
    return (
    <div>
        {props.UserData.isAuth ? props.UserData.Login :
        <NavLink className={linksStyle.linkAuth} to="/auth">Войдите как пользователь</NavLink>
        }
        
    </div>
    )}

class AuthAPI extends React.Component {
    componentDidMount () {
        usersAPI.getMeData().then( response => {
            if (response.UserData) {
                this.props.setUserData(response.UserData)
            }
            console.log(response)
        } )
    }
    render () {
        return (
            <Auth 
                UserData={this.props.userData}
                />);
    }
}
let mapStateToProps = (state) => { return( {userData: state.authState.UserData} ) }
let mapDispatchToProps = (dispatch) => { return( {
    setUserData: (data) => { dispatch( setUserDataAC(data) ) }
} ) }
const AuthorizationPageContener = connect(mapStateToProps, mapDispatchToProps)(AuthAPI);

export default AuthorizationPageContener;