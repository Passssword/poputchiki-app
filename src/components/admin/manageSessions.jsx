import React from 'react';
import { connect } from "react-redux";
import { usersAPI } from '../../api/axiosAPI.js'
import { renderSessionsAC, openModaleWindowSessionAC, closeModaleWindowSessionAC } from "../../redux/reducerAdmin.js";
import styleSessions from './manageSessions.module.css'
import styleModuleWindow from './moduleWindow.module.css'
import styleButtons from '../../style/buttons.module.css'

const CreateModaleWindow = (props) => {
    return(
        <div className={styleModuleWindow.modal_background}>
            <div className={styleModuleWindow.modal_wrapper}>
                <div className={styleModuleWindow.modal_header}><h3>Редактирование данных сессии</h3></div>
                <div className={styleModuleWindow.modal_content}>
                <p>ID: {props.ModaleWindow.id}</p>
                <p>Session Key: <input type="text" defaultValue={props.ModaleWindow.sessionKey} /></p>
                <p>User ID: <input type="text" defaultValue={props.ModaleWindow.userID} /></p>
                <p>Expires Date: <input type="text" defaultValue={props.ModaleWindow.sessionKey} /></p>
                </div>
                <div className={styleModuleWindow.modal_footer}>
                    <button 
                        className={`${styleButtons.btn} ${styleButtons.btnCreate}`} 
                        onClick={ async () => {} }>
                        Send
                    </button>
                    <button 
                        className={`${styleButtons.btn} ${styleButtons.btnDelete}`} 
                        onClick={ async () => {props.CloseModaleWindow()} }>
                        Close
                    </button>
                </div>
            
            </div>
        </div>
)}

function RenderSessionsTable (sessionsArray, OpenModaleWindow) {
    return sessionsArray.map( item => { return(
        <tr>
            <td>{item.id}</td>
            <td className={styleSessions.session_key}>{item.session_key}</td>
            <td>{item.user_id}</td>
            <td className={styleSessions.session_date}>{item.expiresDate}</td>
            <td>
                <button
                    className={`${styleButtons.btn} ${styleButtons.btnUpdate}`}
                    onClick={ async () => {OpenModaleWindow(item)} }>
                        UPDATE
                </button>
            </td>
        </tr>)
        })
}

const ManageSessions = (props) => {    
    return(
    <div className={styleSessions.manageSessionsWrapper}>
        
        <table className={styleSessions.manageSessionsTable}>
            <thead>
                <tr>
                <th>id</th>
                <th>Session_Key</th>
                <th>User_ID</th>
                <th>Expires_Date</th>
                <th>Usage buttons</th>
                </tr>
            </thead>
            <tbody>
                {RenderSessionsTable(props.SessionsState, props.OpenModaleWindow)}
            </tbody>
        </table>

        { props.ModaleWindowState.isActive ? CreateModaleWindow(props) : null }
    </div>
)}

class ManageSessionsAPI extends React.Component {
    componentDidMount() {
        usersAPI.getAllSessions()
            .then( data => {
                // Save users in state
                this.props.renderSessions(data.SessionsData)
            } )
            .catch(err => console.log(`Error: ${err}`))
            // console.log(this.props.AdminPage.Locations)
        }
    render() { return <ManageSessions 
                            SessionsState={this.props.SessionsState}
                            ModaleWindowState={this.props.ModaleWindowState}
                            OpenModaleWindow={this.props.openModaleWindowSession}
                            CloseModaleWindow={this.props.closeModaleWindowSession} />
    }
}
let mapStateToProps = (state) => { return(
    {
        SessionsState: state.adminState.SessionsData,
        ModaleWindowState: state.adminState.SessionModaleWindow
    }
) }
let mapDispatchToProps = (dispatch) => { return(
    {
        renderSessions: (data) => { dispatch( renderSessionsAC(data) ) },
        openModaleWindowSession: (data) => { dispatch( openModaleWindowSessionAC(data) ) },
        closeModaleWindowSession: () => { dispatch( closeModaleWindowSessionAC() ) }
    }
) }
const ManageSessionsContaner = connect(mapStateToProps,mapDispatchToProps)(ManageSessionsAPI)
export default ManageSessionsContaner
