import React from 'react';
import { connect } from "react-redux";
import { usersAPI } from '../../api/axiosAPI.js'
import { renderSessionsAC } from "../../redux/reducerAdmin.js";
import style from './admin.module.css'
import styleSessions from './manageSessions.module.css'


function RenderSessionsTable (sessionsArray) {
    return sessionsArray.map( item => { return(
        <tr>
            <td>{item.id}</td>
            <td>{item.session_key}</td>
            <td>{item.user_id}</td>
            <td>{item.expiresDate}</td>
            <td>Buttons</td>
        </tr>)
        })
}

const ManageSessions = (props) => {    
    return(
    <div className={styleSessions.manageSessionsWrapper}>
        
        <table className={style.adminLocationsTable}>
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
                {RenderSessionsTable(props.SessionsState)}
            </tbody>
        </table>

    </div>
)}

class ManageSessionsAPI extends React.Component {
    componentDidMount() {
        usersAPI.getAllSessions()
            .then( data => {
                // Save users in state
                console.log(data)
                this.props.renderSessions(data.SessionsData)
            } )
            .catch(err => console.log(`Error: ${err}`))
            // console.log(this.props.AdminPage.Locations)
        }
    render() { return <ManageSessions 
                            SessionsState={this.props.SessionsState} />
    }
}
let mapStateToProps = (state) => { return(
    { SessionsState: state.adminState.SessionsData }
) }
let mapDispatchToProps = (dispatch) => { return(
    {
        renderSessions: (data) => { dispatch( renderSessionsAC(data) ) }
    }
) }
const ManageSessionsContaner = connect(mapStateToProps,mapDispatchToProps)(ManageSessionsAPI)
export default ManageSessionsContaner
