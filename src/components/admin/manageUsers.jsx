import React from 'react';
import { connect } from "react-redux";
import style from './admin.module.css'
import styleButtons from '../../style/buttons.module.css'
import { usersAPI } from '../../api/axiosAPI.js'
import { renderUsersAC, reRendererUsersAC, addUserThunkCreator } from "../../redux/reducerAdmin.js";


const deleteUser = (userID) => {
    usersAPI.deleteUser(userID)
        .then( response => { console.log("User was DELETED") } )
}
function RenderUsersTable (usersArray) {
    return usersArray.map( item => { return(
        <tr>
            <td>{item.id}</td>
            <td>{item.login}</td>
            <td>{item.password}</td>
            <td>
            <button className={styleButtons.btnDelete} onClick={ async () => {await deleteUser(item.id)} }>DELETE</button>
            </td>
        </tr>)
        })
}

const ManageUsers = (props) => {

    let fieldLogin = React.createRef();
    let fieldPassword = React.createRef();

    async function CreateUser () {
        let userFieldsAgrigationObject = {
            login: fieldLogin.current.value,
            password: fieldPassword.current.value
        }
        props.AddUser(userFieldsAgrigationObject)
        // usersAPI.postUser(userFieldsAgrigationObject)
        //     .then( data => {
        //         if( data.status === 200 ) {
        //             fieldLogin.current.value = '';
        //             fieldPassword.current.value = '';
        //             props.ReRendererUsers()
        //         }
        //     } )
    }
    return(
        <div className={style.manageUsersWrapper}>
            <div className={style.createUsersWrapper}>
                <input ref={fieldLogin} type="text" placeholder="Enter Login" />
                <input ref={fieldPassword} type="password" placeholder="Enter Password"/>
                <button onClick={CreateUser} className={`${styleButtons.btn} ${styleButtons.btnCreate}`}>Добавить</button>
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
                        {RenderUsersTable(props.UsersState)}
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )}
class ManageUsersAPI extends React.Component {
    componentDidMount() {
        usersAPI.getUsers()
            .then( data => {
                // Save users in state
                this.props.renderUsers(data)
            } )
            .catch(err => console.log(`Error: ${err}`))
            // console.log(this.props.AdminPage.Locations)
        }
    render() { return <ManageUsers 
                        UsersState={this.props.adminUsersPage}
                        RenderUsers={this.props.renderUsers}
                        ReRendererUsers={this.props.reRendererUsers}
                        AddUser={this.props.addUserThunkCreator}
                        />
    }
}
let mapStateToProps = (state) => { return(
    { adminUsersPage: state.adminState.Users, }
) }
let mapDispatchToProps = (dispatch) => { return(
    {
        renderUsers: (data) => { dispatch( renderUsersAC(data) ) },
        reRendererUsers: (data) => { dispatch( reRendererUsersAC(data) ) },
        addUserThunkCreator: (userData) => (dispatch (addUserThunkCreator(userData)) ),
    }
) }
const ManageUsersContaner = connect(mapStateToProps,mapDispatchToProps)(ManageUsersAPI)
export default ManageUsersContaner