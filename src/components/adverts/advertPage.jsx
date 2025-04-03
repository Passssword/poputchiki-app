import React from 'react';
import { useParams } from "react-router-dom";
import style from './advertPage.module.css'
import { usersAPI } from '../../api/axiosAPI.js'
import { connect } from "react-redux";
// import { renderLocationsAC } from "../redux/reducerLocations.js";

function AdvertPage (props) {
    const params = useParams();
    return (
    <div className={style.advertPage_wrapper}>
        <h3>AdvertPage</h3> <br /><br />
        ID: {params.advertId}<br />
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
    componentDidMount () {}
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