import React from 'react';
import style from './admin.module.css'
import styleButtons from '../style/buttons.module.css'
import { usersAPI } from '../api/axiosAPI.js'
import { connect } from "react-redux";
import { renderLocationsAC, addLocationAC } from "../redux/reducerAdmin.js";


let linkStartPoint = React.createRef();

function postLocations (data) {
    return data.map( elem => {
    return(<tr>
                <td>{elem.id}</td>
                <td>{elem.town}</td>
                <td>
                    <button className={styleButtons.btnDelete} onClick={ async () => {await deleteTown(elem.id)} }>DELETE</button>
                    </td>
            </tr>)
})
}
function deleteTown (townId) {
        usersAPI.deleteLocation(townId)
            .then( response => { console.log("Town was DELETED") } )
    }

const CreateLocations = (props) => {
    
    function fieldsAgrigation () {
        let fieldsBody = {
            town: linkStartPoint.current.value
        }
        /* Use addLocation() !!!!!!!!*/
        usersAPI.postLocation(fieldsBody)
            .then( response => { props.addLocation(fieldsBody) } )
    }

    return(
    <div>
        <div className={style.adminCreateLocationFieldWrapper}>
            <input ref={linkStartPoint} type="text" placeholder="Название населенного пункта"/>
            {/* <input onClick={fieldsAgrigation} type='button' value={'Добавить'}/> */}
            <button onClick={fieldsAgrigation} className={`${styleButtons.btn} ${styleButtons.btnCreate}`}>Добавить</button>
        </div>

        <div className={style.locations_wrapper}>
            
        <table className={style.adminLocationsTable}>
            <thead>
                <tr>
                <th>id</th>
                <th>Location</th>
                <th>Usage buttons</th>
                </tr>
            </thead>
            <tbody>
                {postLocations(props.Locations)}
            </tbody>
        </table>

        </div>
    </div>
)}

class CreateLocationsAPI extends React.Component {
    componentDidMount() {
        usersAPI.getLocations()
        .then( data => {
            // Save locations in state
            this.props.renderLocations(data)
        } )
        .catch(err => console.log(`Error: ${err}`))
        // console.log(this.props.AdminPage.Locations)
    }
    render() { return <CreateLocations 
                        Locations={this.props.AdminPage.Locations}
                        renderLocations={this.props.renderLocations}
                        addLocation={this.props.addLocation}
                         /> }
}
let mapStateToProps = ( state ) => {
    return (
      {
        AdminPage: state.adminState,
      });
  };
  let mapDispatchToProps = ( dispatch ) => {
    return (
      {
        renderLocations: (data) => {dispatch( renderLocationsAC(data) )},
        addLocation: (data) => {dispatch( addLocationAC(data) )}
      });
  };
  const CreateLocationsContener = connect(mapStateToProps, mapDispatchToProps)(CreateLocationsAPI);
  
export default CreateLocationsContener;