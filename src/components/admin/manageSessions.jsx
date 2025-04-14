import React from 'react';
import { connect } from "react-redux";
import { usersAPI } from '../../api/axiosAPI.js'

const ManageSessions = () => {
    return(
    <div>
        ManageSessions
    </div>
)}

class ManageSessionsAPI extends React.Component {
    componentDidMount() {
        usersAPI.getUsers()
            .then( data => {
                // Save users in state
                this.props.renderUsers(data)
            } )
            .catch(err => console.log(`Error: ${err}`))
            // console.log(this.props.AdminPage.Locations)
        }
    render() { return <ManageSessions />
    }
}
let mapStateToProps = (state) => { return(
    {}
) }
let mapDispatchToProps = (dispatch) => { return(
    {}
) }
const ManageSessionsContaner = connect(mapStateToProps,mapDispatchToProps)(ManageSessionsAPI)
export default ManageSessionsContaner
