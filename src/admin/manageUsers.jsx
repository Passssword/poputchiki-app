import React from 'react';
import style from './admin.module.css'
import styleButtons from '../style/buttons.module.css'
import { usersAPI } from '../api/axiosAPI.js'

const ManageUsers = () => {

    let fieldLogin = React.createRef();
    let fieldPassword = React.createRef();

    function CreateUser () {
        let userFieldsAgrigationObject = {
            login: fieldLogin.current.value,
            password: fieldPassword.current.value
        }
        usersAPI.postUser(userFieldsAgrigationObject)
    }
    return(
        <div className={style.manageUsersWrapper}>
            <div className={style.createUsersWrapper}>
                {/* <form className={style.registrationForm}> */}
                    <input ref={fieldLogin} type="text" placeholder="Enter Login" />
                    <input ref={fieldPassword} type="password" placeholder="Enter Password"/>
                    <button onClick={CreateUser} className={`${styleButtons.btn} ${styleButtons.btnCreate}`}>Добавить</button>
                {/* </form> */}
                </div>
            <div className={style.listUsersWrapper}>
                <table className={style.manageUsersListTable}>
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>Login</th>
                        <th>Password</th>
                        <th>Usage buttons</th>
                        </tr>
                        <tr>
                            <td>111</td>
                            <td>222</td>
                            <td>333</td>
                            <td>Buttons</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )}

export default ManageUsers