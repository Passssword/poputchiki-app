import React from 'react';
import style from './createAdvertPage.module.css'
import { usersAPI } from '../api/axiosAPI.js'
import { connect } from "react-redux";
import { renderLocationsAC } from "../redux/reducerLocations.js";

let linkStartPoint = React.createRef();
let linkEndPoint = React.createRef();
let linkDate = React.createRef();
let linkAuto = React.createRef();
let linkTextarea = React.createRef();

function fieldsAgrigation () {
    let fieldsBody = {
        startPoint: linkStartPoint.current.value,
        endPoint: linkEndPoint.current.value,
        date: linkDate.current.value,
        auto: linkAuto.current.value,
        comment: linkTextarea.current.value
    }
    usersAPI.postAdvert(fieldsBody)
        // .then( data => console.log(data) )
}

function renderLocationsStack (data) {
    return data.map( elem=> {
        return <option>{elem.town}</option>
    } )
}

function CreateAdvertPage (props) {
    return (
    <div className={style.create_advert_wrapper}>
        <div className={style.caption_block}>Заголовок</div>
        <div className={style.fields_wrapper_1}>
            <select ref={linkStartPoint} className={style.select}>
                {renderLocationsStack(props.Locations)}
            </select>
            <br />
            <select ref={linkEndPoint} className={style.select}>
                {renderLocationsStack(props.Locations)}
            </select>
            <br />
            <input ref={linkDate}  type="date" placeholder="Дата отправления"/><br />
            <input ref={linkAuto}  type="text" placeholder="Авто"/><br />
        </div>
        {/* <div className={style.fields_wrapper_2}> */}
        <textarea ref={linkTextarea} cols="80" name="comments" maxlength="2000" placeholder="Комментарий"></textarea>
        <br />
        <input onClick={fieldsAgrigation} type='button' value={'Create Advert'}/>
        
        {/* </div> */}
    </div>
    );
}

// export default CreateAdvertPage;

class CreateAdvertPageAPI extends React.Component {
    componentDidMount () {
        usersAPI.getLocations()
            .then(data=>{
                this.props.renderLocations(data)
            })
    }
    render () { return ( <CreateAdvertPage
                            Locations={this.props.LocationsState.Locations}
                            />) }
}

let mapStateToProps = ( state ) => {
    return (
      {
        LocationsState: state.locationsState,
      });
  };
  let mapDispatchToProps = ( dispatch ) => {
    return (
      {
        renderLocations: (data) => {dispatch( renderLocationsAC(data) )}
      });
  };

  const CreateAdvertPageContener = connect(mapStateToProps, mapDispatchToProps)(CreateAdvertPageAPI);
  

export default CreateAdvertPageContener