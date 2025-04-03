import React from 'react';
import style from './advertPage.module.css'
import { usersAPI } from '../../api/axiosAPI.js'
import { connect } from "react-redux";
// import { renderLocationsAC } from "../redux/reducerLocations.js";

function AdvertPage (props) {
    return (
    <div className={style.advertPage_wrapper}>
        <h3>AdvertPage</h3> <br /><br />
        Точка начала<br />
        Точка окончания<br />
        Дата события<br />
        Коментарий<br />
        Авто<br />
        ---------------<br />
        Автор объявления<br />
        Дата создания объекта объявления
    </div>
) }

class AdvertPageAPI extends React.Component {
    componentDidMount () {console.log(this.props)}
    render () { return( 
        <AdvertPage
            {...this.props}
        />
    )}
}

let mapStateToProps = ( state ) => {
    return ({});
  };
  let mapDispatchToProps = ( dispatch ) => {
    return ({});
  };

const AdvertPageContener = connect(mapStateToProps, mapDispatchToProps)(AdvertPageAPI);
  
export default AdvertPageContener;