import React from 'react';
import withRouter from './withRouter.jsx';
import style from './advertPage.module.css'
import { usersAPI } from '../../api/axiosAPI.js'
import { connect } from "react-redux";
// import { renderLocationsAC } from "../redux/reducerLocations.js";

function AdvertPage (props) {
    return (
    <div className={style.advertPage_wrapper}>
        <h3>AdvertPage</h3> <br /><br />
        ID: {props.params.advertId}<br />
        Место отправления<br />
        Место назначения<br />
        Дата события<br />
        Коментарий<br />
        Авто<br />
        ---------------<br />
        Автор объявления<br />
        Дата создания объекта объявления
    </div>
) }

class AdvertPageAPI extends React.Component {
    componentDidMount () {
        console.log("advertId: "+this.props.params.advertId)
    }
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

const witchRouterAdvertPageContaner = withRouter(AdvertPageAPI)
const AdvertPageContener = connect(mapStateToProps, mapDispatchToProps)(witchRouterAdvertPageContaner);
  
export default AdvertPageContener;