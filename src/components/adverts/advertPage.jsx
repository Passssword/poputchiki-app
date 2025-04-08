import React from 'react';
import withRouter from './withRouter.jsx';
import style from './advertPage.module.css'
import { usersAPI } from '../../api/axiosAPI.js'
import { connect } from "react-redux";
import { setAdvertDataAC } from "../../redux/reducerSearchResults.js";

function AdvertPage (props) {
    return (
    <div className={style.advertPage_wrapper}>
        
        <div className={`${style.advertPage_info} ${style.contaner}`}>
            ID: {props.params.advertId}<br />
            <p className={style.advertPage_caption}>Caption</p>

            <div className={style.advertPage_locatios_wrapper}>
                <div className={style.advertPage_location}>
                <p>From</p>
                <p>{props.AdvertPageState.startPoint}</p>
                <p>Street 13th</p>
                </div>
                <img src="https://i.postimg.cc/k4dFgNv8/1492616980-2-google-maps-gps-navigation-traffice-direction-83420.png" />
                <div className={style.advertPage_location}>
                <p>To</p>
                <p>{props.AdvertPageState.endPoint}</p>
                <p>Street 13th</p>
                </div>
            </div>
            
            <div className={style.advertPage_info_wrapper}>
                <div className={style.advertPage_price}><p>Price:</p><p>---- руб.</p></div>
                <div className={style.advertPage_date}><p>Date:</p><p>--.--.----</p></div>
                <div className={style.advertPage_time}><p>Time:</p><p>--:--</p></div>
            </div>

            <hr />
            <div className={style.advertPage_comment_wrapper}>
                <div>Коментарий</div>
                <div>{props.AdvertPageState.comment}</div>
            </div>
            
            <hr />

            <div className={style.advertPage_tags_wrapper}>
                <img alt="Остановка на перекуры" src="https://i.postimg.cc/Bnjw0ZMF/741cigarette-100764.png" />
                <img alt="Можно с животными" src="https://i.postimg.cc/mrQjLPMP/free-30-instagram-stories-icons23-122570.png" />
                <img alt="Детское автокресло" src="https://i.postimg.cc/c4rcK9wy/3283809.png" />
                <img alt="Можно с багажом" src="https://i.postimg.cc/9MCprctJ/luggage-suitcase-baggage-icon-188549.png" />
                <img alt="Беру посылки" src="https://i.postimg.cc/g2L47S2q/Delivery-Icon.webp" />
            </div>
            
            <div className={style.advertPage_date_wrapper}><p>Дата создания объявления:  {props.AdvertPageState.dateCreate}</p></div>
        </div>

        <div className={`${style.advertPage_author} ${style.contaner}`}>
            Автор объявления<br />
            Авто<br />
            Дата создания объекта объявления
        </div>

    </div>
) }

class AdvertPageAPI extends React.Component {
    componentDidMount () {
        console.log("advertId: "+this.props.params.advertId)

        usersAPI.getAdvertData(this.props.params.advertId)
        .then(response => {
            this.props.setAdvertData(response.data)
        }).catch(err => console.log(`Error: ${err}`))
    }
    render () { return( 
        <AdvertPage
            {...this.props}
            AdvertPageState={this.props.AdvertPageState}
        />
    )}
}

let mapStateToProps = ( state ) => {
    return ({ AdvertPageState: state.searchResultsState.AdvertPage});
  };
let mapDispatchToProps = ( dispatch ) => {
return ({
    setAdvertData: (data) => { dispatch( setAdvertDataAC(data) ) }
});
};

const witchRouterAdvertPageContaner = withRouter(AdvertPageAPI)
const AdvertPageContener = connect(mapStateToProps, mapDispatchToProps)(witchRouterAdvertPageContaner);
  
export default AdvertPageContener;