import React from 'react';
// import style from './createAdvertPage.module.css'
import { usersAPI } from '../../api/axiosAPI.js'
import { connect } from "react-redux";
// import { renderLocationsAC } from "../redux/reducerLocations.js";

function AdvertPage (props) {
    return (
    <div>AdvertPage</div>
) }

class AdvertPageAPI extends React.Component {
    componentDidMount () {}
    render () { return( <AdvertPage /> )}
}

let mapStateToProps = ( state ) => {
    return ({});
  };
  let mapDispatchToProps = ( dispatch ) => {
    return ({});
  };

const AdvertPageContener = connect(mapStateToProps, mapDispatchToProps)(AdvertPageAPI);
  
export default AdvertPageContener;